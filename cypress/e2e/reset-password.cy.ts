describe('Reset Password', () => {
  it('should show error if password does not match', () => {
    cy.visit('/reset-password?code=123456')

    cy.findByPlaceholderText(/^password$/i).type('123')
    cy.findByPlaceholderText(/confirm password/i).type('321')
    cy.findByText(/passwords do not match/i).should('exist')
  })

  it('should show error if code is not valid', () => {
    cy.intercept('POST', '**/auth/reset-password', (res) => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: {
            messages: [
              {
                message: 'Incorrect code provided'
              }
            ]
          }
        }
      })
    })

    cy.visit('/reset-password?code=wrong_code')

    cy.findByPlaceholderText(/^password$/i).type('123')
    cy.findByPlaceholderText(/confirm password/i).type('123')
    cy.findByRole('button', { name: /reset/i }).click()

    cy.findByText(/Incorrect code provided/i).should('exist')
  })

  it('should fill the input and redirect to home page with the user signed in', () => {
    // next-auth credentials route
    cy.intercept('POST', '**/auth/callback/credentials*', {
      statusCode: 200,
      body: { user: {} }
    })

    // api route for reset password (strapi)
    cy.intercept('POST', '**/auth/reset-password', {
      statusCode: 200,
      body: { user: { email: 'valid@email.com' } }
    })

    // next-auth session route
    cy.intercept('GET', '**/auth/session*', {
      statusCode: 200,
      body: { user: { name: 'cypress' } }
    })

    cy.visit('/reset-password?code=12345')

    // fill passwords with a valid token
    cy.findByPlaceholderText(/^password$/i).type('pass123')
    cy.findByPlaceholderText(/confirm password/i).type('pass123')
    cy.findByRole('button', { name: /reset/i }).click()

    // redirects to home
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)

    // checks if the user name is on the header
    cy.findByText(/cypress/i).should('exist')
  })
})
