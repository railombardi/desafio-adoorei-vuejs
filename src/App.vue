<template>
  <div id="app">
    <nav
      class="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3"
    >
      <mdicon name="menu" />
      <a
        class="text-md font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
      >
        FakeStore
      </a>
      <mdicon name="cart-outline" />
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style>
#app {
  font-family: "Clash Display", sans-serif;
}
</style>
