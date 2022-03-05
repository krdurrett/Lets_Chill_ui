describe('Lets Chill chill log user flow', () => {
  
  it('should be able to click on chill log link and view chill log', () => {
    cy.visit('http://localhost:3000')
      .get('.chill-log-link').click()
      .get('.no-actions').contains('No actions logged...go try one out!')
      .url().should('include', '/chill_log')
  });

  it('should be able to return home', () => {
    cy.visit('http://localhost:3000/chill_log')
      .get('.log-nav-title').click()
      .url().should('include', '/')
  })

});