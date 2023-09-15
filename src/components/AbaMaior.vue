<template>
	<v-app-bar hide-on-scroll app color="rgba(134,37,210, 0.05)" dark>
		<div class="d-flex align-center">
			<v-img
				alt="Home logo"
				class="shrink mr-2"
				contain
				src="https://image.flaticon.com/icons/png/512/1443/1443033.png"
				transition="scale-transition"
				width="40"
			/>
		</div>

		<v-spacer></v-spacer>

		<router-link to="/">
			<v-btn text>
				<span class="mr-2">Home</span>
			</v-btn>
		</router-link>

    <router-link to="/about"> 
      <v-btn text>
        <span class="mr-2">Sobre mim</span>
      </v-btn>
    </router-link>

		<router-link to="/Projetos"> 
			<v-btn text>
				<span class="mr-2">Meus projetos</span>
			</v-btn>
		</router-link>

		<router-link to="/Curriculo">
			<v-btn text>
				<span class="mr-2">Currículo</span>
			</v-btn>
		</router-link>
	</v-app-bar>
</template>

<script>
export default {
  
}
</script>