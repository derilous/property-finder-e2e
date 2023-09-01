const {
  When,
  Then,
  Given,
} = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the homepage.', () => {
  cy.visitHome();
});

Then(
  'I get performance metrics and make sure it does not drop below current production score',
  () => {
    cy.lighthouse(
      {
        performance: 20,
        'best-practices': 40,
      },
      {
        formFactor: 'desktop',
        screenEmulation: {
          mobile: false,
          disable: false,
          width: Cypress.config('viewportWidth'),
          height: Cypress.config('viewportHeight'),
          deviceScaleRatio: 1,
        },
      }
    ).then((results) => {
      // Log the Lighthouse results in the Cypress console
      cy.log('Lighthouse Results:', results);
    });
  }
);
