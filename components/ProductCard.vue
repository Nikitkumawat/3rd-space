<template>
 <div class="bg-white rounded-lg shadow-md p-4 border border-gray-200">
    <img :src="product.image" alt="Product Image" class="w-full h-40 object-cover rounded-md mb-4" />
    <h2 class="text-lg font-semibold mb-2">{{ product.title }}</h2>
    <p class="text-gray-700 text-sm mb-4">{{ product.description }}</p>
    <p class="text-xl font-bold text-blue-600 mb-4">${{ product.price }}</p>
    <div class="flex justify-between">
      

    <v-btn prepend-icon="$vuetify" variant="outlined" class="bg-blue-600  px-4 py-2  hover:bg-black-700 hover:text-white transition">
      Add to Cart
</v-btn>
    <v-btn prepend-icon="$vuetify" variant="outlined">
      View Product
</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>
