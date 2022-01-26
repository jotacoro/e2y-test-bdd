describe('Sort products', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
        cy.get('select').should('have.value', '')
    })

    it('Order by Lowest to Highest price', () => {
        cy.get('select').select('Lowest to highest')
        cy.get('select').should('have.value', 'lowestprice')
        cy.wait(2000)
    })

    it('Order by Highest to Lowest price', () => {
        cy.get('select').select('Highest to lowest')
        cy.get('select').should('have.value', 'highestprice')
        cy.wait(2000)
    })

    it('Order by Selection', () => {
        cy.get('select').select('')
        cy.get('select').should('have.value', '')
        cy.wait(2000)
    })
})