<script setup>
import OrganismList from '../components/OrganismList.vue';
import plantsBackground from '../assets/plants-bg.jpg';
</script>

<template>
  <OrganismList 
    organism-type="plant"
    :hero-image="plantsBackground"
    title="Növényvilág"
    subtitle="Fedezd fel az esőerdők lenyűgöző növényvilágát! Ezek a növények biztosítják az ökoszisztéma alapját és otthont adnak számtalan élőlénynek."
  />
</template>

<style></style>