describe('Let\'s Chill error modal for handling any error outside the catch', () => {

   it('should show error modal when selected feelings actions are unavailable', () => {
    cy.intercept('GET', 'https://lets-chill-api.herokuapp.com/api/v1/feelings/3', {statusCode: 500})
    cy.visit('http://localhost:3000/')
      .get('.feelings-form-buttons').click(100, 125)
    cy.get('.error-message')
      .should('have.text', 'Sorry, an error has occurred! Please try again later.')
  })

  
  it('should show error modal when selected actions details are unavailable', () => {
    cy.intercept('GET', 'https://lets-chill-api.herokuapp.com/api/v1/actions/11', {statusCode: 500})
    cy.visit('http://localhost:3000/3/11/action_detail')
    cy.get('.error-message')
      .should('have.text', 'Sorry, an error has occurred! Please try again later.Sorry, an error has occurred! Please try again later.')
  })

  it('should show error modal when chill log is unavailable', () => {
    cy.intercept('GET', 'https://lets-chill-api.herokuapp.com/api/v1/log', {statusCode: 500})
    cy.visit('http://localhost:3000/chill_log')
    cy.get('.error-message')
      .should('have.text', 'Sorry, an error has occurred! Please try again later.')
  })

  it('should show error modal when trying to post an action to the chill log if there is a problem with the network', () => {
    cy.intercept('https://lets-chill-api.herokuapp.com/api/v1/feelings/3', { fixture: 'singleFeeling.json' })
    cy.intercept('https://lets-chill-api.herokuapp.com/api/v1/actions/11', { fixture: 'singleAction.json' })
    cy.intercept('POST', 'https://lets-chill-api.herokuapp.com/api/v1/log', { statusCode: 500 })
    cy.visit('http://localhost:3000')
    cy.viewport(1000, 1000)
      .get('.feelings-form-buttons').click(100, 125)
      .get('.action-card').should('have.length', 7)
      .get('.action-card').contains('Change The Scenery')
      .get('.actions-container').click(200, 150)
      .get('.log-form-title').contains('Did this help?')
      .get('.helped-buttons').click(10, 10)
      .get('.add-to-log-button').click({force: true})
      .get('.error-message')
      .should('have.text', 'Sorry, an error has occurred! Please try again later.')
  })

})