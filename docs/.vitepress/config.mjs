import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LinGo",
  description: "A free and open-source language acquisition tool.",
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/u/152698586?s=400&u=3b941fad62191efd07454c33b2ac2e9596500185&v=4',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/intro' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Introduction to LinGo', link: '/intro' },
          { text: 'Installing LinGo', link: '/install' },
          { text: 'Loading texts with LinGo', link: '/text' },
          { text: 'Adding new languages', link: '/adding-new-languages' },
          { text: 'Changing inteface language', link:'/changing-interface-language'},
          { text: 'Exporting your word data into flashcard systems.', link: '/exporting-to-anki' },
          { text: 'Languages supported', link: '/language-support' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hsnborn22/LinGo' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 hsnborn22'
    }
  }
})
