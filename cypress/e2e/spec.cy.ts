describe('template spec', () => {
  it('successfully modal open and close', () => {
    cy.visit('http://localhost:4000/react')
    cy.get('.sticky-bar').should('not.have.class', 'visible')
    cy.contains("Dettagli dell'offerta").click()
    cy.get('.btn-close').click()
  })
  it('successfully scroll and sticky view', () => {
    cy.visit('http://localhost:4000/react')
    cy.scrollTo('left', { duration: 2500 })
    cy.get('.sticky-bar').should('have.class', 'visible')
  })
})