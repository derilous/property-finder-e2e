Feature: Commercial Properties Search

  Scenario: Click on commercial properties only checkbox and select "offices"
    Given I navigate to Property Finder home
    And I click Show Commercial Properties and search
    Then I add another filter parameter to return office spaces
    And I verify the total number of results from the API response matches the total displayed property results.
    Then I verify the details of the first property in the searched result from the API response