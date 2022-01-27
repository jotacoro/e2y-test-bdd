import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

When('I click on add to cart button', () => {
    /*Clicking on a random add to cart button*/

    //first, make sure the elements are on the page
    cy.get('[data-sku] > .shelf-item__buy-btn')
        .should('have.length', 16)
        // pick a random item from the list
        .then(($btn) => {
            const items = $btn.toArray()
            return Cypress._.sample(items)
        })
        .then(($btn) => {
            // the yielded element is automatically wrapped in jQuery by Cypress
            expect(Cypress.dom.isJquery($btn), 'jQuery element').to.be.true
            //cy.log(`you picked "${$btn.text()}"`)
            // we do not need to return anything from `cy.then`
            // if we want to continue working with the same element
        })
        .click()
})

Then('Product is added to the cart', () => {
    cy.get('.buy-btn').should('be.visible')
})

Given('I added a product to cart successfully', () => {
    cy.get('.buy-btn').should('be.visible') //Reusing the code as it seems the simplest way
})

When('I click on Checkout CTA button', () => {
    cy.get('.buy-btn').click()
})

Then('I go to checkout', () => {
    //When running the tests you can visualize the alert, but for the moment I'm unable to catch it
})