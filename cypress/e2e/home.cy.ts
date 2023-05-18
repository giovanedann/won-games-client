describe('Home page', () => {
  it('should render the home sections', () => {
    cy.testHomeBanner()
  })

  it('should render the right showcases', () => {
    cy.testHomeShowcases({ name: 'new games' })
    cy.testHomeShowcases({ name: 'popular games', highlight: true })
    cy.testHomeShowcases({ name: 'upcoming games', highlight: true })
    cy.testHomeShowcases({ name: 'free games' })
  })
})
