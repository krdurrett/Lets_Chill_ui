describe('Lets Chill feelings form user flow', () => {
  
  it('should display actions to take when hovering over a feeling in the feelings form', () => {
    cy.intercept('https://lets-chill-api.herokuapp.com/api/v1/feelings/1', { fixture: 'singleFeeling.json' })
    cy.visit('http://localhost:3000')
      .get('.feelings-form-buttons').trigger('mouseover')
      .get('.action-card').should('have.length', 7)
      .get('.action-card').contains('Change The Scenery')
  });

});