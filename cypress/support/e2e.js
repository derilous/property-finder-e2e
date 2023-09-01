import './commands';
import 'cypress-mochawesome-reporter/register';
import '@cypress-audit/lighthouse/commands';
require('cypress-xpath');

// There is an uncaught error being thrown by the site, while the console is clean.
// Forcing Cypress to ignore this and continue testing
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
