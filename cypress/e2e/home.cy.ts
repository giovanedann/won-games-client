describe('Home page', () => {
  it('should render the home sections', () => {
    // visit the home page
    cy.visit('/')

    // find the slick-slider class (banner component) and find the correct items
    cy.get('.slick-slider')
      .first()
      .within(() => {
        cy.findByRole('heading', { name: /god of war - ragnarok/i })
        cy.findByRole('link', { name: /buy now/i })
        cy.findByText(/best seller/i)
      })
  })
})
