<template>
  <div :class="['container', { 'container--primary': primary, 'container--secondary': secondary }]">
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  primary: {
    type: Boolean,
    default: false
  },
  secondary: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="sass" scoped>
.container
  border-radius: 16px
  padding: 30px
  &--primary
    background: #7B4AE21A
  &--secondary
    background: transparent
    border: 1px solid #7B4AE280
 

</style>