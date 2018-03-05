import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		cards: [
			{ img: 'https://www.ibm.com/events/shared/img/think/home/think-hp-education.jpg', id: '1', title: 'Education', category: 'Technology', content: 'IBM Cloud Private is your cloud platform: a transformative private cloud platform behind your firewall, with a focus on enterprise needs' },
			{ img: 'https://www.ibm.com/events/shared/img/think/home/think-hp-networking.jpg', id: '2', title: 'Networking', category: 'Sports', content: 'IBM Cloud Garages are intentionally designed to simulate creativity, learning, and transformation using the IBM Cloud Garage Method. See for yourself how the bold energy, agile techniques and sharp focus of startups can impact your business with true innovation at one of our worldwide Garage locations.' },
			{ img: 'https://www.ibm.com/events/shared/img/think/home/think-hp-entertainment.jpg', id: '3', title: 'Dota 2', category: 'Microservices', content: 'Clinton “Fear” Loomis is widely known and respected as “Old Man Fear”, with an unrivaled presence in the competitive scene of Dota since 2006. Retiring after over a decade of regular competition and now in his new but familiar role as Coach, Fear will look to closely monitor and mold this group into a true powerhouse which will represent EG on the global stage.' }
		]

	},
	mutations: {
	},
	actions: {},
	getters: {
		loadedCard(state) {
			return (cardId) => {
				return state.cards.find((card) => {
					return card.id === cardId;
				});
			};
		}
	}
});
