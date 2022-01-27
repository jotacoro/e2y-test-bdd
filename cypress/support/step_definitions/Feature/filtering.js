import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

When('I click in the {string} size filter', (size) => {
    cy.get('[class=products-found]').invoke('text').as('txt')
    cy.wait(1500)
    cy.get('[class=checkmark]').contains(size).click()
    cy.wait(2000)
})

Then('Only these shirts are shown', () => {
    cy.get('[class=products-found]').should('not.have.text', '@txt')
})