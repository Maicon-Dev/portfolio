<template>
	<v-app-bar class="app-bar" color="rgba(134,37,210, 0.05)" dark>
		<v-spacer></v-spacer>
		<router-link to="#home">
			<v-btn color="#FFFFFF80">
				<span class="mr-2">Home</span>
			</v-btn>
		</router-link>
		<router-link to="#about"> 
			<v-btn color="#FFFFFF80">
				<span class="mr-2">Sobre mim</span>
			</v-btn>
		</router-link>

		<router-link to="#experience"> 
			<v-btn color="#FFFFFF80">
				<span class="mr-2">Experiências</span>
			</v-btn>
		</router-link>

		<router-link to="#projects"> 
			<v-btn color="#FFFFFF80">
				<span class="mr-2">Projetos</span>
			</v-btn>
		</router-link>

		<router-link to="#testimony">
			<v-btn color="#FFFFFF80">
				<span class="mr-2">Depoimentos</span>
			</v-btn>
		</router-link>
	</v-app-bar>
</template>

<script setup>
</script>

<style lang="sass" scoped>
</style>