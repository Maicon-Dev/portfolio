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

				<ProjetoDesktop :repositorio="repositorio" />
				<ProjetoMobile :repositorio="repositorio"/>

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
	import ProjetoDesktop from "@/components/ProjetosListDesktop";
	import ProjetoMobile from '@/components/ProjetosListMobile'
	const axios = require("axios").default;

	export default {
		components: {
			Bar,
			ProjetoDesktop,
			ProjetoMobile
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
