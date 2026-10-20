# Novas fontes — 2026-10-20

33 entradas adicionais, distintas da lista anterior. Não são 33 fornecedores independentes. Natureza e nível de verificação aparecem abaixo.

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
