Feature: Purchase product

    As I user I can add a product to cart and navigate to the checkout

    Scenario: Add a product to cart
        Given I open the PLP
        When I click on add to cart button
        Then Product is added to the cart

    Scenario: Navigate to checkout
        Given I added a product to cart successfully
        When I click on Checkout CTA button
        Then I go to checkout