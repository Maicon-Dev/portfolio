<template>
	<v-app>
		<Bar />
		<v-main>
			<v-container>
				<v-row align="center" justify="center">
					<v-col cols="12" sm="6" md="8" align-self="center">
						<h1>Maicon de Morais</h1>
						<ul>
							<li>Imergindo cada vez mais no universo front-end</li>
							<li>Comprometido</li>
							<li>Curioso e sempre disposto a aprender</li>
							<li>
								Experiências com: HTML, CSS, Vue e suas ferramentas como
								vuetify, vuex, vue router
							</li>
							<li>
								Apesar de ter experiência com Javascript e derivados (Vue por
								exemplo) ainda estou solidificando o conhecimento
							</li>
						</ul>
					</v-col>
					<v-col cols="6" md="3" align-self="center">
						<v-img
							src="../assets/perfil.jpeg"
							width="400"
							class="imagem"
						></v-img>
					</v-col>
				</v-row>
        <router-link to="/">
          <v-btn dark color="#441a61" x-large rounded class="pa-7">
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
	export default {
		components: {
			Bar,
		},
	};
</script>

<style>
	.imagem {
		border-radius: 30px;
		margin: 0;
		align-items: center;
	}

	ul {
		font-size: 1.5em;
	}
</style>
