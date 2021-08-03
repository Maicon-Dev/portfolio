<template>
	<v-app>
		<Bar />
		<v-main>
			<v-container>
				<h2>Meus projetos</h2>
				<p>
					Aqui você poderá acessar todos meus projetos do Github <br />
					Poderá acessar a demo ou clicar no ícone do github para acessar o
					repositório
				</p>

				<v-slide-group
					v-model="model"
					class="pa-4"
					active-class="success"
					show-arrows
					dark
				>
					<v-slide-item v-for="n in 4" :key="n" v-slot="{ active, toggle }">
						<v-card
							:color="active ? undefined : 'purple'"
							class="ma-4"
							height="340"
							width="300"
							@click="toggle"
						>
							<v-row class="fill-height" align="center" justify="center">
								Conteudo
							</v-row>
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
		</v-main>
	</v-app>
</template>

<script>
	import Bar from "@/components/Bar";
	const axios = require("axios").default;

	export default {
		components: {
			Bar,
		},

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
	#group {
		background: rgba(24, 16, 44, 0);
		display: flex;
		justify-content: start;
		height: 100%;
	}

	h1 {
		text-align: start;
	}
</style>