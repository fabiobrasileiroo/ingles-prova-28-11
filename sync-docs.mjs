// Gera as páginas do site a partir dos .md da raiz (fonte única de verdade).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const pages = {
  '00-cronograma.md': ['cronograma', 1],
  '01-guia.md': ['guia', 2],
  '02-exercicios.md': ['exercicios', 3],
  'gabarito.md': ['gabarito', 4],
  '03-oral.md': ['oral', 5],
  'vocabulario.md': ['vocabulario', 7],
  'progresso.md': ['progresso', 8],
};

mkdirSync('src/content/docs/estudo', { recursive: true });
for (const [file, [slug, order]] of Object.entries(pages)) {
  const [first, ...rest] = readFileSync(file, 'utf8').split('\n');
  const title = first.replace(/^#\s*/, '').replaceAll('"', '\\"');
  const body = rest.join('\n')
    .replaceAll('`gabarito.md`', '[gabarito](../gabarito/)')
    .replaceAll('`progresso.md`', '[progresso](../progresso/)');
  writeFileSync(`src/content/docs/estudo/${slug}.md`, `---\ntitle: "${title}"\nsidebar:\n  order: ${order}\n---\n${body}`);
}
