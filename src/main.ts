import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
  faWhatsapp,
  faSafari
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faArrowUp,
  faCartShopping,
  faEarthAmericas,
  faBars,
  faHandshakeAngle,
  faStar,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons';

import App from '@/App.vue';
import router from '@/router/index';
import i18n from './i18n/index';
import '../index.css';

const app = createApp(App);

library.add(
  faFacebookF,
  faLinkedin,
  faInstagram,
  faWhatsapp,
  faEnvelope,
  faArrowUp,
  faCartShopping,
  faEarthAmericas,
  faSafari,
  faBars,
  faHandshakeAngle,
  faStar,
  faUserTie,
);

// @ts-ignore
app.use(router);
// @ts-ignore
app.use(i18n());

app.mount('#app');
