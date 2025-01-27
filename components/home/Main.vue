<template>
  <v-container fluid class="bg-container">
    <div>
      <v-row class="bg-row">
        <v-col cols="12" md="4" class="d-flex align-center justify-center">
          <v-sheet class="pa-2 ma-2" style="background: transparent">
            <p class="custom-heading">
              A new age <br />
              in aged care
            </p>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="8">
          <v-sheet class="pa-2 ma-2" style="background: transparent">
            <v-img
              class="img-fluid bg-img"
              src="../../assets/images/Mask.png"
              alt="Sample Image"
              contain
            />
          </v-sheet>
        </v-col>
      </v-row>
    </div>
    <div class="flex justify-center search-container">
      <div style="width: 800px" class="bg-[#fbf8ee] p-10 md:p-6 rounded-lg">
        <div
          class="flex flex-col md:flex-row text-center items-center justify-center gap-2"
        >
          <div class="md:w-1/4">
            <p class="text-lg font-medium text-[#314218]">Find Your Home</p>
          </div>
          <div class="md:w-2/3">
            <div
              class="flex items-center border border-gray-300 rounded-full bg-white shadow-sm"
            >
              <v-icon class="text-gray-500 ml-3">mdi-magnify</v-icon>
              <input
                v-model="searchQuery"
                type="text"
                class="flex-grow py-2 px-4 outline-none text-gray-700"
                placeholder="Enter state, postcode, suburb"
                @input="updateSearchQuery"
              />
            </div>
          </div>
          <div class="md:w-1/4">
            <button
              class="bg-[#FFC905] text-[#39443A] py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              @click="performSearch"
            >
              Search homes
            </button>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  css: ["@/assets/css/main.css"],
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    updateSearchQuery() {
      this.searchQuery = event.target.value;
    },
    performSearch() {
      console.log("Search Query:", this.searchQuery);
    },
  },
};
</script>

<style scoped>
.bg-container {
  background-color: #314218;
  background-image: url("../../assets/images/background.png");
  background-size: cover;
  background-position: center;
  position: relative;
}

.bg-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.search-container {
  position: relative;
  z-index: 2;
}

.custom-heading {
  font-family: "Brown LL", sans-serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -0.25px;
  text-align: left;
  color: #ffc905;
  z-index: 2;
}

.bg-row {
  position: relative;
  z-index: 2;
}

.bg-img {
  height: 600px;
}

@media (min-width: 982px) {
  .bg-container {
    height: 725px;
  }
  .search-container {
    bottom: 4rem;
  }
}
@media (max-width: 600px) {
  .custom-heading {
    font-size: 32px;
    line-height: 40px;
  }
  .bg-img {
    height: auto;
  }
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  gap: 12px;
}

.search-icon {
  font-size: 24px;
  color: gray;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
  font-family: Arial, sans-serif;
  color: black;
  background-color: transparent;
}

.search-input::placeholder {
  color: #c4c4c4;
  font-style: italic;
}

.search-btn {
  background-color: #ffc905;
  color: black;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.search-btn:hover {
  background-color: #e6b806;
}
</style>
