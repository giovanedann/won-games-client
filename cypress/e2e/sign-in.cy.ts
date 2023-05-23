describe('SignIn workflow', () => {
  it('should sign in and sign out', () => {
    cy.visit('/sign-in')

    cy.findByPlaceholderText(/e-mail/i).type('e2e@wongames.com')
    cy.findByPlaceholderText(/password/i).type('123456')
    cy.findByRole('button', { name: /sign in/i }).click()

    cy.findByText(/cypress/i)
      .should('exist')
      .click()

    cy.findByText(/sign out/i).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText(/cypress/i).should('not.exist')
  })
})
