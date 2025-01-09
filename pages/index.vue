<!-- 

<script>
import ProductCard from '~/components/ProductCard.vue';

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      this.products = await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
};
</script>

<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template> -->

<template>
  <v-container fluid class="pa-6">
    <v-row>
      <v-col cols="12">
        <!-- Heading for the section -->
        <h1 class="text-2xl font-semibold text-center mb-6">Product Categories</h1>

        <!-- Tabs for categories -->
        <v-tabs v-model="selectedCategory" vertical>
          <v-tab>
            <span class="font-bold text-sm">All Products</span>
          </v-tab>
          <v-tab>
            <span class="font-bold text-sm">Men's Clothing</span>
          </v-tab>
          <v-tab>
            <span class="font-bold text-sm">Women's Clothing</span>
          </v-tab>
          <v-tab>
            <span class="font-bold text-sm">Jewelry</span>
          </v-tab>
          <v-tab>
            <span class="font-bold text-sm">Electronics</span>
          </v-tab>
        </v-tabs>

        <v-divider></v-divider>

        <!-- Products Grid -->
        <v-row class="mt-5">
          <v-col v-for="product in filteredProducts" :key="product.id" cols="12" sm="6" md="3">
            <ProductCard :product="product" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue';

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: [],
      selectedCategory: 0,
    };
  },
  computed: {
    filteredProducts() {
      if (this.selectedCategory === 0) {
        return this.products;
      }

      const categoryMap = {
        1: "men's clothing", 
        2: "women's clothing", 
        3: "jewelery", 
        4: "electronics",
      };

      const selectedCategoryKey = categoryMap[this.selectedCategory];

      return this.products.filter(product => product.category === selectedCategoryKey);
    }
  },
  async mounted() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      this.products = await response.json();
      
      console.log('API Response:', this.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
};
</script>

<style scoped>
/* Custom Styles for Heading */
h1 {
  font-family: 'Roboto', sans-serif;
  color: #333;
}

.v-tabs {
  font-family: 'Arial', sans-serif;
}

.v-tab {
  font-size: 1rem;
}
</style>
