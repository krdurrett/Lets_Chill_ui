describe('Lets Chill action details user flow', () => {
  
  it('should allow user to view details about a specific action after hovering over a feeling to view that feelings actions', () => {
    cy.intercept('https://lets-chill-api.herokuapp.com/api/v1/feelings/3', { fixture: 'singleFeeling.json' })
    cy.intercept('https://lets-chill-api.herokuapp.com/api/v1/actions/11', { fixture: 'singleAction.json' })
    cy.visit('http://localhost:3000')
      .get('.feelings-form-buttons').trigger('mouseover')
      .get('.action-card').should('have.length', 7)
      .get('.action-card').contains('Change The Scenery')
      .get('.actions-container').click(150, 150)
      .get('.action-detail-card').contains('Change The Scenery')
      .get('.action-image').should('have.attr', 'src', 'https://media.giphy.com/media/lqvQ1RQ58LQFms7kW5/giphy.gif')
      .get('.action-link').should('have.attr', 'href', 'https://adultmentalhealth.org/managing-and-reducing-anxiety/')
      .url().should('include', '/3/11/action_detail')
  });

  it('should be able to return home by clicking the Lets Chill button', () => {
     cy.intercept('https://lets-chill-api.herokuapp.com/api/v1/feelings/3', { fixture: 'singleFeeling.json' })
    cy.intercept('https://lets-chill-api.herokuapp.com/api/v1/actions/11', { fixture: 'singleAction.json' })
    cy.visit('http://localhost:3000')
      .get('.feelings-form-buttons').trigger('mouseover')
      .get('.action-card').should('have.length', 7)
      .get('.action-card').contains('Change The Scenery')
      .get('.actions-container').click(150, 150)
      .get('.action-detail-card').contains('Change The Scenery')
      .get('.action-image').should('have.attr', 'src', 'https://media.giphy.com/media/lqvQ1RQ58LQFms7kW5/giphy.gif')
      .get('.action-link').should('have.attr', 'href', 'https://adultmentalhealth.org/managing-and-reducing-anxiety/')
      .url().should('include', '/3/11/action_detail')
      .get('.nav-title').click()
      .url().should('eq', 'http://localhost:3000/')
  })

});