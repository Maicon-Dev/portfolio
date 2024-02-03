<template>
  <v-app class="app">
    <BarraDeAbas class="app__bar" />
    <v-main class="app__body">
      <PaginaInicial id="home"/>
      <div class="line"></div>
      <SobreMim id="about"/>
      <div class="line"></div>
      <MinhasExperiencias id="experience"/>
      <div class="line"></div>
      <MinhaTrajetoria />
      <div class="line"></div>
      <MeusProjetos id="projects"/>
      <EmDepoimento id="testimony"/>
    </v-main>
  </v-app>
</template>

<script setup>
import BarraDeAbas from "@/components/BarraDeAbas.vue";
import PaginaInicial from './components/PaginaInicial.vue'
import SobreMim from './components/SobreMim.vue'
import MinhasExperiencias from './components/MinhasExperiencias.vue'
import EmDepoimento from "./components/EmDepoimento.vue";
import MinhaTrajetoria from './components/MinhaTrajetoria.vue';
import MeusProjetos from "./components/MeusProjetos.vue";
</script>

<style lang="sass" scoped>
.app
  html, body
    scroll-behavior: smooth
  &__bar
    position: fixed !important
  // MOBILE
  @media (max-width: 800px)
    &__bar
      display: none
.line
  margin: 40px 0
  border-top: 2px solid #7B4AE233
</style>
