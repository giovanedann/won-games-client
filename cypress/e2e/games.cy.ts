import {
  categoriesFields,
  platformFields,
  priceFields,
  sortFields
} from '../../src/utils/filter/fields'

describe('Games (explore) page', () => {
  beforeEach(() => {
    cy.visit('/games')
  })

  it('should render filters columns', () => {
    cy.findByRole('heading', { name: /sort by price/i }).should('exist')
    cy.findByRole('heading', { name: /^price/i }).should('exist')
    cy.findByRole('heading', { name: /platforms/i }).should('exist')
    cy.findByRole('heading', { name: /genres/i }).should('exist')

    priceFields.map(({ label }) => {
      cy.findByText(label).should('exist')
    })

    platformFields.map(({ label }) => {
      cy.findByText(label).should('exist')
    })

    sortFields.map(({ label }) => {
      cy.findByText(label).should('exist')
    })

    categoriesFields.map(({ label }) => {
      cy.findByText(label).should('exist')
    })
  })

  it('should show more games if show more is clicked', () => {
    cy.getByDataCy('game-card').should('have.length', 15)
    cy.findByRole('button', { name: /show more/i }).click()
    cy.getByDataCy('game-card').should('have.length', 30)
  })

  it('should order games by price', () => {
    cy.findByRole('button', { name: /show more/i }).click()
    cy.findByText(/lowest to highest/i).click()
    cy.location('href').should('contain', 'sort=price%3Aasc')

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.findByText(/^\$\d+(\.\d{1,2})?/)
          .invoke('text') // transforms the previou chained value into a text
          .then(($el) => $el.replace('$', '')) // removes the dollar
          .then(parseFloat) // transforms the string into a number
          .should('eq', 0) // checks if is 0
      })

    cy.findByText(/highest to lowest/i).click()
    cy.location('href').should('contain', 'sort=price%3Adesc')

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.findByText(/^\$\d+(\.\d{1,2})?/)
          .invoke('text') // transforms the previou chained value into a text
          .then(($el) => $el.replace('$', '')) // removes the dollar
          .then(parseFloat) // transforms the string into a number
          .should('be.gt', 0) // checks if is greater than 0
      })
  })
})
