# IOCs · Threat Intelligence Source Atlas

**Descobrir fontes. Entender o acesso. Preservar a evidência.**

[![Catalog validation](https://github.com/Ridd1kulusC0d3r/IOCs/actions/workflows/catalog.yml/badge.svg)](https://github.com/Ridd1kulusC0d3r/IOCs/actions/workflows/catalog.yml)
![Snapshot](https://img.shields.io/badge/snapshot-2026--10--20-2563eb)
![Scope](https://img.shields.io/badge/scope-IOC%20%2B%20CTI-0f766e)

Um atlas de fontes para SOC, CTI, threat hunting, DFIR e OSINT. Classifica feeds, serviços de consulta, fornecedores, repositórios, bases de contexto e comunidades por acesso, finalidade, proveniência e nível de verificação.

> **270 registros catalogados não significam 250 feeds ativos ou fornecedores independentes.** São 217 entradas da seleção inicial revisada + 53 novas (33 na primeira expansão e 20 na segunda). Há 115 registros com evidência documental de identidade/finalidade ou metadados oficiais, 27 com modelo geral de acesso documentado e **zero endpoints declarados como testados operacionalmente**. Os demais campos permanecem explicitamente pendentes. Contagens: [stats.json](data/stats.json).

## Explore

| Quero… | Abrir |
|---|---|
| Consultar todas as fontes | [Catálogo completo](docs/CATALOG.md) |
| Importar metadados em uma ferramenta | [JSON canônico](data/sources.json) · [CSV](data/sources.csv) |
| Ver a expansão da pesquisa | [53 novas fontes](docs/NEW-SOURCES.md) · [Achados e correções](docs/RESEARCH-2026-10-20.md) |
| Entender gratuito, pago e restrito | [Classificação de acesso](docs/ACCESS.md) |
| Integrar no MISP, OpenCTI ou Wazuh | [Guia de integração](docs/INTEGRATIONS.md) |
| Avaliar confiabilidade e atualidade | [Metodologia](docs/METHODOLOGY.md) · [Fila de revisão](docs/REVIEW-QUEUE.md) |
| Contribuir sem inflar a lista | [Contribuição](CONTRIBUTING.md) · [Modelo de dados](docs/SCHEMA.md) |

## Cobertura

| Categoria | Registros | O que representa |
|---|---:|---|
| [Feeds e listas](docs/categories/feeds.md) | 72 | Inclui candidatos e históricos, não apenas feeds ativos |
| [Análise e enriquecimento](docs/categories/analysis.md) | 32 | Sandboxes, reputação e bases consultáveis |
| [Inteligência comercial](docs/categories/commercial.md) | 46 | Produtos; API/exportação dependem da contratação |
| [Pesquisas e repositórios](docs/categories/research.md) | 48 | IOCs em publicações, não necessariamente feeds contínuos |
| [Contexto](docs/categories/context.md) | 45 | DNS, ASN, certificados, vulnerabilidades e conhecimento |
| [Comunidades](docs/categories/communities.md) | 24 | Canais de compartilhamento e elegibilidade |
| [Artefatos de detecção](docs/categories/detection.md) | 3 | Coleções mistas de regras e indicadores |

## Acesso em uma linha

**P** pública · **G** gratuita com cadastro · **F** freemium · **$** paga · **R** restrita · **H** histórica · **?** a confirmar.

O código resume o produto; `verification.access` informa se esse resumo foi documentado ou é preliminar. Acesso à interface, API, uso comercial e redistribuição são campos distintos. `null` significa **desconhecido**, nunca “permitido”.

## Como usar

1. Escolha uma necessidade: phishing, C2, malware, fraude, OT ou enriquecimento.
2. Filtre a categoria e o modelo de acesso no JSON/CSV.
3. Confira as evidências e a licença da fonte.
4. Valide o endpoint escolhido em ambiente controlado.
5. Preserve origem, confiança, datas de observação e expiração de cada IOC.
6. Meça ganho de cobertura e falsos positivos antes de aplicar bloqueio.

Não importe este CSV como blocklist: ele contém **metadados de fontes**, não indicadores de comprometimento.

## Atualizar e validar

Requer Node.js 22 ou posterior; sem dependências externas.

```bash
node scripts/catalog.mjs check
node scripts/catalog.mjs build
node scripts/catalog.mjs check
```

Edite `data/sources.json`. O comando `build` regenera CSV, estatísticas, catálogo e páginas por categoria. O comando `check` valida estrutura, IDs, relações, duplicações e sincronização dos arquivos derivados. A CI executa o mesmo procedimento sem consultar ou baixar malware.

## Segunda expansão

[20 novas entradas e suas evidências](docs/RESEARCH-2026-10-20-ROUND2.md): 14 com documentação direta e seis candidatas identificadas no catálogo oficial MISP, incluindo referências atribuídas ao Banco do Brasil e SERPRO.

## Correções que importam

- **Monty Security C2 Tracker:** arquivado; README informa remoção dos arquivos de feed. Mantido como histórico.
- **Unit 42 antigo repositório:** arquivado; separado das pesquisas atuais.
- **Phishing.Database:** endereço atualizado para a organização Phishing-Database.
- **USOM:** endereço antigo redireciona; endpoint sucessor não validado.
- **Lista anterior 218–220:** recorte FS-ISAC Europe, grupo FIRST e comunidade temática MISP removidos da contagem; veja o histórico.

## Proveniência e limites

[Proveniência e direitos](docs/PROVENANCE.md) · [Changelog](CHANGELOG.md)

A curadoria aponta para os publicadores e não redistribui suas bases. Licenças de repositórios não substituem termos de datasets de terceiros. A lista é um inventário em evolução, não um selo de qualidade, um ranking ou uma afirmação de exaustividade.
