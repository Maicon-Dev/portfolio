<template>
	<v-app>
		<Bar />
		<v-main>
			<v-container>
				<v-row>
          <v-col
          >
            <h1>Maicon de Morais</h1>
            <ul>
              <li>Imergindo cada vez mais no universo front-end</li>
              <li>Comprometido</li>
              <li>Curioso e sempre disposto a aprender</li>
              <li>Experiências com: HTML, CSS, Vue e suas ferramentas como vuetify, vuex, vue router</li>
              <li>Experiências com Javascript e seus derivados ainda básicas</li>
            </ul>
          </v-col>
          <v-col
          >
            <v-img
              src="../assets/perfil.jpeg"
              width="400"
              class="imagem"
            ></v-img>
          </v-col>
				</v-row>
					<v-btn dark color="#441a61" x-large rounded class="pa-7">
						<v-icon dark left> mdi-arrow-left </v-icon>
						Voltar
					</v-btn>
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
</style>
