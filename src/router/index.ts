import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import HomeView from '@/views/HomeView.vue';
import ProjectView from '@/views/ProjectView.vue';
import ServiceView from '@/views/ServiceView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/project/:id",
    name: "project",
    component: ProjectView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/service",
    name: "service",
    component: ServiceView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
