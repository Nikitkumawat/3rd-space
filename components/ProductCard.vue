<template>
  <v-card class="pa-4" outlined :style="{ backgroundColor: '#ffffff' }">
    <strong >{{ product.category }}</strong>
    
    <v-img :src="product.image" height="150px" contain class="mb-4"></v-img>

    <v-card-title class="text-h6 font-weight-bold mb-2">{{ product.title }}</v-card-title>

    <v-card-subtitle class="text-body-2 text-gray-700 mb-3">{{ product.description }}</v-card-subtitle>

    <v-row class="mb-3">
      <v-col cols="6">
        <v-card-text class="font-weight-bold text-xl ">
          ${{ product.price }}
        </v-card-text>
      </v-col>
      <v-col cols="6" class="text-right">
        <v-rating
          v-if="product.rating"
          :value="product.rating.rate"
          color="amber"
          dense
          half-increments
          readonly
          size="18"
        ></v-rating>
        <div v-if="product.rating" class="grey--text mt-1">
          {{ product.rating.rate }} ({{ product.rating.count }} reviews)
        </div>
        <div v-else class="grey--text mt-1">
          No rating available
        </div>
      </v-col>
    </v-row>

    <v-card-actions>
      <v-btn size="small" color="#000" variant="outlined" class="w-100">
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      rating: this.product.rating.rate, 
    };
  },
};
</script>

<style scoped>
.v-card {
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.v-card-title {
  font-weight: 600;
  color: #333;
}

.v-card-subtitle {
  color: #555;
}

.v-btn {
  transition: background-color 0.3s ease;
}

.v-btn:hover {
  background-color: #000;
  color: white !important;
}

.v-card-actions {
  display: flex;
  justify-content: center;
}

.v-rating {
  display: inline-block;
}

.v-card-text {
  font-size: 1.25rem;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.mb-3 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mt-1 {
  margin-top: 0.25rem;
}
</style>
