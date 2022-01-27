import { When, Then } from "cypress-cucumber-preprocessor/steps"
/*
It was needed to create a different When statement for the Select filter.
The Select filter contains an empty string as value, so writting
I select "" sorting option
could not be clear from the business point of view
*/

When('I choose Select option', () => {
    cy.get('select').should('have.value', '')
    cy.wait(1000)
    cy.get('select').select('')
})

When('I select {string} sorting option', (sortOption) => {
    cy.get('select').should('have.value', '')
    cy.wait(1000)
    cy.get('select').select(sortOption)
})

Then('Products are sorted from lowest to highest price', () => {
    cy.get('select').should('have.value', 'lowestprice')
    cy.wait(2000)
})

Then('Products are sorted from highest to lowest price', () => {
    cy.get('select').should('have.value', 'highestprice')
    cy.wait(2000)
})

Then('Products are sorted by Selection', () => {
    cy.get('select').should('have.value', '')
    cy.wait(2000)
})