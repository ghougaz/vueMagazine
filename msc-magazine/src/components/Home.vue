<template>
	<v-container>
		<v-layout
			v-for="card in cards"
			:key="card.id"
			wrap
			class="pb-3">

			<v-flex
				xs12
				sm6
				offset-sm3
				@click="onLoadCard(card.id)">
				<v-card
					light
					class="borderRadius"
					hover
					v-if="show"
				>
					<v-card-media
						class="white-text overflowVisible"
						:src="card.img"
						height="400px"
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
									<span class="display-2 alignText white--text"><span class="primary--text">_</span>{{ card.title }}</span>
									<span class="btn btn--floating arrowButtonPositon primary radiusWidth">
										<v-icon class="headline">arrow_forward</v-icon>
									</span>
								</v-flex>
							</v-layout>
						</v-container>
					</v-card-media>
					<v-card-title>
						<div>
							<span class="grey--text body-1"><b>{{ card.category }}</b></span>
							<span class="primary--text"> – </span>
							<span class="body-1">MSC Team colaboration</span><br>
							<div class="width10"><hr></div>
							<div class="caption">{{ card.content }}</div>
						</div>
					</v-card-title>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	computed: {
		cards() {
			return this.$store.state.cards;
		}
	},
	data() {
		return {
			show: true
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
div hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 2px solid #e71d32;
		margin: 0.5em 0;
    padding: 0;
}
.arrowButtonPositon {
	bottom: 0px;
	transform: translateY(60%);
	right: 0px;
	position: absolute !important;
}
.overflowVisible {
	overflow: visible;
}
.upperCase {
	text-transform: uppercase;
}
.width10 {
	width: 10%
}
.alignText {
	position: absolute;
	bottom: 30px;
}
.borderRadius {
	border-radius: 5px !important;
}
.radiusWidth {
	width: 40px;
	height: 40px
}
.blackOverlay {
	width: 100%;
	position: absolute;
	height: 100%;
	bottom: 0;
	z-index: 0;
	background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%);
	background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
	background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
	}
</style>
