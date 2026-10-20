import {readFileSync, writeFileSync, mkdirSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {validateCatalog, renderCatalog} from './catalog-core.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const command = process.argv[2] ?? 'check';
if (!['build', 'check'].includes(command)) throw new Error('Usage: node scripts/catalog.mjs [build|check]');
const catalog = JSON.parse(readFileSync(resolve(root, 'data/sources.json'), 'utf8'));
const stats = validateCatalog(catalog);
const generated = renderCatalog(catalog);
for (const [path, content] of Object.entries(generated)) {
  const target = resolve(root, path);
  if (command === 'build') {
    mkdirSync(dirname(target), {recursive: true});
    writeFileSync(target, content, 'utf8');
  } else if (readFileSync(target, 'utf8') !== content) {
    throw new Error('Stale generated file: ' + path + '. Run build.');
  }
}
console.log(JSON.stringify({command, ...stats, generated_files: Object.keys(generated).length}, null, 2));
