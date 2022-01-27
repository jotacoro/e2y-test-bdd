import { When, Then } from "cypress-cucumber-preprocessor/steps"

When('I click in the {string} size filter', (size) => {
    cy.get('[class=products-found]').invoke('text').as('txt') //store the quantity of found products as an alias
    cy.wait(1500)
    cy.get('[class=checkmark]').contains(size).click() //click in the size filter
    cy.wait(2000)
})

Then('Only these shirts are shown', () => {
    cy.get('[class=products-found]').should('not.have.text', '@txt') //restoring the alias to see if the text changed
})