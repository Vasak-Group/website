import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "site",

  title: "Vasak Group",
  description: "En Vasak Group, nos especializamos en crear soluciones de software personalizadas que se adaptan a las necesidades únicas de tu negocio. Desde aplicaciones web y móviles hasta plataformas escalables, utilizamos las metodologías ágiles más actuales para garantizar resultados rápidos y efectivos.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Nosotros', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vasak-Group' },
      { icon: 'instagram', link: 'https://www.instagram.com/vasakgroup/' },
      { icon: 'facebook-f', link: 'https://facebook.com/vasakgroup' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/vasakgroup/' },
    ]
  }
})
