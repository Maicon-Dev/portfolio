<template>
	<v-container class="home">
		<v-row class="home__content">
			<v-col class="home__descricao">
				<div class="home__hello"> 🖖🏻 Saudações! </div>
				<span class="home__meu-nome">Maicon de Morais</span>
        <span class="home__cargo">
          Desenvolvedor Full Stack - Jr
        </span>
				<div class="home__social-media">
          <a href="https://www.linkedin.com/in/maicon-morais-111149189/" target="_blank" rel="noopener noreferrer"
            class="contact">
            <v-img alt="Linkedin" contain :src="require('@/assets/linkedin.svg')" width="40" />
          </a>
          <a href="https://github.com/Maicon-Dev" target="_blank" rel="noopener noreferrer" class="contact">
            <v-img alt="Github" contain :src="require('@/assets/github.svg')" width="40" />
          </a>
        </div>
			</v-col>
			<v-col>
				<v-img class="main__imagem" :src="require('@/assets/meu_avatar.svg')" />
			</v-col>
      
			<v-col class="home__information">
        <v-btn
          class="home_button--download-cv"
          variant="text"
          append-icon="mdi-open-in-new"
          href="maicon_morais_cv.pdf"
          target="_blank"
        >
          Curriculo
        </v-btn>
				<v-btn
          class="home__button--whatsapp-chat text-none"
          prepend-icon="mdi-whatsapp "
          variant="outlined"
          no-caps
          @click="openChat"
        >
          Vamos conversar
        </v-btn>
			</v-col>
		</v-row>

    <div class="home__work">
      <CartaoExperiencia class="home__card" type-of-card="outlined" tempo="11 meses" funcao="Estagiário" :icone="require('@/assets/trainee.svg')"></CartaoExperiencia>
      <CartaoExperiencia class="home__card" type-of-card="solid" tempo="+ 2 anos com" funcao="Desenvolvimento" :icone="require('@/assets/project-icon.svg')"></CartaoExperiencia>
      <CartaoExperiencia class="home__card" type-of-card="outlined" tempo="1 ano e 3 meses" funcao="Dev Júnior" :icone="require('@/assets/code-icon.svg')"></CartaoExperiencia>
    </div>
    <div class="home__capabilities-preferences">
      <CapacidadesEPreferencias></CapacidadesEPreferencias>
    </div>
	</v-container>
</template>

<script setup>
import CartaoExperiencia from '@/components/CartaoExperiencia.vue'
import CapacidadesEPreferencias from '@/components/CapacidadesEPreferencias'
function openChat () {
  window.open("https://wa.me/5588988525985")
}
</script>

<style lang="sass" scoped>
.home
  &__content
    display: flex
    justify-content: space-between
    align-content: center
    flex-wrap: wrap
  
  &__work
    display: flex
    justify-content: center
  &__card
    margin: 32px
  
  &__descricao
    color: white
    align-items: center
    align-self: center
    display: flex
    flex-direction: column
    align-items: flex-start
  &__hello
    background: #7B4AE21A
    color: #7B4AE2
    text-align: center
    font-size: 20px
    font-style: normal
    font-weight: 700
    line-height: normal
    border-radius: 16px
    width: 160px
    height: 45px
    display: flex
    align-items: center
    justify-content: center
  &__meu-nome
    font-size: 52px
    font-style: normal
    font-weight: 800
    line-height: normal
  
  &__cargo
    color: #FFFFFF80
    margin-bottom: 16px
  &__social-media
    display: flex
    a
      margin-right: 10px
  &__information
    display: flex
    align-items: flex-end
    justify-content: center
    flex-direction: column
    color: #7B4AE280
    
  &__button--whatsapp-chat
    border-radius: 16px
    margin-top: 5px
    border: 1px solid #7B4AE280
  &__capabilities-preferences
    display: flex
    justify-content: center

  @media (max-width: 800px)
    &__meu-nome
      font-size: 32px
    &__content
      flex-direction: column
      justify-content: center
    &__information
      align-items: center
    &__descricao
      align-items: center
    &__work
      flex-direction: column
      align-items: center
    &__card
      margin: 16px

</style>
