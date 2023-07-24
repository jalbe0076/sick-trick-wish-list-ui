describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/tricks', {
      statusCode: 200, 
      fixture: 'tricks'
    })
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      statusCode: 200, 
      fixture: 'tricks'
    })

    cy.visit('http://localhost:3000/');
  })

  it('passes', () => {
    cy.get('h1').contains('Sick')
  })
})