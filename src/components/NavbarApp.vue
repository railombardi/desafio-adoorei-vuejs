<template>
  <nav
    class="relative flex flex-wrap items-center justify-between px-4 md:px-10 py-3 mb-3"
  >
    <NavbarMenu />
    <a
      class="text-md font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
    >
      FakeStore
    </a>
    <div class="relative">
      <DropdownMenu align="right">
        <template #activator="{ openDropdown }">
          <button class="cursor-pointer" @mouseover="openDropdown">
            <mdicon name="cart-outline" />
          </button>
        </template>
      </DropdownMenu>
    </div>
  </nav>
</template>

<script>
export default {
  components: {
    DropdownMenu: () => import("@components/DropdownMenu.vue"),
    NavbarMenu: () => import("@components/NavbarMenu.vue"),
  },
};
</script>

<style></style>
