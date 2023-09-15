<template>
	<v-app>
		<v-main class="pt-0">
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
	.v-main {
		max-height: 100%;
		color: rgb(255, 255, 255);
		background-color: rgba(24, 16, 44, 1);
		align-items: center;
		height: 100%;
	}
	a {
		text-decoration: none;
	}

	/* width */
	::-webkit-scrollbar {
		width: 7px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: rgba(24, 16, 44, 1);
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgba(136, 0, 248, 0.2);
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: rgba(136, 0, 248, 1);
	}
</style>