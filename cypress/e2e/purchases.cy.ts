import { User, createUser } from '../support/utils'

describe('Purchases workflow', () => {
  let user: User

  describe('should purchase free games successfully', () => {
    before(() => {
      user = createUser()
    })
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

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })

  describe('should purchase paid games successfully', () => {
    before(() => {
      user = createUser()
    })

    // workflow to buy the games
    it('should buy paid games', () => {
      // creates a user
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      // ir para explore page
      cy.findByRole('link', { name: /explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      // filtrar por jogos free
      cy.findByText(/highest to lowest/i).click()
      cy.location('href').should('contain', 'sort=price%3Adesc')

      // adicionar o jogo no carrinho
      cy.addItemToCartByIndex(0)

      // verificar se o carrinho tem 1 jogo e abrir dropdown
      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', 1)
        .click()

      // clicar para fazer a compra
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      // o botão de comprar deve estar desabilitado
      cy.findByRole('button', { name: /buy now/i }).should(
        'have.attr',
        'disabled'
      )

      // preencher com o cartão de credito
      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1040')
      cy.fillElementsInput('cardCvc', '103')

      // clicar para comprar
      cy.findByRole('button', { name: /buy now/i }).click()

      // redirecionar para a página de success
      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      // mostrar texto de sucesso
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

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
})
