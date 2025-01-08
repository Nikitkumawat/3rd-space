<script setup>
import { defineComponent } from 'vue';

// Lazy-load the Navbar component
const Navbar = defineAsyncComponent(() => import('@/components/Navbar.vue'));
</script>

<template>
  <v-app>
    <v-main>
      <!-- Navbar -->
      <client-only>
        <Navbar />
      </client-only>
      
      <!-- Main Nuxt Page Content -->
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}
</style>
