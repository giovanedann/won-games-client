import '@testing-library/cypress/add-commands'

Cypress.Commands.add('testHomeBanner', () => {
  // visit the home page
  cy.visit('/')

  // find the slick-slider class (banner component) and find the correct items
  cy.get('.slick-slider')
    .first()
    .within(() => {
      cy.findByRole('heading', { name: /god of war - ragnarok/i })
      cy.findByText(/the adventures of kratos and atreus continues/i)
      cy.findByRole('link', { name: /buy now/i })
      cy.findByText(/best seller/i)

      // clicks on the second dot
      cy.get('.slick-dots > :nth-child(2) > button').click()
      // waits for the slide animation
      cy.wait(500)

      cy.findByRole('heading', { name: /diablo 4/i })
      cy.findByText(/are you ready to find lilith\?/i)

      // clicks on the third dot
      cy.get('.slick-dots > :nth-child(3) > button').click()
      // waits for the slide animation
      cy.wait(500)

      cy.findByRole('heading', { name: /devil may cry 5/i })
      cy.findByText(/the ultimate devil hunter is back in style\./i)
    })
})

Cypress.Commands.add('findShowcase', ({ name, highlight }) => {
  // gets the showcase by the title
  cy.getByDataCy(name).within(() => {
    const headingRegExp = new RegExp(name, 'i')

    cy.findByRole('heading', { name: headingRegExp }).should('exist')

    if (highlight) {
      cy.getByDataCy('highlight').should('exist')

      cy.getByDataCy('highlight').within(() => {
        cy.findByRole('link', { name: /buy now/i }).should('exist')
        cy.findByRole('link').should('have.attr', 'href')
      })

      cy.getByDataCy('game-card').should('have.length.gt', 1)
    }

    if (!highlight) {
      cy.getByDataCy('highlight').should('not.exist')

      cy.getByDataCy('game-card').should('have.length.gt', 1)
    }
  })
})

Cypress.Commands.add('getByDataCy', (selector, ...args) =>
  cy.get(`[data-cy="${selector}"]`, ...args)
)
