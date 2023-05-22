import { createUser } from '../support/utils'

describe('SignUp workflow', () => {
  it('should sign up', () => {
    cy.visit('/sign-up')

    const user = createUser()

    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username).should('exist')
  })
})
