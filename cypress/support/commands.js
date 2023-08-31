Cypress.Commands.add('visitHome', () => {
  cy.visit('https://www.propertyfinder.bh/', { failOnStatusCode: false });
});

Cypress.Commands.add('priceVillaQuery', () => {
  // Select Villa as the property type
  cy.xpath(
    '/html/body/main/div/div/div[1]/div[1]/div[2]/div/div[3]/div[1]/div/div'
  )
    .first()
    .click({ force: true });
  cy.xpath(
    '/html/body/main/div/div/div[1]/div[1]/div[2]/div/div[3]/div[1]/div[2]/div/ul/li[3]'
  ).click();
  // Set the price to be 300,000BHD or above
  cy.xpath(
    '/html/body/main/div/div/div[1]/div[1]/div[2]/div/div[3]/div[3]/div'
  ).click();
  cy.xpath(
    '/html/body/main/div/div/div[1]/div[1]/div[2]/div/div[3]/div[3]/div/div[2]/div/div[1]/div/div[1]/div/div/div/div[2]/div/input'
  ).type('300000');
  cy.xpath('/html/body/main/div/div/div[1]/div[1]/div[1]/h1').click();
  // Assert filter selections
  cy.xpath(
    '/html/body/main/div/div/div[1]/div[1]/div[2]/div/div[3]/div[1]/div/div'
  )
    .first()
    .contains('Villa');
  cy.xpath(
    '/html/body/main/div/div/div[1]/div[1]/div[2]/div/div[3]/div[3]/div'
  ).contains('From 300,000 BHD');
});

Cypress.Commands.add('search', () => {
  cy.xpath(
    '/html/body/main/div/div/div[1]/div[1]/div[2]/div/div[3]/button[3]'
  ).click();
});

Cypress.Commands.add('showCommercialProps', () => {
  cy.xpath(
    '/html/body/main/div/div/div[1]/div[1]/div[2]/div/footer/div/label/span'
  ).click();
  cy.search();
});

Cypress.Commands.add('propDetails', () => {
  cy.wait(3000);
  cy.xpath(`//*[@id="root_element"]/main/ul/li/article`).click();
  // Assert the property for the essential information to esist
  // Price
  cy.xpath(
    '/html/body/main/div/div[1]/div/div[4]/div[2]/div[1]/div/div/div[1]/div/div/div'
  )
    .invoke('text')
    .should('have.length.gt', 0);
  // Title
  cy.xpath('/html/body/main/div/div[1]/div/div[4]/div[1]/div[1]/h1')
    .invoke('text')
    .should('have.length.gt', 0);
  // Bathrooms
  cy.xpath(
    '/html/body/main/div/div[1]/div/div[4]/div[1]/div[1]/ul/li[3]/div[2]'
  )
    .invoke('text')
    .should('have.length.gt', 0);
  // Location
  cy.xpath(
    '/html/body/main/div/div[1]/div/div[4]/div[1]/div[3]/div/div[1]/div/div[2]'
  )
    .invoke('text')
    .should('have.length.gt', 0);
  // Property size
  cy.xpath(
    '/html/body/main/div/div[1]/div/div[4]/div[1]/div[1]/ul/li[2]/div[2]'
  )
    .invoke('text')
    .should('have.length.gt', 0);
  // Description
  cy.xpath('/html/body/main/div/div[1]/div/div[4]/div[1]/div[4]/div[1]/div[1]')
    .invoke('text')
    .should('have.length.gt', 0);
});

Cypress.Commands.add('locationQuery', () => {
  cy.get('[data-testid=input]').first().click().type('Bahrain Bay');
  cy.get('[data-testid=autocomplete-dropdown]').click();
});

Cypress.Commands.add('searchResultsVerification', (url, resultCount) => {
  // Get the total results text and parse the numeric value
  cy.xpath(`${resultCount}`)
    .contains('Properties')
    .invoke('text')
    .then((totalResultsText) => {
      const totalResults = parseInt(totalResultsText.match(/\d+/)[0]);

      // Calculate the number of pages needed
      const totalPages = Math.ceil(totalResults / 25);

      // Visit the last page of results
      cy.visit(`${url}+${totalPages}`);

      // Count the number of results on the last page
      cy.get('[itemprop=mainEntity]').should('have.length', totalResults % 25); // Expecting the remainder of totalResults divided by 25

      // Verify that the number of results on the last page matches the calculated value
      cy.get('[itemprop=mainEntity]').should('have.length', totalResults % 25);
    });
});
