import {Given} from "cypress-cucumber-preprocessor/steps"

Given('I open the PLP', () => {
    cy.visit('localhost:3000')
    cy.wait(2000)
})