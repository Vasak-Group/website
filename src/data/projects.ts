const proyects: Array<any> = [
  {
    id: 1,
    name: 'QR Generator',
    client: 0,
    show: true,
    description:
      'Sitio web para poder crear codigos QR personalizados de una forma simple, sencilla y completamente gratuita. El sitio web esta desarrollado en Angular. Permite descargar el QR en formato PNG, JPEG, SVG y WEBP.',
    url: 'https://qrgenerator.vasak.net.ar/',
    image: '/img/projects/qrgenerator.png',
    type: 'WebApp'
  },
  {
    id: 2,
    name: 'Google Maps CEO GS Indios Kilmes',
    client: 6,
    show: true,
    description:
      'Pocicionamiento de Google Maps para el CEO del Grupo Scout Indios Kilmes. Precarga de información brindada por el grupo.',
    url: 'https://www.google.com/maps/place/Grupo+Scout+Indios+Kilmes/@-34.7670573,-58.2681642,17z/data=!3m1!4b1!4m5!3m4!1s0x95a32fc7b1a7df97:0x32a52f70c43c2ee9!8m2!3d-34.7670573!4d-58.2659755',
    image: '/img/projects/indioskilmes.png',
    type: 'Google Maps CEO'
  },
  {
    id: 3,
    name: 'WhatsApp Link Generator',
    client: 0,
    show: true,
    description:
      'Sitio web para poder crear links personalizados para WhatsaApp de forma simple, sencilla y completamente gratuita. El sitio web esta desarrollado en Angular.',
    url: 'https://wppgenerator.vasak.net.ar/',
    image: '/img/projects/wppgenerator.png',
    type: 'WebApp'
  },
  {
    id: 4,
    name: 'Ser Scout Web',
    client: 3,
    show: true,
    description:
      'Blog Oficial de SerScout. Un sitio estatico montado GitLab Pages para poder publicar contenido de manera dinamica. Disminuyendo los costos de mantenimiento.',
    url: 'https://serscout.com.ar/',
    image: '/img/projects/serscout.png',
    type: 'Web'
  },
  {
    id: 5,
    name: 'IC-ResiLab Web',
    client: 2,
    show: true,
    description:
      'Sitio web para un importante laboratorio de Argentina. Sitio estatico y con pocicionamento CEO para mejorar la posicionamiento de la pagina.',
    url: 'https://resilab.com.ar/',
    image: '/img/projects/resilab.png',
    type: 'Web'
  },
  {
    id: 6,
    name: 'Lynx QR Cam',
    client: 0,
    show: false,
    description:
      'Aplicacion mobile para poder utilizar la camapara del celular como lector de QR. Aplicacion simple sencilla y eficiente.',
    url: 'https://play.google.com/store/apps/details?id=com.lynxqrcam',
    image: '/img/projects/qrcam.png',
    type: 'App'
  },
  {
    id: 7,
    name: 'PatoJAD Web',
    client: 1,
    show: true,
    description:
      'Blog de PatoJAD creador de contenido sobre tecnologia y GNU/Linux. Sitio estatico montado GitLab Pages para poder publicar contenido de manera dinamica. Disminuyendo los costos de mantenimiento.',
    url: 'https://patojad.com.ar/',
    image: '/img/projects/patojad.png',
    type: 'Web'
  },
  {
    id: 8,
    name: 'VasakOS Web',
    client: 5,
    show: true,
    description:
      'Sito Web Oficial de vasakOS la distribucion de GNU/Linux. Sitio estatico montado GitLab Pages para poder publicar contenido de manera dinamica. Disminuyendo los costos de mantenimiento.',
    url: 'https://os.vasak.net.ar/',
    image: '/img/projects/lynxos.png',
    type: 'Web'
  },
  {
    id: 9,
    name: 'Legion Linux Gamers Web',
    client: 4,
    show: true,
    description:
      'Sito Web Oficial de LLG la comunidad gamer hispanohablante numero uno que focaliza en el suo de GNU/Linux. Sitio estatico montado GitLab Pages para poder publicar contenido de manera dinamica. Disminuyendo los costos de mantenimiento.',
    url: 'https://legionlinuxgamers.ga/',
    image: '/img/projects/legionlinuxgamers.png',
    type: 'Web'
  },
  {
    id: 10,
    name: 'Servidores Red Linux Click',
    client: 7,
    show: true,
    description:
      'Puesta en marcha de los servidores de RedLinuxClick. Instalacion de servicios, Segurizacion, Mantenimiento de datos y servicios. Soporte de 2 nivel sobre problematicas en servidor, PHP y Wowonder.',
    url: 'https://redlinuxclick.com/',
    image: '/img/projects/redlinuxclick.png',
    type: 'Web'
  },
  {
    id: 11,
    name: 'INTI Games Production Web',
    client: 8,
    show: true,
    description:
      'Diseño y desarrollo del sitio web de la marca. Solución desarrollada a medida del cliente basado en las necesidades y proyecciones del estudio de videojuegos. Servicio de mantenimiento del sitio.',
    url: 'https://intigamesproductions.com/',
    image: '/img/projects/inti.png',
    type: 'Web'
  },
  {
    id: 12,
    name: 'INTI Games Production WebMail',
    client: 8,
    show: true,
    description:
      'Se instala, gestiona y configura Webmail y Mail Server Profesional para INTI Games',
    url: 'https://webmail.intigamesproductions.com/',
    image: '/img/projects/inti_webmail.png',
    type: 'Web'
  },
  {
    id: 13,
    name: 'Waibi Website',
    client: 9,
    show: true,
    description:
      'Diseño y desarrollo del sitio web de la marca. Solución desarrollada a medida del cliente basado en las necesidades y proyecciones del estudio de ventas de sitios web. Servicio de mantenimiento del sitio.',
    url: 'https://waibi.es/',
    image: '/img/projects/waibi.png',
    type: 'Web'
  },
  {
    id: 14,
    name: 'Segurizacion del sitio',
    client: 11,
    show: false,
    description: 'Certificados SSL y verificacion del Formulario.',
    url: 'https://www.companiamadrilena.com/',
    image: '',
    type: 'Web'
  },
  {
    id: 15,
    name: 'Rediseño del DiverEnglish',
    client: 10,
    show: true,
    description:
      'Se realiza un rediseño completo del sitio web. Se actualiza el contenido y se mejora la experiencia de usuario. Se optimiza el posicionamiento SEO. Se realiza la migracion del sitio web a una nueva version de Wordpress.',
    url: 'https://diverenglish.com/',
    image: 'https://i.postimg.cc/Cw1xL9G6/diverenglish.webp',
    type: 'Web'
  },
  {
    id: 16,
    name: 'Rediseño de GoFormacion',
    client: 10,
    show: true,
    description:
      'Se realizan correcciones esteticas del sitio web. Se actualiza el contenido y se mejora la experiencia de usuario. Se optimiza el posicionamiento SEO. Se realiza la migracion del sitio web a una nueva version de Wordpress.',
    url: 'https://goformacion.es/',
    image: 'https://i.postimg.cc/m2PJK39V/goformacion.webp',
    type: 'Web'
  },
  {
    id: 17,
    name: 'Bahia Freijoo',
    client: 12,
    show: false,
    description:
      'Se realiza un rediseño completo del sitio web. Se actualiza el contenido y se mejora la experiencia de usuario. Se optimiza el posicionamiento SEO. Se realiza la migracion del sitio web a una nueva version de Wordpress.',
    url: 'http://www.bahiafeijoo.es/',
    image: '',
    type: 'Web'
  },
  {
    id: 18,
    name: 'Divisapol',
    client: 12,
    show: false,
    description:
      'Se realiza una landing page para la empresa Divisapol. Se actualiza el contenido y se mejora la experiencia de usuario. Se optimiza el posicionamiento SEO.',
    url: 'http://divisapol.es/',
    image: '',
    type: 'Web'
  }
];

export default proyects;
