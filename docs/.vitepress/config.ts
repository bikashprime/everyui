import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'EveryUI',
  description: 'Simple UI for everyone.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/' },
    ],
    sidebar: {
      '/guide/': [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Installation', link: '/guide/installation' },
        { text: 'First App', link: '/guide/first-app' },
        { text: 'Styling', link: '/guide/styling' },
        { text: 'Accessibility', link: '/guide/accessibility' },
      ],
      '/components/': [
        { text: 'Overview', link: '/components/' },
        { text: 'All Components', link: '/components/all-components' },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/everyui/everyui' }],
  },
});
