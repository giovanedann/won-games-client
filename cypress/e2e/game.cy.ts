describe('Game/[slug] page', () => {
  it('should render the game sections', () => {
    cy.visit('/game/the-witcher-3-wild-hunt')

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

    cy.findShowcase({ name: 'upcoming games', highlight: true })

    cy.findShowcase({
      name: 'based on your purchases',
      highlight: false
    })
  })
})
