Feature: Sorting options

    As an user I can sort the products in different ways

    Scenario: Sort from lowest to highest price
        Given I open the PLP
        When I select "Lowest to highest" sorting option
        Then Products are sorted from lowest to highest price

    Scenario: Sort from highest to lowest price
        Given I open the PLP
        When I select "Highest to lowest" sorting option
        Then Products are sorted from highest to lowest price

    Scenario: Sort by Selection
        Given I open the PLP
        When I choose Select option
        Then Products are sorted by Selection

