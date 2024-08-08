<template>
  <div id="app">
    <header>
      <img src="../src/assets/logo.png">
      <h1>Registro de Usuarios</h1>
    </header>
    <main>
      <UserRegistration />
    </main>
  </div>
</template>

<script>
import UserRegistration from "./components/UserRegistration.vue";

export default {
  name: "App",
  components: {
    UserRegistration
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff008c;
  margin-top: 60px;
}
</style>
