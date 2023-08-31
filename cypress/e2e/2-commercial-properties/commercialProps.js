const {
  When,
  Then,
  Given,
} = require('@badeball/cypress-cucumber-preprocessor');

Given('I navigate to Property Finder home', () => {
  cy.visitHome();
});

When('I click Show Commercial Properties and search', () => {
  cy.showCommercialProps();
});

When('I add another filter parameter to return office spaces', () => {
  cy.xpath(`//*[@id="root_element"]/main/div[5]/ul/li[3]/a`).click({
    force: true,
  });
});

Then(
  'I verify the total number of results from the API response matches the total displayed property results.',
  () => {
    cy.searchResultsVerification(
      'https://www.propertyfinder.bh/en/search?c=3&t=4&fu=0&ob=mr&page=',
      '//*[@id="root_element"]/main/div[3]/span'
    );
  }
);

Then(
  'I verify the details of the first property in the searched result from the API response',
  () => {
    cy.propDetails();
  }
);
