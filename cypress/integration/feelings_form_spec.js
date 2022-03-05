describe('Lets Chill feelings form user flow', () => {
  
  it('should display actions to take when hovering over a feeling in the feelings form', () => {
    cy.intercept('https://lets-chill-api.herokuapp.com/api/v1/feelings/1', { fixture: 'singleFeeling.json' })
    cy.visit('http://localhost:3000')
      .get('.feelings-form-buttons').click(100, 125)
      .get('.action-card').should('have.length', 7)
      .get('.action-card').contains('Change The Scenery')
      .url().should('include', '/')
  })

  it('should be able to clear the screen when clicking on the home button', () => {
    cy.intercept('https://lets-chill-api.herokuapp.com/api/v1/feelings/1', { fixture: 'singleFeeling.json' })
    cy.visit('http://localhost:3000')
    cy.viewport(1000, 1000)
      .get('.feelings-form-buttons').click(100, 125)
      .get('.action-card').should('have.length', 7)
      .get('.action-card').contains('Change The Scenery')
      .url().should('include', '/')
      .get('.nav-title').click()
      .get('.action-card').should('not.exist')
  })

});