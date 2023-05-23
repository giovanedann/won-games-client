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

  it('should redirect to the previous page url after sign in succeeds', () => {
    cy.visit('/profile/me')

    cy.location('href').should(
      'eq',
      `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/me`
    )

    cy.signIn()

    cy.location('href').should('eq', `${Cypress.config().baseUrl}/profile/me`)

    cy.findByRole('button', { name: /save changes/i }).should('exist')
    cy.findByRole('button', { name: /reset password/i }).should('exist')

    cy.findByLabelText(/username/i).should('have.value', 'Cypress')
    cy.findByLabelText(/e-mail/i).should('have.value', 'e2e@wongames.com')
  })
})
