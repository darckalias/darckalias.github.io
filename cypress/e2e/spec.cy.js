describe ('My first Test', () => {
  it('clicks the menu "menu"',() => {
    cy.visit('https://darckalias.github.io/')
    cy.get('#menu').click()
  })
})