import { createRouter, createWebHistory } from 'vue-router';
import ContactView from '../views/ContactView.vue';
import HomeView from '../views/HomeView.vue';
import ProjectView from '../views/ProjectView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/project/:id',
			name: 'project',
			component: ProjectView,
		},
		{
			path: '/contact',
			name: 'contact',
			component: ContactView,
		},
	],
});

export default router;
