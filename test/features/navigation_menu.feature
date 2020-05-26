@smoke
Feature: Navigation Menu

Scenario: Navigation Menu
Given I open "Home" page
Then Count of "Navigation Links" should be equal "6"
When I wait "10" seconds