// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue';

import type { Theme } from 'vitepress';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
  faGithub,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

import './style.css';
import {
  faStar,
  faUserTie,
  faHandshakeAngle,
  faSun,
  faMoon,
  faDesktop,
  faQrcode,
  faShareNodes
} from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

library.add(
  faFacebookF,
  faLinkedin,
  faInstagram,
  faGithub,
  faStar,
  faUserTie,
  faHandshakeAngle,
  faSun,
  faMoon,
  faDesktop,
  faWhatsapp,
  faQrcode,
  faShareNodes,
  faImage
);

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {}
} satisfies Theme;
