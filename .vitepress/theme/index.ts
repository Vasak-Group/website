// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'

import type { Theme } from 'vitepress'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

import './style.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

library.add(
  faFacebookF,
  faLinkedin,
  faInstagram,
  faGithub,
  faEnvelope
);

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
