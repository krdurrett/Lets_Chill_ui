describe('Lets Chill chill log form user flow', () => {
  
  it('should allow user to indicate whether the action helped and add the feeling/action/if it helped to their log', () => {
    cy.intercept('https://lets-chill-api.herokuapp.com/api/v1/feelings/3', { fixture: 'singleFeeling.json' })
    cy.intercept('https://lets-chill-api.herokuapp.com/api/v1/actions/11', { fixture: 'singleAction.json' })
    cy.intercept('POST', 'https://lets-chill-api.herokuapp.com/api/v1/log', {
       statusCode: 201,
       body: {
        "date": "01/28/2022",
        "feeling": "Calm",
        "action": "Prioritize Sleep",
        "helped": true
      }
     })
    cy.visit('http://localhost:3000')
    cy.viewport(1000, 1000)
      .get('.feelings-form-buttons').click(100, 125)
      .get('.action-card').should('have.length', 7)
      .get('.action-card').contains('Change The Scenery')
      .get('.actions-container').click(200, 150)
      .get('.log-form-title').contains('Did this help?')
      .get('.helped-buttons').click(10, 10)
      .get('.add-to-log-button').click({force: true})
      .url().should('include', '/3/11/action_detail')
  });

});