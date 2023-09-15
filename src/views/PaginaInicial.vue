<template>
	<v-app>
		<Bar />
		<v-main>
			<v-container>
				<v-row>
					<v-col class="descricao">
						<h1>&lt; 🖖🏻 /&gt;</h1>
						<h1>
							<span id="intro">Olá, meu nome é</span>
							<h2>Maicon de Morais</h2>
						</h1>

						<p>
							➢ Sou desenvolvedor web <br />
							➢ Focado atualmente em frontend
						</p>

						<router-link to="/Projetos">
							<v-btn dark color="#441a61" x-large rounded class="pa-7">
								Meus projetos
							</v-btn>
						</router-link>
					</v-col>
					<v-col id="img">
						<v-img id="imagem" :src="require('../assets/home_image.svg')" />
					</v-col>
				</v-row>
			</v-container>
			<Footer></Footer>
		</v-main>
	</v-app>
</template>

<script>
import Footer from "../components/RodapeDaPagina.vue";
import Bar from "../components/BarraDeAbas.vue";
export default {
	components: {
		Bar,
		Footer,
	},
};
</script>

<style>
.descricao {
	color: white;
	align-items: center;
	align-self: center;
}

#intro {
	font-size: 5vh;
	margin-bottom: 0;
}

h2 {
	font-size: 5.9vh;
}

.row {
	margin-bottom: 4vh;
	align-items: center;
}

p {
	font-size: 3vh;
}

.v-main {
	align-items: center;
}
</style>
