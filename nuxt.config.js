// export default defineNuxtConfig({
//   css: ['@/assets/css/globals.css'],

//   postcss: {
//     plugins: {
//       tailwindcss: {},
//       autoprefixer: {},
//     },
//   },

//   compatibilityDate: '2024-12-17',
// });

// import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// export default defineNuxtConfig({
//   //...
//   build: {
//     transpile: ['vuetify'],
//   },
//   postcss: {
//     plugins: {
//       tailwindcss: {},
//       autoprefixer: {},
//     },
//   },
//   modules: [
//     (_options, nuxt) => {
//       nuxt.hooks.hook('vite:extendConfig', (config) => {
//         // @ts-expect-error
//         config.plugins.push(vuetify({ autoImport: true }))
//       })
//     },
//     //...
//   ],
//   vite: {
//     vue: {
//       template: {
//         transformAssetUrls,
//       },
//     },
//   },
// })



import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  css: ['@/assets/css/globals.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-12-17',

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
