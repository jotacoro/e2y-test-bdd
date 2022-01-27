import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I open the PLP', () => {
    cy.visit('localhost:3000')
    cy.wait(2000)
    cy.get('[class=products-found]').invoke('text').as('txt')
})

When('I click in the XS size filter', () => {
    cy.get('[class=checkmark]').contains('XS').click()
    cy.wait(2000)
})

Then('Only XS size tshirts are shown', () => {
    cy.get('[class=products-found]').should('not.have.text', '@txt')
})


/* describe('Filter products by size', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
        cy.wait(2000)
        cy.get('[class=products-found]').invoke('text').as('txt')
    })

    it('Filter by XS size', () => {
        cy.get('[class=checkmark]').contains('XS').click()
        cy.wait(2000)
        cy.get('[class=products-found]').should('not.have.text', '@txt')
    })

    it('Filter by M size', () => {
        cy.get('[class=checkmark]').contains('M').click()
        cy.wait(2000)
        cy.get('[class=products-found]').should('not.have.text', '@txt')
        cy.wait(2000)
    })

    it('Filter by ML size', () => {
        cy.get('[class=checkmark]').contains('ML').click()
        cy.wait(2000)
        cy.get('[class=products-found]').should('not.have.text', '@txt')
        cy.wait(2000)
    })

    it('Filter by L size', () => {
        cy.get('[class=checkmark]').contains('L').click()
        cy.wait(2000)
        cy.get('[class=products-found]').should('not.have.text', '@txt')
        cy.wait(2000)
    })

    it('Filter by XL size', () => {
        cy.get('[class=checkmark]').contains('XL').click()
        cy.wait(2000)
        cy.get('[class=products-found]').should('not.have.text', '@txt')
        cy.wait(2000)
    })

    it('Filter by XXL size', () => {
        cy.get('[class=checkmark]').contains('XXL').click()
        cy.wait(2000)
        cy.get('[class=products-found]').should('not.have.text', '@txt')
        cy.wait(2000)
    })
}) */