import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://fabiobrasileiroo.github.io',
  base: '/ingles-prova-28-11',
  integrations: [
    starlight({
      title: 'Inglês · Prova 28/11',
      defaultLocale: 'root',
      locales: { root: { label: 'Português', lang: 'pt-BR' } },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/fabiobrasileiroo/ingles-prova-28-11' }],
      customCss: ['./src/styles/custom.css'],
      head: [
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Itim&family=Nunito:wght@400;700&display=swap' } },
      ],
      sidebar: [
        { label: 'Praticar', items: [{ label: '🃏 Flashcards', slug: 'flashcards' }] },
        { label: 'Estudo', items: [{ autogenerate: { directory: 'estudo' } }] },
      ],
    }),
  ],
});
