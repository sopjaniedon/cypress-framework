import { defineConfig } from 'cypress'

export default defineConfig({
  execTimeout: 0,
  viewportWidth: 1280,
  viewportHeight: 720,
  pageLoadTimeout: 6000,
  defaultCommandTimeout: 6000,
  videoUploadOnPasses: false,
  chromeWebSecurity: false,
  env: {
    api: "http://localhost:9022/",
    url: "http://localhost:4200/",
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  reporter: "cypress-qase-reporter",

})
