<template>
  <div class="min-h-screen" style="background: #a6cfd9">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 py-8 lg:py-16">
      <div
        class="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-16"
      >
        <!-- Text Content Section -->
        <div class="lg:w-1/2 text-center lg:text-left">
          <h1
            class="text-3xl lg:text-4xl font-bold text-[#39443A] mb-6 custom-text"
          >
            Build your career here
          </h1>
          <p class="text-[#39443A] text-base lg:text-lg mb-8 custom-text">
            Join the team at For Purpose, for the chance to create little
            moments of joy every day with our residents. Plus, you can truly
            stretch yourself – with extensive training, support, and promotion
            opportunities.
          </p>
        </div>
        <!-- Image Section -->
        <div class="relative lg:w-1/2">
          <div class="overflow-hidden rounded-xl">
            <img
              src="@/assets/images/group.png"
              alt="Career Image"
              class="w-full h-auto object-cover"
              style="clip-path: polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)"
            />
          </div>
        </div>
      </div>
      <!-- Career Cards Section -->
      <div class="shadow-lg p-7 bg-[#C5DBE0]" style="border-radius: 12px">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div
            class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src="@/assets/images/card.png"
              alt="Card Image"
              class="w-full h-auto rounded-lg object-cover mb-4"
            />

            <span>
              <h2 class="text-lg font-semibold text-[#39443A] custom-text px-3">
                Nursing
              </h2>
              <p class="text-[#39443A] custom-text text-sm px-3">
                From Registered Nurses to allied health professionals
              </p>
            </span>
            <div class="flex justify-end">
              <img
                src="@/assets/images/Arrow.png"
                alt="Arrow"
                style="width: 35px"
                class="mr-[1rem] mb-[1rem]"
              />
            </div>
          </div>
          <div
            class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src="@/assets/images/cardsec.png"
              alt="Card Image"
              class="w-full h-auto rounded-lg object-cover mb-4"
            />

            <span>
              <h2 class="text-lg font-semibold text-[#39443A] custom-text px-3">
                Corporate roles
              </h2>
              <p class="text-[#39443A] custom-text text-sm px-3">
                Work alongside some of Australia’s best leaders
              </p>
            </span>
            <div class="flex justify-end">
              <img
                src="@/assets/images/Arrow.png"
                alt="Arrow"
                style="width: 35px"
                class="mr-[1rem] mb-[1rem]"
              />
            </div>
          </div>
          <div
            class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src="@/assets/images/cardthired.png"
              alt="Card Image"
              class="w-full h-auto rounded-lg object-cover mb-4"
            />

            <span>
              <h2 class="text-lg font-semibold text-[#39443A] custom-text px-3">
                Hospitality
              </h2>
              <p class="text-[#39443A] custom-text text-sm px-3">
                Whether you’re a chef, cleaner manager or support staff
              </p>
            </span>
            <div class="flex justify-end">
              <img
                src="@/assets/images/Arrow.png"
                alt="Arrow"
                style="width: 35px"
                class="mr-[1rem] mb-[1rem]"
              />
            </div>
          </div>
          <div
            class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src="@/assets/images/cardfour.png"
              alt="Card Image"
              class="w-full h-auto rounded-lg object-cover mb-4"
            />

            <span>
              <h2 class="text-lg font-semibold text-[#39443A] custom-text px-3">
                Management
              </h2>
              <p class="custom-text custom-text text-sm px-3">
                Your efforts make a real difference in residents’ lives
              </p>
            </span>
            <div class="flex justify-end">
              <img
                src="@/assets/images/Arrow.png"
                alt="Arrow"
                style="width: 35px"
                class="mr-[1rem] mb-[1rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="py-8 lg:py-12">
        <div class="container mx-auto text-center block">
          <p
            style="
              font-family: 'Brown LL';
              font-weight: 700;
              font-size: 40px;
              line-height: 48px;
              text-align: center;
              margin-top: 2rem;
            "
            class="custom-text text-[#243D5E]"
          >
            “I like putting smiles on resident’s faces. Being creative. I want
            to make a difference every day.”
          </p>
          <p class="mt-4 text-lg text-[#39443A] custom-text">
            Clare, Resident Manager Cardinia
          </p>
        </div>
      </div>
    </div>

    <!-- Quote Section -->
  </div>
</template>

<script>
export default {
  css: ["@/assets/css/main.css"],
  components: {
    CareerCard: {
      props: ["title", "description", "image"],
      template: `
      <div class="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
        <img :src="image" alt="Card Image" class="w-20 h-20 rounded-lg object-cover mr-4" />
        <div>
          <h2 class="text-lg font-semibold text-gray-800">{{ title }}</h2>
          <p class="text-gray-600 text-sm">{{ description }}</p>
        </div>
      </div>
    `,
    },
  },
};
</script>

<style>
.custom-text {
  font-family: "Brown LL", sans-serif;
}
/* Custom diagonal cut for the image */
</style>
