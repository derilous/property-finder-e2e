const {
  When,
  Then,
  Given,
} = require('@badeball/cypress-cucumber-preprocessor');

let numericValue;

Given('Visit the property finder website', () => {
  cy.visitHome();
});

When('I add filter selections ie. Villa, Price range', () => {
  cy.priceVillaQuery();
});

Then('I search with the aforementioned filters', () => {
  cy.search();
});

Then(
  'Property Finder returns the search results and user verifies filtered results match API response',
  () => {
    cy.searchResultsVerification(
      'https://www.propertyfinder.bh/en/search?c=1&t=35&pf=300000&fu=0&ob=mr&page=',
      '//*[@id="root_element"]/main/div[3]'
    );
  }
);
