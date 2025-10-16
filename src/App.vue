<script setup>
import MenuBar from './components/MenuBar.vue';
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <header>
    <MenuBar/>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <FooterBar/>
  </footer>
</template>

<style scoped></style>