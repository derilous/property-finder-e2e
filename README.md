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

4. This repo also includes a brief performance test on the homepage using lighthouse.

Account Deletion: Verify that users can initiate the account deletion process.

Confirmation and Cancellation: Test the confirmation and cancellation steps during account deletion.

Tools and Technologies:

The tests in this project are implemented using the following tools and technologies:

Testing Framework: Cypress, Cypress-cucumber-preprocessor, cypressaudit-lighthouse, cypress-xpath, cypress-mochawesome-reporter

Programming Languages: JavaScript, Regex

## Getting Started

To run the tests locally on your machine, follow these steps:

Clone this repository: git clone https://github.com/derilous/property-finder-e2e

Install the required dependencies using `yarn`

There are 2 ways to run this test

### CLI:

Execute the tests in CLI using the command: `yarn run-chrome`.

> Note: In order to get generated test reports, the tests must be run in CLI. Once the tests have completed running, the test report can be found in `/cypress/reports/index.html`.

### Cypress UI

Run the command: `yarn open` to open Cypress in the browser window
Configure Cypress upon first start and select `run all tests` in the e2e window.

### Contributions:

Contributions are welcomed to enhance the test coverage and improve the project. If you would like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix: git checkout -b feature/your-feature-name

Make your modifications and commit changes: git commit -am 'Add your commit message'

Push the branch to your forked repository.

Open a pull request, describing the changes you've made.

Contact
If you have any questions or suggestions regarding the project, please feel free to contact Mohsin Habiya at [mohsin.salim567@gmail.com].

By participating in this project, you agree to abide by the general open source Code of conduct, fostering an inclusive and respectful community.
