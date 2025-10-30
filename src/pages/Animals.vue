<script setup>
import OrganismList from '../components/OrganismList.vue';
import animalsBackground from '../assets/animals-bg.jpg';
</script>

<template>
  <OrganismList 
    organism-type="animal"
    :hero-image="animalsBackground"
    title="Állatvilág"
    subtitle="Fedezd fel az esőerdők csodálatos állatvilágát! Az itt élő fajok sokszínűsége páratlan, minden egyes lény fontos szerepet játszik az ökoszisztéma egyensúlyában."
  />
</template>