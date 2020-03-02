@Feature_Invalid_Login

Feature: I register a User that is older than 13 years

  Background:
    Given I am on the Registration Page

  @LP-0010
  Scenario: I should register a User
    And I click on 13 or over button
    Then I am on the AGE Page
    When I input and submit birthdate: 11/11/1990 
    Then I am on the DETAILS Page
    When I input Email address and Password and submit
    Then I am on the THANKS Page
    When I click no thanks and submit
    Then I am on the MAIN Page
    Then I go to delete my account page
    Then I delete my account
    Then I am on the DELETED account Page