<script setup>
  //import { useI18n } from 'vue-i18n'
  //const { t } = useI18n()
  //const languages = [
  //  { title: 'English', value: 'en' },
   // { title: '日本語', value: 'ja' }
  //]
</script>

<template>
  <container class="main-template">
    <v-card height="80" width="800"  class="d-flex flex-row align-center justify-space-around">
      <RouterLink to="/">Description</RouterLink>  
      <RouterLink to="/experience">Experience</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/studies">Studies</RouterLink>
      <RouterLink to="/hobbies">Hobbies & Interests</RouterLink>
    </v-card>
    <v-card height="500" width="800">
        <RouterView/>
    </v-card>
  </container>
</template>

<style>
body {
  background: linear-gradient(45deg, #EDA5E2, #D2AA43);
}

.main-template {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>