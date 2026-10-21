# Novas fontes — expansões acumuladas

131 entradas adicionais acumuladas, distintas da seleção inicial. Não representam necessariamente fornecedores independentes. Natureza e nível de verificação aparecem abaixo.

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
| src-0274 | [xfeeds](https://zenodo.org/records/23163156) | P | Pipeline de indicadores; identidade e alegações pendentes | retrieval_failed; acesso: provisional | unknown |
| src-0275 | [Exploit-DB](https://www.exploit-db.com/) | P | Exploits e vulnerabilidades; não é feed de IOCs | documented; acesso: provisional | unknown |
| src-0276 | [Meta Threat Research](https://github.com/facebook/threat-research) | P | Indicadores publicados em pesquisas da Meta | documented; acesso: provisional | unknown |
| src-0277 | [Threatray Threat Research](https://github.com/threatray/threat-research) | P | Artefatos e indicadores de pesquisa | documented; acesso: provisional | unknown |
| src-0278 | [Drosera Threat Intel](https://github.com/AfterPacket/drosera-threat-intel) | P | Artefatos de detecção e inteligência | documented; acesso: provisional | unknown |
| src-0279 | [Have I Been Pwned](https://haveibeenpwned.com/) | F | Exposição em violações; não é feed de infraestrutura maliciosa | documented; acesso: provisional | unknown |
| src-0280 | [OpenCTI](https://github.com/OpenCTI-Platform/opencti) | P / $ | Plataforma de modelagem e correlação CTI | documented; acesso: provisional | unknown |
| src-0281 | [IntelOwl](https://github.com/intelowlproject/IntelOwl) | P | Orquestração de consultas e enriquecimento | documented; acesso: provisional | unknown |
| src-0282 | [Yeti](https://github.com/yeti-platform/yeti) | P | Plataforma de inteligência e artefatos forenses | documented; acesso: provisional | unknown |
| src-0283 | [Adversary Hunter](https://github.com/cybersheepdog/Adversary-Hunter) | P | Descoberta de infraestrutura C2 | documented; acesso: provisional | unknown |
| src-0284 | [Infinitum-IT IOAs](https://github.com/Infinitum-IT/IOAs) | P | Indicadores e artefatos de ataques | documented; acesso: provisional | unknown |
| src-0285 | [Nextron IOCs](https://github.com/NextronSystems/iocs) | P | Indicadores por campanha e pesquisa | documented; acesso: provisional | unknown |
| src-0286 | [Spydisec Threat Intel](https://github.com/spydisec/spydithreatintel) | P | Listas de indicadores; proveniência a revisar | documented; acesso: provisional | unknown |
| src-0287 | [CronUp Malware IOCs](https://github.com/CronUp/Malware-IOCs) | P | Coleção para pesquisa retrospectiva; atualidade a conferir | documented; acesso: provisional | unknown |
| src-0288 | [Wiz Research IOCs](https://github.com/wiz-sec-public/wiz-research-iocs) | P | Pesquisas sobre cloud e cadeia de suprimentos | documented; acesso: provisional | unknown |
| src-0289 | [Fed0gaT](https://github.com/Tagoletta/Fed0gaT) | P | Agregação de indicadores; não presumir independência | documented; acesso: provisional | unknown |
| src-0290 | [CERT.br MISP](https://cert.br/misp/) | R | Compartilhamento MISP; elegibilidade a confirmar | documented; acesso: provisional | unknown |
| src-0291 | [SUNET CERT MISP](https://wiki.sunet.se/display/SUNETCERT/MISP) | R | Compartilhamento no ecossistema acadêmico sueco | documented; acesso: provisional | unknown |
| src-0292 | [RiskIQ Community / PassiveTotal (legado)](https://www.riskiq.com/community/) | H / ? | Referência legada; não pressupor disponibilidade da edição comunitária | retrieval_failed; acesso: provisional | unknown |
| src-0293 | [CyberCodex](https://radar.offseq.com/threat/open-source-release-cybercodex-v32-autonomous-22-source-zero-cost-cti-aggregator-cisa-kev-first-epss-a3263b47f16827d4) | ? | Agregador mencionado em referência secundária; projeto primário pendente | candidate; acesso: provisional | unknown |
| src-0294 | [QiAnXin TI](https://ti.qianxin.com/) | F / $ | Portal de inteligência e consultas | retrieval_failed; acesso: provisional | unknown |
| src-0295 | [360 Threat Intelligence](https://ti.360.net/) | F / $ | Inteligência e consulta de indicadores | candidate; acesso: provisional | unknown |
| src-0296 | [Tencent TIX](https://tix.qq.com/) | F / $ | Plataforma de inteligência Tencent | candidate; acesso: provisional | unknown |
| src-0297 | [VenusEye](https://www.venuseye.com.cn/) | F / $ | Inteligência e pesquisas de ameaças | retrieval_failed; acesso: provisional | unknown |
| src-0298 | [DBAPPSecurity TI](https://ti.dbappsecurity.com.cn/) | F / $ | Consulta de indicadores e inteligência | documented; acesso: provisional | unknown |
| src-0299 | [Sangfor Security Cloud Brain](https://www.sangfor.com/) | ? | Oferta citada; endpoint específico e acesso pendentes | candidate; acesso: provisional | unknown |
| src-0300 | [caidongyun IOCs](https://github.com/caidongyun/iocs) | P | Indicadores estruturados; país citado no material, não sede confirmada | documented; acesso: provisional | unknown |
| src-0301 | [BlackShield](https://github.com/WinterGate-IC/blackshield-threat-intel) | P | Agregador; blocos por país não demonstram malícia | documented; acesso: provisional | unknown |
| src-0302 | [FinalThreatFeed](https://github.com/vuln000/FinalThreatFeed) | P | Ferramenta de agregação; não é fonte primária | documented; acesso: provisional | unknown |
| src-0303 | [Threat Intel Hub](https://github.com/HaoY-l/threat-intel-hub) | P | Hub de correlação; origem geográfica não confirmada | documented; acesso: provisional | unknown |
| src-0304 | [Knownsec 404](https://www.knownsec.com/) | P | Pesquisa técnica; identificar publicações com indicadores | candidate; acesso: provisional | unknown |
| src-0305 | [Chaitin XTI](https://rivers.chaitin.cn/) | F / $ | Inteligência e pesquisas; detalhes comerciais pendentes | candidate; acesso: provisional | unknown |
| src-0306 | [PT Fusion](https://www.anti-malware.ru/products/pt-fusion) | F / $ | Produto citado por fonte secundária; validar oferta oficial | candidate; acesso: provisional | unknown |
| src-0307 | [Security Vision TIP](https://www.securityvision.ru/products/tip/) | $ | Plataforma de ingestão e correlação | documented; acesso: provisional | unknown |
| src-0308 | [CTT Threat Feed](https://www.anti-malware.ru/analytics/Market_Analysis/Threat-Intelligence) | ? | Referência de descoberta; publicador e endpoint a identificar | retrieval_failed; acesso: provisional | unknown |
| src-0309 | [AMTIP](https://amtip.ru/) | F / $ | Portal de inteligência; API e termos a confirmar | documented; acesso: provisional | unknown |
| src-0310 | [Garda Threat Intelligence](https://www.anti-malware.ru/products/garda-threat-intelligence) | $ | Oferta comercial citada; referência oficial pendente | candidate; acesso: provisional | unknown |
| src-0311 | [BI.ZONE Threat Intelligence](https://bi.zone/) | F / $ | Inteligência comercial; escopo gratuito a confirmar | candidate; acesso: provisional | unknown |
| src-0312 | [F6 Threat Intelligence](https://www.f6.ru/) | $ | Oferta comercial de inteligência | candidate; acesso: provisional | unknown |
| src-0313 | [NCCCI](https://cert.gov.ru/) | P / R | Boletins e compartilhamento nacional | retrieval_failed; acesso: provisional | unknown |
| src-0314 | [FinCERT](https://www.cbr.ru/fincert/) | R | Compartilhamento de ameaças no setor financeiro | retrieval_failed; acesso: provisional | unknown |
| src-0315 | [BDU FSTEC](https://bdu.fstec.ru/) | P | Vulnerabilidades e modelos de ameaça | retrieval_failed; acesso: provisional | unknown |
| src-0316 | [BDU FSTEC unofficial mirror](https://github.com/velvetway/bdu-fstec-mirror) | P | Espelho secundário não oficial | documented; acesso: provisional | unknown |
| src-0317 | [Kaspersky ICS CERT](https://ics-cert.kaspersky.ru/) | P / ? | Pesquisa e inteligência ICS/OT; condições de feeds separadas | documented; acesso: provisional | unknown |
| src-0318 | [X-TI](https://x-ti.ru/) | F | Portal de consulta; acesso e operador a confirmar | retrieval_failed; acesso: provisional | unknown |
| src-0319 | [Threat Intelligence Feeds catalog](https://github.com/kraloveckey/threat-intelligence-feeds) | P | Catálogo para descoberta; não é feed independente | documented; acesso: provisional | unknown |
| src-0320 | [KISA C-TAS](https://ctas.krcert.or.kr/) | R | Compartilhamento; categorias do Cshare agrupadas nesta fonte | documented; acesso: documented | unknown |
| src-0321 | [AhnLab TIP API](https://www.ahnlab.com/jp/contents/content-center/36269) | $ | Referência de oferta de inteligência via API | documented; acesso: provisional | unknown |
| src-0322 | [SecuLetter ConTI](https://seculetter.com/) | $ | Inteligência sobre ameaças em arquivos e e-mail | documented; acesso: provisional | unknown |
| src-0323 | [KCTI NIS](https://www.nis.go.kr/) | R | Sistema citado; documentação e elegibilidade pendentes | candidate; acesso: provisional | unknown |
| src-0324 | [F-CTI Financial Security Institute](https://ngfcti.kfisac.or.kr/) | R | Compartilhamento setorial financeiro | retrieval_failed; acesso: provisional | unknown |
| src-0325 | [State Cyber Protection Centre](https://scpc.gov.ua/) | P / R | Alertas e compartilhamento de ameaças | documented; acesso: provisional | unknown |
| src-0326 | [MISP-UA](https://misp.cert.gov.ua/) | R / ? | Instância citada; elegibilidade e transporte a confirmar | documented; acesso: provisional | unknown |
| src-0327 | [Ukraine Cyber Operations](https://github.com/curated-intel/Ukraine-Cyber-Operations) | P | Curadoria comunitária sobre o conflito; cobertura não indica sede | documented; acesso: provisional | unknown |
| src-0328 | [Orange Russia Ukraine IOCs](https://github.com/Orange-Cyberdefense/russia-ukraine_IOCs) | P / H | Coleção contextual do conflito; atualidade a conferir | documented; acesso: provisional | unknown |
| src-0329 | [CTIChef](https://ctichef.com/) | F / $ | Cobertura ucraniana alegada no material; país do operador desconhecido | retrieval_failed; acesso: provisional | unknown |
| src-0330 | [ipinsights Israel](https://ipinsights.io/) | F | Recorte geográfico citado; país de IP não prova malícia | retrieval_failed; acesso: provisional | unknown |
| src-0331 | [DFSA TIP](https://www.dfsa.ae/cyber-security-and-resilience) | R | Compartilhamento de inteligência do setor financeiro | documented; acesso: provisional | unknown |
| src-0332 | [Haseen](https://xsoar.pan.dev/docs/reference/integrations/haseen-threat-intel) | R | Integração documentada com feed STIX; elegibilidade separada | documented; acesso: provisional | unknown |
| src-0333 | [Saudi CERT](https://cert.gov.sa/) | P / ? | Alertas públicos; API comunitária não identificada | retrieval_failed; acesso: provisional | unknown |
| src-0334 | [GITA TI](https://cgr.ir/) | $ | Oferta citada; capacidades técnicas e operador a verificar | candidate; acesso: provisional | unknown |
| src-0335 | [Certfa Lab](https://radar.certfa.com/) | P | Pesquisa sobre ameaças iranianas; cobertura não indica sede | documented; acesso: provisional | unknown |
| src-0336 | [Bert-JanP Open Source Threat Intel Feeds](https://github.com/Bert-JanP/Open-Source-Threat-Intel-Feeds) | P | Catálogo de descoberta | documented; acesso: provisional | unknown |
| src-0337 | [MISP Default Feeds](https://www.misp-project.org/feeds/) | P | Catálogo de feeds; sobreposição com outros diretórios | documented; acesso: provisional | unknown |
| src-0338 | [Forescout Source Catalog](https://docs.forescout.com/) | ? | Portal documental; catálogo específico a localizar | candidate; acesso: provisional | unknown |
| src-0339 | [TASHARUK](https://ubf.ae/en//activities/initiatives/initiatives-details/3) | R | Compartilhamento bancário com STIX/TAXII | documented; acesso: provisional | unknown |
| src-0340 | [Solar TI Feeds](https://docs.data.rt-solar.ru/) | $ | Documentação de fornecimento e integração de indicadores | candidate; acesso: provisional | unknown |
| src-0341 | [R-Vision TIP](https://rvision.ru/) | $ | Plataforma; feed próprio precisa de validação separada | retrieval_failed; acesso: provisional | unknown |
| src-0342 | [Vetric](https://www.vetric.io/blog) | $ | Infraestrutura de coleta de dados para inteligência | documented; acesso: provisional | unknown |
| src-0343 | [OryxLabs DARK EYE](https://edgegroup.ae/news/edge-unveils-dark-eye-dark-web-monitoring-and-brand-protection-platform) | $ | Monitoramento de exposição e proteção de marca | documented; acesso: provisional | unknown |
| src-0344 | [Zensec Network IoC Service](https://zensec.ae/network-indicator-of-compromise-service/) | $ | Serviço gerenciado de análise de telemetria; não é feed público | documented; acesso: provisional | unknown |
| src-0345 | [CyberSilo ThreatSearch](https://tip.cybersilo.tech/mainpage) | ? | Portal de pesquisa; vínculo geográfico saudita alegado não confirmado | documented; acesso: provisional | unknown |
| src-0346 | [SKYLINE CTI](https://alskyline.com/keywords/threat-intelligence-dark-web-brand-monitoring-saudi-arabia) | $ | Serviço comercial; formato do feed a confirmar | documented; acesso: provisional | unknown |
| src-0347 | [Turkcell Bozok](https://www.turkcell.com.tr/kurumsal/dijital-is-servisleri/siber-guvenlik/turkcell-bozok-siber-tehdit-istihbarat) | $ | Inteligência de ameaças | documented; acesso: provisional | unknown |
| src-0348 | [Q-CERT](https://qcert.ncsa.gov.qa/about-q-cert) | R | Equipe nacional; dados brutos não presumidos públicos | documented; acesso: provisional | unknown |
| src-0349 | [OCERT Oman](https://cert.gov.om/) | R / ? | CERT nacional; compartilhamento sujeito a elegibilidade | retrieval_failed; acesso: provisional | unknown |
| src-0350 | [NCSC Bahrain](https://www.ncsc.gov.bh/en/services/national-csirt/sharing-threats-info.html) | R / ? | Distribuição de relatórios de ameaças | documented; acesso: provisional | unknown |
| src-0351 | [OIC-CERT](https://www.oic-cert.org/) | R | Rede internacional de coordenação | retrieval_failed; acesso: provisional | unknown |
