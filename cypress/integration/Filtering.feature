Feature: Size Filters

    As an user I can filter the products by size

    Scenario: Size XS filter
        Given I open the PLP
        When I click in the "XS" size filter
        Then Only these shirts are shown

    Scenario: Size S filter
        Given I open the PLP
        When I click in the "S" size filter
        Then Only these shirts are shown

    Scenario: Size M filter
        Given I open the PLP
        When I click in the "M" size filter
        Then Only these shirts are shown

    Scenario: Size ML filter
        Given I open the PLP
        When I click in the "ML" size filter
        Then Only these shirts are shown

    Scenario: Size L filter
        Given I open the PLP
        When I click in the "L" size filter
        Then Only these shirts are shown

    Scenario: Size XL filter
        Given I open the PLP
        When I click in the "XL" size filter
        Then Only these shirts are shown

    Scenario: Size XXL filter
        Given I open the PLP
        When I click in the "XXL" size filter
        Then Only these shirts are shown