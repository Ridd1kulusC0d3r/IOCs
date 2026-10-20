export function validateCatalog(catalog) {
const errors=[]; const sources=catalog.sources;
if(catalog.schema_version!=="1.0.0"||!Array.isArray(sources))throw Error("Invalid catalog envelope");
const ids=new Set(sources.map(r=>r.id));if(ids.size!==sources.length)errors.push("Duplicate IDs");
const categories=["feeds","analysis","commercial","research","context","communities","detection"];
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

export function renderCatalog(catalog) {
const sources=catalog.sources,files={};
const labels={feeds:"Feeds e listas de indicadores",analysis:"Análise e enriquecimento",commercial:"Inteligência comercial",research:"Pesquisas e repositórios",context:"Contexto e redução de falsos positivos",communities:"Comunidades e canais restritos",detection:"Artefatos de detecção"};
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
files["docs/NEW-SOURCES.md"]="# Novas fontes — 2026-10-20\n\n"+sources.filter(r=>r.batch.startsWith("expansion")).length+" entradas adicionais acumuladas, distintas da seleção inicial. Não são 33 fornecedores independentes. Natureza e nível de verificação aparecem abaixo.\n\n"+intro+table(sources.filter(r=>r.batch.startsWith("expansion")));
return files;
}
