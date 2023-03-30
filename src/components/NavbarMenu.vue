<template>
  <div class="relative">
    <DropdownMenu align="left">
      <template #activator="{ openDropdown }">
        <button class="cursor-pointer" @click="openDropdown">
          <mdicon name="menu" />
        </button>
      </template>
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <router-link to="/" v-slot="{ href, navigate }" custom>
          <li>
            <a
              :href="href"
              @click="navigate"
              class="font-medium block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Home
            </a>
          </li>
        </router-link>
        <li class="relative">
          <DropdownMenu
            toggle="click"
            align="right"
            dropdownCustomClasses="md:left-full top-0"
          >
            <template #activator="{ openDropdown }">
              <a
                class="flex justify-between items-center font-medium block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                @click="openDropdown"
              >
                Categories
                <mdicon name="menu-right" />
              </a>
            </template>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
              <router-link
                v-for="(category, index) in categories"
                :key="index"
                :to="`/categories/${category}`"
                v-slot="{ href, navigate }"
                custom
              >
                <li>
                  <a
                    :href="href"
                    @click="navigate"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {{ category }}
                  </a>
                </li>
              </router-link>
            </ul>
          </DropdownMenu>
        </li>
      </ul>
    </DropdownMenu>
  </div>
</template>

<script>
export default {
  components: {
    DropdownMenu: () => import("@components/DropdownMenu.vue"),
  },
  data: () => ({
    categories: [],
  }),
  created() {
    this.$axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        this.categories = response.data;
      });
  },
};
</script>

<style></style>
