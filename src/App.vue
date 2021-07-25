<template>
	<v-app>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
	export default {
		name: "App",

		data: () => ({
			//
		}),
	};
</script>

<style>
	#app {
    color: rgb(255, 255, 255);
		background-color: rgba(24, 16, 44, 1);
		align-items: center;
	}

	a {
		text-decoration: none;
	}
</style>