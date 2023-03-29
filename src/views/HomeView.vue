<template>
  <div class="home">
    <div class="flex justify-center mb-5">
      <InputSearch
        placeholder="Search all products..."
        class="max-w-[400px] px-2"
      />
    </div>
    <div class="w-full grid grid-cols-auto-fit justify-center gap-[10px] pb-5">
      <ProductsCard
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {
    ProductsCard: () => import("@components/ProductsCard.vue"),
    InputSearch: () => import("@components/InputSearch.vue"),
  },
  data: () => ({
    products: [],
  }),
  async created() {
    await this.$axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        this.products = response.data;
      });
  },
};
</script>
