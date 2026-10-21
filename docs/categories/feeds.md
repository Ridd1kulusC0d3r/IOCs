# Feeds e listas de indicadores

[Início](../../README.md) · [Catálogo completo](../CATALOG.md)

P = pública; G = cadastro gratuito; F = freemium; $ = paga; R = restrita; H = histórica; ? = a confirmar.

`documented` confirma descoberta documental, não funcionamento de API. Classificações `provisional` não foram confirmadas individualmente. Todos os endpoints permanecem `not_tested`.

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
