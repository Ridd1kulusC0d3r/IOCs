# Modelo de dados 1.0.0

Fonte canônica: [sources.json](../data/sources.json). CSV e Markdown são derivados.

| Campo | Semântica |
|---|---|
| id | Identificador estável; lacunas por remoção são permitidas |
| name / provider | Produto e entidade responsável; provider pode ser desconhecido |
| url | Página de referência; não presumir endpoint de ingestão |
| category | feeds, analysis, commercial, research, context, communities, detection |
| access | P, G, F, $, R, H, ?; múltiplos códigos possíveis |
| description | Escopo resumido |
| origin | first_party, community, aggregated, derived ou unknown |
| observables | Tipos conhecidos; lista vazia significa não levantado |
| api | Disponibilidade, documentação, autenticação, formatos e exportação |
| terms | Uso comercial, redistribuição, licença e URL de termos |
| verification | Descoberta, acesso, operação, data e evidências por escopo |
| upstream_ids | Fontes de dados conhecidas; lista vazia não prova independência |
| related_ids | Outros produtos/canais da mesma organização |
| lifecycle | unknown ou archived nesta edição |
| freshness | Cadência, retenção e última validação operacional; null quando desconhecido |
| repository_metadata | Metadados oficiais GitHub, quando obtidos |
| notes | Restrições, correções e limitações |
| batch | Seleção inicial ou expansão da pesquisa |
| previous_list_number | Rastreabilidade com a listagem da conversa |

Datas em ISO 8601. `checked_at` é a data de consulta documental, não um teste de API. Licença relatada pelo GitHub não substitui leitura do texto e dos direitos de terceiros.

## Integridade e regeneração

`node scripts/catalog.mjs check` verifica IDs únicos, nomes, categorias, códigos, evidências, referências e URLs repetidas sem relação explícita. Compara os arquivos derivados byte a byte com uma nova renderização.

`node scripts/catalog.mjs build` atualiza os derivados. README e relatórios editoriais precisam de revisão humana quando a cobertura mudar.

O validador rejeita alegações de teste operacional nesta edição: introduzir esse estágio exige ampliar o modelo, registrar a prova e atualizar a validação.


## Schema 1.1.0 — geografia e descoberta

O envelope usa `schema_version: 1.1.0`. Categorias adicionais: `tools` e `directories`. Cada fonte contém `geography.provider_countries`, `coverage_countries`, `reference_countries`, `basis` e `evidence`. Códigos nacionais seguem ISO 3166-1 alpha-2; arrays vazios significam desconhecido. ZZ é reservado à navegação, não armazenado como país de uma fonte. `basis` distingue unknown, user_reported, editorial_reference e documented.

`discovery_endpoints` preserva URLs encontradas em catálogos, tipos declarados, origem e relações exatas com fontes. `pending_submissions` preserva menções sem URL identificada. Esses dois conjuntos são separados da contagem de fontes. `discovery_import` registra data, contagens de entrada e regra de deduplicação. Os arquivos separados de descoberta e pendências são derivados do JSON canônico.
