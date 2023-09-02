Feature: Performance testing the homepage

    Scenario: The homepage performance score must not drop below current score level
        Given I am on the homepage.
        Then I get performance metrics and make sure it does not drop below current production score