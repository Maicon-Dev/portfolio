<template>
  <div class="container">
    <div class="container__item">
      <span class="container__subtitle"> Desenvolvedor </span>
      <span class="container__title"> Full Stack </span>
    </div>
    <div class="container__item">
      <span class="container__subtitle"> Senioridade </span>
      <span class="container__title"> Júnior </span>
    </div>
    <div class="container__item">
      <span class="container__subtitle"> Maior afinidade </span>
      <span class="container__title"> Mobile / Web </span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.container
  display: flex
  justify-content: space-between
  padding: 27px 27px
  background: #7B4AE21A
  width: 900px
  max-width: 900px
  border-radius: 16px
  &__item
    display: flex
    flex-direction: column
    justify-content: center
    color: #7B4AE2
    text-align: center
    line-height: normal
    font-style: normal
  &__subtitle
    font-size: 16px
    font-weight: 400
  &__title
    font-size: 32px
    font-weight: 700

  @media (max-width: 800px)
    flex-direction: column
    max-width: fit-content
    &__item
      margin: 10px 0
</style>