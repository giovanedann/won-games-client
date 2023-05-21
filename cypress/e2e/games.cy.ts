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

    cy.wait(1000)

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.shouldBeEqualTo(0)
      })

    cy.findByText(/highest to lowest/i).click()

    cy.location('href').should('contain', 'sort=price%3Adesc')

    cy.wait(1000)

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.shouldBeGreaterThan(0)
      })
  })

  it('should order games by price range', () => {
    cy.findByText(/highest to lowest/i).click()

    cy.findByText(/^under \$50$/i).click()

    cy.wait(1000)

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(50)
      })

    cy.findByText(/under \$150/i).click()

    cy.wait(1000)

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.shouldBeLessThan(150)
      })
  })

  it('should filter by platform and genre', () => {
    cy.findByText(/windows/i).click()
    cy.location('href').should('contain', 'platforms=windows')

    cy.findByText(/linux/i).click()
    cy.location('href').should('contain', 'platforms=linux')

    cy.findByText(/mac os/i).click()
    cy.location('href').should('contain', 'platforms=mac')

    cy.findByText(/action/i).click()
    cy.location('href').should('contain', 'categories=action')
  })

  it('should show empty when no games match', () => {
    cy.visit('/games')

    cy.findByText(/free/i).click()
    cy.wait(500)
    cy.findByText(/linux/i).click()
    cy.wait(500)
    cy.findByText(/action/i).click()
    cy.wait(500)

    cy.getByDataCy('game-card').should('not.exist')
    cy.findByText(/We didn't find any games that matches this filter/i).should(
      'exist'
    )
  })
})
