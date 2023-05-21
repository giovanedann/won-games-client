describe('Game/[slug] page', () => {
  beforeEach(() => {
    cy.visit('/game/the-witcher-3-wild-hunt')
  })

  it('should render the game sections', () => {
    cy.getByDataCy('game-info').within(() => {
      // check game heading
      cy.findByRole('heading', { name: /the witcher 3: wild hunt/i }).should(
        'exist'
      )

      // check a fragment of the game subtitle
      cy.findByText(/one of the most acclaimed rpgs of all time/i).should(
        'exist'
      )

      // check game price
      cy.findByText(/\$15.99/i).should('exist')
      // check cart button
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    // check gallery pictures
    cy.findAllByRole('button', { name: /thumb -/i }).should('have.length.gt', 0)

    // check if the content have two or more children elements
    cy.getByDataCy('content').children().should('have.length.at.least', 2)

    // check game content
    cy.getByDataCy('content').within(() => {
      // checks a fragment of the description content
      cy.findByText(
        /You are Geralt of Rivia, mercenary monster slayer\./i
      ).should('exist')
    })

    // checks the game details section
    cy.getByDataCy('game-details').within(() => {
      cy.findByRole('heading', { name: /game details/i }).should('exist')

      cy.findByRole('heading', { name: /developer/i }).should('exist')
      cy.findAllByText(/cd projekt red/i).should('exist')

      cy.findByRole('heading', { name: /release date/i }).should('exist')
      cy.findByText(/may 17, 2015/i).should('exist')

      cy.findByRole('heading', { name: /platforms/i }).should('exist')
      cy.findByRole('img', { name: /windows/i }).should('exist')

      cy.findByRole('heading', { name: /publisher/i }).should('exist')
      cy.findAllByText(/2k/i).should('exist')

      cy.findByRole('heading', { name: /rating/i }).should('exist')
      cy.findByText(/free/i).should('exist')

      cy.findByRole('heading', { name: /genres/i }).should('exist')
      cy.findByText('Role-playing / Fantasy / Adventure').should('exist')
    })

    // checks the upcoming games showcase
    cy.findShowcase({ name: 'upcoming games', highlight: true })

    // checks the recommended games showcase
    cy.findShowcase({
      name: 'based on your purchases',
      highlight: false
    })
  })

  it('should add and remove a game from cart', () => {
    // clicks the add to cart button
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click()
      cy.findByRole('button', { name: /add to cart/i }).should('not.exist')
      cy.findByRole('button', { name: /remove from cart/i }).should('exist')
    })

    // clicks the header shopping cart icon
    cy.findAllByLabelText(/shopping cart icon/i)
      .first()
      .click()

    // finds the cart list
    cy.getByDataCy('cart-list').within(() => {
      // check if the game in on the cart list
      cy.findByRole('heading', { name: /the witcher 3: wild hunt/i }).should(
        'exist'
      )

      // click on remove button to check if the item is removed from the cart list
      cy.findByText(/remove/i).click()

      // check if the game in not on the cart list anymore
      cy.findByRole('heading', { name: /the witcher 3: wild hunt/i }).should(
        'not.exist'
      )
    })

    // checks if the button label has changed
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
      cy.findByRole('button', { name: /remove from cart/i }).should('not.exist')
    })

    // checks the empty component is rendered on cart list
    cy.getByDataCy('cart-list').within(() => {
      cy.findByText(/your cart is empty/i).should('exist')
    })
  })
})
