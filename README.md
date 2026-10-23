<div align="center">

# IOCs
### Threat Intelligence Source Atlas

**Encontre a fonte. Entenda o acesso. Confira a evidência.**

Um atlas de referências de IOC e CTI para **SOC · Threat Hunting · DFIR · OSINT**.

[![Validação do catálogo](https://github.com/Ridd1kulusC0d3r/IOCs/actions/workflows/catalog.yml/badge.svg)](https://github.com/Ridd1kulusC0d3r/IOCs/actions/workflows/catalog.yml)
![Registros](https://img.shields.io/badge/registros-348-2563eb)
![Categorias](https://img.shields.io/badge/categorias-9-0f766e)
![Snapshot dos dados](https://img.shields.io/badge/dados-2026--10--21-475569)

[**Explorar catálogo**](docs/CATALOG.md) · [**Navegar por país**](docs/COUNTRIES.md) · [**Consultar JSON**](data/sources.json) · [**Consultar CSV**](data/sources.csv)

</div>

---

## Comece pela sua necessidade

| Você precisa… | Caminho |
|---|---|
| Encontrar feeds de IP, domínio, URL ou hash | [Feeds e listas](docs/categories/feeds.md) |
| Investigar um observável | [Análise e enriquecimento](docs/categories/analysis.md) |
| Comparar ofertas comerciais | [Inteligência comercial](docs/categories/commercial.md) |
| Obter indicadores com contexto de campanha | [Pesquisas e repositórios](docs/categories/research.md) |
| Descobrir referências regionais | [Índice por país](docs/COUNTRIES.md) |
| Avaliar fontes ainda não incorporadas | [Registro de descoberta](docs/DISCOVERY.md) |
| Preparar integração com MISP, OpenCTI ou Wazuh | [Guia de integração](docs/INTEGRATIONS.md) |

## O inventário em números

| Conjunto | Quantidade | Como interpretar |
|---|---:|---|
| Registros catalogados | **348** | Fontes, produtos, ferramentas e comunidades em nove categorias |
| URLs de descoberta | **501** | Endpoints reunidos de três catálogos, deduplicados por URL |
| Menções a identificar | **26** | Referências recebidas que ainda precisam de identificação suficiente |
| Registros com descoberta documentada | **163** | Evidência de identidade, finalidade ou metadados oficiais |
| Registros com acesso documentado | **28** | Modelo geral de acesso sustentado por evidência |
| Endpoints testados operacionalmente | **0** | Nenhuma ingestão foi validada nesta curadoria |

**Os conjuntos se sobrepõem e não devem ser somados.** Os 348 registros não representam 348 feeds ativos nem fornecedores independentes. As 501 URLs podem incluir formatos alternativos, espelhos e recortes da mesma fonte. A meta de 700 fontes independentes ainda não foi demonstrada.

[Estatísticas em JSON](data/stats.json) · [Critérios de curadoria](docs/METHODOLOGY.md)

> [!NOTE]
> O selo de validação verifica a estrutura e a consistência dos arquivos do repositório. Ele não comprova disponibilidade, precisão ou atualização dos feeds externos.

## Explore por categoria

| Categoria | Registros | Conteúdo |
|---|---:|---|
| [Feeds e listas](docs/categories/feeds.md) | 79 | Listas de indicadores, incluindo candidatas e históricas |
| [Inteligência comercial](docs/categories/commercial.md) | 66 | Produtos e serviços; API e exportação dependem dos termos |
| [Pesquisas e repositórios](docs/categories/research.md) | 61 | Indicadores e artefatos publicados em investigações |
| [Contexto](docs/categories/context.md) | 50 | DNS, ASN, certificados, vulnerabilidades e bases auxiliares |
| [Comunidades](docs/categories/communities.md) | 40 | Canais de compartilhamento e acesso por elegibilidade |
| [Análise e enriquecimento](docs/categories/analysis.md) | 36 | Sandboxes, reputação e consultas de observáveis |
| [Ferramentas e plataformas](docs/categories/tools.md) | 9 | Software de coleta, modelagem e correlação |
| [Catálogos de descoberta](docs/categories/directories.md) | 4 | Diretórios para localizar outras fontes |
| [Artefatos de detecção](docs/categories/detection.md) | 3 | Coleções de regras e indicadores |

## Explore por país

[**Todos os países e referências sem país determinado →**](docs/COUNTRIES.md)

| Recorte | Atalhos |
|---|---|
| Américas | [Brasil](docs/countries/BR.md) · [Estados Unidos](docs/countries/US.md) · [Canadá](docs/countries/CA.md) |
| Europa | [França](docs/countries/FR.md) · [Reino Unido](docs/countries/GB.md) · [Polônia](docs/countries/PL.md) · [Suécia](docs/countries/SE.md) · [Ucrânia](docs/countries/UA.md) |
| Ásia e Oceania | [China](docs/countries/CN.md) · [Coreia do Sul](docs/countries/KR.md) · [Japão](docs/countries/JP.md) · [Austrália](docs/countries/AU.md) |
| Rússia e Turquia | [Rússia](docs/countries/RU.md) · [Turquia](docs/countries/TR.md) |
| Oriente Médio e Golfo | [Israel](docs/countries/IL.md) · [Irã](docs/countries/IR.md) · [EAU](docs/countries/AE.md) · [Arábia Saudita](docs/countries/SA.md) · [Catar](docs/countries/QA.md) · [Omã](docs/countries/OM.md) · [Bahrein](docs/countries/BH.md) |

A navegação distingue **país do fornecedor**, **cobertura da inteligência** e **país de referência informado ou associado editorialmente**. Cada registro indica a base dessa classificação. Uma página regional pode conter menções pendentes; associação geográfica não comprova sede legal nem atribuição de ataques.

## Entenda o acesso

| Código | Classificação | Leitura prática |
|:---:|---|---|
| **P** | Pública | Referência de acesso público; licença e uso comercial exigem conferência |
| **G** | Gratuita com cadastro | Cadastro ou credencial pode ser necessário |
| **F** | Freemium | Camadas gratuitas e pagas podem ter limites distintos |
| **$** | Paga | Acesso associado a contratação ou assinatura |
| **R** | Restrita | Depende de aprovação, associação ou elegibilidade |
| **H** | Histórica | Marcador de ciclo de vida; pode acompanhar outro código de acesso |
| **?** | A confirmar | Informação insuficiente para classificar com segurança |

Combinações como **P / $** descrevem modalidades diferentes. Confira `verification.access`: **documented** indica evidência registrada; **provisional** indica classificação preliminar; **unknown** indica informação desconhecida. Interface, API, exportação, uso comercial e redistribuição têm condições próprias.

[Guia completo de acesso](docs/ACCESS.md) · [Proveniência e direitos](docs/PROVENANCE.md)

## Use a curadoria em uma investigação

1. **Defina a necessidade:** phishing, C2, malware, fraude, OT ou enriquecimento.
2. **Selecione as referências:** use categoria, país e acesso para formar uma lista curta.
3. **Confira a evidência:** revise origem, atualidade, termos e dependência de outros feeds.
4. **Valide a integração:** teste formato, autenticação, limites e comportamento do endpoint.
5. **Avalie o resultado:** preserve contexto, datas e expiração; meça cobertura e falsos positivos antes de bloquear.

> [!IMPORTANT]
> JSON e CSV contêm **metadados de fontes**, não uma blocklist de IOCs. Um endereço listado neste repositório identifica uma referência de pesquisa, não um destino malicioso.

## Dados e documentação

| Recurso | Finalidade |
|---|---|
| [sources.json](data/sources.json) | Fonte canônica do catálogo, geografia, relações, evidências e descoberta |
| [sources.csv](data/sources.csv) | Visão tabular dos 348 registros para filtros e análise |
| [discovery-endpoints.json](data/discovery-endpoints.json) | URLs de descoberta com referências aos catálogos de origem |
| [pending-submissions.json](data/pending-submissions.json) | Menções que aguardam identificação |
| [Modelo de dados](docs/SCHEMA.md) | Campos e regras do schema 1.1.0 |
| [Fila de revisão](docs/REVIEW-QUEUE.md) | Acesso, atualidade e outras incertezas a revisar |
| [Fila de identificação](docs/PENDING-SUBMISSIONS.md) | Referências ainda sem identificação suficiente |

Campos `null` e listas geográficas vazias representam informação desconhecida. Não significam autorização, ausência de restrições ou cobertura global.

## Evolução da pesquisa

O inventário reúne **217 registros da seleção inicial revisada** e **131 adições**, com duplicações consolidadas.

| Rodada | Adições | Registro da pesquisa |
|---|---:|---|
| Primeira expansão | 33 | [Achados e correções](docs/RESEARCH-2026-10-20.md) |
| Segunda expansão | 20 | [Evidências e candidatas MISP](docs/RESEARCH-2026-10-20-ROUND2.md) |
| Expansão regional | 78 | [Consolidações, países e limites](docs/RESEARCH-2026-10-21.md) |

[Entradas adicionadas](docs/NEW-SOURCES.md) · [Histórico de mudanças](CHANGELOG.md)

## Contribua e mantenha o catálogo

Requer **Node.js 22 ou posterior**, sem dependências externas.

Edite `data/sources.json`, registre as evidências e gere as páginas derivadas:

```bash
node scripts/catalog.mjs build
node scripts/catalog.mjs check
```

O comando `build` regenera CSV, estatísticas e páginas por categoria, país e descoberta. O comando `check` verifica estrutura, relações, duplicações e sincronização dos arquivos gerados. A CI executa a validação sem consultar os feeds externos.

Ao propor uma fonte, informe nome, URL, finalidade, acesso, evidência e relação com fornecedores ou coleções já existentes. Variantes de formato e espelhos precisam ter sua relação explicitada.

[Como contribuir](CONTRIBUTING.md) · [Metodologia](docs/METHODOLOGY.md)

---

A curadoria aponta para os publicadores e não redistribui suas bases. Licenças de código não substituem os termos dos datasets. Este é um inventário em evolução: disponibilidade, permissões e qualidade devem ser verificadas para cada uso.
