<template>
  <v-app>
    <v-app-bar
      app
      color="rgba(134,37,210, 0.05)"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Home logo"
          class="shrink mr-2"
          contain
          src="https://image.flaticon.com/icons/png/512/1443/1443033.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
      >
        <span class="mr-2">Home</span>
      </v-btn>

      <v-btn
        text
      >
        <span class="mr-2">Sobre mim</span>
      </v-btn>

      <v-btn
        text
      >
        <span class="mr-2">Meus projetos</span>
      </v-btn>

      <v-btn
        text
      >
        <span class="mr-2">Currículo</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  #app {
    background-color: rgba(24,16,44,1);
    align-items: center;
  }

  .v-main {
    overflow: hidden;
  }
</style>