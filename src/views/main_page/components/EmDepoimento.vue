<template>
  <div class="testimony">
    <h1> Em depoimento </h1>
    <div class="testimony__list">
      <CustomContainer secondary class="testimony__item">
        <template #header>
          <v-img
            class="testimony__icon"
            :src="require('@/assets/quotes.svg')"
          />
        </template>
        <template #body>
          <p>
            Maicon é um verdadeiro talento na área de desenvolvimento, e seu nível de conhecimento e habilidades vai muito além do que se espera de um desenvolvedor júnior. Ele é um profissional dedicado, proativo, analítico e extremamente minucioso ao trabalhar no desenvolvimento do front end dos projetos. Seu domínio sólido das tecnologias Flutter, HTML, CSS e Vue JS é notável, e ele tem um talento especial para negociar demandas com eficiência, sempre disposto a colaborar com os colegas. Trabalhar com Maicon foi uma experiência incrível. Ele é verdadeiramente um dos melhores desenvolvedores com quem já tive o prazer de trabalhar.
          </p>
        </template>
        <template #footer>
          <div class="testimony__footer">
            <div class="testimony__witness">
              <h3>Maryanna Araújo</h3>
              <span>Product Designer Pleno | UX/UI Designer | Ilustradora</span>
            </div>
              <a href="https://www.linkedin.com/in/maryannaaraujo/" target="_blank" class="contact">
                <v-img alt="Github" contain :src="require('@/assets/github.svg')" width="40" />
              </a>
          </div>
        </template>
      </CustomContainer>
      <CustomContainer primary class="testimony__item">
        <template #header>
          <v-img
            class="testimony__icon"
            :src="require('@/assets/quotes.svg')"
          />
        </template>
        <template #body>
          <p>
            Tive o privilégio de trabalhar com o Maicon na Cupom Verde por mais de dois anos, e durante esse período, pude observar de perto seu notável talento e dedicação. Maicon é um desenvolvedor excepcional, sempre disposto a enfrentar desafios. Durante o período em que trabalhamos juntos, Maicon lidou com uma série de tecnologias de back-end, front-end e mobile e sempre buscava aprimorar seu conhecimento. Seu talento no front-end e sua habilidade na resolução de problemas são dignos de destaque. Sem dúvidas, ele fará uma contribuição significativa em qualquer organização em que venha a trabalhar.
          </p>
        </template>
        <template #footer>
          <div class="testimony__footer">
            <div class="testimony__witness">
              <h3>Publio Silva</h3>
              <span>Engenheiro de Software - Full Stack Sênior</span>
            </div>
            <a href="https://www.linkedin.com/in/publio-blenilio/" target="_blank" class="contact">
              <v-img alt="Github" contain :src="require('@/assets/github.svg')" width="40" />
            </a>
          </div>
        </template>
      </CustomContainer>
      <CustomContainer secondary class="testimony__item">
        <template #header>
          <v-img
            class="testimony__icon"
            :src="require('@/assets/quotes.svg')"
          />
        </template>
        <template #body>
          <p>
            Tenho o prazer de recomendar o Maicon como um profissional altamente promissor na área de desenvolvimento. Durante seu tempo aqui no Cupom verde, ele demonstrou um comprometimento notável com a aprendizagem e uma abordagem aplicada para resolver problemas, contribuindo de forma significativa para nossos projetos. Sua capacidade de aprender novos conceitos e linguagens rapidamente e sua ética de trabalho exemplar fazem dele um profissional valioso da equipe e um ativo promissor para qualquer equipe de desenvolvimento.
          </p>
        </template>
        <template #footer>
          <div class="testimony__footer">
            <div class="testimony__witness">
              <h3>Arthur Muller Mendes </h3>
              <span>Tester QA</span>
            </div>
            <a href="https://www.linkedin.com/in/arthur-muller-mendes-76a121202/" target="_blank" class="contact">
              <v-img alt="Github" contain :src="require('@/assets/github.svg')" />
            </a>
          </div>
        </template>
      </CustomContainer>
    </div>
  </div>
</template>

<script setup>
import CustomContainer from '@/components/CustomContainer.vue';
</script>

<style lang="sass" scoped>
.testimony
  width: 100%
  padding: 20px 40px
  line-height: normal
  font-style: normal
  p
    color: #FFFFFF80
    font-size: 16px
    font-weight: 400
    text-align: justify
  h3
    color: #FFF
    font-size: 20px
    font-weight: 700
  span
    color: #7B4AE280
    font-size: 16px
    font-weight: 700
  &__list
    display: flex
    justify-content: space-between
  &__item
    display: flex
    flex-direction: column
    width: 30%
    margin: 40px 0 0 0
  &__icon
    width: 32px
    height: 32px
    margin-bottom: 20px
  &__footer
    display: flex
    justify-content: space-between
    margin-top: 20px
    bottom: 0

  @media (max-width: 800px)
    &__list
      flex-direction: column
    &__item
      width: 100%
    &__footer
      align-items: center
    &__witness
      font-size: 14px
      margin-right: 20px
    a
      width: 30px
</style>