<template>
	<div v-if="displaySize < 1070">
		<Mobile />
	</div>

	<div v-else>
		<Desktop />
	</div>
</template>

<script>
import Mobile from './BarMobile.vue'
import Desktop from './BarDesktop.vue'
export default {
	data: () => ( {
    displaySize: window.innerWidth,
  }),

	components: {
		Mobile,
		Desktop
	},
}
</script>