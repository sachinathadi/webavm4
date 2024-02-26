const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "pygcen",
  reporter: "cypress-mochawesome-reporter",
  defaultCommandTimeout: 6000,

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // return require("./cypress/support/tasks.js")(on);    
      },
      //baseUrl: "https://the-internet.herokuapp.com",
      specPattern: "cypress/sanity/*.js",
      watchForFileChanges: false
  }
});
