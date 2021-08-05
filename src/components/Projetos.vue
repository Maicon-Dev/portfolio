<template>
	<v-container>
		<h2>Meus projetos</h2>
		<p>
			Aqui você poderá acessar todos meus projetos do Github <br />
			Poderá acessar a demo ou clicar no ícone do github para acessar o
			repositório
		</p>

		<v-slide-group v-model="model" class="pa-4" show-arrows dark>
			<v-slide-item v-for="projeto in repositorio.data" :key="projeto">
				<v-card color="rgb(68, 26, 97)" class="ma-4" max-width="300">
					<v-img
						class="white--text align-end"
						height="173px"
						src="https://ilovecode.com.br/wp-content/uploads/2019/01/cec44feb-0b1b-4fe3-936d-67a51a1fe28e.png"
					>
					</v-img>
					<v-card-title>{{ projeto.name }}</v-card-title>

					<v-card-text>
						<div v-if="projeto.description != null">{{ projeto.description }}</div>
						<div v-else> Ainda não possui uma descrição. </div>
					</v-card-text>
					<v-card-actions>
						<v-btn v-if="projeto.homepage != null" :href="projeto.homepage" color="purple" rounded> Acessar demo </v-btn>
						<v-btn v-else disabled color="purple" rounded> Não possui demo </v-btn>
						<v-btn :href="projeto.svn_url" icon>
							<v-icon> mdi-github </v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-slide-item>
		</v-slide-group>

		<router-link to="/">
			<v-btn dark color="#441a61" x-large rounded class="pa-7 mt-10">
				<v-icon dark left> mdi-arrow-left </v-icon>
				Voltar
			</v-btn>
		</router-link>
	</v-container>
</template>

<script>
	const axios = require("axios").default;
	export default {
		data: () => ({
			model: null,
			repositorio: null,
		}),
		mounted() {
			axios
				.get("https://api.github.com/users/Maicon-Dev/repos")
				.then((response) => (this.repositorio = response));
		},
	};
</script>

<style>
	.v-card {
		display: grid;
	}
</style>