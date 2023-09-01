# property-finder-e2e README

This project is aimed at testing various functions and features of the propertyfinder.bh website. It includes end-to-end tests that focus on the following key areas:

- Property type based searches.

- Commercial property searches.

- Property Location based searches.

### About the Project

The purpose of this project is to thoroughly test the functionality and behavior of the proepertyfinder.bh website. By implementing end-to-end tests for selected functions and features, we aim to ensure that the website functions as intended and delivers a seamless user experience.

Test Scenarios

1. Property type based searches

   - Visit the property finder website.

   - Add filter selections ie. Villa, Price range.

   - Search with the aforementioned filters.

   - Get the search results and verify number of filtered results match API response.

2. Commercial property searches:

   - Search for commercial properties.

   - Add parameter to only display offices in search results.

   - Get the search results and verify number of filtered results match API response.

3. Property Location based searches:

   - Search for properties located in 'Bahrain Bay'.
   - Select the first search result and assert the Available from date to not be empty.

4. This repo also includes a brief performance test on the homepage using lighthouse. It will run with the other tests, and reports are accessible as HTML files in **performance-reports/**. The scope is better outlined in **non-code-files/Test Execution Summary.pdf** as well.

Tools and Technologies:

The tests in this project are implemented using the following tools and technologies:

Testing Framework: Cypress, Cypress-cucumber-preprocessor, cypressaudit-lighthouse, cypress-xpath, cypress-mochawesome-reporter

Programming Languages: JavaScript, Regex

## Getting Started

To run the tests locally on your machine, follow these steps:

Clone this repository: git clone https://github.com/derilous/property-finder-e2e

Install the required dependencies using `yarn`

There are 2 ways to run this test

#### CLI:

Execute the tests in CLI using the command: `yarn run-chrome`.

> Note: In order to get generated test reports, the tests must be run in CLI. Once the tests have completed running, the test report can be found in `/cypress/reports/index.html`.

#### Cypress UI

Run the command: `yarn open` to open Cypress in the browser window.

Configure Cypress upon first start and select `run all tests` in the e2e window.

> Additional Information:
>
> There are 2 additional files added to this repo outlining a test summary as well as a test execution report. Both these files go into further detail about the test scenarios and their pass / fail status. Do check it out in `non-code-files/`.

By participating in this project, you agree to abide by the general open source Code of conduct, fostering an inclusive and respectful community.
