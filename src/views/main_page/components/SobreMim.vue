<template>
	<div class="about">
		<div>
			<v-img :src="require('@/assets/eu.png')" class="about__image"></v-img>
		</div>
		<div>
			<div class="about__title"> 🧐 Sobre mim </div>
			<span class="about__name">Maicon de Morais</span>
			<div class="about__description">
				<p class="about__presentation"> 👋 Olá, me chamo Maicon de Morais. Prazer!</p>
				<p> 👨‍💻 Há um pouco mais de 2 anos desenvolvendo e programando Full Stack com Flutter, Vue, Node e Typescript.</p>
				<p>	🎓 Graduando em Ciência da Computação pela Descomplica Faculdade Digital</p>
				<p> 💡 Maior interesse em desenvolvimento Front-end Mobile e Web, mas aberto a propostas para Back-end.</p>
				<p class="about__representative-phrase"> 🚀 “Não importa o quão devagar você vá, desde que você não pare.” - Confúcio</p>
			</div>
		</div>
	</div>
</template>

<script setup>
</script>

<style lang="sass" scoped>
.about
	display: flex
	justify-content: space-evenly
	padding: 40px 0
	p
		color: #FFFFFF80
		font-size: 18px
		font-style: normal
		font-weight: 400
		line-height: 25px
	&__presentation
		margin-bottom: 24px
	&__representative-phrase
		margin-top: 24px
	&__image
		width: 454px
	&__name
		color: #FFF
		font-size: 48px
		font-style: normal
		font-weight: 800
		line-height: normal
	&__title
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
		margin-bottom: 24px
	&__description
		margin-top: 24px

	@media (max-width: 800px)
		flex-direction: column
		justify-content: center
		padding: 0 40px
		&__title
			display: none
		&__name
			font-size: 32px
		&__image
			margin-bottom: 30px
</style>
