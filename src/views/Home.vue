<template>
	<v-app>
		<v-container>
			<v-row>
				<v-col id="descricao">
						<h1>&lt; 🖖🏻 /&gt;</h1>
						<h1>
              <span>Olá, meu nome é</span>
              <h2> Maicon de Morais </h2>
            </h1>
					
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, distinctio doloremque amet minima est modi iste dolorem expedita ad cum asperiores ratione. Eveniet assumenda iusto repellendus nisi nesciunt fuga obcaecati!</p>
				</v-col>
				<v-col id="img">
					<v-img id="imagem" :src="require('../assets/home_image.svg')" />
				</v-col>
			</v-row>
		</v-container>
		<v-footer color="rgba(134,37,210, 0.01)" dark>
      <a href="https://www.instagram.com/maicon_mor4is/" target="_blank" rel="noopener noreferrer">   
        <v-img
          alt="Instagram"
          class="shrink mr-2"
          contain
          src="https://image.flaticon.com/icons/png/512/1400/1400487.png"
          width="40"
        />
      </a>

      <a href="https://github.com/Maicon-Dev" target="_blank" rel="noopener noreferrer">
        <v-img
          alt="Github"
          class="shrink mr-2"
          contain
          src="../assets/github.png"
          width="40"
        />
      </a>

      <a href="https://www.linkedin.com/in/maicon-morais-111149189/" target="_blank" rel="noopener noreferrer">
        <v-img
				alt="Linkedin"
				class="shrink mr-2"
				contain
				src="../assets/linkedin.png"
				width="40"
			/>
      </a>
		</v-footer>
	</v-app>
</template>

<script>
	export default {};
</script>

<style>

	#descricao {
		color: white;
		align-items: center;
		align-self: center;
	}

	#img {
		align-items: center;
		align-self: center;
	}

	.v-footer {
		margin: 0 auto;
    width: 15vw;
    justify-content: space-between;
	}

  h2 {
    font-size: 7.5vh;
  }


  .row {
    margin-bottom: 4vh;
    align-items: center;
  }
</style>
