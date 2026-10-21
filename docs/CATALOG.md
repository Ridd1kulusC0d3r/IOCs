# Catálogo de fontes

[Início](../README.md) · [JSON](../data/sources.json) · [CSV](../data/sources.csv) · [Metodologia](METHODOLOGY.md)

P = pública; G = cadastro gratuito; F = freemium; $ = paga; R = restrita; H = histórica; ? = a confirmar.

`documented` confirma descoberta documental, não funcionamento de API. Classificações `provisional` não foram confirmadas individualmente. Todos os endpoints permanecem `not_tested`.

## Feeds e listas de indicadores (79)

| ID | Fonte | Acesso | Escopo | Evidência | Ciclo de vida |
|---|---|---|---|---|---|
| src-0001 | [ThreatFox](https://threatfox.abuse.ch/) | G / $ | IOCs de malware e C2 | documented; acesso: documented | unknown |
| src-0002 | [URLhaus](https://urlhaus.abuse.ch/) | G / $ | URLs de distribuição de malware | documented; acesso: documented | unknown |
| src-0003 | [MalwareBazaar](https://bazaar.abuse.ch/) | G / $ | Amostras, hashes e metadados | documented; acesso: documented | unknown |
| src-0004 | [Feodo Tracker](https://feodotracker.abuse.ch/) | P / ? | Infraestrutura de botnets; atualização a conferir | candidate; acesso: provisional | unknown |
| src-0005 | [SSL Blacklist](https://sslbl.abuse.ch/) | P / ? | Certificados e infraestrutura TLS | candidate; acesso: provisional | unknown |
| src-0006 | [AbuseIPDB](https://www.abuseipdb.com/) | F | IPs reportados por abuso | documented; acesso: documented | unknown |
| src-0007 | [OpenPhish](https://openphish.com/) | F | URLs de phishing | documented; acesso: documented | unknown |
| src-0008 | [PhishTank](https://phishtank.org/) | P / G | Phishing reportado pela comunidade | candidate; acesso: provisional | unknown |
| src-0009 | [AlienVault OTX](https://otx.alienvault.com/) | G / ? | Pulses comunitários de IOCs | candidate; acesso: provisional | unknown |
| src-0010 | [Pulsedive](https://pulsedive.com/) | F | Indicadores e enriquecimento | documented; acesso: documented | unknown |
| src-0011 | [GreyNoise](https://www.greynoise.io/) | F | Scanning e exploração de rede | documented; acesso: provisional | unknown |
| src-0012 | [Spamhaus DROP](https://www.spamhaus.org/drop/) | P | Redes associadas a operações maliciosas | documented; acesso: documented | unknown |
| src-0013 | [Spamhaus SBL](https://www.spamhaus.org/blocklists/spamhaus-blocklist/) | F | IPs e redes relacionados a abuso | candidate; acesso: provisional | unknown |
| src-0014 | [Spamhaus XBL](https://www.spamhaus.org/blocklists/exploits-blocklist/) | F | IPs comprometidos | candidate; acesso: provisional | unknown |
| src-0015 | [Spamhaus DBL](https://www.spamhaus.org/blocklists/domain-blocklist/) | F | Reputação de domínios | candidate; acesso: provisional | unknown |
| src-0016 | [Spamhaus CSS](https://www.spamhaus.org/blocklists/combined-spam-sources/) | F | IPs associados a spam | candidate; acesso: provisional | unknown |
| src-0017 | [SURBL](https://www.surbl.org/) | F | Domínios em conteúdo abusivo | candidate; acesso: provisional | unknown |
| src-0018 | [URIBL](https://uribl.com/) | F | Reputação de domínios | candidate; acesso: provisional | unknown |
| src-0019 | [SpamCop Blocking List](https://www.spamcop.net/bl.shtml) | P | IPs reportados por spam | candidate; acesso: provisional | unknown |
| src-0020 | [Barracuda Reputation](https://www.barracudacentral.org/lookups) | P / G | Reputação de IPs e domínios | candidate; acesso: provisional | unknown |
| src-0021 | [Cisco Talos Intelligence](https://talosintelligence.com/) | P / G | Reputação e contexto de ameaças | candidate; acesso: provisional | unknown |
| src-0022 | [SANS ISC / DShield](https://isc.sans.edu/) | P | Telemetria de ataques | candidate; acesso: provisional | unknown |
| src-0023 | [blocklist.de](https://www.blocklist.de/en/export.html) | P | IPs envolvidos em ataques a serviços | candidate; acesso: provisional | unknown |
| src-0024 | [GreenSnow](https://greensnow.co/) | P | IPs associados a abuso | candidate; acesso: provisional | unknown |
| src-0025 | [CINS Army](https://cinsscore.com/) | P | Reputação maliciosa de IPs | candidate; acesso: provisional | unknown |
| src-0026 | [Binary Defense Banlist](https://www.binarydefense.com/banlist.txt) | P / ? | IPs de sensores e honeypots | candidate; acesso: provisional | unknown |
| src-0027 | [Emerging Threats public lists](https://rules.emergingthreats.net/blockrules/) | P | IPs comprometidos e botnets | candidate; acesso: provisional | unknown |
| src-0028 | [Dataplane.org](https://dataplane.org/) | P | Sinais de abuso por protocolo | documented; acesso: documented | unknown |
| src-0030 | [IPsum](https://github.com/stamparm/ipsum) | P | Agregação de listas de IPs | documented; acesso: provisional | unknown |
| src-0031 | [FireHOL IP Lists](https://iplists.firehol.org/) | P | Agregação de listas de IPs | candidate; acesso: provisional | unknown |
| src-0032 | [Monty Security C2 Tracker](https://github.com/montysecurity/C2-Tracker) | P / H | Infraestrutura de frameworks C2 | documented; acesso: provisional | archived |
| src-0033 | [Bambenek OSINT](https://osint.bambenekconsulting.com/feeds/) | F / ? | DGAs e C2 | candidate; acesso: provisional | unknown |
| src-0034 | [Threatview](https://threatview.io/) | F | Feeds comunitários e produto comercial | documented; acesso: provisional | unknown |
| src-0035 | [DigitalSide Threat-Intel](https://osint.digitalside.it/) | P | IOCs de análise de malware | candidate; acesso: provisional | unknown |
| src-0036 | [CIRCL OSINT Feed](https://www.circl.lu/doc/misp/feed-osint/) | P | Eventos MISP | candidate; acesso: provisional | unknown |
| src-0037 | [Botvrij](https://www.botvrij.eu/) | P | IOCs agregados de fontes públicas | documented; acesso: documented | unknown |
| src-0038 | [CyberCure](https://www.cybercure.ai/) | P / ? | Feeds de URL, hash e IP | candidate; acesso: provisional | unknown |
| src-0039 | [ELLIO Community Feed](https://ellio.tech/) | F | IPs associados a atividade maliciosa | candidate; acesso: provisional | unknown |
| src-0040 | [Critical Path Security Public Feeds](https://github.com/CriticalPathSecurity/Public-Intelligence-Feeds) | P | IOCs próprios e agregados | documented; acesso: provisional | unknown |
| src-0041 | [Infoblox public threat intelligence](https://github.com/infobloxopen/threat-intelligence) | P | Indicadores de pesquisas | documented; acesso: provisional | unknown |
| src-0042 | [SEKOIA Community](https://github.com/SEKOIA-IO/Community) | P | Indicadores de pesquisas | documented; acesso: provisional | unknown |
| src-0043 | [ThreatMon Daily C2 Feeds](https://github.com/ThreatMon/ThreatMon-Daily-C2-Feeds) | P | Infraestrutura C2 | documented; acesso: provisional | unknown |
| src-0044 | [Phishing.Database](https://github.com/Phishing-Database/Phishing.Database) | P | Domínios e URLs de phishing | documented; acesso: provisional | unknown |
| src-0045 | [Phishing Army](https://phishing.army/) | P | Blocklist agregada de phishing | candidate; acesso: provisional | unknown |
| src-0046 | [Phishunt](https://phishunt.io/) | P / ? | Indicadores de phishing | candidate; acesso: provisional | unknown |
| src-0047 | [PhishStats](https://phishstats.info/) | P / ? | URLs e metadados de phishing | candidate; acesso: provisional | unknown |
| src-0048 | [URLAbuse](https://urlabuse.com/) | P / ? | Consulta e feed de URLs suspeitas | candidate; acesso: provisional | unknown |
| src-0049 | [StopForumSpam](https://www.stopforumspam.com/) | F | IPs, e-mails e usernames de spam | candidate; acesso: provisional | unknown |
| src-0050 | [CleanTalk Blacklists](https://cleantalk.org/blacklists) | F | Reputação de IP e e-mail | candidate; acesso: provisional | unknown |
| src-0221 | [CERT Polska Warning List](https://cert.pl/en/warning-list/) | P | Domínios fraudulentos; lista oficial | documented; acesso: provisional | unknown |
| src-0224 | [C2IntelFeeds](https://github.com/drb-ra/C2IntelFeeds) | P | C2 derivado de scans; separar verificado de não verificado | documented; acesso: provisional | unknown |
| src-0226 | [ThreatCluster Public Feeds](https://github.com/Jam0k/Public-Feeds-IOCs) | P | IOCs agregados; preservar fontes de origem | documented; acesso: provisional | unknown |
| src-0232 | [Spam404 lists](https://github.com/Spam404/lists) | P | Listas de domínios; atualização a auditar | documented; acesso: provisional | unknown |
| src-0233 | [romainmarcoux malicious-ip](https://github.com/romainmarcoux/malicious-ip) | P | Agregação de listas para tráfego WAN-LAN | documented; acesso: provisional | unknown |
| src-0234 | [Q-Feeds](https://qfeeds.com/) | F | Pacote Community e ofertas comerciais | documented; acesso: documented | unknown |
| src-0236 | [CrowdSec CTI](https://www.crowdsec.net/) | F / ? | Inteligência de IPs baseada na comunidade | documented; acesso: provisional | unknown |
| src-0240 | [Maltrail static trails](https://github.com/stamparm/maltrail) | P | Coleção de indicadores usada pelo Maltrail; não contar o software como base | documented; acesso: provisional | unknown |
| src-0241 | [TweetFeed](https://tweetfeed.live/) | P / ? | Indicadores extraídos de publicações; validar contexto original | documented; acesso: provisional | unknown |
| src-0242 | [PrecisionSec](https://precisionsec.com/) | F | Feeds comerciais e conjuntos gratuitos anunciados | documented; acesso: documented | unknown |
| src-0252 | [USOM legacy URL list](https://www.usom.gov.tr/url-list.txt) | ? | URL redireciona a siberguvenlik.gov.tr/api/; migração não validada | redirect_observed; acesso: unknown | unknown |
| src-0258 | [infection.cc](https://infection.cc/) | P / ? | Pesquisa e exportação de indicadores agregados | documented; acesso: provisional | unknown |
| src-0262 | [HoneyLabs](https://honeylabs.net/) | F | Telemetria de honeypots e feeds de exploração e infraestrutura | documented; acesso: documented | unknown |
| src-0263 | [James Brine CTI](https://jamesbrine.com.au/) | P / ? | Indicadores de telemetria e feed de força bruta | documented; acesso: provisional | unknown |
| src-0264 | [Rectifyq curated MISP feeds](https://rectifyq.com/) | P / ? | Inteligência curada com recortes por ano, Malásia e ICS/OT | documented; acesso: provisional | unknown |
| src-0265 | [SiberKapan](https://siberkapan.org/) | P / ? | Plataforma de ameaças e feeds com foco na Turquia | documented; acesso: provisional | unknown |
| src-0266 | [Rösti OSINT MISP feed](https://misp.rosti.dev/) | P / ? | Eventos MISP reempacotados de inteligência aberta | documented; acesso: provisional | unknown |
| src-0268 | [Banco do Brasil malicious hashes](https://cti.bb.com.br:8443/hash-list.csv) | P / ? | Feed de hashes atribuído pelo catálogo oficial MISP; endpoint não validado | candidate; acesso: provisional | unknown |
| src-0269 | [SERPRO IP Reputation](https://s3.i02.estaleiro.serpro.gov.br/blocklist/blocklist.txt) | P / ? | Reputação de IPs atribuída pelo catálogo oficial MISP; endpoint não validado | candidate; acesso: provisional | unknown |
| src-0270 | [APNIC Community Honeynet feeds](https://feeds.honeynet.asia/) | P / ? | URLs e força bruta SSH/Telnet listadas no MISP; acesso não validado | candidate; acesso: provisional | unknown |
| src-0271 | [hideNseek LAB CTI](https://data.hidenseek.dev/) | P / ? | JSON, CSV e blocklist listados no MISP; uma única coleção | candidate; acesso: provisional | unknown |
| src-0272 | [NOCACTI MISP feeds](https://misp-feed.nocacti.com/) | P / ? | Feeds de intrusão e infraestrutura adversária listados no MISP | candidate; acesso: provisional | unknown |
| src-0273 | [MalSilo feeds](https://malsilo.gitlab.io/) | P / ? | Listas de URL, IP e domínio listadas no MISP; atualidade pendente | candidate; acesso: provisional | unknown |
| src-0274 | [xfeeds](https://zenodo.org/records/23163156) | P | Pipeline de indicadores; identidade e alegações pendentes | retrieval_failed; acesso: provisional | unknown |
| src-0283 | [Adversary Hunter](https://github.com/cybersheepdog/Adversary-Hunter) | P | Descoberta de infraestrutura C2 | documented; acesso: provisional | unknown |
| src-0286 | [Spydisec Threat Intel](https://github.com/spydisec/spydithreatintel) | P | Listas de indicadores; proveniência a revisar | documented; acesso: provisional | unknown |
| src-0289 | [Fed0gaT](https://github.com/Tagoletta/Fed0gaT) | P | Agregação de indicadores; não presumir independência | documented; acesso: provisional | unknown |
| src-0300 | [caidongyun IOCs](https://github.com/caidongyun/iocs) | P | Indicadores estruturados; país citado no material, não sede confirmada | documented; acesso: provisional | unknown |
| src-0301 | [BlackShield](https://github.com/WinterGate-IC/blackshield-threat-intel) | P | Agregador; blocos por país não demonstram malícia | documented; acesso: provisional | unknown |
| src-0308 | [CTT Threat Feed](https://www.anti-malware.ru/analytics/Market_Analysis/Threat-Intelligence) | ? | Referência de descoberta; publicador e endpoint a identificar | retrieval_failed; acesso: provisional | unknown |

## Análise e enriquecimento (36)

| ID | Fonte | Acesso | Escopo | Evidência | Ciclo de vida |
|---|---|---|---|---|---|
| src-0051 | [VirusTotal](https://www.virustotal.com/) | F | Arquivos, URLs, IPs e relacionamentos | documented; acesso: documented | unknown |
| src-0052 | [Hybrid Analysis](https://www.hybrid-analysis.com/) | G / F | Análise dinâmica e indicadores | candidate; acesso: provisional | unknown |
| src-0053 | [Triage](https://tria.ge/) | G / F | Análise e configurações de malware | documented; acesso: documented | unknown |
| src-0054 | [ANY.RUN](https://any.run/) | F | Análises e inteligência derivada | documented; acesso: provisional | unknown |
| src-0055 | [Joe Sandbox](https://www.joesecurity.org/) | F | Comportamento e artefatos | documented; acesso: provisional | unknown |
| src-0056 | [FileScan.IO](https://www.filescan.io/) | G / F / ? | Arquivos e extração de indicadores | candidate; acesso: provisional | unknown |
| src-0057 | [MalShare](https://malshare.com/) | G | Amostras e hashes | documented; acesso: provisional | unknown |
| src-0058 | [Malpedia](https://malpedia.caad.fkie.fraunhofer.de/) | P / R | Famílias, referências e regras | candidate; acesso: provisional | unknown |
| src-0059 | [VirusShare](https://virusshare.com/) | R | Amostras de malware | candidate; acesso: provisional | unknown |
| src-0060 | [Malware-Traffic-Analysis.net](https://www.malware-traffic-analysis.net/) | P | PCAPs, amostras e indicadores | documented; acesso: provisional | unknown |
| src-0061 | [vx-underground](https://vx-underground.org/) | P / ? | Arquivo de malware e pesquisas | candidate; acesso: provisional | unknown |
| src-0062 | [CAPE public sandbox](https://www.capesandbox.com/) | P / G / ? | Relatórios e configurações | candidate; acesso: provisional | unknown |
| src-0063 | [urlscan.io](https://urlscan.io/) | F | Páginas, requisições e infraestrutura web | documented; acesso: documented | unknown |
| src-0064 | [URLQuery](https://urlquery.net/) | F / ? | Análise de URLs | candidate; acesso: provisional | unknown |
| src-0065 | [CIRCL Lookyloo](https://lookyloo.circl.lu/) | P | Capturas e relações web | documented; acesso: provisional | unknown |
| src-0066 | [CIRCL Pandora](https://pandora.circl.lu/) | P | Análise de documentos | documented; acesso: provisional | unknown |
| src-0067 | [Kunai Sandbox](https://sandbox.kunai.rocks/) | P | Malware Linux | documented; acesso: provisional | unknown |
| src-0068 | [OPSWAT MetaDefender Cloud](https://metadefender.opswat.com/) | F | Análise e reputação | candidate; acesso: provisional | unknown |
| src-0069 | [Kaspersky OpenTIP](https://opentip.kaspersky.com/) | F / G | Consulta e análise de indicadores | candidate; acesso: provisional | unknown |
| src-0070 | [FortiGuard public lookups](https://www.fortiguard.com/) | P / F | Consultas e enciclopédia de ameaças | candidate; acesso: provisional | unknown |
| src-0071 | [Trend Micro Site Safety](https://global.sitesafety.trendmicro.com/) | P | Reputação de URLs | candidate; acesso: provisional | unknown |
| src-0072 | [Google Safe Browsing](https://developers.google.com/safe-browsing) | G | URLs perigosas; termos específicos | candidate; acesso: provisional | unknown |
| src-0073 | [Google Web Risk](https://cloud.google.com/web-risk) | $ | Consulta comercial de URLs | candidate; acesso: provisional | unknown |
| src-0074 | [IPQualityScore](https://www.ipqualityscore.com/) | F | IPs, URLs e fraude | candidate; acesso: provisional | unknown |
| src-0075 | [Scamalytics](https://scamalytics.com/) | F | Risco de fraude de IPs | candidate; acesso: provisional | unknown |
| src-0223 | [CERT Polska MWDB](https://mwdb.cert.pl/) | R / ? | Base de malware; requisitos de acesso pendentes | candidate; acesso: unknown | unknown |
| src-0225 | [alphaMountain threatYeti](https://www.threatyeti.com/) | F | Reputação de URL, domínio e IP | documented; acesso: documented | unknown |
| src-0235 | [YARAify](https://yaraify.abuse.ch/) | G / ? | Busca de arquivos e resultados YARA; termos da API a conferir | documented; acesso: provisional | unknown |
| src-0239 | [Phishing Initiative](https://phishing-initiative.eu/contrib/) | P | Consulta e denúncia; exportação em massa não confirmada | documented; acesso: documented | unknown |
| src-0247 | [IPVoid](https://www.ipvoid.com/) | P / ? | Consulta agregada de reputação de IP; API separada | documented; acesso: provisional | unknown |
| src-0248 | [URLVoid](https://www.urlvoid.com/) | P / ? | Consulta agregada de reputação web; API separada | documented; acesso: provisional | unknown |
| src-0259 | [Maltiverse](https://maltiverse.com/) | F / ? | Reputação, contexto e feeds de indicadores agregados | documented; acesso: provisional | unknown |
| src-0292 | [RiskIQ Community / PassiveTotal (legado)](https://www.riskiq.com/community/) | H / ? | Referência legada; não pressupor disponibilidade da edição comunitária | retrieval_failed; acesso: provisional | unknown |
| src-0318 | [X-TI](https://x-ti.ru/) | F | Portal de consulta; acesso e operador a confirmar | retrieval_failed; acesso: provisional | unknown |
| src-0344 | [Zensec Network IoC Service](https://zensec.ae/network-indicator-of-compromise-service/) | $ | Serviço gerenciado de análise de telemetria; não é feed público | documented; acesso: provisional | unknown |
| src-0345 | [CyberSilo ThreatSearch](https://tip.cybersilo.tech/mainpage) | ? | Portal de pesquisa; vínculo geográfico saudita alegado não confirmado | documented; acesso: provisional | unknown |

## Inteligência comercial (66)

| ID | Fonte | Acesso | Escopo | Evidência | Ciclo de vida |
|---|---|---|---|---|---|
| src-0076 | [Google Threat Intelligence](https://cloud.google.com/security/products/threat-intelligence) | $ | Campanhas e investigação | candidate; acesso: provisional | unknown |
| src-0077 | [Recorded Future](https://www.recordedfuture.com/) | $ | Atores, indicadores e risco | documented; acesso: provisional | unknown |
| src-0078 | [Flashpoint](https://flashpoint.io/) | $ | Cybercrime e vulnerabilidades | documented; acesso: provisional | unknown |
| src-0079 | [Intel 471](https://www.intel471.com/) | $ | Ecossistema criminal | documented; acesso: provisional | unknown |
| src-0080 | [Group-IB Threat Intelligence](https://www.group-ib.com/products/threat-intelligence/) | $ | Campanhas, malware e fraude | documented; acesso: provisional | unknown |
| src-0081 | [Kaspersky Threat Intelligence](https://www.kaspersky.com/enterprise-security/threat-intelligence) | $ | Feeds e inteligência IT/OT | documented; acesso: provisional | unknown |
| src-0082 | [CrowdStrike Threat Intelligence](https://www.crowdstrike.com/) | $ | Adversários e campanhas | candidate; acesso: provisional | unknown |
| src-0083 | [Microsoft Threat Intelligence commercial](https://www.microsoft.com/en-us/security) | $ / ? | Oferta vigente a confirmar | candidate; acesso: provisional | unknown |
| src-0084 | [Proofpoint ET Intelligence](https://www.proofpoint.com/) | $ | Reputação e indicadores de rede | candidate; acesso: provisional | unknown |
| src-0085 | [ReversingLabs Spectra Intelligence](https://www.reversinglabs.com/) | $ | Inteligência de arquivos | documented; acesso: provisional | unknown |
| src-0086 | [Team Cymru commercial intelligence](https://www.team-cymru.com/) | $ | Infraestrutura e relações de rede | documented; acesso: provisional | unknown |
| src-0087 | [DomainTools Iris](https://www.domaintools.com/) | $ | Investigação de domínios | documented; acesso: provisional | unknown |
| src-0088 | [DomainTools DNSDB](https://www.domaintools.com/products/dnsdb/) | $ / R | DNS passivo | candidate; acesso: provisional | unknown |
| src-0089 | [Silent Push](https://www.silentpush.com/) | F | Infraestrutura adversária | documented; acesso: provisional | unknown |
| src-0090 | [Validin](https://www.validin.com/) | F / ? | DNS e campanhas | documented; acesso: provisional | unknown |
| src-0091 | [Hunt.io](https://hunt.io/) | F / ? | C2 e infraestrutura | candidate; acesso: provisional | unknown |
| src-0092 | [Criminal IP](https://www.criminalip.io/) | F / ? | Exposição e reputação | documented; acesso: provisional | unknown |
| src-0093 | [Sekoia Threat Intelligence](https://www.sekoia.com/) | $ | Inteligência estruturada | documented; acesso: provisional | unknown |
| src-0094 | [Malware Patrol](https://www.malwarepatrol.net/) | $ / F | Malware e infraestrutura | documented; acesso: provisional | unknown |
| src-0095 | [Netcraft](https://www.netcraft.com/) | $ | Phishing, fraude e marcas | documented; acesso: provisional | unknown |
| src-0096 | [Infoblox Threat Intelligence](https://www.infoblox.com/) | $ | Ameaças DNS | candidate; acesso: provisional | unknown |
| src-0097 | [FortiGuard commercial intelligence](https://www.fortiguard.com/) | $ | Inteligência licenciada | candidate; acesso: provisional | unknown |
| src-0098 | [Trend Micro Threat Intelligence](https://www.trendmicro.com/) | $ | Malware e campanhas | candidate; acesso: provisional | unknown |
| src-0099 | [Cyjax](https://www.cyjax.com/) | $ | Cybercrime e risco digital | documented; acesso: provisional | unknown |
| src-0100 | [SOCRadar](https://socradar.io/) | F / $ | Ameaças externas e dark web | documented; acesso: provisional | unknown |
| src-0101 | [Flare](https://flare.io/) | $ | Exposição e infostealers | documented; acesso: provisional | unknown |
| src-0102 | [KELA](https://www.kelacyber.com/) | $ | Inteligência criminal | documented; acesso: provisional | unknown |
| src-0103 | [Bitsight Cybersixgill](https://www.bitsight.com/cybersixgill) | $ | Fontes clandestinas | documented; acesso: provisional | unknown |
| src-0104 | [DarkOwl](https://www.darkowl.com/) | $ | Pesquisa de dark web | documented; acesso: provisional | unknown |
| src-0105 | [Searchlight Cyber](https://slcyber.io/) | $ | Monitoramento de dark web | candidate; acesso: provisional | unknown |
| src-0106 | [Cyble](https://cyble.com/) | $ | Exposição e ameaças externas | candidate; acesso: provisional | unknown |
| src-0107 | [Hudson Rock](https://www.hudsonrock.com/) | F / $ | Inteligência de infostealers | candidate; acesso: provisional | unknown |
| src-0108 | [SpyCloud](https://spycloud.com/) | $ | Identidades expostas e infecções | candidate; acesso: provisional | unknown |
| src-0109 | [Constella Intelligence](https://constella.ai/) | $ | Exposição de identidades | candidate; acesso: provisional | unknown |
| src-0110 | [ThreatFabric](https://www.threatfabric.com/) | $ | Malware mobile e fraude | documented; acesso: provisional | unknown |
| src-0111 | [Cleafy](https://www.cleafy.com/) | $ | Fraude e malware bancário | documented; acesso: provisional | unknown |
| src-0112 | [Dragos WorldView](https://www.dragos.com/threat-intelligence/) | $ | Inteligência OT/ICS | documented; acesso: provisional | unknown |
| src-0113 | [Nozomi Threat Intelligence](https://www.nozominetworks.com/platform/threat-intelligence) | $ | OT e IoT | documented; acesso: provisional | unknown |
| src-0114 | [NSFOCUS Threat Intelligence](https://www.nsfocusglobal.com/) | $ | Ameaças de rede | candidate; acesso: provisional | unknown |
| src-0115 | [Positive Technologies Threat Intelligence](https://www.ptsecurity.com/) | $ / ? | Campanhas e malware | candidate; acesso: provisional | unknown |
| src-0237 | [ThreatBook](https://threatbook.io/) | $ / ? | Inteligência comercial; planos e API pendentes | documented; acesso: provisional | unknown |
| src-0243 | [ThreatSTOP](https://www.threatstop.com/) | $ | Inteligência DNS/IP e aplicação de políticas | documented; acesso: provisional | unknown |
| src-0244 | [OpenText Threat Intelligence / BrightCloud](https://www.opentext.com/products/threat-intelligence) | $ | Reputação e categorização; antigo Webroot/BrightCloud | documented; acesso: provisional | unknown |
| src-0245 | [Data443 Cyren Threat Intelligence](https://data443.com/cyren-threat-intelligence/) | $ | Inteligência de ameaças; marca Cyren consolidada | documented; acesso: provisional | unknown |
| src-0246 | [Abusix Guardian Intel / Mail](https://abusix.com/) | $ / ? | Reputação e abuso de e-mail; modalidades a confirmar | documented; acesso: provisional | unknown |
| src-0260 | [Threatray Binary Intelligence](https://www.threatray.com/) | $ / ? | Pesquisa e inteligência de malware baseada em código | documented; acesso: provisional | unknown |
| src-0294 | [QiAnXin TI](https://ti.qianxin.com/) | F / $ | Portal de inteligência e consultas | retrieval_failed; acesso: provisional | unknown |
| src-0295 | [360 Threat Intelligence](https://ti.360.net/) | F / $ | Inteligência e consulta de indicadores | candidate; acesso: provisional | unknown |
| src-0296 | [Tencent TIX](https://tix.qq.com/) | F / $ | Plataforma de inteligência Tencent | candidate; acesso: provisional | unknown |
| src-0297 | [VenusEye](https://www.venuseye.com.cn/) | F / $ | Inteligência e pesquisas de ameaças | retrieval_failed; acesso: provisional | unknown |
| src-0298 | [DBAPPSecurity TI](https://ti.dbappsecurity.com.cn/) | F / $ | Consulta de indicadores e inteligência | documented; acesso: provisional | unknown |
| src-0299 | [Sangfor Security Cloud Brain](https://www.sangfor.com/) | ? | Oferta citada; endpoint específico e acesso pendentes | candidate; acesso: provisional | unknown |
| src-0305 | [Chaitin XTI](https://rivers.chaitin.cn/) | F / $ | Inteligência e pesquisas; detalhes comerciais pendentes | candidate; acesso: provisional | unknown |
| src-0306 | [PT Fusion](https://www.anti-malware.ru/products/pt-fusion) | F / $ | Produto citado por fonte secundária; validar oferta oficial | candidate; acesso: provisional | unknown |
| src-0309 | [AMTIP](https://amtip.ru/) | F / $ | Portal de inteligência; API e termos a confirmar | documented; acesso: provisional | unknown |
| src-0310 | [Garda Threat Intelligence](https://www.anti-malware.ru/products/garda-threat-intelligence) | $ | Oferta comercial citada; referência oficial pendente | candidate; acesso: provisional | unknown |
| src-0311 | [BI.ZONE Threat Intelligence](https://bi.zone/) | F / $ | Inteligência comercial; escopo gratuito a confirmar | candidate; acesso: provisional | unknown |
| src-0312 | [F6 Threat Intelligence](https://www.f6.ru/) | $ | Oferta comercial de inteligência | candidate; acesso: provisional | unknown |
| src-0321 | [AhnLab TIP API](https://www.ahnlab.com/jp/contents/content-center/36269) | $ | Referência de oferta de inteligência via API | documented; acesso: provisional | unknown |
| src-0322 | [SecuLetter ConTI](https://seculetter.com/) | $ | Inteligência sobre ameaças em arquivos e e-mail | documented; acesso: provisional | unknown |
| src-0329 | [CTIChef](https://ctichef.com/) | F / $ | Cobertura ucraniana alegada no material; país do operador desconhecido | retrieval_failed; acesso: provisional | unknown |
| src-0334 | [GITA TI](https://cgr.ir/) | $ | Oferta citada; capacidades técnicas e operador a verificar | candidate; acesso: provisional | unknown |
| src-0340 | [Solar TI Feeds](https://docs.data.rt-solar.ru/) | $ | Documentação de fornecimento e integração de indicadores | candidate; acesso: provisional | unknown |
| src-0343 | [OryxLabs DARK EYE](https://edgegroup.ae/news/edge-unveils-dark-eye-dark-web-monitoring-and-brand-protection-platform) | $ | Monitoramento de exposição e proteção de marca | documented; acesso: provisional | unknown |
| src-0346 | [SKYLINE CTI](https://alskyline.com/keywords/threat-intelligence-dark-web-brand-monitoring-saudi-arabia) | $ | Serviço comercial; formato do feed a confirmar | documented; acesso: provisional | unknown |
| src-0347 | [Turkcell Bozok](https://www.turkcell.com.tr/kurumsal/dijital-is-servisleri/siber-guvenlik/turkcell-bozok-siber-tehdit-istihbarat) | $ | Inteligência de ameaças | documented; acesso: provisional | unknown |

## Pesquisas e repositórios (61)

| ID | Fonte | Acesso | Escopo | Evidência | Ciclo de vida |
|---|---|---|---|---|---|
| src-0116 | [Cisco Talos IOCs](https://github.com/Cisco-Talos/IOCs) | P | Indicadores de pesquisas | documented; acesso: provisional | unknown |
| src-0117 | [ESET malware-ioc](https://github.com/eset/malware-ioc) | P | IOCs de investigações | documented; acesso: provisional | unknown |
| src-0118 | [Volexity threat-intel](https://github.com/volexity/threat-intel) | P | Indicadores e assinaturas | documented; acesso: provisional | unknown |
| src-0119 | [Unit 42 historical IOCs](https://github.com/pan-unit42/iocs) | P / H | Arquivado em 2025-10-13 | documented; acesso: provisional | archived |
| src-0120 | [Trellix Advanced Threat Research IOCs](https://github.com/advanced-threat-research/IOCs) | P | IOCs, CSV e MISP | documented; acesso: provisional | unknown |
| src-0123 | [The DFIR Report](https://thedfirreport.com/) | P | Incidentes, cronologias e IOCs | candidate; acesso: provisional | unknown |
| src-0124 | [Google Threat Intelligence Blog](https://cloud.google.com/blog/topics/threat-intelligence) | P | Pesquisas e indicadores | candidate; acesso: provisional | unknown |
| src-0125 | [Microsoft Threat Intelligence Blog](https://www.microsoft.com/en-us/security/blog/topic/threat-intelligence/) | P | Campanhas e indicadores | candidate; acesso: provisional | unknown |
| src-0126 | [Unit 42 Research](https://unit42.paloaltonetworks.com/) | P | Relatórios atuais | candidate; acesso: provisional | unknown |
| src-0127 | [Cisco Talos Blog](https://blog.talosintelligence.com/) | P | Malware e campanhas | candidate; acesso: provisional | unknown |
| src-0128 | [Securelist](https://securelist.com/) | P | Malware e APTs | candidate; acesso: provisional | unknown |
| src-0129 | [WeLiveSecurity](https://www.welivesecurity.com/) | P | Investigações | candidate; acesso: provisional | unknown |
| src-0130 | [Proofpoint Threat Insight](https://www.proofpoint.com/us/blog/threat-insight) | P | Phishing e malware | candidate; acesso: provisional | unknown |
| src-0131 | [Volexity Blog](https://www.volexity.com/blog/) | P | Espionagem e incidentes | candidate; acesso: provisional | unknown |
| src-0132 | [SentinelLabs](https://www.sentinelone.com/labs/) | P | Malware e campanhas | candidate; acesso: provisional | unknown |
| src-0133 | [Elastic Security Labs](https://www.elastic.co/security-labs) | P | Malware e detecção | candidate; acesso: provisional | unknown |
| src-0134 | [Sophos X-Ops](https://news.sophos.com/) | P | Ransomware e incidentes | candidate; acesso: provisional | unknown |
| src-0135 | [Check Point Research](https://research.checkpoint.com/) | P | Malware e campanhas | candidate; acesso: provisional | unknown |
| src-0136 | [FortiGuard Labs Blog](https://www.fortinet.com/blog/threat-research) | P | Malware e exploração | candidate; acesso: provisional | unknown |
| src-0137 | [Trend Micro Research](https://www.trendmicro.com/en_us/research.html) | P | Malware e APTs | candidate; acesso: provisional | unknown |
| src-0138 | [Zscaler ThreatLabz](https://www.zscaler.com/blogs/security-research) | P | Phishing e malware | candidate; acesso: provisional | unknown |
| src-0139 | [Netskope Threat Labs](https://www.netskope.com/blog) | P | Cloud, SaaS e web | candidate; acesso: provisional | unknown |
| src-0140 | [Akamai Security Research](https://www.akamai.com/blog/security) | P | Botnets e exploração | candidate; acesso: provisional | unknown |
| src-0141 | [Cloudflare Cloudforce One](https://www.cloudflare.com/cloudforce-one/) | P / $ | Pesquisas e inteligência comercial | candidate; acesso: provisional | unknown |
| src-0142 | [Sekoia Research](https://blog.sekoia.io/) | P | Malware e infraestrutura | candidate; acesso: provisional | unknown |
| src-0143 | [Orange Cyberdefense Research](https://www.orangecyberdefense.com/global/blog) | P | Pesquisas de ameaças | candidate; acesso: provisional | unknown |
| src-0144 | [CERT-FR](https://www.cert.ssi.gouv.fr/) | P | Alertas e relatórios | candidate; acesso: provisional | unknown |
| src-0145 | [CERT-UA](https://cert.gov.ua/) | P | Campanhas e incidentes | candidate; acesso: provisional | unknown |
| src-0146 | [JPCERT/CC Analysis Center](https://blogs.jpcert.or.jp/) | P | Análise de malware | candidate; acesso: provisional | unknown |
| src-0147 | [CISA Cybersecurity Advisories](https://www.cisa.gov/news-events/cybersecurity-advisories) | P | Relatórios, TTPs e IOCs selecionados | candidate; acesso: provisional | unknown |
| src-0148 | [Canadian Centre for Cyber Security](https://www.cyber.gc.ca/en/alerts-advisories) | P | Alertas técnicos | candidate; acesso: provisional | unknown |
| src-0149 | [Australian Cyber Security Centre](https://www.cyber.gov.au/about-us/view-all-content/alerts-and-advisories) | P | Alertas e relatórios | candidate; acesso: provisional | unknown |
| src-0150 | [NCSC UK Reports and Advisories](https://www.ncsc.gov.uk/section/keep-up-to-date/reports-advisories) | P | Campanhas e ameaças | candidate; acesso: provisional | unknown |
| src-0151 | [Huntress Blog](https://www.huntress.com/blog) | P | Intrusões e indicadores | candidate; acesso: provisional | unknown |
| src-0152 | [Hunt.io Research](https://hunt.io/blog) | P | C2 e infraestrutura | candidate; acesso: provisional | unknown |
| src-0153 | [Silent Push Research](https://www.silentpush.com/blog/) | P | Phishing e campanhas | candidate; acesso: provisional | unknown |
| src-0154 | [QuoIntelligence Blog](https://quointelligence.eu/blog/) | P | Atores e campanhas | candidate; acesso: provisional | unknown |
| src-0155 | [Team Cymru Research](https://www.team-cymru.com/blog) | P | Infraestrutura e comportamento | candidate; acesso: provisional | unknown |
| src-0227 | [Orange Cyberdefense CTI repository](https://github.com/cert-orangecyberdefense/cti) | P | IOCs de investigações World Watch | documented; acesso: provisional | unknown |
| src-0228 | [SophosLabs IoCs](https://github.com/sophoslabs/IoCs) | P | Indicadores de pesquisas Sophos | documented; acesso: provisional | unknown |
| src-0229 | [Qi-AnXin APT Digital Weapon](https://github.com/RedDrip7/APT_Digital_Weapon) | P | Coleção de IOCs provenientes de fontes públicas | documented; acesso: provisional | unknown |
| src-0230 | [blackorbird APT_REPORT](https://github.com/blackorbird/APT_REPORT) | P | Coleção documental e IOCs; não é feed contínuo | documented; acesso: provisional | unknown |
| src-0231 | [ExecuteMalware Malware-IOCs](https://github.com/executemalware/Malware-IOCs) | P | Coleção de indicadores de malware | documented; acesso: provisional | unknown |
| src-0251 | [Datadog public IOCs](https://github.com/DataDog/indicators-of-compromise) | P | Indicadores de Datadog Security Research | documented; acesso: provisional | unknown |
| src-0254 | [PRODAFT public IOCs](https://github.com/prodaft/malware-ioc) | P | Indicadores de investigações de malware e atores | documented; acesso: documented | unknown |
| src-0255 | [WithSecureLabs IOCs](https://github.com/WithSecureLabs/iocs) | P | Indicadores de relatórios e investigações | documented; acesso: documented | unknown |
| src-0256 | [StrangerealIntel DailyIOC](https://github.com/StrangerealIntel/DailyIOC) | P / H | Arquivo de IOCs de artigos e publicações; último push observado em 2023 | documented; acesso: documented | unknown |
| src-0257 | [Zscaler ThreatLabz IOCs](https://github.com/ThreatLabz/iocs) | P | IOCs das pesquisas públicas do ThreatLabz | documented; acesso: documented | unknown |
| src-0276 | [Meta Threat Research](https://github.com/facebook/threat-research) | P | Indicadores publicados em pesquisas da Meta | documented; acesso: provisional | unknown |
| src-0277 | [Threatray Threat Research](https://github.com/threatray/threat-research) | P | Artefatos e indicadores de pesquisa | documented; acesso: provisional | unknown |
| src-0278 | [Drosera Threat Intel](https://github.com/AfterPacket/drosera-threat-intel) | P | Artefatos de detecção e inteligência | documented; acesso: provisional | unknown |
| src-0284 | [Infinitum-IT IOAs](https://github.com/Infinitum-IT/IOAs) | P | Indicadores e artefatos de ataques | documented; acesso: provisional | unknown |
| src-0285 | [Nextron IOCs](https://github.com/NextronSystems/iocs) | P | Indicadores por campanha e pesquisa | documented; acesso: provisional | unknown |
| src-0287 | [CronUp Malware IOCs](https://github.com/CronUp/Malware-IOCs) | P | Coleção para pesquisa retrospectiva; atualidade a conferir | documented; acesso: provisional | unknown |
| src-0288 | [Wiz Research IOCs](https://github.com/wiz-sec-public/wiz-research-iocs) | P | Pesquisas sobre cloud e cadeia de suprimentos | documented; acesso: provisional | unknown |
| src-0304 | [Knownsec 404](https://www.knownsec.com/) | P | Pesquisa técnica; identificar publicações com indicadores | candidate; acesso: provisional | unknown |
| src-0317 | [Kaspersky ICS CERT](https://ics-cert.kaspersky.ru/) | P / ? | Pesquisa e inteligência ICS/OT; condições de feeds separadas | documented; acesso: provisional | unknown |
| src-0327 | [Ukraine Cyber Operations](https://github.com/curated-intel/Ukraine-Cyber-Operations) | P | Curadoria comunitária sobre o conflito; cobertura não indica sede | documented; acesso: provisional | unknown |
| src-0328 | [Orange Russia Ukraine IOCs](https://github.com/Orange-Cyberdefense/russia-ukraine_IOCs) | P / H | Coleção contextual do conflito; atualidade a conferir | documented; acesso: provisional | unknown |
| src-0333 | [Saudi CERT](https://cert.gov.sa/) | P / ? | Alertas públicos; API comunitária não identificada | retrieval_failed; acesso: provisional | unknown |
| src-0335 | [Certfa Lab](https://radar.certfa.com/) | P | Pesquisa sobre ameaças iranianas; cobertura não indica sede | documented; acesso: provisional | unknown |

## Contexto e redução de falsos positivos (50)

| ID | Fonte | Acesso | Escopo | Evidência | Ciclo de vida |
|---|---|---|---|---|---|
| src-0029 | [DAN.me.uk DNSBL](https://www.dan.me.uk/dnsbl) | P | Listas de infraestrutura; nem todo registro é malicioso | candidate; acesso: provisional | unknown |
| src-0156 | [Shodan](https://www.shodan.io/) | F | Serviços e banners | documented; acesso: provisional | unknown |
| src-0157 | [Censys](https://search.censys.io/) | F | Hosts e certificados | documented; acesso: provisional | unknown |
| src-0158 | [FOFA](https://fofa.info/) | F | Ativos e fingerprints | candidate; acesso: provisional | unknown |
| src-0159 | [ZoomEye](https://www.zoomeye.org/) | F | Ativos expostos | candidate; acesso: provisional | unknown |
| src-0160 | [Netlas](https://netlas.io/) | F | Serviços, DNS e certificados | candidate; acesso: provisional | unknown |
| src-0161 | [ONYPHE](https://www.onyphe.io/) | F | Infraestrutura e exposição | candidate; acesso: provisional | unknown |
| src-0162 | [LeakIX](https://leakix.net/) | F | Exposição e vazamentos | candidate; acesso: provisional | unknown |
| src-0163 | [BinaryEdge](https://www.binaryedge.io/) | $ / ? | Telemetria de exposição | candidate; acesso: provisional | unknown |
| src-0164 | [SecurityTrails](https://securitytrails.com/) | F / $ / ? | DNS histórico | candidate; acesso: provisional | unknown |
| src-0165 | [WhoisXML API](https://www.whoisxmlapi.com/) | F / $ | WHOIS e DNS | candidate; acesso: provisional | unknown |
| src-0166 | [DNSlytics](https://dnslytics.com/) | F | Relações entre ativos | candidate; acesso: provisional | unknown |
| src-0167 | [ViewDNS.info](https://viewdns.info/) | F | Consultas de infraestrutura | candidate; acesso: provisional | unknown |
| src-0168 | [Robtex](https://www.robtex.com/) | P / F | DNS, IP e ASN | candidate; acesso: provisional | unknown |
| src-0169 | [crt.sh](https://crt.sh/) | P | Certificate Transparency | candidate; acesso: provisional | unknown |
| src-0170 | [Cert Spotter](https://sslmate.com/certspotter/) | F | Monitoramento de certificados | candidate; acesso: provisional | unknown |
| src-0171 | [CIRCL Passive DNS](https://www.circl.lu/services/passive-dns/) | R | DNS histórico | documented; acesso: documented | unknown |
| src-0172 | [CIRCL Passive SSL](https://www.circl.lu/services/passive-ssl/) | R | Certificados históricos | documented; acesso: documented | unknown |
| src-0173 | [RIPEstat](https://stat.ripe.net/) | P | ASN e roteamento | candidate; acesso: provisional | unknown |
| src-0174 | [RIPE RIS](https://www.ripe.net/analyse/internet-measurements/routing-information-service-ris/) | P | Observações BGP | candidate; acesso: provisional | unknown |
| src-0175 | [RouteViews](https://www.routeviews.org/) | P | Histórico BGP | candidate; acesso: provisional | unknown |
| src-0176 | [CAIDA Datasets](https://www.caida.org/catalog/datasets/) | P / R | Medições e topologia | candidate; acesso: provisional | unknown |
| src-0177 | [PeeringDB](https://www.peeringdb.com/) | P / G | Redes e interconexões | candidate; acesso: provisional | unknown |
| src-0178 | [IPinfo](https://ipinfo.io/) | F | ASN e geolocalização | candidate; acesso: provisional | unknown |
| src-0179 | [MaxMind GeoIP / GeoLite](https://www.maxmind.com/) | F | Geolocalização e ASN | candidate; acesso: provisional | unknown |
| src-0180 | [Tor CollecTor](https://collector.torproject.org/) | P | Histórico Tor; não indica malícia | candidate; acesso: provisional | unknown |
| src-0181 | [Tranco](https://tranco-list.eu/) | P | Popularidade; não é allowlist absoluta | candidate; acesso: provisional | unknown |
| src-0182 | [Cisco Umbrella Popularity List](https://s3-us-west-1.amazonaws.com/umbrella-static/index.html) | P / ? | Popularidade; atualização a conferir | candidate; acesso: provisional | unknown |
| src-0183 | [MISP Warninglists](https://github.com/MISP/misp-warninglists) | P | Contexto e possíveis falsos positivos | documented; acesso: provisional | unknown |
| src-0184 | [CIRCL Hashlookup](https://hashlookup.circl.lu/) | P | Arquivos conhecidos | documented; acesso: provisional | unknown |
| src-0185 | [NIST NSRL](https://www.nist.gov/itl/ssd/software-quality-group/national-software-reference-library-nsrl) | P | Referência de arquivos conhecidos | candidate; acesso: provisional | unknown |
| src-0186 | [CVE List](https://www.cve.org/) | P | Registros de vulnerabilidades | candidate; acesso: provisional | unknown |
| src-0187 | [NVD](https://nvd.nist.gov/) | P / G | Enriquecimento de vulnerabilidades | candidate; acesso: provisional | unknown |
| src-0188 | [CISA KEV](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) | P | Exploração conhecida | candidate; acesso: provisional | unknown |
| src-0189 | [FIRST EPSS](https://www.first.org/epss/) | P | Probabilidade estimada de exploração | documented; acesso: provisional | unknown |
| src-0190 | [OSV](https://osv.dev/) | P | Vulnerabilidades de software | documented; acesso: provisional | unknown |
| src-0191 | [GitHub Advisory Database](https://github.com/advisories) | P | Avisos de pacotes | candidate; acesso: provisional | unknown |
| src-0192 | [Vulnerability-Lookup](https://vulnerability.circl.lu/) | P | Correlação de vulnerabilidades | documented; acesso: provisional | unknown |
| src-0193 | [MITRE ATT&CK](https://attack.mitre.org/) | P | TTPs, grupos e software | candidate; acesso: provisional | unknown |
| src-0194 | [MISP Galaxy](https://github.com/MISP/misp-galaxy) | P | Conhecimento de ameaças | documented; acesso: provisional | unknown |
| src-0195 | [MalAPI.io](https://malapi.io/) | P | APIs Windows e comportamento | candidate; acesso: provisional | unknown |
| src-0249 | [ipdata](https://www.ipdata.co/) | F | Metadados de IP, anonimização e reputação | documented; acesso: provisional | unknown |
| src-0250 | [IP2Location](https://www.ip2location.com/) | F | Geolocalização e proxy; não implica malícia | documented; acesso: provisional | unknown |
| src-0253 | [Ransomware.live](https://www.ransomware.live/) | P / ? | Monitoramento de publicações de ransomware; disponibilidade não verificada | retrieval_failed; acesso: provisional | unknown |
| src-0267 | [Shreshta Newly Registered Domains](https://shreshtait.com/newly-registered-domains/) | F / ? | Domínios recém-registrados; registro recente não implica malícia | documented; acesso: provisional | unknown |
| src-0275 | [Exploit-DB](https://www.exploit-db.com/) | P | Exploits e vulnerabilidades; não é feed de IOCs | documented; acesso: provisional | unknown |
| src-0279 | [Have I Been Pwned](https://haveibeenpwned.com/) | F | Exposição em violações; não é feed de infraestrutura maliciosa | documented; acesso: provisional | unknown |
| src-0315 | [BDU FSTEC](https://bdu.fstec.ru/) | P | Vulnerabilidades e modelos de ameaça | retrieval_failed; acesso: provisional | unknown |
| src-0316 | [BDU FSTEC unofficial mirror](https://github.com/velvetway/bdu-fstec-mirror) | P | Espelho secundário não oficial | documented; acesso: provisional | unknown |
| src-0330 | [ipinsights Israel](https://ipinsights.io/) | F | Recorte geográfico citado; país de IP não prova malícia | retrieval_failed; acesso: provisional | unknown |

## Comunidades e canais restritos (40)

| ID | Fonte | Acesso | Escopo | Evidência | Ciclo de vida |
|---|---|---|---|---|---|
| src-0196 | [Shadowserver Network Reporting](https://www.shadowserver.org/what-we-do/network-reporting/) | G / R | Relatórios das redes elegíveis | documented; acesso: documented | unknown |
| src-0197 | [CIRCL MISP communities](https://www.circl.lu/services/misp-malware-information-sharing-platform/) | R | Compartilhamento aprovado | candidate; acesso: provisional | unknown |
| src-0198 | [FIRST communities](https://www.first.org/) | R | Cooperação entre equipes | candidate; acesso: provisional | unknown |
| src-0199 | [Trusted Introducer](https://www.trusted-introducer.org/) | R | Comunidade de resposta | candidate; acesso: provisional | unknown |
| src-0200 | [CISA AIS](https://www.cisa.gov/topics/cyber-threats-and-advisories/information-sharing/automated-indicator-sharing-ais) | R / ? | Operação e adesão a confirmar | candidate; acesso: provisional | unknown |
| src-0201 | [FS-ISAC](https://www.fsisac.com/) | R / $ | Setor financeiro | documented; acesso: provisional | unknown |
| src-0202 | [Health-ISAC](https://h-isac.org/) | R / $ | Saúde | candidate; acesso: provisional | unknown |
| src-0203 | [E-ISAC](https://www.eisac.com/) | R | Setor elétrico | candidate; acesso: provisional | unknown |
| src-0204 | [WaterISAC](https://www.waterisac.org/) | R / $ | Água e saneamento | candidate; acesso: provisional | unknown |
| src-0205 | [Downstream Natural Gas ISAC](https://www.dngisac.com/) | R | Distribuição de gás | candidate; acesso: provisional | unknown |
| src-0206 | [Oil and Natural Gas ISAC](https://ongisac.org/) | R / $ | Petróleo e gás | candidate; acesso: provisional | unknown |
| src-0207 | [Auto-ISAC](https://automotiveisac.com/) | R / $ | Automotivo | candidate; acesso: provisional | unknown |
| src-0208 | [Aviation ISAC](https://www.a-isac.com/) | R / $ | Aviação | candidate; acesso: provisional | unknown |
| src-0209 | [MTS-ISAC](https://www.mtsisac.org/) | R / $ | Transporte marítimo | candidate; acesso: provisional | unknown |
| src-0210 | [Space ISAC](https://s-isac.org/) | R / $ | Espaço | candidate; acesso: provisional | unknown |
| src-0211 | [IT-ISAC](https://www.it-isac.org/) | R / $ | Tecnologia da informação | candidate; acesso: provisional | unknown |
| src-0212 | [RH-ISAC](https://rhisac.org/) | R / $ | Varejo e hospitalidade | candidate; acesso: provisional | unknown |
| src-0213 | [Real Estate ISAC](https://www.reisac.org/) | R | Imobiliário | candidate; acesso: provisional | unknown |
| src-0214 | [REN-ISAC](https://www.ren-isac.net/) | R / $ | Educação e pesquisa | candidate; acesso: provisional | unknown |
| src-0215 | [MS-ISAC](https://www.cisecurity.org/ms-isac) | R / ? | Governos locais dos EUA; condições a confirmar | candidate; acesso: provisional | unknown |
| src-0216 | [National Defense ISAC](https://ndisac.org/) | R / $ | Indústria de defesa | candidate; acesso: provisional | unknown |
| src-0217 | [Communications ISAC / NCC](https://www.cisa.gov/resources-tools/programs/national-coordinating-center-communications) | R | Telecomunicações | candidate; acesso: provisional | unknown |
| src-0222 | [CERT Polska n6](https://cert.pl/en/n6/) | G / R | Eventos por rede elegível e feed genérico C2/phishing | documented; acesso: documented | unknown |
| src-0238 | [APWG eCrime eXchange](https://apwg.org/ecx) | R | Troca de dados de cybercrime entre membros | documented; acesso: documented | unknown |
| src-0290 | [CERT.br MISP](https://cert.br/misp/) | R | Compartilhamento MISP; elegibilidade a confirmar | documented; acesso: provisional | unknown |
| src-0291 | [SUNET CERT MISP](https://wiki.sunet.se/display/SUNETCERT/MISP) | R | Compartilhamento no ecossistema acadêmico sueco | documented; acesso: provisional | unknown |
| src-0313 | [NCCCI](https://cert.gov.ru/) | P / R | Boletins e compartilhamento nacional | retrieval_failed; acesso: provisional | unknown |
| src-0314 | [FinCERT](https://www.cbr.ru/fincert/) | R | Compartilhamento de ameaças no setor financeiro | retrieval_failed; acesso: provisional | unknown |
| src-0320 | [KISA C-TAS](https://ctas.krcert.or.kr/) | R | Compartilhamento; categorias do Cshare agrupadas nesta fonte | documented; acesso: documented | unknown |
| src-0323 | [KCTI NIS](https://www.nis.go.kr/) | R | Sistema citado; documentação e elegibilidade pendentes | candidate; acesso: provisional | unknown |
| src-0324 | [F-CTI Financial Security Institute](https://ngfcti.kfisac.or.kr/) | R | Compartilhamento setorial financeiro | retrieval_failed; acesso: provisional | unknown |
| src-0325 | [State Cyber Protection Centre](https://scpc.gov.ua/) | P / R | Alertas e compartilhamento de ameaças | documented; acesso: provisional | unknown |
| src-0326 | [MISP-UA](https://misp.cert.gov.ua/) | R / ? | Instância citada; elegibilidade e transporte a confirmar | documented; acesso: provisional | unknown |
| src-0331 | [DFSA TIP](https://www.dfsa.ae/cyber-security-and-resilience) | R | Compartilhamento de inteligência do setor financeiro | documented; acesso: provisional | unknown |
| src-0332 | [Haseen](https://xsoar.pan.dev/docs/reference/integrations/haseen-threat-intel) | R | Integração documentada com feed STIX; elegibilidade separada | documented; acesso: provisional | unknown |
| src-0339 | [TASHARUK](https://ubf.ae/en//activities/initiatives/initiatives-details/3) | R | Compartilhamento bancário com STIX/TAXII | documented; acesso: provisional | unknown |
| src-0348 | [Q-CERT](https://qcert.ncsa.gov.qa/about-q-cert) | R | Equipe nacional; dados brutos não presumidos públicos | documented; acesso: provisional | unknown |
| src-0349 | [OCERT Oman](https://cert.gov.om/) | R / ? | CERT nacional; compartilhamento sujeito a elegibilidade | retrieval_failed; acesso: provisional | unknown |
| src-0350 | [NCSC Bahrain](https://www.ncsc.gov.bh/en/services/national-csirt/sharing-threats-info.html) | R / ? | Distribuição de relatórios de ameaças | documented; acesso: provisional | unknown |
| src-0351 | [OIC-CERT](https://www.oic-cert.org/) | R | Rede internacional de coordenação | retrieval_failed; acesso: provisional | unknown |

## Artefatos de detecção (3)

| ID | Fonte | Acesso | Escopo | Evidência | Ciclo de vida |
|---|---|---|---|---|---|
| src-0121 | [Signature Base](https://github.com/Neo23x0/signature-base) | P | IOCs e regras YARA | documented; acesso: provisional | unknown |
| src-0122 | [Elastic Protections Artifacts](https://github.com/elastic/protections-artifacts) | P | Artefatos de detecção; coleção mista | documented; acesso: provisional | unknown |
| src-0261 | [SecuriteInfo ClamAV signatures](https://www.securiteinfo.com/clamav-antivirus/improve-detection-rate-of-zero-day-malwares-for-clamav-en.shtml) | F | Bases adicionais de assinaturas ClamAV; não é feed de IPs | documented; acesso: documented | unknown |

## Ferramentas e plataformas (9)

| ID | Fonte | Acesso | Escopo | Evidência | Ciclo de vida |
|---|---|---|---|---|---|
| src-0280 | [OpenCTI](https://github.com/OpenCTI-Platform/opencti) | P / $ | Plataforma de modelagem e correlação CTI | documented; acesso: provisional | unknown |
| src-0281 | [IntelOwl](https://github.com/intelowlproject/IntelOwl) | P | Orquestração de consultas e enriquecimento | documented; acesso: provisional | unknown |
| src-0282 | [Yeti](https://github.com/yeti-platform/yeti) | P | Plataforma de inteligência e artefatos forenses | documented; acesso: provisional | unknown |
| src-0293 | [CyberCodex](https://radar.offseq.com/threat/open-source-release-cybercodex-v32-autonomous-22-source-zero-cost-cti-aggregator-cisa-kev-first-epss-a3263b47f16827d4) | ? | Agregador mencionado em referência secundária; projeto primário pendente | candidate; acesso: provisional | unknown |
| src-0302 | [FinalThreatFeed](https://github.com/vuln000/FinalThreatFeed) | P | Ferramenta de agregação; não é fonte primária | documented; acesso: provisional | unknown |
| src-0303 | [Threat Intel Hub](https://github.com/HaoY-l/threat-intel-hub) | P | Hub de correlação; origem geográfica não confirmada | documented; acesso: provisional | unknown |
| src-0307 | [Security Vision TIP](https://www.securityvision.ru/products/tip/) | $ | Plataforma de ingestão e correlação | documented; acesso: provisional | unknown |
| src-0341 | [R-Vision TIP](https://rvision.ru/) | $ | Plataforma; feed próprio precisa de validação separada | retrieval_failed; acesso: provisional | unknown |
| src-0342 | [Vetric](https://www.vetric.io/blog) | $ | Infraestrutura de coleta de dados para inteligência | documented; acesso: provisional | unknown |

## Catálogos de descoberta (4)

| ID | Fonte | Acesso | Escopo | Evidência | Ciclo de vida |
|---|---|---|---|---|---|
| src-0319 | [Threat Intelligence Feeds catalog](https://github.com/kraloveckey/threat-intelligence-feeds) | P | Catálogo para descoberta; não é feed independente | documented; acesso: provisional | unknown |
| src-0336 | [Bert-JanP Open Source Threat Intel Feeds](https://github.com/Bert-JanP/Open-Source-Threat-Intel-Feeds) | P | Catálogo de descoberta | documented; acesso: provisional | unknown |
| src-0337 | [MISP Default Feeds](https://www.misp-project.org/feeds/) | P | Catálogo de feeds; sobreposição com outros diretórios | documented; acesso: provisional | unknown |
| src-0338 | [Forescout Source Catalog](https://docs.forescout.com/) | ? | Portal documental; catálogo específico a localizar | candidate; acesso: provisional | unknown |

