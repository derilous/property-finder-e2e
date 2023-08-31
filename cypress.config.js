const { defineConfig } = require('cypress');

const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;

const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  projectId: '46z8my',
  e2e: {
    specPattern: '**/*.feature',
    async setupNodeEvents(on, config) {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    experimentalRunAllSpecs: true,
    experimentalSourceRewriting: true,
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
