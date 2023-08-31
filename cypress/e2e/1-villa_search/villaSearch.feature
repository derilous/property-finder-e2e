Feature: Scenario 1

  Scenario: Check the total displayed number of results for category Villas with price range more than or equal to 300,000 AED / yearly
    Given Visit the property finder website
    When I add filter selections ie. Villa, Price range
    And I search with the aforementioned filters
    Then Property Finder returns the search results and user verifies filtered results match API response