<template>
  <div class="skills">
    <div class="skills__title">Tecnologias e habilidades</div>

    <div class="skills__day-by-day">
      <p>Techs que uso no dia a dia</p>
      <div class="skills__list">
        <div
          :class="['skills__icons', {'skills__icons--hovering': tech.hovered}]"
          v-for="tech in techsDayByDay"
          :key="tech.title"
        >
          <v-img
            :alt="tech.title"
            :src="tech.icon"
            @mouseover="tech.hovered = true"
            @mouseleave="tech.hovered = false"
          />
          <v-tooltip
            activator="parent"
            location="bottom"
          >
            {{ tech.title }}
          </v-tooltip>
        </div>
      </div>
    </div>
    <div class="skills__above-seen">
      <p>Techs que ja trabalhei ou uso com menos frequência</p>
      <div class="skills__list">
        <div
          :class="['skills__icons', {'skills__icons--hovering': tech.hovered}]"
          v-for="tech in techsAboveSeen"
          :key="tech.title"
        >
          <v-img
            :alt="tech.title"
            :src="tech.icon"
            @mouseover="tech.hovered = true"
            @mouseleave="tech.hovered = false"
          />
          <v-tooltip
            activator="parent"
            location="bottom"
          >
            {{ tech.title }}
          </v-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const techsDayByDay = ref([
  {
    title: 'Flutter',
    icon: require('@/assets/skills/dia_a_dia/flutter.svg'),
    hovered: false
  },
  {
    title: 'Vue',
    icon: require('@/assets/skills/dia_a_dia/vue.svg'),
    hovered: false
  },
  {
    title: 'Javascript',
    icon: require('@/assets/skills/dia_a_dia/javascript.svg'),
    hovered: false
  },
  {
    title: 'Node',
    icon: require('@/assets/skills/dia_a_dia/node.svg'),
    hovered: false
  },
  {
    title: 'Typescript',
    icon: require('@/assets/skills/dia_a_dia/typescript.svg'),
    hovered: false
  },
  {
    title: 'HTML 5',
    icon: require('@/assets/skills/dia_a_dia/html5.svg'),
    hovered: false
  },
  {
    title: 'CSS 3',
    icon: require('@/assets/skills/dia_a_dia/css3.svg'),
    hovered: false
  },
  {
    title: 'Git',
    icon: require('@/assets/skills/dia_a_dia/git.svg'),
    hovered: false
  },
  {
    title: 'Github',
    icon: require('@/assets/skills/dia_a_dia/github.svg'),
    hovered: false
  },
  {
    title: 'SASS',
    icon: require('@/assets/skills/dia_a_dia/sass.svg'),
    hovered: false
  },
  {
    title: 'Insomnia',
    icon: require('@/assets/skills/dia_a_dia/insomnia.svg'),
    hovered: false
  },
  {
    title: 'Quasar',
    icon: require('@/assets/skills/dia_a_dia/quasar.svg'),
    hovered: false
  },
])
const techsAboveSeen = ref([
  {
    title: 'Vuetify',
    icon: require('@/assets/skills/above_seen/vuetify.svg'),
    hovered: false
  },
  {
    title: 'MySQL',
    icon: require('@/assets/skills/above_seen/mysql.svg'),
    hovered: false
  },
  {
    title: 'PostgreSQL',
    icon: require('@/assets/skills/above_seen/postgre.svg'),
    hovered: false
  },
  {
    title: 'AWS',
    icon: require('@/assets/skills/above_seen/aws.svg'),
    hovered: false
  }
])
</script>

<style lang="sass" scoped>
.skills
  max-width: 920px
  line-height: normal
  font-style: normal
  text-align: center
  margin: auto
  p
    color: #FFFFFF80
    font-size: 24px
    font-weight: 400
  &__list
    display: flex
    height: 94px
    align-items: center
    margin: 40px 0
    justify-content: center
  &__icons
    display: flex
    align-items: center
    width: 64px
    height: 64px
    margin: 0 10px
    &--hovering
      margin-bottom: 30px
      height: 84px
      width: 84px
      cursor: pointer
  &__title
    color: #FFF
    font-size: 48px
    font-weight: 800
    margin-bottom: 60px
  @media (max-width: 800px)
    &__list
      display: grid
      justify-items: center
      grid-column-gap: 5px
      grid-row-gap: 15px
      height: fit-content
      padding: 0 50px
      grid-template-columns: 1fr 1fr 1fr 1fr
    &__icons
      max-width: 54px
      max-height: 54px
      margin: 0
    &__title
      font-size: 32px
      margin-bottom: 20px
    p
      font-size: 18px
</style>