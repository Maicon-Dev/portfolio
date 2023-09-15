<template>
	<div>
		<Mobile class="d-lg-none" />
		<Desktop class="d-none d-lg-block" />
	</div>
</template>

<script>
	import Mobile from "./AbaMenor.vue";
	import Desktop from "./AbaMaior.vue";
	export default {
		data: () => ({
			displaySize: window.innerWidth,
		}),

		components: {
			Mobile,
			Desktop,
		},
	};
</script>