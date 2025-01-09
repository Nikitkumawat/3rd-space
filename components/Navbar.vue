<script setup>
import { ref } from 'vue';

const drawer = ref(false); // For the mobile menu
const dropdown = ref(false); // For the dropdown menu
</script>

<template>
  <v-app-bar app color="#000" flat>
    <!-- Container for the navbar content -->
    <v-container fluid>
      <!-- Logo and Title -->
      <v-row align="center" justify="space-between" class="w-100">
        <v-col cols="auto">
          <NuxtLink to="/" class="d-flex align-center">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" class="logo-img mx-2" />
            <span class="text-h6 font-weight-medium ">Flip-Cart</span>
          </NuxtLink>
        </v-col>

        <!-- Navbar Links for Desktop -->
        <v-col cols="auto" class="d-none d-md-flex">
          <v-btn to="/" text>Home</v-btn>
          <v-menu offset-y>
            <template #activator="{ props }">
              <v-btn v-bind="props" text>
                Dropdown
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item to="/dashboard" title="Dashboard" />
              <v-list-item to="/settings" title="Settings" />
              <v-list-item to="/earnings" title="Earnings" />
              <v-divider />
              <v-list-item to="/signout" title="Sign out" />
            </v-list>
          </v-menu>
          <v-btn to="/service" text>Services</v-btn>
          <v-btn to="/pricing" text>Pricing</v-btn>
          <v-btn to="/contact" text>Contact</v-btn>
        </v-col>

        <!-- Login Button for Desktop -->
        <v-col cols="auto">
         <v-btn to="/login" prepend-icon="$vuetify" variant="outlined">
  Login
</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <!-- Drawer for Mobile -->
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item to="/" title="Home" />
      <v-subheader>Dropdown</v-subheader>
      <v-list-group>
        <template #activator>
          <v-list-item title="Dropdown" />
        </template>
        <v-list-item to="/dashboard" title="Dashboard" />
        <v-list-item to="/settings" title="Settings" />
        <v-list-item to="/earnings" title="Earnings" />
        <v-divider />
        <v-list-item to="/signout" title="Sign out" />
      </v-list-group>
      <v-list-item to="/service" title="Services" />
      <v-list-item to="/pricing" title="Pricing" />
      <v-list-item to="/contact" title="Contact" />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
/* Custom styles if needed */
</style>
