<template>
  <div id="app">
    <h1>Galería de imágenes de ejemplo</h1>
    <main>
      <GaleriaImagenes />
    </main>
  </div>
</template>

<script>
import GaleriaImagenes from './components/GaleriaImagenes.vue';

export default {
  name: 'App',
  components: {
    GaleriaImagenes
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
</style>
