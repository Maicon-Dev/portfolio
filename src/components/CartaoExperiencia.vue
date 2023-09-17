<template>
  <div :class="`card card--${typeOfCard}`">
    <v-img
      class="card__image"
      :src="icone"
    ></v-img>
    <p class="card__tempo"> {{ tempo }}</p>
    <p class="card__funcao"> {{ funcao }}</p>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
    tempo: String,
    funcao: String,
    icone: String,
    typeOfCard: String
  })
</script>

<style lang="sass" scoped>
.card
  border-radius: 16px
  display: flex
  flex-direction: column
  justify-content: space-evenly
  padding: 30px 20px
  width: 246px
  &--solid
    background: #7B4AE21A
  &--outlined
    background: transparent
    border: 1px solid #7B4AE280
  &__image
    width: 120px
    align-self: center
  &__tempo
    color: #FFF
    text-align: center
    font-size: 14px
    font-style: normal
    font-weight: 400
    line-height: normal
  &__funcao
    color: #FFF
    text-align: center
    font-size: 26px
    font-style: normal
    font-weight: 700
    line-height: normal
</style>