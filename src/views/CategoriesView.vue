<template>
  <div :key="category" class="categories">
    <div class="flex justify-center mb-5 font-medium text-xl">
      {{ $route.params.category }}
    </div>
    <div class="flex justify-center mb-5">
      <InputSearch
        v-model="search"
        placeholder="Search category products..."
        class="max-w-[400px] px-2"
      />
    </div>
    <div class="w-full grid grid-cols-auto-fit justify-center gap-[10px] pb-5">
      <ProductsCard
        v-for="product in filteredProducts"
        :key="product.name"
        :product="product"
      />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    ProductsCard: () => import("@components/ProductsCard.vue"),
    InputSearch: () => import("@components/InputSearch.vue"),
  },
  data: () => ({
    products: [],
    search: "",
  }),
  computed: {
    category() {
      return this.$route.params.category;
    },
    filteredProducts() {
      let filteredProducts = this.products.slice();
      if (this.search) {
        filteredProducts = this.products.filter((product) =>
          product.title.toUpperCase().includes(this.search.toUpperCase())
        );
      }
      return filteredProducts;
    },
  },
  watch: {
    category: {
      immediate: true,
      handler() {
        this.getProducts();
      },
    },
  },
  methods: {
    async getProducts() {
      await this.$axios
        .get(`https://fakestoreapi.com/products/category/${this.category}`)
        .then((response) => {
          this.products = response.data;
        });
    },
  },
};
</script>

<style></style>
