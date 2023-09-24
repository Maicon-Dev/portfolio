<template>
  <div class="journey">
    <h1>Trajetória até aqui</h1>
    <div class="journey__container">
      <div class="journey__professional">
        <h2>Área profissional</h2>
        <div class="journey__list">
          <CustomContainer class="journey__item" v-for="item in professionalJourney" :key="item" secondary>
            <template #header>
              <h3>{{ item.title }}</h3>
            </template>
            <template #body>
              <p>{{ item.description }}</p>
            </template>
            <template #footer>
              <span>{{ item.periodo }}</span>
            </template>
          </CustomContainer>
        </div>
      </div>
      <div class="journey__academic">
        <h2>Área acadêmica</h2>
        <div class="journey__list">
          <CustomContainer class="journey__item" v-for="item in academicJourney" :key="item" secondary>
            <template #header>
              <h3>{{ item.title }}</h3>
            </template>
            <template #body>
              <p>{{ item.description }}</p>
            </template>
            <template #footer>
              <span>{{ item.periodo }}</span>
            </template>
          </CustomContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import CustomContainer from '@/components/CustomContainer.vue'

  const professionalJourney = [
    {
      title: 'Desenvolvedor de Software Jr - Cupom Verde S/A',
      description: 'Em 2023, retomei minha busca por conhecimento ao ingressar no Descomplica, após um período de pausa necessário para priorizar minha saúde mental e dedicar-me ao trabalho. No Descomplica, encontrei a plataforma ideal para equilibrar meus estudos universitários, conteúdos adicionais, meu compromisso profissional e a manutenção da minha saúde. Essa escolha refletiu minha decisão de dar continuidade à minha jornada educacional de uma forma mais flexível e adaptada às minhas necessidades atuais, em vez de retornar à Universidade Federal do Ceará, onde havia iniciado anteriormente.',
      periodo: 'Jul de 2022 - Set de 2023'
    },
    {
      title: 'Estágio Full Stack - Cupom Verde S/A',
      description: 'Durante o estágio, desenvolvi habilidades em Flutter, Vue.js, Quasar Framework, Node.js, e TypeScript. Colaborei com a equipe de design para implementar protótipos do Figma, desenvolvi aplicativos móveis responsivos em Flutter, criei testes unitários (incluindo testes visuais e de comunicação com API) e realizei testes em Jest no backend par garantir a qualidade do código. Ao longo do estágio, aprendi com colegas mais experientes, aprimorei meu código e compreendi as melhores práticas de desenvolvimento.',
      periodo: 'Set de 2021 - Jul de 2022'
    }
  ]

  const academicJourney = [
    {
      title: 'Descomplica Faculdade Digital',
      description: 'Em 2023, retomei minha busca por conhecimento ao ingressar no Descomplica para cursar Ciência da Computação, após um período de pausa necessário para priorizar minha saúde mental e dedicar-me ao trabalho. No Descomplica, encontrei a plataforma ideal para equilibrar meus estudos universitários, conteúdos adicionais, meu compromisso profissional e a manutenção da minha saúde. Essa escolha refletiu minha decisão de dar continuidade à minha jornada educacional de uma forma mais flexível e adaptada às minhas necessidades atuais, em vez de retornar à Universidade Federal do Ceará, onde havia iniciado anteriormente.',
      periodo: '2023 - momento'
    },
    {
      title: 'Universidade Federal do Ceará - UFC',
      description: 'Iniciei minha jornada na Universidade Federal do Ceará em 2018 onde cursei Engenharia de Software, cheio de entusiasmo e determinação para conquistar meu diploma. Avancei firmemente ao longo dos anos acadêmicos, superando desafios e construindo um caminho sólido em direção à conclusão do curso. No entanto, a chegada da pandemia trouxe consigo mudanças drásticas, desafiando minha capacidade de adaptação e, infelizmente, afetando minha trajetória acadêmica. Com apenas um ano restante para a graduação e enfrentando problemas pessoais que demandavam minha atenção, tomei a difícil decisão de pausar meus estudos e direcionar meu foco para o mundo do trabalho, adiando temporariamente o sonho da graduação universitária.',
      periodo: '2018 - 2020'
    }
  ]
</script>

<style lang="sass" scoped>
.journey
  text-align: center
  color: #FFF
  font-style: normal
  line-height: normal
  h1
    color: #FFF
    font-size: 48px
    font-weight: 800
    margin: 60px 0 60px 0
  h2
    color: #FFF
    font-size: 32px
    font-weight: 800
    margin-bottom: 60px
  h3
    font-size: 20px
    font-weight: 700
  p
    color: #FFFFFF80
    font-size: 16px
    font-weight: 400
    text-align: justify
  span
    display: flex
    justify-content: flex-end
    color: #7B4AE2
    font-size: 18px
    font-weight: 400
  &__container
    display: flex
    justify-content: space-evenly
  &__item
    text-align: start
    padding: 30px
    margin-bottom: 60px
    height: 335px
    width: 600px
    display: flex
    flex-direction: column
    justify-content: space-between

  @media (max-width: 800px)
    text-align: start
    h1
      font-size: 32px
    h2
      font-size: 24px
    h2, h1
      padding: 30px
      margin-bottom: 0
    &__container
      display: flex
      flex-direction: column
    &__professional, &__academic
      width: 100vw
    &__list
      display: flex
      overflow-x: auto
    &__item
      min-width: 80vw
      height: 650px
      margin-left: 30px
      &:last-child
        margin-right: 30px
    ::-webkit-scrollbar
      display: none
</style>
