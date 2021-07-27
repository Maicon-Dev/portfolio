<template>
	<div>
		<Mobile class="d-lg-none" />
		<Desktop class="d-none d-lg-block" />
	</div>
</template>

<script>
	import Mobile from "./BarMobile.vue";
	import Desktop from "./BarDesktop.vue";
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