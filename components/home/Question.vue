<template>
  <div class="container-fluid bg-[#D9D9D9] py-8">
    <div
      style="max-width: 820px"
      class="mx-auto p-6 rounded-lg mt-[2rem] mb-[2rem]"
    >
      <h2
        class="text-center text-3xl font-bold mb-8 text-[#4F4F4F] custom-text"
      >
        Frequently Asked Questions
      </h2>

      <div
        v-for="(item, index) in accordionItems"
        :key="index"
        class="mb-1 border rounded-lg overflow-hidden"
      >
        <button
          @click="toggle(index)"
          class="w-full flex justify-between items-center p-2 bg-white text-left text-lg font-semibold custom-text"
        >
          {{ item.title }}
          <span
            :class="{ 'rotate-180': activeIndex === index }"
            class="transition-transform transform text-[#EF7911]"
          >
            {{ activeIndex === index ? "−" : "+" }}
          </span>
        </button>

        <div
          v-show="activeIndex === index"
          class="p-4 bg-gray-50 text-gray-700"
        >
          <p class="custom-text">{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      accordionItems: [
        {
          title: "How do I arrange a tour?",
          content:
            "Click here to call 1300 1300 13. Our central care team can help you book a tour with your local For Purpose Aged Care home.",
        },
        {
          title: "Where can I request more information?",
          content:
            "You can request more information by visiting our website or contacting our support team.",
        },
        {
          title: "How do I apply for a job opportunity?",
          content:
            "Visit our careers page for job openings or contact HR for further inquiries.",
        },
        {
          title: "How do I become a volunteer?",
          content:
            "Volunteer by signing up on our volunteer page or calling our support hotline.",
        },
        {
          title: "Who do I talk to about my bill?",
          content:
            "Please contact our billing department directly via phone or email for assistance.",
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
  css: ["@/assets/css/main.css"],
};
</script>

<style scoped>
button {
  transition: background-color 0.3s ease;
}

div[v-show] {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.custom-text {
  font-family: "Brown LL", sans-serif;
}

/* Desktop & Tablet */
@media (max-width: 1024px) {
  .mx-auto {
    max-width: 90%;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .container {
    padding: 16px;
  }

  .mx-auto {
    max-width: 100%;
  }

  h2 {
    font-size: 24px;
  }

  button {
    font-size: 16px;
    padding: 0.75rem;
  }

  .p-4 {
    padding: 1rem;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  h2 {
    font-size: 20px;
  }

  button {
    font-size: 14px;
    padding: 0.5rem;
  }

  .p-4 {
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>
