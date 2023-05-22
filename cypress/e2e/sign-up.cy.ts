import { createUser } from '../support/utils'

describe('SignUp workflow', () => {
  it('should sign up', () => {
    cy.visit('/sign-up')

    const user = createUser()

    cy.findByPlaceholderText(/username/i).type(user.username)
    cy.findByPlaceholderText(/e-mail/i).type(user.email)
    cy.findByPlaceholderText(/^password/i).type(user.password)
    cy.findByPlaceholderText(/confirm password/i).type(user.password)
    cy.findByRole('button', { name: /sign up/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })
})
