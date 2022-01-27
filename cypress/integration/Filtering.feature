Feature: sizeFilters

    Feature Description: I can filter t-shirts by size

    Scenario: Size XS filter
        Given I open the PLP
        When I click in the XS size filter
        Then Only XS size tshirts are shown