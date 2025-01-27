<template>
  <div class="bg-white">
    <v-container fluid>
      <v-row
        class="mb-6 text-center"
        no-gutters
        align="center"
        justify="center"
      >
        <!-- Title Column -->
        <v-col cols="12" md="6" lg="3">
          <v-sheet class="pa-2 ma-2">
            <p class="custom-text">How can we help?</p>
          </v-sheet>
        </v-col>

        <!-- Action Columns -->
        <v-col cols="12" md="6" lg="3">
          <v-sheet class="pa-2 ma-2 d-flex align-center justify-center">
            <p class="find-care-text mx-2">Find available care</p>
            <img
              src="@/assets/images/Arrow.png"
              alt="Arrow"
              style="width: 35px"
            />
          </v-sheet>
        </v-col>

        <v-col cols="12" md="6" lg="3">
          <v-sheet class="pa-2 ma-2 d-flex align-center justify-center">
            <p class="find-care-text mx-2">Understand costs</p>
            <img
              src="@/assets/images/Arrow.png"
              alt="Arrow"
              style="width: 35px"
            />
          </v-sheet>
        </v-col>

        <v-col cols="12" md="6" lg="3">
          <v-sheet class="pa-2 ma-2 d-flex align-center justify-center">
            <p class="find-care-text mx-2">Build your career</p>
            <img
              src="@/assets/images/Arrow.png"
              alt="Arrow"
              style="width: 35px"
            />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  css: ["@/assets/css/main.css"],
};
</script>

<style scoped>
/* Title Text */
.custom-text {
  font-family: "Brown LL", sans-serif;
  font-weight: 700;
  font-size: 26px;
  line-height: 36px;
  text-align: center;
  padding: 20px;
  color: #314218;
}

/* Action Text */
.find-care-text {
  font-family: "Brown LL", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #314218;
}

/* Background Color */
.bg-white {
  background-color: #ffffff;
}
</style>
