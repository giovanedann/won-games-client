describe('Wishlist', () => {
  it('should add and remove games from wishlist', () => {
    // goes to the wishlist page without auth
    cy.visit('/wishlist')

    // signs in
    cy.signIn()

    // checks if wishlist is empty
    cy.findByText(/your wishlist is empty/i).should('exist')

    // adds a game
    cy.addItemToWishlistByIndex(0)

    // checks if game is on wishlist
    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })

    // removes the game from wishlist
    cy.removeItemFromWishlistByIndex(0)

    // checks if wishlist is empty
    cy.findByText(/your wishlist is empty/i).should('exist')
  })
})
