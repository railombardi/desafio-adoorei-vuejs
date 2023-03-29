<template>
  <div
    class="w-[200px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2"
  >
    <a class="flex justify-center">
      <img
        class="h-[140px] rounded-lg"
        :src="product.image"
        alt="product image"
      />
    </a>
    <div class="px-5 pb-5">
      <a>
        <h5
          class="text-md text-center font-medium tracking-tight text-gray-900 dark:text-white line-clamp-2 text-ellipsis overflow-hidden max-w-full"
        >
          {{ product.title }}
        </h5>
      </a>
      <div class="flex items-center justify-center my-2.5">
        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
        >
          5.0
        </span>
      </div>
      <div class="flex items-center justify-center">
        <span class="text-xl font-bold text-gray-900 dark:text-white">
          {{
            product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
