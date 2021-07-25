<template>
  <v-container>
    <Bar />
    <Building/>
  </v-container>
</template>

<script>
import Building from '@/components/EmConstrucao'
import Bar from '@/components/Bar'
export default {
  components: {
    Building,
    Bar
  }
}
</script>