Feature: Search properties by location 

  Scenario: Search for a Bahrain Bay based property
    Given I am on the Property Finder homepage
    When I type The Bahrain Bay in the search box and select the relevant suggestion
    And I search for the results
    Then I select the first search result and assert the Available from date to not be empty