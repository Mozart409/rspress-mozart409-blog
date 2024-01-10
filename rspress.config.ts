import * as path from 'path'
import { defineConfig } from 'rspress/config'

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
  builderConfig: {
    html: {
      tags: [
        // Configure Umami
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://umami-production-7f3d.up.railway.app/script.js',
            'data-website-id': '545636d4-85f2-4b0f-8160-8a3a2f8044db'
          }
        }
      ]
    }
  },
  markdown: {
    showLineNumbers: true
  },
  globalStyles: path.join(__dirname, 'styles/index.css')
})
