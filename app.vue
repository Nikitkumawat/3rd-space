<script setup>
import { defineComponent } from "vue";

// Lazy-load the Navbar component
const Navbar = defineAsyncComponent(() => import("@/components/Navbar.vue"));
const Footer = defineAsyncComponent(() => import("@/components/Footer.vue"));
</script>

<template>
  <v-app>
    <Navbar />
    <v-main>
      <!-- Navbar -->
      <client-only> </client-only>

      <!-- Main Nuxt Page Content -->
      <NuxtPage />
    </v-main>
    <Footer />
  </v-app>
</template>

<style>
body {
  font-family: "Brown LL", sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}
</style>
