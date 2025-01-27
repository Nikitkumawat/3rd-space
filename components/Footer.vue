<template>
  <footer class="bg-[#3D4A26] text-[#FFC72C] py-10">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-8">
      <!-- Desktop Layout -->
      <div class="hidden md:grid grid-cols-2 md:grid-cols-7 gap-8 pb-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">Aged care homes</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-white">VIC</a></li>
            <li><a href="#" class="text-white">NSW</a></li>
            <li><a href="#" class="text-white">QLD</a></li>
            <li><a href="#" class="text-white">WA</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Our care services</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-white">Residential permanent care</a>
            </li>
            <li><a href="#" class="text-white">Respite care</a></li>
            <li><a href="#" class="text-white">Dementia care</a></li>
            <li><a href="#" class="text-white">Palliative care</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Getting started</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-white">Eligibility assessment</a>
            </li>
            <li><a href="#" class="text-white">Select a home</a></li>
            <li>
              <a href="#" class="text-white">Calculate your costs</a>
            </li>
            <li><a href="#" class="text-white">Moving in</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Life at For Purpose</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-white">Lifestyle experiences</a>
            </li>
            <li><a href="#" class="text-white">Technology</a></li>
            <li><a href="#" class="text-white">Covid-19</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Careers</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-white">View jobs</a></li>
            <li><a href="#" class="text-white">Nursing</a></li>
            <li><a href="#" class="text-white">Hospitality</a></li>
            <li><a href="#" class="text-white">Management</a></li>
            <li><a href="#" class="text-white">Corporate roles</a></li>
            <li><a href="#" class="text-white">Volunteering</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">News</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-white">Aged care news</a></li>
            <li><a href="#" class="text-white">Career news</a></li>
            <li><a href="#" class="text-white">Media release</a></li>
          </ul>
        </div>
        <div>
          <img
            src="@/assets/images/Flogo.png"
            alt="For Purpose Aged Care Logo"
            class="mx-auto h-18"
          />
        </div>
      </div>

      <!-- Mobile Layout -->
      <div class="md:hidden text-center space-y-6">
        <!-- Logo -->
        <div>
          <img
            src="@/assets/images/Flogo.png"
            alt="For Purpose Aged Care Logo"
            class="mx-auto h-16"
          />
        </div>
        <!-- Links -->
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4 text-sm custom-text">
            <a href="#" class="hover:text-white">Aged care homes</a>
            <a href="#" class="hover:text-white">News</a>
            <a href="#" class="hover:text-white">Our care services</a>
            <a href="#" class="hover:text-white">Enquiry</a>
            <a href="#" class="hover:text-white">Getting started</a>
            <a href="#" class="hover:text-white">Contact us</a>
            <a href="#" class="hover:text-white">Life here</a>
            <a href="#" class="hover:text-white">FAQs</a>
            <a href="#" class="hover:text-white">About us</a>
            <a href="#" class="hover:text-white">Our app</a>
            <a href="#" class="hover:text-white">Careers</a>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="mt-6 text-center md:flex md:justify-between items-center pt-4 space-y-4 md:space-y-0"
        style="border-top: 2px solid #ffc72c"
      >
        <!-- Footer Links -->
        <div class="space-x-12 text-sm hidden md:block">
          <a href="#" class="hover:text-white">About us</a>
          <a href="#" class="hover:text-white">Enquiry</a>
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Terms & Conditions</a>
          <a href="#" class="hover:text-white">Sitemap</a>
        </div>
        <!-- Social Icons -->
        <div class="flex space-x-4 justify-center">
          <a href="#" class="hover:opacity-75">
            <i class="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" class="hover:opacity-75">
            <i class="fab fa-linkedin text-xl"></i>
          </a>
          <a href="#" class="hover:opacity-75">
            <i class="fab fa-facebook text-xl"></i>
          </a>
        </div>
      </div>

      <div
        class="mt-6 text-center md:text-left md:flex md:justify-between items-center"
      >
        <div
          class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:justify-center"
        >
          <span>© Copyright For Purpose Aged Care 2025</span>
          <span class="mx-2 hidden sm:inline">|</span>
          <a href="#" class="hover:underline">Privacy Policy</a>
          <span class="mx-2 hidden sm:inline">|</span>
          <a href="#" class="hover:underline">Terms & Conditions</a>
          <span class="mx-2 hidden sm:inline">|</span>
          <a href="#" class="hover:underline">Sitemap</a>
        </div>

        <!-- CTA Button -->
        <div>
          <a
            href="#"
            class="inline-block px-8 py-3 bg-[#FFC72C] text-[#3D4A26] font-bold rounded-xl hover:bg-opacity-80 transition"
            style="border: 2px solid white"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  css: ["@/assets/css/main.css"],
};
</script>

<style scoped>
.custom-text {
  font-family: "Brown LL", sans-serif;
}
/* Import FontAwesome Icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
</style>
