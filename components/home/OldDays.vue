<template>
  <v-container
    fluid
    class="bg-light d-flex align-center justify-center"
    style="min-height: 85vh"
  >
    <v-row no-gutters align="center" justify="center" class="text-center">
      <!-- Image Column -->
      <v-col cols="12" md="4" class="d-flex justify-center mb-4 mb-md-0">
        <img
          src="@/assets/images/Old.png"
          alt="Old Image"
          style="max-width: 100%; height: auto"
        />
      </v-col>

      <!-- Text Column -->
      <v-col cols="12" md="6" style="margin-left: 50px">
        <h1 class="custom-heading text-left custom-text">
          Welcome to your good old days
        </h1>
        <p class="custom-paragraph text-left custom-text">
          You deserve care that truly celebrates who you are. You deserve
          dignity, compassion, kindness, and empathy.
        </p>
        <p class="custom-paragraph text-left my-7 custom-text">
          You've earned it.
        </p>
        <p class="custom-paragraph text-left custom-text">
          At For Purpose Aged Care, we're committed to providing exactly that.
          We want you to feel valued, to stay connected to what matters most,
          and to be part of a welcoming community. We're also here to support
          your family every step of the way, giving them confidence in your
          care, no matter which of our homes you choose.
        </p>

        <div class="flex justify-start">
          <v-btn
            class="learn-more-btn custom-text"
            color="yellow"
            dark
            href="#"
            style="
              margin-top: 20px;
              padding: 10px 20px;
              font-size: 12px;
              text-transform: none;
              margin-left: 0;
              display: inline-block;
            "
          >
            Learn More
          </v-btn>
        </div>
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
/* Valid Class Name for Background */
.bg-light {
  background-color: #fbf8ee;
}

.custom-text {
  font-family: "Brown LL", sans-serif;
}
/* Heading Styles */
.custom-heading {
  font-family: "Brown LL", sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 16px;
  color: #314218;
}

/* Paragraph Styles */
.custom-paragraph {
  font-family: "Arial", sans-serif;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 12px;
  color: #314218;
}

/* Button Styles */
.learn-more-btn {
  background: #ffc905;
  color: #314218;
  border-radius: 20px;
  font-weight: 600;
  text-transform: none;
  margin-top: 20px;
  margin-left: 0;
}
</style>
