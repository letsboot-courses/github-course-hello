const { defineConfig } = require('cypress');
const port = process.env.PORT || 8080;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: `http://localhost:${port}`,
    specPattern: 'cypress/e2e/**/*.cy.js'
  },
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'cypress/results/junit/test-results-[hash].xml',
    toConsole: true
  }
});
