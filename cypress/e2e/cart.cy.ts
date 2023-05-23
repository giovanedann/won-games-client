describe('Cart workflow', () => {
  it('should add and remove items from cart', () => {
    // go to home page
    cy.visit('/')

    // search for a game card and clicks the add to cart button
    cy.addItemToCartByIndex(0)

    // search for another game card and clicks the add to cart button
    cy.addItemToCartByIndex(1)

    // search for another game card and clicks the add to cart button
    cy.addItemToCartByIndex(2)

    // verifies if the cart icon on header have the added items length number
    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.text', 3)
      .click()

    // verifies if cart list have 3 items
    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 3)
    })

    // closes cart
    cy.findAllByLabelText(/cart items/i)
      .first()
      .click()

    // search for the first added game and remove it from the cart
    cy.removeItemFromCartByIndex(0)

    // search for the second added game and remove it from the cart
    cy.removeItemFromCartByIndex(1)

    // search for the thord added game and remove it from the cart
    cy.removeItemFromCartByIndex(2)

    // verifies if the cart icon on header does not have any number on it
    cy.findAllByLabelText(/cart items/i).should('not.exist')

    // checks if the shopping cart is empty
    cy.findAllByLabelText(/shopping cart/i)
      .first()
      .click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading', { name: /your cart is empty/i }).should(
        'exist'
      )
    })
  })
})
