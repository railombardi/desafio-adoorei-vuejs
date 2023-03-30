<template>
  <div id="app">
    <NavbarApp />
    <router-view />
  </div>
</template>
<script>
import NavbarApp from "@components/NavbarApp.vue";
export default {
  components: { NavbarApp },
};
</script>
<style>
#app {
  font-family: "Clash Display", sans-serif;
}
</style>
