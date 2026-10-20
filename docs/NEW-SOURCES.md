# Novas fontes — 2026-10-20

53 entradas adicionais acumuladas, distintas da seleção inicial. Não são 33 fornecedores independentes. Natureza e nível de verificação aparecem abaixo.

P = pública; G = cadastro gratuito; F = freemium; $ = paga; R = restrita; H = histórica; ? = a confirmar.

`documented` confirma descoberta documental, não funcionamento de API. Classificações `provisional` não foram confirmadas individualmente. Todos os endpoints permanecem `not_tested`.

| ID | Fonte | Acesso | Escopo | Evidência | Ciclo de vida |
|---|---|---|---|---|---|
| src-0221 | [CERT Polska Warning List](https://cert.pl/en/warning-list/) | P | Domínios fraudulentos; lista oficial | documented; acesso: provisional | unknown |
| src-0222 | [CERT Polska n6](https://cert.pl/en/n6/) | G / R | Eventos por rede elegível e feed genérico C2/phishing | documented; acesso: documented | unknown |
| src-0223 | [CERT Polska MWDB](https://mwdb.cert.pl/) | R / ? | Base de malware; requisitos de acesso pendentes | candidate; acesso: unknown | unknown |
| src-0224 | [C2IntelFeeds](https://github.com/drb-ra/C2IntelFeeds) | P | C2 derivado de scans; separar verificado de não verificado | documented; acesso: provisional | unknown |
| src-0225 | [alphaMountain threatYeti](https://www.threatyeti.com/) | F | Reputação de URL, domínio e IP | documented; acesso: documented | unknown |
| src-0226 | [ThreatCluster Public Feeds](https://github.com/Jam0k/Public-Feeds-IOCs) | P | IOCs agregados; preservar fontes de origem | documented; acesso: provisional | unknown |
| src-0227 | [Orange Cyberdefense CTI repository](https://github.com/cert-orangecyberdefense/cti) | P | IOCs de investigações World Watch | documented; acesso: provisional | unknown |
| src-0228 | [SophosLabs IoCs](https://github.com/sophoslabs/IoCs) | P | Indicadores de pesquisas Sophos | documented; acesso: provisional | unknown |
| src-0229 | [Qi-AnXin APT Digital Weapon](https://github.com/RedDrip7/APT_Digital_Weapon) | P | Coleção de IOCs provenientes de fontes públicas | documented; acesso: provisional | unknown |
| src-0230 | [blackorbird APT_REPORT](https://github.com/blackorbird/APT_REPORT) | P | Coleção documental e IOCs; não é feed contínuo | documented; acesso: provisional | unknown |
| src-0231 | [ExecuteMalware Malware-IOCs](https://github.com/executemalware/Malware-IOCs) | P | Coleção de indicadores de malware | documented; acesso: provisional | unknown |
| src-0232 | [Spam404 lists](https://github.com/Spam404/lists) | P | Listas de domínios; atualização a auditar | documented; acesso: provisional | unknown |
| src-0233 | [romainmarcoux malicious-ip](https://github.com/romainmarcoux/malicious-ip) | P | Agregação de listas para tráfego WAN-LAN | documented; acesso: provisional | unknown |
| src-0234 | [Q-Feeds](https://qfeeds.com/) | F | Pacote Community e ofertas comerciais | documented; acesso: documented | unknown |
| src-0235 | [YARAify](https://yaraify.abuse.ch/) | G / ? | Busca de arquivos e resultados YARA; termos da API a conferir | documented; acesso: provisional | unknown |
| src-0236 | [CrowdSec CTI](https://www.crowdsec.net/) | F / ? | Inteligência de IPs baseada na comunidade | documented; acesso: provisional | unknown |
| src-0237 | [ThreatBook](https://threatbook.io/) | $ / ? | Inteligência comercial; planos e API pendentes | documented; acesso: provisional | unknown |
| src-0238 | [APWG eCrime eXchange](https://apwg.org/ecx) | R | Troca de dados de cybercrime entre membros | documented; acesso: documented | unknown |
| src-0239 | [Phishing Initiative](https://phishing-initiative.eu/contrib/) | P | Consulta e denúncia; exportação em massa não confirmada | documented; acesso: documented | unknown |
| src-0240 | [Maltrail static trails](https://github.com/stamparm/maltrail) | P | Coleção de indicadores usada pelo Maltrail; não contar o software como base | documented; acesso: provisional | unknown |
| src-0241 | [TweetFeed](https://tweetfeed.live/) | P / ? | Indicadores extraídos de publicações; validar contexto original | documented; acesso: provisional | unknown |
| src-0242 | [PrecisionSec](https://precisionsec.com/) | F | Feeds comerciais e conjuntos gratuitos anunciados | documented; acesso: documented | unknown |
| src-0243 | [ThreatSTOP](https://www.threatstop.com/) | $ | Inteligência DNS/IP e aplicação de políticas | documented; acesso: provisional | unknown |
| src-0244 | [OpenText Threat Intelligence / BrightCloud](https://www.opentext.com/products/threat-intelligence) | $ | Reputação e categorização; antigo Webroot/BrightCloud | documented; acesso: provisional | unknown |
| src-0245 | [Data443 Cyren Threat Intelligence](https://data443.com/cyren-threat-intelligence/) | $ | Inteligência de ameaças; marca Cyren consolidada | documented; acesso: provisional | unknown |
| src-0246 | [Abusix Guardian Intel / Mail](https://abusix.com/) | $ / ? | Reputação e abuso de e-mail; modalidades a confirmar | documented; acesso: provisional | unknown |
| src-0247 | [IPVoid](https://www.ipvoid.com/) | P / ? | Consulta agregada de reputação de IP; API separada | documented; acesso: provisional | unknown |
| src-0248 | [URLVoid](https://www.urlvoid.com/) | P / ? | Consulta agregada de reputação web; API separada | documented; acesso: provisional | unknown |
| src-0249 | [ipdata](https://www.ipdata.co/) | F | Metadados de IP, anonimização e reputação | documented; acesso: provisional | unknown |
| src-0250 | [IP2Location](https://www.ip2location.com/) | F | Geolocalização e proxy; não implica malícia | documented; acesso: provisional | unknown |
| src-0251 | [Datadog public IOCs](https://github.com/DataDog/indicators-of-compromise) | P | Indicadores de Datadog Security Research | documented; acesso: provisional | unknown |
| src-0252 | [USOM legacy URL list](https://www.usom.gov.tr/url-list.txt) | ? | URL redireciona a siberguvenlik.gov.tr/api/; migração não validada | redirect_observed; acesso: unknown | unknown |
| src-0253 | [Ransomware.live](https://www.ransomware.live/) | P / ? | Monitoramento de publicações de ransomware; disponibilidade não verificada | retrieval_failed; acesso: provisional | unknown |
| src-0254 | [PRODAFT public IOCs](https://github.com/prodaft/malware-ioc) | P | Indicadores de investigações de malware e atores | documented; acesso: documented | unknown |
| src-0255 | [WithSecureLabs IOCs](https://github.com/WithSecureLabs/iocs) | P | Indicadores de relatórios e investigações | documented; acesso: documented | unknown |
| src-0256 | [StrangerealIntel DailyIOC](https://github.com/StrangerealIntel/DailyIOC) | P / H | Arquivo de IOCs de artigos e publicações; último push observado em 2023 | documented; acesso: documented | unknown |
| src-0257 | [Zscaler ThreatLabz IOCs](https://github.com/ThreatLabz/iocs) | P | IOCs das pesquisas públicas do ThreatLabz | documented; acesso: documented | unknown |
| src-0258 | [infection.cc](https://infection.cc/) | P / ? | Pesquisa e exportação de indicadores agregados | documented; acesso: provisional | unknown |
| src-0259 | [Maltiverse](https://maltiverse.com/) | F / ? | Reputação, contexto e feeds de indicadores agregados | documented; acesso: provisional | unknown |
| src-0260 | [Threatray Binary Intelligence](https://www.threatray.com/) | $ / ? | Pesquisa e inteligência de malware baseada em código | documented; acesso: provisional | unknown |
| src-0261 | [SecuriteInfo ClamAV signatures](https://www.securiteinfo.com/clamav-antivirus/improve-detection-rate-of-zero-day-malwares-for-clamav-en.shtml) | F | Bases adicionais de assinaturas ClamAV; não é feed de IPs | documented; acesso: documented | unknown |
| src-0262 | [HoneyLabs](https://honeylabs.net/) | F | Telemetria de honeypots e feeds de exploração e infraestrutura | documented; acesso: documented | unknown |
| src-0263 | [James Brine CTI](https://jamesbrine.com.au/) | P / ? | Indicadores de telemetria e feed de força bruta | documented; acesso: provisional | unknown |
| src-0264 | [Rectifyq curated MISP feeds](https://rectifyq.com/) | P / ? | Inteligência curada com recortes por ano, Malásia e ICS/OT | documented; acesso: provisional | unknown |
| src-0265 | [SiberKapan](https://siberkapan.org/) | P / ? | Plataforma de ameaças e feeds com foco na Turquia | documented; acesso: provisional | unknown |
| src-0266 | [Rösti OSINT MISP feed](https://misp.rosti.dev/) | P / ? | Eventos MISP reempacotados de inteligência aberta | documented; acesso: provisional | unknown |
| src-0267 | [Shreshta Newly Registered Domains](https://shreshtait.com/newly-registered-domains/) | F / ? | Domínios recém-registrados; registro recente não implica malícia | documented; acesso: provisional | unknown |
| src-0268 | [Banco do Brasil malicious hashes](https://cti.bb.com.br:8443/hash-list.csv) | P / ? | Feed de hashes atribuído pelo catálogo oficial MISP; endpoint não validado | candidate; acesso: provisional | unknown |
| src-0269 | [SERPRO IP Reputation](https://s3.i02.estaleiro.serpro.gov.br/blocklist/blocklist.txt) | P / ? | Reputação de IPs atribuída pelo catálogo oficial MISP; endpoint não validado | candidate; acesso: provisional | unknown |
| src-0270 | [APNIC Community Honeynet feeds](https://feeds.honeynet.asia/) | P / ? | URLs e força bruta SSH/Telnet listadas no MISP; acesso não validado | candidate; acesso: provisional | unknown |
| src-0271 | [hideNseek LAB CTI](https://data.hidenseek.dev/) | P / ? | JSON, CSV e blocklist listados no MISP; uma única coleção | candidate; acesso: provisional | unknown |
| src-0272 | [NOCACTI MISP feeds](https://misp-feed.nocacti.com/) | P / ? | Feeds de intrusão e infraestrutura adversária listados no MISP | candidate; acesso: provisional | unknown |
| src-0273 | [MalSilo feeds](https://malsilo.gitlab.io/) | P / ? | Listas de URL, IP e domínio listadas no MISP; atualidade pendente | candidate; acesso: provisional | unknown |
