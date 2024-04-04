describe('spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')

    cy.get('[name="add"]').parent().find('[name="left"]').type(3.6)
    cy.get('[name="add"]').parent().find('[name="right"]').type(2.5)
    cy.get('[name="add"]').click()

    cy.get('p').should('have.text', '3.6 + 2.5 = 6.1')
  })
})
