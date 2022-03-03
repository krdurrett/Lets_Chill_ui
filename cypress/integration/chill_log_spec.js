describe('Lets Chill chill log user flow', () => {
  
  it('should be able to click on chill log link and view chill log', () => {
    cy.visit('http://localhost:3000')
      .get('.chill-log-link').click()
      .get('.entry').should('have.length', 3)
      .url().should('include', '/chill_log')
  });

  it('should be able to return home', () => {
    cy.visit('http://localhost:3000/chill_log')
      .get('.nav-title').click()
      .url().should('include', '/')
  })

});