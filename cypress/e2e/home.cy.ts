describe('Home page', () => {
  it('should render the home sections', () => {
    cy.testHomeBanner()

    cy.findShowcase({ name: 'new games' })
    cy.findShowcase({ name: 'popular games', highlight: true })
    cy.findShowcase({ name: 'upcoming games', highlight: true })
    cy.findShowcase({ name: 'free games' })
  })
})
