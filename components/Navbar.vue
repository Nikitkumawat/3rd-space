<template>
  <header class="border-b border-gray-300">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <div class="flex items-center">
        <div>
          <img src="@/assets/images/logo.png" class="img-fluid w-32" />
        </div>
      </div>

      <!-- Menu Items -->
      <div class="hidden lg:block">
        <div
          class="justify-end flex space-x-8"
          style="border-bottom: 2px solid #39433a"
        >
          <a href="#" class="text-[#39433A] hover:text-black">News</a>
          <a href="#" class="text-[#39433A] hover:text-black">Enquiry</a>
          <a href="#" class="text-[#39433A] hover:text-black">Contact us</a>
          <a href="#" class="text-[#39433A] hover:text-black">Our app</a>
          <a href="#" class="text-[#39433A] hover:text-black">FAQs</a>
          <div class="flex items-center">
            <img
              src="@/assets/images/SEARCH.png"
              class="img-fluid w-4 h-4 mx-[4px]"
            />
            <a href="#" class="text-gray-700 hover:text-black">Search</a>
          </div>
        </div>
        <nav class="hidden lg:flex space-x-6 mt-[3px]">
          <div class="relative group">
            <button class="flex items-center text-[#39433A] hover:text-black">
              Aged care homes
              <span class="ml-2">▼</span>
            </button>
            <div
              class="absolute hidden group-hover:block bg-white border mt-2 rounded shadow-lg"
              style="z-index: 2"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-[#39433A] hover:bg-gray-100"
                >Option 1</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-[#39433A] hover:bg-gray-100"
                >Option 2</a
              >
            </div>
          </div>

          <div class="relative group">
            <button class="flex items-center text-[#39433A] hover:text-black">
              Our care services
              <span class="ml-2">▼</span>
            </button>
            <div
              class="absolute hidden group-hover:block bg-white border mt-2 rounded shadow-lg"
              style="z-index: 2"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-[#39433A] hover:bg-gray-100"
                >Service 1</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-[#39433A] hover:bg-gray-100"
                >Service 2</a
              >
            </div>
          </div>

          <a href="#" class="text-[#39433A] hover:text-black"
            >Getting started</a
          >
          <a href="#" class="text-[#39433A] hover:text-black">Life here</a>
          <a href="#" class="text-[#39433A] hover:text-black">About us</a>
          <a href="#" class="text-[#39433A] hover:text-black">Careers</a>
        </nav>
      </div>

      <!-- Right Side -->
      <div
        class="flex items-center space-x-4 border-2 border-black p-3 rounded-full"
      >
        <img
          src="@/assets/images/PHONE.png"
          class="img-fluid w-4 h-4 mx-[4px]"
        />
        <button class="hidden lg:block text-gray-700 hover:text-black">
          1300 1300 13
        </button>
        <!-- Hamburger Menu for Mobile -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden text-gray-700 hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden flex flex-col items-start bg-white border-t border-gray-300 px-6 py-4"
    >
      <a href="#" class="text-[#39433A] hover:text-black mb-2">News</a>
      <a href="#" class="text-[#39433A] hover:text-black mb-2">Enquiry</a>
      <a href="#" class="text-[#39433A] hover:text-black mb-2">Contact us</a>
      <a href="#" class="text-[#39433A] hover:text-black mb-2">Our app</a>
      <a href="#" class="text-[#39433A] hover:text-black mb-2">FAQs</a>

      <!-- Aged Care Homes Dropdown -->
      <div class="mb-2">
        <button
          @click="toggleDropdown('agedCareHomes')"
          class="text-[#39433A] hover:text-black flex items-center w-full justify-between"
        >
          Aged care homes
          <span v-if="mobileDropdown.agedCareHomes">▲</span>
          <span v-else>▼</span>
        </button>
        <div v-if="mobileDropdown.agedCareHomes" class="ml-4 mt-2 space-y-2">
          <a href="#" class="text-[#39433A] hover:text-black block">Option 1</a>
          <a href="#" class="text-[#39433A] hover:text-black block">Option 2</a>
        </div>
      </div>

      <!-- Our Care Services Dropdown -->
      <div class="mb-2">
        <button
          @click="toggleDropdown('careServices')"
          class="text-[#39433A] hover:text-black flex items-center w-full justify-between"
        >
          Our care services
          <span v-if="mobileDropdown.careServices">▲</span>
          <span v-else>▼</span>
        </button>
        <div v-if="mobileDropdown.careServices" class="ml-4 mt-2 space-y-2">
          <a href="#" class="text-[#39433A] hover:text-black block"
            >Service 1</a
          >
          <a href="#" class="text-[#39433A] hover:text-black block"
            >Service 2</a
          >
        </div>
      </div>

      <a href="#" class="text-[#39433A] hover:text-black mb-2"
        >Getting started</a
      >
      <a href="#" class="text-[#39433A] hover:text-black mb-2">Life here</a>
      <a href="#" class="text-[#39433A] hover:text-black mb-2">About us</a>
      <a href="#" class="text-[#39433A] hover:text-black mb-2">Careers</a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
      mobileDropdown: {
        agedCareHomes: false,
        careServices: false,
      },
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleDropdown(key) {
      console.log(`Toggling Dropdown: ${key}`);
      console.log("Before Toggle:", this.mobileDropdown[key]);
      this.mobileDropdown[key] = !this.mobileDropdown[key];
      console.log("After Toggle:", this.mobileDropdown[key]);
    },
  },
};
</script>

<style>
.container {
  max-width: 1200px;
}
.custom-text {
  font-family: "Brown LL", sans-serif;
}
</style>
