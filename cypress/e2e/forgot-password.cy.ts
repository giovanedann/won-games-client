describe('Forgot Password page', () => {
  // Happy Path
  it('should fill the input and receive a success message', () => {
    // intercepts the post request to mock the success response of the forgot password
    cy.intercept('POST', '**/auth/forgot-password', (res) => {
      res.reply({
        status: 200,
        body: { ok: true }
      })

      expect(res.body.email).to.eq('e2e@wongames.com')
    })

    // goes to the forgot-password page
    cy.visit('/forgot-password')

    // types a valid email
    cy.findByPlaceholderText(/e-mail/i).type('e2e@wongames.com')
    cy.findByRole('button', { name: /send e-mail/i }).click()

    // waits for the success message on the form
    cy.findByText(
      /In a couple of minutes, you will receive an e-mail!/i
    ).should('exist')
  })

  it('should fill the input with an invalid email and receive an error', () => {
    // intercepts the post request to mock the failed response of the forgot password
    cy.intercept('POST', '**/auth/forgot-password', (res) => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: {
            messages: [
              {
                message: 'This email does not exist'
              }
            ]
          }
        }
      })
    })

    cy.visit('/forgot-password')

    cy.findByPlaceholderText(/e-mail/i).type('invalid@wongames.com')
    cy.findByRole('button', { name: /send e-mail/i }).click()

    // waits for the error message on the form
    cy.findByText(/This email does not exist/i).should('exist')
  })
})
