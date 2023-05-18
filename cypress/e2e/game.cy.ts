describe('Game/[slug] page', () => {
  it('should render the game sections', () => {
    cy.visit('/game/the-witcher-3-wild-hunt')

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /the witcher 3: wild hunt/i }).should(
        'exist'
      )

      cy.findByText(/one of the most acclaimed rpgs of all time/i).should(
        'exist'
      )

      cy.findByText(/\$15.99/i).should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })
  })
})
