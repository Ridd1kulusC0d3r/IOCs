function validateBase(catalog) {
const errors=[]; const sources=catalog.sources;
if(catalog.schema_version!=="1.0.0"||!Array.isArray(sources))throw Error("Invalid catalog envelope");
const ids=new Set(sources.map(r=>r.id));if(ids.size!==sources.length)errors.push("Duplicate IDs");
const categories=["feeds","analysis","commercial","research","context","communities","detection","tools","directories"];
const codes=["P","G","F","$","R","H","?"];
const names=new Set();
for(const r of sources){
if(!/^src-\d{4}$/.test(r.id))errors.push("Invalid ID "+r.id);
if(!r.name||names.has(r.name.toLowerCase()))errors.push("Duplicate/missing name "+r.id);names.add(r.name.toLowerCase());
if(!/^https:\/\/[^\s]+$/.test(r.url))errors.push("Invalid HTTPS URL "+r.id);
if(!categories.includes(r.category))errors.push("Unknown category "+r.id);
if(!Array.isArray(r.access)||!r.access.length||r.access.some(x=>!codes.includes(x)))errors.push("Invalid access "+r.id);
if(!["documented","candidate","retrieval_failed","redirect_observed"].includes(r.verification.discovery))errors.push("Invalid discovery "+r.id);
if(!["documented","provisional","unknown"].includes(r.verification.access))errors.push("Invalid access evidence "+r.id);
if(r.verification.discovery==="documented"&&!r.verification.evidence.length)errors.push("Missing evidence "+r.id);
if(r.verification.operational!=="not_tested")errors.push("Operational assertion needs a revised validator and test evidence "+r.id);
if(r.freshness.last_operational_check!==null)errors.push("Untested source has test date "+r.id);
for(const id of [...r.related_ids,...r.upstream_ids])if(!ids.has(id)||id===r.id)errors.push("Invalid relationship "+r.id+" -> "+id);
for(const e of r.verification.evidence)if(!/^https:\/\//.test(e.url)||!e.scope||!e.note)errors.push("Invalid evidence "+r.id);
if(r.api.available===true&&!r.api.documentation_url)errors.push("API without documentation "+r.id);
if(!["unknown","conditional","permitted","prohibited"].includes(r.terms.commercial_use))errors.push("Invalid commercial terms "+r.id);
}
for(let i=0;i<sources.length;i++)for(let j=i+1;j<sources.length;j++)if(sources[i].url===sources[j].url&&!sources[i].related_ids.includes(sources[j].id))errors.push("Unexplained duplicate URL: "+sources[i].id+" "+sources[j].id);
if(errors.length)throw Error(errors.join("\n"));
return {total:sources.length,documented:sources.filter(r=>r.verification.discovery==="documented").length,access_documented:sources.filter(r=>r.verification.access==="documented").length,operationally_tested:0,categories:sources.reduce((a,r)=>(a[r.category]=(a[r.category]||0)+1,a),{})};
}

function renderBase(catalog) {
const sources=catalog.sources,files={};
const labels={feeds:"Feeds e listas de indicadores",analysis:"Análise e enriquecimento",commercial:"Inteligência comercial",research:"Pesquisas e repositórios",context:"Contexto e redução de falsos positivos",communities:"Comunidades e canais restritos",detection:"Artefatos de detecção",tools:"Ferramentas e plataformas",directories:"Catálogos de descoberta"};
const clean=v=>String(v??"").replace(/\|/g,"\\|").replace(/\r?\n/g," ");
const table=rows=>"| ID | Fonte | Acesso | Escopo | Evidência | Ciclo de vida |\n|---|---|---|---|---|---|\n"+rows.map(r=>`| ${r.id} | [${clean(r.name)}](${r.url}) | ${r.access.join(" / ")} | ${clean(r.description)} | ${r.verification.discovery}; acesso: ${r.verification.access} | ${r.lifecycle} |`).join("\n")+"\n";
const intro="P = pública; G = cadastro gratuito; F = freemium; $ = paga; R = restrita; H = histórica; ? = a confirmar.\n\n`documented` confirma descoberta documental, não funcionamento de API. Classificações `provisional` não foram confirmadas individualmente. Todos os endpoints permanecem `not_tested`.\n\n";
files["docs/CATALOG.md"]="# Catálogo de fontes\n\n[Início](../README.md) · [JSON](../data/sources.json) · [CSV](../data/sources.csv) · [Metodologia](METHODOLOGY.md)\n\n"+intro;
for(const [key,label] of Object.entries(labels)){
const selected=sources.filter(r=>r.category===key);
files["docs/CATALOG.md"]+=`## ${label} (${selected.length})\n\n`+table(selected)+"\n";
files["docs/categories/"+key+".md"]="# "+label+"\n\n[Início](../../README.md) · [Catálogo completo](../CATALOG.md)\n\n"+intro+table(selected);
}
const fields=["id","name","provider","url","category","access","description","origin","observables","discovery_status","access_status","operational_status","checked_at","lifecycle","commercial_use","redistribution","license","api_documentation","upstream_ids","related_ids","evidence_urls","notes","batch"];
const quote=v=>'"'+String(v??"").replace(/"/g,'""')+'"';
const flat=r=>[r.id,r.name,r.provider,r.url,r.category,r.access.join(";"),r.description,r.origin,r.observables.join(";"),r.verification.discovery,r.verification.access,r.verification.operational,r.verification.checked_at,r.lifecycle,r.terms.commercial_use,r.terms.redistribution,r.terms.license,r.api.documentation_url,r.upstream_ids.join(";"),r.related_ids.join(";"),r.verification.evidence.map(e=>e.url).join(";"),r.notes.join(" | "),r.batch];
files["data/sources.csv"]=fields.map(quote).join(",")+"\n"+sources.map(r=>flat(r).map(quote).join(",")).join("\n")+"\n";
const stats={total:sources.length,baseline:sources.filter(r=>r.batch.startsWith("baseline")).length,added:sources.filter(r=>r.batch.startsWith("expansion")).length,documented:sources.filter(r=>r.verification.discovery==="documented").length,access_documented:sources.filter(r=>r.verification.access==="documented").length,operationally_tested:0,categories:Object.fromEntries(Object.keys(labels).map(k=>[k,sources.filter(r=>r.category===k).length]))};
files["data/stats.json"]=JSON.stringify(stats,null,2)+"\n";
const pending=sources.filter(r=>r.verification.access!=="documented"||r.access.includes("?")||r.lifecycle==="archived");
files["docs/REVIEW-QUEUE.md"]="# Fila de revisão\n\nGerada a partir do JSON. Todos os registros ainda precisam de validação operacional. Esta fila destaca acesso não documentado, incertezas e fontes arquivadas.\n\nPrioridade: arquivados e redirecionamentos; depois endpoints de feeds e termos comerciais; depois fontes documentais e contexto.\n\n"+table(pending);
files["docs/NEW-SOURCES.md"]="# Novas fontes — expansões acumuladas\n\n"+sources.filter(r=>r.batch.startsWith("expansion")).length+" entradas adicionais acumuladas, distintas da seleção inicial. Não representam necessariamente fornecedores independentes. Natureza e nível de verificação aparecem abaixo.\n\n"+intro+table(sources.filter(r=>r.batch.startsWith("expansion")));
return files;
}

const countries={AE:"Emirados Árabes Unidos",AU:"Austrália",BH:"Bahrein",BR:"Brasil",CA:"Canadá",CN:"China",FR:"França",GB:"Reino Unido",IL:"Israel",IN:"Índia",IR:"Irã",JP:"Japão",KR:"Coreia do Sul",OM:"Omã",PL:"Polônia",QA:"Catar",RU:"Rússia",SA:"Arábia Saudita",SE:"Suécia",SG:"Singapura",TR:"Turquia",TW:"Taiwan",UA:"Ucrânia",US:"Estados Unidos",VN:"Vietnã",ZZ:"País não determinado / internacional"};
const countryKeys=r=>[...new Set([...(r.geography?.provider_countries||[]),...(r.geography?.coverage_countries||[]),...(r.geography?.reference_countries||[])])];
export function validateCatalog(catalog){
 if(catalog.schema_version!=="1.1.0")throw Error("Expected schema 1.1.0");
 const stats=validateBase({...catalog,schema_version:"1.0.0"});
 for(const r of catalog.sources){
  if(!r.geography||!["unknown","user_reported","editorial_reference","documented"].includes(r.geography.basis))throw Error("Invalid geography "+r.id);
  for(const key of ["provider_countries","coverage_countries","reference_countries"]){
   if(!Array.isArray(r.geography[key])||r.geography[key].some(c=>!countries[c]||c==="ZZ"))throw Error("Invalid country "+r.id);
  }
  if(r.geography.basis==="documented"&&!r.geography.evidence.length)throw Error("Missing geography evidence "+r.id);
 }
 const endpoints=catalog.discovery_endpoints,ids=new Set(),urls=new Set();
 if(!Array.isArray(endpoints)||!Array.isArray(catalog.pending_submissions))throw Error("Missing discovery collections");
 for(const e of endpoints){
  if(ids.has(e.id)||urls.has(e.url.replace(/\/$/,"")))throw Error("Duplicate discovery endpoint");
  ids.add(e.id);urls.add(e.url.replace(/\/$/,""));
  if(!/^https?:\/\//.test(e.url)||e.operational!=="not_tested"||!e.references.length)throw Error("Invalid discovery endpoint");
  if(e.exact_source_ids.some(id=>!catalog.sources.some(s=>s.id===id)))throw Error("Broken endpoint reference");
 }
 for(const p of catalog.pending_submissions)if(!p.name||p.url!==null||p.reference_countries.some(c=>!countries[c]))throw Error("Invalid pending submission");
 return {...stats,discovery_urls:endpoints.length,pending_identification:catalog.pending_submissions.length};
}
export function renderCatalog(catalog){
 const files=renderBase(catalog),esc=v=>String(v??"").replace(/\|/g,"\\|").replace(/[\r\n]/g," ");
 const intro="País de referência é uma associação de navegação. País do fornecedor, cobertura e referência editorial são campos separados. user_reported = informado no material recebido; editorial_reference = associação editorial; documented = evidência registrada. Nenhuma classificação geográfica implica atribuição de ataques ou malícia.\n\n";
 const row=r=>"| "+r.id+" | ["+esc(r.name)+"]("+r.url+") | "+r.access.join(" / ")+" | "+r.category+" | "+(r.geography.provider_countries.join(", ")||"—")+" | "+(r.geography.coverage_countries.join(", ")||"—")+" | "+r.geography.basis+" |";
 let index="# Referências por país\n\n[Início](../README.md) · [Catálogo](CATALOG.md)\n\n"+intro+"| País | Registros | Menções pendentes |\n|---|---:|---:|\n";
 for(const [code,name] of Object.entries(countries)){
  const selected=catalog.sources.filter(r=>code==="ZZ"?countryKeys(r).length===0:countryKeys(r).includes(code));
  const pending=catalog.pending_submissions.filter(r=>r.reference_countries.includes(code));
  if(!selected.length&&!pending.length)continue;
  index+="| ["+name+"](countries/"+code+".md) | "+selected.length+" | "+pending.length+" |\n";
  files["docs/countries/"+code+".md"]="# "+name+"\n\n[Todos os países](../COUNTRIES.md)\n\n"+intro+"| ID | Fonte | Acesso | Natureza | Fornecedor | Cobertura | Base geográfica |\n|---|---|---|---|---|---|---|\n"+selected.map(row).join("\n")+"\n\n## Identificação pendente\n\n"+(pending.map(p=>"- **"+esc(p.name)+"** — "+esc(p.note)).join("\n")||"Nenhuma menção nesta fila.")+"\n";
 }
 files["docs/COUNTRIES.md"]=index+"\nRegistros com vários países aparecem em mais de uma página. Não somar as linhas para obter o total do catálogo.\n";
 files["data/discovery-endpoints.json"]=JSON.stringify({import:catalog.discovery_import,endpoints:catalog.discovery_endpoints},null,2)+"\n";
 files["data/pending-submissions.json"]=JSON.stringify(catalog.pending_submissions,null,2)+"\n";
 files["docs/DISCOVERY.md"]="# Registro de descoberta\n\n[Início](../README.md) · [JSON](../data/discovery-endpoints.json)\n\n"+catalog.discovery_endpoints.length+" URLs distintas por comparação exata, removendo somente a barra final. Formatos, espelhos e recortes podem continuar sobrepostos. Estes endpoints NÃO são somados ao total de fontes e NÃO foram testados. Acesso = ? até revisão individual. Rótulos de atividade dos diretórios externos não foram adotados como validação própria.\n\n| ID | Referência de endpoint | Tipos declarados | Catálogos de origem |\n|---|---|---|---|\n"+catalog.discovery_endpoints.map(e=>"| "+e.id+" | ["+esc(e.provider||e.url)+"]("+e.url+") | "+esc(e.declared_categories.join(", "))+" | "+e.references.map((u,i)=>"["+ (i+1) +"]("+u+")").join(" ")+" |").join("\n")+"\n";
 files["docs/PENDING-SUBMISSIONS.md"]="# Menções ainda sem identificação suficiente\n\nEstas referências recebidas estão preservadas, mas não contam como fontes identificadas. A ausência de URL específica impede confirmar produto, operador e acesso.\n\n| Nome | País de referência informado | Pendência |\n|---|---|---|\n"+catalog.pending_submissions.map(p=>"| "+esc(p.name)+" | "+p.reference_countries.join(", ")+" | "+esc(p.note)+" |").join("\n")+"\n";
 const q=v=>'"'+String(v??"").replace(/"/g,'""')+'"';
 files["data/sources.csv"]=files["data/sources.csv"].trimEnd().split("\n").map((line,i)=>line+","+(i===0?["provider_countries","coverage_countries","reference_countries","geography_basis"]: [catalog.sources[i-1].geography.provider_countries.join(";"),catalog.sources[i-1].geography.coverage_countries.join(";"),catalog.sources[i-1].geography.reference_countries.join(";"),catalog.sources[i-1].geography.basis]).map(q).join(",")).join("\n")+"\n";
 const stats=JSON.parse(files["data/stats.json"]);stats.discovery_urls=catalog.discovery_endpoints.length;stats.pending_identification=catalog.pending_submissions.length;files["data/stats.json"]=JSON.stringify(stats,null,2)+"\n";
 return files;
}
