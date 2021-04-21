_ = require('lodash')

describe('MBIT Test', () => {
  it('', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get('#main_contents > div > div.buttons > a > button').click()
    
    for (let question_pk = 1; question_pk <= 10; question_pk++ ) {
      const value = _.random(1, 5)
      cy.get(`input[type=radio][name=question-${question_pk}]`).check(String(value), { 'scrollBehavior': false })
      
      if (question_pk != 10) {
        cy.get(`#form > div:nth-child(${question_pk + 1}) > div.btn_wrap > button.next_btn`).click({ 'scrollBehavior': false })
      } else {
        cy.get(`#form > div:nth-child(${question_pk + 1}) > div.btn_wrap > input.submit_btn`).click({ 'scrollBehavior': false })
      }
      cy.wait(500)
    }
  })
})