<template>
	<v-app>
		<Bar />
		<v-main>
			<Projeto />
		</v-main>
	</v-app>
</template>

<script>
	import Bar from "@/components/Bar";
	import Projeto from "@/components/Projetos.vue"

	export default {
		components: {
			Bar,
			Projeto,
		},

	};
</script>
