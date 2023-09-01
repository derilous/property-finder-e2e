const { defineConfig } = require('cypress');
const {
  beforeRunHook,
  afterRunHook,
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;

const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  projectId: '46z8my',
  reporter: 'cypress-mochawesome-reporter',
  video: true,

  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    reportDir: 'cypress/reports',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    specPattern: '**/*.feature',
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        })
      );
      on('before:run', async (details) => {
        console.log('override before:run');

        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');

        await afterRunHook();
      });
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
