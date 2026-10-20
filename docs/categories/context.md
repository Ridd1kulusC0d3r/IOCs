# Contexto e redução de falsos positivos

[Início](../../README.md) · [Catálogo completo](../CATALOG.md)

P = pública; G = cadastro gratuito; F = freemium; $ = paga; R = restrita; H = histórica; ? = a confirmar.

`documented` confirma descoberta documental, não funcionamento de API. Classificações `provisional` não foram confirmadas individualmente. Todos os endpoints permanecem `not_tested`.

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
