import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "site",
  title: "Vasak Group",
  description: "En Vasak Group, nos especializamos en crear soluciones de software personalizadas que se adaptan a las necesidades únicas de tu negocio. Desde aplicaciones web y móviles hasta plataformas escalables, utilizamos las metodologías ágiles más actuales para garantizar resultados rápidos y efectivos.",
  head: [
    ["meta", { name: "keywords", content: "aplicaciones, desarrollo, apps, software, programas, paginas, pagina, webs, web, design, sistemas, economico, developer, lynx, software, desing, diseño, it, hardware, empresas, pymes, chicas, seo, maps, playstore, goole maps, posicionamiento, vasak, group, grupo" }],
    ["meta", { name: "description", content: "Vasak Group es una empresa que busca contribuir con el crecimiento tecnologico y economico de otras empresas PYMES y emprendimientos." }],
    ["meta", { name: "msvalidate.01", content: "50FC0630FC73B0D400248B28FF40E60A" }],
    ["meta", { name: "author", content: "Vasak Group" }],
    ["meta", { name: "copyright", content: "Vasak Group" }],
    ["meta", { name: "robots", content: "index,follow" }],
    ["meta", { name: "googlebot", content: "index,follow" }],
    ["meta", { "http-equiv": "Content-Type", content: "text/html; ISO-8859-1" }],
    ["meta", { name: "DC.Language", scheme: "RFC1766", content: "Spanish" }],
    ["meta", { name: "AUTHOR", content: "Vasak Group" }],
    ["meta", { name: "REPLY-TO", content: "info@vasak.net.ar" }],
    ["meta", { name: "Resource-type", content: "Document" }],
    ["link", { rev: "made", href: "mailto:info@vasak.net.ar" }],

    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#f6bb31" }],
    ["meta", { name: "msapplication-TileColor", content: "#f6bb31" }],
    ["meta", { name: "theme-color", content: "#f6bb31" }]
  ],
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
