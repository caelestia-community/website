import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Caelestia Dots",
  description: "Official documentation for the Caelestia Dots organization",
  appearance: 'dark',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Core', link: '/core/shell' },
      { text: 'Desktop', link: '/desktop/qt' },
      { text: 'Terminal', link: '/terminal/fish' },
      { text: 'Apps', link: '/apps/firefox' }
    ],

    sidebar: [
      {
        text: 'Core Components',
        items: [
          { text: 'Shell', link: '/core/shell' },
          { text: 'CLI', link: '/core/cli' },
          { text: 'Caelestia Theme', link: '/core/caelestia' }
        ]
      },
      {
        text: 'Desktop Environment',
        items: [
          { text: 'QT Theme', link: '/desktop/qt' },
          { text: 'GTK Theme', link: '/desktop/gtk' },
          { text: 'Slurp', link: '/desktop/slurp' },
          { text: 'Fuzzel', link: '/desktop/fuzzel' }
        ]
      },
      {
        text: 'Terminal',
        items: [
          { text: 'Fish Shell', link: '/terminal/fish' },
          { text: 'Foot Terminal', link: '/terminal/foot' },
          { text: 'Btop', link: '/terminal/btop' }
        ]
      },
      {
        text: 'Applications',
        items: [
          { text: 'Firefox', link: '/apps/firefox' },
          { text: 'VSCode', link: '/apps/vscode' },
          { text: 'Discord', link: '/apps/discord' },
          { text: 'Spicetify', link: '/apps/spicetify' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/caelestia-dots' }
    ]
  }
})
