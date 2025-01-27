<template>
  <v-container fluid style="padding: 0; margin: 0">
    <v-row
      no-gutters
      align="stretch"
      justify="center"
      style="width: 100%; margin: 0"
    >
      <!-- Left Column: Text and Button -->
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column justify-center text-left text-md-left"
        style="padding: 40px"
      >
        <h1 class="custom-heading custom-text">
          Every day should be a good day
        </h1>

        <p class="custom-paragraph custom-text">
          You deserve to enjoy every day. At For Purpose, we make that a
          priority. From delicious meals to a thriving social calendar,
          everything is designed for you and your loved one's comfort and
          enjoyment. Many of our homes also feature convenient on-site amenities
          like cafes, hairdressers, cinemas, and beautiful gardens.
        </p>

        <div class="flex justify-start">
          <v-btn
            class="learn-more-btn custom-text"
            href="#"
            style="
              margin-top: 20px;
              padding: 12px 24px;
              font-size: 16px;
              text-transform: uppercase;
            "
          >
            Why choose For Purpose
          </v-btn>
        </div>
      </v-col>

      <!-- Right Column: Testimonial -->
      <v-col
        cols="12"
        md="6"
        class="testimonial-column"
        style="
          background-color: #243d5e;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px;
        "
      >
        <p
          class="testimonial-text custom-text"
          style="
            font-style: italic;
            font-size: 40px;
            font-weight: 700;
            line-height: 48px;
            text-align: center;
            max-width: 400px;
            margin: 20px 0;
          "
        >
          “We owe everybody so much for their kind and professional help. I
          cannot recommend this centre highly enough. Thank you all so much."
        </p>
        <p
          class="testimonial-author custom-text"
          style="font-weight: bold; margin-top: 16px"
        >
          Gordon (Family Member)
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  css: ["@/assets/css/main.css"],
};
</script>
<style scoped>
.custom-heading {
  font-family: "Arial", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 24px;
  color: #314218;
}

.custom-paragraph {
  font-family: "Arial", sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #314218;
  margin-bottom: 24px;
}

.learn-more-btn {
  background-color: #ffc905;
  color: #314218;
  font-weight: bold;
  border-radius: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.testimonial-column {
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.testimonial-text {
  font-size: 24px;
  line-height: 32px;
}

.custom-text {
  font-family: "Brown LL", sans-serif;
}

@media (max-width: 768px) {
  .custom-heading {
    font-size: 28px;
  }

  .custom-paragraph {
    font-size: 16px;
  }

  .testimonial-text {
    font-size: 20px;
    line-height: 28px;
  }

  .testimonial-column {
    padding: 20px;
  }
}

@media (max-width: 576px) {
  .custom-heading {
    font-size: 24px;
    line-height: 32px;
  }

  .custom-paragraph {
    font-size: 14px;
  }

  .testimonial-text {
    font-size: 18px;
    line-height: 24px;
  }

  .learn-more-btn {
    font-size: 14px;
  }
}
</style>
