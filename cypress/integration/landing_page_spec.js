describe('Lets Chill landing page user flow', () => {
  
  it('should display page title, feelings form with feeling options, and link to Chill Log', () => {
    cy.visit('http://localhost:3000')
      .get('.main-nav-bar').contains('Let\'s Chill')
      .get('.feelings-form-title').contains('How are you feeling?')
      .get('button').contains('I\'M GONNA DIE!!')
      .get('button').contains('ALERT')
      .get('button').contains('Uncomfortable')
      .get('button').contains('Something\'s off...')
      .get('button').contains('Calm')
      .get('.chill-log-title').contains('Chill Log')
      .url().should('include', '/')
  });

});