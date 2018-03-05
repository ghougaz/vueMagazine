<template>

	<v-app dark>
		<v-toolbar
			fixed
			app
			dark
			scroll-off-screen
			:clipped-left="clipped"
			class="primary"
		>

			<v-toolbar-title v-if="showSelf">
				<router-link
					to="/"
					tag="span"
					style="cursor: pointer"
					class="headline"> <b>{{ title }}</b> </router-link>
			</v-toolbar-title>
			<v-spacer/>
			<v-btn icon>
				<v-icon>search</v-icon>
			</v-btn>
			<v-btn
				icon
				@click.stop.native="rightDrawer = !rightDrawer ">
				<v-icon>menu</v-icon>
			</v-btn>
		</v-toolbar>
		<v-content>
			<v-container class="px-0 py-0">
				<v-layout
				align-center>
					<router-view/>
				</v-layout>
			</v-container>
		</v-content>
		<v-navigation-drawer
			light
			temporary
			:right="right"
			v-model="rightDrawer"
			fixed
		>
			<v-expansion-panel light>
				<v-btn
					light
					icon
					@click.stop.native="rightDrawer = !rightDrawer "
				>
					<v-icon class="display-1 primary--text">menu</v-icon>
				</v-btn>
				<v-expansion-panel-content
					light
					class="borderTop0">
					<div slot="header"><span class="title">Indice</span><hr class="hrClass"></div>
					<v-card light>
						<v-card-text>
							<indice />
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
				<v-expansion-panel-content
				light>
					<div slot="header"><span class="title">Edições</span><hr class="hrClass"></div>
					<v-card light>
						<v-card-text>
							<p> empty </p>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
				<v-expansion-panel-content
				light>
					<div slot="header"><span class="title">Políticas de uso</span><hr class="hrClass"></div>
					<v-card light>
						<v-card-text>
							<p>Polítias de uso</p>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
				<v-expansion-panel-content
				light>
					<div slot="header"><span class="title">Sobre</span><hr class="hrClass"></div>
					<v-card light>
						<v-card-text>
							<p>Sobre</p>
						</v-card-text>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-navigation-drawer>
	</v-app>

</template>

<script>
import Indice from './components/Indices.vue';
export default {
	components: {

		'indice': Indice
	},
	data() {
		return {
			showSelf: true,
			clipped: false,
			fixed: false,
			right: true,
			rightDrawer: false,
			title: '_MSC'
		};
	}
};
</script>

<style scoped>
div hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 2px solid #e71d32;
		margin: 0;
    padding: 0;
		width:10%;
}
</style>
