describe('SignUp workflow', () => {
  it('should sign up', () => {
    cy.visit('/sign-up')

    cy.findByPlaceholderText(/username/i).type('wongames')
    cy.findByPlaceholderText(/email/i).type('wongames@wongames.com')
    cy.findByPlaceholderText(/^password/i).type('123456')
    cy.findByPlaceholderText(/confirm password/i).type('123456')
    cy.findByRole('button', { name: /sign up now/i }).click()
  })
})