<template>
	<v-container
	class="px-0 py-0">
		<v-card
			light
			tile
			flat>
			<v-card-media
				class="white-text"
				:src="card.img"
				height="250px" />
			<v-layout>
				<v-flex class="px-3 py-3">
					<h3 class="display-2">{{ card.title }}</h3>
					<hr class="hrClass">
					<span class=""><b> {{ card.category }} </b></span>
					<span class="primary--text"> – </span>
					<span class="date"> DEC.14, 2018, 2:54 AM </span>
				</v-flex>
			</v-layout>
			<v-layout>
				<v-flex class="px-3">
					<span class="subheading">{{ card.content }}</span>
				</v-flex>
			</v-layout>
			<v-layout>
				<v-flex class="px-0 py-3">
					<v-carousel
						:hide-delimiters="deLimitersOff"
						height="100"
					>
						<v-carousel-item
							v-for="item in items"
							:src="item.src"
							:key="item.id"/>
					</v-carousel>
				</v-flex>
			</v-layout>
			<v-layout class="px-3">
				<v-flex>
					<hr class="hrClassAuthor">
				</v-flex>
			</v-layout>
			<v-layout
				wrap
				justify-space-around
				align-center>
				<v-flex
					xs3
					class="px-3 py-3">

					<img
						class="avatarCard"
						src="http://assets.evilgeniuses.gg/uploads/2017/11/fear.png" >

				</v-flex>
				<v-flex xs9>
					<div>
						<div class="body-2">Publicado por</div>
						<div class="title primary--text">Clinton “Fear” Loomis</div>
						<div class="caption">fear@evilgeniuses.gg</div>
					</div>
				</v-flex>
			</v-layout>
		</v-card>
	</v-container>
</template>

<script>
export default {
	props: {
		id: {
			required: true,
			type: String
		}
	},
	computed: {
		card() {
			return this.$store.getters.loadedCard(this.id);
		}
	},
	data() {
		return {
			items: [
				{
					src: 'https://www.ibm.com/events/shared/img/think/home/think-hp-education.jpg',
					id: 1
				},
				{
					src: 'https://www.ibm.com/events/shared/img/think/home/think-hp-networking.jpg',
					id: 2
				},
				{
					src: 'https://www.ibm.com/events/shared/img/think/home/think-hp-entertainment.jpg',
					id: 3
				}
			],
			deLimitersOff: true,
			avatarSize: 100
		};
	},
	methods: {
		onLoadCard(id) {
			this.$router.push('/' + id);
		}
	}
};
</script>

<style scoped>
.hrClass {
  display: block;
  height: 1px;
  border: 0;
  border-top: 4px solid #e71d32;
	margin: 5px 0;
  padding: 0;
	width:10%;
}
.hrClassAuthor {
	display: block;
  height: 1px;
  border: 0;
  border-top: 2px solid #e71d32;
	margin-bottom: 10px;
  padding: 0;
	width: 30%;
}
.width10 {
	width: 50px
}
.avatarCard {
	height: 72px;
	width: 72px;
	align-items: center;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	position: relative;
	text-align: center;
	vertical-align: middle;
}

</style>
