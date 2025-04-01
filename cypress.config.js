const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    defaultCommandTimeout : 10000,
    pageLoadTimeout : 60000,
    retries: {runMode: 2},
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
