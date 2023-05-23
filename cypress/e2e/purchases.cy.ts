import { User, createUser } from '../support/utils'

describe('Purchases workflow', () => {
  let user: User

  before(() => {
    user = createUser()
  })

  describe('should purchase free games successfully', () => {
    // workflow to buy the games
    it('should buy free games', () => {
      // creates a user
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      // goes to the explore page
      cy.findByRole('link', { name: /explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      // filter by free games
      cy.findByText(/free/i).click()
      cy.url().should('contain', 'price_lte=0')

      // adds a game to the cart
      cy.addItemToCartByIndex(0)

      // verifies if the cart have 1 item
      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', 1)
        .click()

      // click on button to buy
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      // finds the text confirming there are only free games
      cy.findByText(/Only free games in cart! Click buy and enjoy!/i).should(
        'exist'
      )

      // finishs the purchase
      cy.findByRole('button', { name: /buy now/i }).click()

      // redirects to the success page
      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      // shows purchase success page content
      cy.findByRole('heading', {
        name: /Your purchase was successful!/i
      }).should('exist')
    })

    // workflow to show games buyed on the profile orders page
    it('should show games in order page', () => {
      cy.visit('/profile/orders')

      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.signIn(user.email, user.password)

      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/profile/orders`
      )

      cy.wait(1000)

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
})
