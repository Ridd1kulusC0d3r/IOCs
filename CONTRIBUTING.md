# Contribuir

1. Pesquise nome, domínio, fornecedor e aliases no JSON para evitar duplicação.
2. Adicione um ID estável em `data/sources.json`; não renumere os existentes.
3. Classifique natureza, acesso, origem e evidências separadamente.
4. Use `null`, `unknown` ou `provisional` quando não houver prova.
5. Registre URL oficial, data e escopo da consulta.
6. Relacione produtos da mesma organização e upstream conhecido.
7. Execute `node scripts/catalog.mjs build` e `node scripts/catalog.mjs check`.
8. Atualize o README se contagens mudarem e explique a mudança no PR.

Não adicionar formatos diferentes do mesmo feed como fontes independentes. Não publicar chaves, dados pessoais de vazamentos ou amostras. Para fonte arquivada, preservar o histórico e indicar a condição.

Em correções de preço/licença, citar página e modalidade exata. Trial não significa plano gratuito permanente. Falha HTTP isolada não prova descontinuação.
