<template>
	<v-content class="px-0 py-0">
		<v-card
			v-for="card in cards"
			:key="card.id"
			hover
			light
			class="mb-4">
			<v-card-media
				@click="onLoadCard(card.id)"
				class="white--text borderRadius"
				height="100px"
				:src="card.img"
			>
				<div class="blackOverlay"/>
				<v-container
					fill-height
					fluid>
					<v-layout fill-height>
						<v-flex
							xs12
							align-end
							flexbox>
							<span class="headline alignText white--text"><span class="primary--text">_</span>{{ card.title }}</span>
						</v-flex>
					</v-layout>
				</v-container>
			</v-card-media>
		</v-card>
	</v-content>
</template>

<script>
export default {
	computed: {
		cards() {
			return this.$store.state.cards;
		}
	},
	methods: {
		onLoadCard(id) {
			this.$router.push('/' + id);
		}
	}
};
</script>

<style scoped>
.blackOverlay {
	width: 100%;
	position: absolute;
	height: 100%;
	bottom: 0;
	z-index: 0;
	background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.80) 100%);
	background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
	background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.80) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
	}
.alignText {
	position: absolute;
	bottom: 5px;
}
.zindex-1 {
	position: relative;
	z-index: 1;
}
.borderRadius {
	border-radius: 7px !important;
}
</style>
