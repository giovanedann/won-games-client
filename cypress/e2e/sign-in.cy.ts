describe('SignIn workflow', () => {
  it('should sign in and sign out', () => {
    cy.visit('/sign-in')

    cy.signIn()

    cy.findByText(/cypress/i)
      .should('exist')
      .click()

    cy.findByText(/sign out/i).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText(/cypress/i).should('not.exist')
  })
})
