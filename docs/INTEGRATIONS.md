# Guia de integração: catálogo → evidência → detecção

Este projeto cataloga fontes. Não é um feed STIX/TAXII e não publica IOCs ativos.

## MISP

1. Escolha fontes com formato compatível e acesso permitido.
2. Obtenha o endpoint no publicador; não use a homepage do catálogo como feed.
3. Configure chave e formato conforme [guia de feeds do CIRCL](https://www.circl.lu/doc/misp/managing-feeds/).
4. Comece por cache/correlação, sem importação indiscriminada.
5. Preserve atribuição, tags de origem, TLP informado e datas.
6. Use warninglists e expiração apropriada ao tipo de indicador.

[Feeds padrão MISP](https://www.misp-project.org/feeds/) são ponto de descoberta, não garantia de disponibilidade.

## OpenCTI

Confira o [catálogo oficial de conectores](https://github.com/OpenCTI-Platform/connectors). A existência de um conector não garante assinatura ou API disponíveis. Configure credenciais fora do Git, limites, labels e granularidade. Diferencie observáveis de indicadores e preserve `external_references` para a evidência original.

Não importar um CVE como IP malicioso nem uma lista Tor como conjunto de C2s.

## Wazuh / SIEM

1. Normalize uma pequena seleção de fontes autorizadas.
2. Correlacione com logs pertinentes: DNS, proxy, firewall e hashes de endpoint.
3. Gere alerta enriquecido antes de habilitar resposta automática.
4. Meça falsos positivos, recência e impacto de infraestrutura compartilhada.
5. Mantenha revisão e reversão de bloqueios.

A integração específica depende da versão e do formato do publicador. Este repositório não entrega um conector Wazuh testado.

## Quatro exercícios guiados

| Caso | Fontes candidatas | Evidência a preservar | Decisão |
|---|---|---|---|
| URL suspeita | URLhaus, OpenPhish, urlscan | URL exata, redirects, timestamp, contexto | Investigar antes de bloquear domínio inteiro |
| Possível C2 | ThreatFox, C2IntelFeeds, GreyNoise | IP:porta, last_seen, fingerprint, telemetria local | Separar ferramenta legítima de uso adversário |
| Hash em endpoint | MalwareBazaar, VirusTotal, Hashlookup | Hash, família, assinatura, prevalência | Confirmar papel do arquivo |
| Domínio recém-observado | DNS passivo, crt.sh, Tranco | Relações temporais, certificado, resolução | Domínio novo/popular não determina malícia |

## Dados sensíveis

Enviar arquivo ou URL a uma sandbox pública pode torná-los visíveis a terceiros. Antes da submissão, confira o modo de privacidade do serviço e se o artefato contém informação interna. Esta curadoria não submete arquivos nem URLs automaticamente.
