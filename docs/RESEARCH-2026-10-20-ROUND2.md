# Segunda expansão — 2026-10-20

Comparação contra os 250 registros existentes: **20 entradas novas**, levando o catálogo a **270**. Dessas, 14 possuem documentação direta do publicador/repositório e seis são candidatas listadas pelo MISP. Nenhuma foi promovida a endpoint operacionalmente testado.

“Nova” significa ausente do catálogo anterior; não significa serviço recém-lançado.

| ID | Fonte | Categoria | Acesso | Evidência |
|---|---|---|---|---|
| src-0254 | [PRODAFT public IOCs](https://github.com/prodaft/malware-ioc) | research | P | documented |
| src-0255 | [WithSecureLabs IOCs](https://github.com/WithSecureLabs/iocs) | research | P | documented |
| src-0256 | [StrangerealIntel DailyIOC](https://github.com/StrangerealIntel/DailyIOC) | research | P / H | documented |
| src-0257 | [Zscaler ThreatLabz IOCs](https://github.com/ThreatLabz/iocs) | research | P | documented |
| src-0258 | [infection.cc](https://infection.cc/) | feeds | P / ? | documented |
| src-0259 | [Maltiverse](https://maltiverse.com/) | analysis | F / ? | documented |
| src-0260 | [Threatray Binary Intelligence](https://www.threatray.com/) | commercial | $ / ? | documented |
| src-0261 | [SecuriteInfo ClamAV signatures](https://www.securiteinfo.com/clamav-antivirus/improve-detection-rate-of-zero-day-malwares-for-clamav-en.shtml) | detection | F | documented |
| src-0262 | [HoneyLabs](https://honeylabs.net/) | feeds | F | documented |
| src-0263 | [James Brine CTI](https://jamesbrine.com.au/) | feeds | P / ? | documented |
| src-0264 | [Rectifyq curated MISP feeds](https://rectifyq.com/) | feeds | P / ? | documented |
| src-0265 | [SiberKapan](https://siberkapan.org/) | feeds | P / ? | documented |
| src-0266 | [Rösti OSINT MISP feed](https://misp.rosti.dev/) | feeds | P / ? | documented |
| src-0267 | [Shreshta Newly Registered Domains](https://shreshtait.com/newly-registered-domains/) | context | F / ? | documented |
| src-0268 | [Banco do Brasil malicious hashes](https://cti.bb.com.br:8443/hash-list.csv) | feeds | P / ? | candidate |
| src-0269 | [SERPRO IP Reputation](https://s3.i02.estaleiro.serpro.gov.br/blocklist/blocklist.txt) | feeds | P / ? | candidate |
| src-0270 | [APNIC Community Honeynet feeds](https://feeds.honeynet.asia/) | feeds | P / ? | candidate |
| src-0271 | [hideNseek LAB CTI](https://data.hidenseek.dev/) | feeds | P / ? | candidate |
| src-0272 | [NOCACTI MISP feeds](https://misp-feed.nocacti.com/) | feeds | P / ? | candidate |
| src-0273 | [MalSilo feeds](https://malsilo.gitlab.io/) | feeds | P / ? | candidate |

## Achados

- PRODAFT, WithSecureLabs e Zscaler ThreatLabz mantêm coleções públicas de IOCs; são separadas dos blogs e relacionadas quando aplicável.
- DailyIOC é uma coleção histórica de terceiros; seu último push observado foi em 2023. Não anunciado como feed diário ativo.
- HoneyLabs e SecuriteInfo documentam modalidades gratuitas e pagas. SecuriteInfo publica assinaturas ClamAV, classificadas como detecção.
- Maltiverse e infection.cc agregam outras fontes. Sua inclusão não aumenta automaticamente a quantidade de evidências independentes.
- Shreshta NRD foi classificada como contexto: domínio recém-registrado não é prova de atividade maliciosa.
- Rectifyq foi agrupada em um registro, sem contar cada ano ou recorte como fonte independente.
- Banco do Brasil, SERPRO, APNIC Community Honeynet, hideNseek LAB, NOCACTI e MalSilo foram encontrados nos [metadados oficiais MISP](https://api.github.com/repos/MISP/MISP/contents/app/files/feed-metadata/defaults.json). Isso não confirma disponibilidade, licença ou autenticidade atual de cada resposta.
- ThreatBook já existia: nenhum novo registro para o domínio com www.
- Yeti é uma plataforma de gerenciamento, não uma base por si só; não incluída.
- ThreatMiner, HoneyDB, Check-The-Sum e SecurityCyber não foram promovidos nesta rodada: falha de recuperação/conteúdo insuficiente não prova encerramento.
- Endereços de repositórios que não foram resolvidos não foram inventados nem tratados como novas fontes.

## Números acumulados

270 registros; 115 com descoberta documentada; 27 com modelo geral de acesso documentado; zero classificados como operacionalmente testados. O restante permanece candidato/preliminar, com evidências por campo.

## Validação

IDs, URLs duplicadas, vínculos, categorias, arquivos derivados e estatísticas são verificados pelo script do repositório. A CI não acessa os feeds e não baixa amostras de malware.
