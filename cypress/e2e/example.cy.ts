describe('Test', () => {
  it('should visit google', () => {
    cy.google()

    cy.findByRole('combobox').type('fotos de cachorros').wait(500).type('{esc}')

    cy.findByRole('button', { name: /pesquisa google/i }).click()

    cy.findByText(/imagens de cachorros/i).should('exist')
  })
})
