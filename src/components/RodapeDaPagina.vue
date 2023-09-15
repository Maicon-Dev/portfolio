<template>
  <v-footer color="rgba(134,37,210, 0.01)" dark>
    <a href="https://www.instagram.com/maicon_mor4is/" target="_blank" rel="noopener noreferrer" class="contact">
      <v-img alt="Instagram" contain src="https://image.flaticon.com/icons/png/512/1400/1400487.png" width="40px" />
    </a>

    <a href="https://github.com/Maicon-Dev" target="_blank" rel="noopener noreferrer" class="contact">
      <v-img alt="Github" contain src="../assets/github.png" width="40" />
    </a>

    <a href="https://www.linkedin.com/in/maicon-morais-111149189/" target="_blank" rel="noopener noreferrer"
      class="contact">
      <v-img alt="Linkedin" contain src="../assets/linkedin.png" width="40" />
    </a>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
.v-footer {
  margin: 0 auto;
  width: 50%;
  justify-content: center;
}

a.contact {
  margin: 0 3.5%
}
</style>