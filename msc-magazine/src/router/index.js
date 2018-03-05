import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Noticia from '../components/Noticia';
import Edicoes from '../components/Edicoes';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/:id',
			name: 'Noticia',
			props: true,
			component: Noticia
		},
		{
			path: '/Edicoes',
			name: 'Edicoes',
			component: Edicoes
		}
	],
	mode: 'history'
});
