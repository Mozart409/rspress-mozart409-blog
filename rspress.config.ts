import * as path from 'path'
import { defineConfig } from 'rspress/config'
import { pluginShiki } from '@rspress/plugin-shiki';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Mozart409 Blog',
  description: 'My personal blog',
  icon: '/favicon.svg',
  logo: {
    light: '/favicon.svg',
    dark: '/favicon.svg'
  },
  themeConfig: {
    lastUpdated: true,
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
    search: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/mozart409/'
      },
      {
        icon: 'twitter',
        mode: 'link',
        content: 'https://twitter.com/marc_van_sax'
      }
    ]
  },
  markdown: {
    showLineNumbers: true
  },
  plugins:[pluginShiki()]
})
