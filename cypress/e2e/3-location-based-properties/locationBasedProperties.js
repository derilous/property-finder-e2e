const {
  When,
  Then,
  Given,
} = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the Property Finder homepage', () => {
  cy.visitHome();
});

When(
  'I type The Bahrain Bay in the search box and select the relevant suggestion',
  () => {
    cy.locationQuery();
  }
);

Then('I search for the results', () => {
  cy.search();
});

Then(
  'I select the first search result and assert the Available from date to not be empty',
  () => {
    cy.get('[data-testid=gallery-picture-container]').first().click();
    cy.wait(2000);
    cy.xpath(
      '/html/body/main/div/div[1]/div/div[4]/div[1]/div[1]/ul/li[5]'
    ).should('not.be.empty');
  }
);
