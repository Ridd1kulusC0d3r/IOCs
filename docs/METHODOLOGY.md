# Metodologia de curadoria

## Unidade de contagem

Um registro representa um produto, coleção, canal ou dataset com finalidade identificável. Não representa necessariamente um fornecedor independente. JSON, CSV, TXT e RPZ do mesmo conjunto não são fontes diferentes. Marcas adquiridas e domínios migrados preservam a identidade.

Produtos da mesma organização podem ser distintos (por exemplo, consulta pública e inteligência comercial), mas ficam relacionados por `related_ids` e `provider`. `provider=null` indica atribuição ainda não normalizada; não usamos esses valores para divulgar uma contagem de fornecedores.

## Camadas de verificação

1. **candidate:** descoberta ainda sem evidência individual suficiente.
2. **documented:** página oficial, repositório ou metadados sustentam identidade/finalidade; o escopo exato fica em `evidence`.
3. **access documented:** modelo geral de acesso sustentado por documentação.
4. **operational:** requer teste real, data, endpoint, autenticação redigida, resposta, parser e amostra de validação. Nesta edição todos permanecem `not_tested`.

`retrieval_failed` significa falha da ferramenta, não serviço encerrado. `redirect_observed` registra migração ainda não resolvida. Website acessível não comprova API operacional. `pushed_at` do GitHub não comprova atualização de todos os arquivos.

## Critérios de inclusão

- Fonte identificável, URL de origem e finalidade defensiva.
- Acesso e direitos desconhecidos são explícitos.
- Separar IOC, observável neutro, regra, documento e comunidade.
- Priorizar publicador original; agregadores declaram upstream quando conhecido.
- Preservar históricos úteis sem recomendá-los para ingestão contínua.
- Não baixar coleções de amostras para validar apenas o catálogo.

## Validação antes da produção

Para cada fonte escolhida: verificar termos; inspecionar documentação; testar pequena resposta; conferir formato, encoding e defanging; validar tipos; medir data da observação; deduplicar; correlacionar com contexto; testar falsos positivos; documentar decisão.

Não converter domínio de cloud/CDN, nó Tor, VPN ou ferramenta RMM em prova de comprometimento. Correspondência de IOC é uma pista cuja interpretação depende do contexto.

## Modelo de IOC recomendado

Separado do catálogo de fontes:

```json
{
  "type": "domain",
  "value": "example.invalid",
  "source_id": "src-0001",
  "source_record_url": null,
  "first_seen": null,
  "last_seen": null,
  "retrieved_at": null,
  "valid_until": null,
  "confidence": null,
  "confidence_scale": null,
  "campaign": null,
  "malware": null,
  "tlp": null,
  "license": null,
  "evidence": [],
  "decision": "review"
}
```

Exemplo sintético. Não preencher datas de observação com a data de download. Não transferir TLP da página do catálogo para todos os registros de uma fonte.

## Avaliar valor

Medir indicadores exclusivos após deduplicação por origem, latência, contexto disponível, taxa de falso positivo, cobertura dos PIRs e custo de operação. Três agregadores que repetem a mesma evidência não são três confirmações independentes.

## Revisão

Revisar primeiro feeds produtivos, termos comerciais, fontes arquivadas e migrações. Registrar evidências por campo. Não há monitoramento automático de disponibilidade nesta edição.
