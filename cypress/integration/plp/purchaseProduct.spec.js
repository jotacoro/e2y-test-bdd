describe('Purchase a product', () => {
    //beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test

    //})

    it('Add product to cart', () => {

        //Open the app
        cy.visit('localhost:3000')


        //Products found text
        cy.get('.products-found > span')


        //Clicking on a random add to cart button
        // first, make sure the elements are on the page
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
                cy.log(`you picked "${$btn.text()}"`)
                // we do not need to return anything from `cy.then`
                // if we want to continue working with the same element
            })
            .click()

        cy.get('.buy-btn').click()
    })

    it('Go to Checkout', () => {
        cy.get('.buy-btn').click()
    })
})