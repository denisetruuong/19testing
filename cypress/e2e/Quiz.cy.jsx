const { createFactory } = require("react")

describe("Quiz e2e test", () => {
    it('Will run the quiz, test the buttons in order.', () => {
        Cy.visit('/')
        cy.get('button').should('have.text', 'Start Quiz').click()

        for (let i = 0; i < 5; i++) {
            cy.get('button').should('have.text', 'Next').click()
        }
        cy.get('button').should('have.text', 'Finish').click()
        cy.get('div[class=alert success]').should('have.text', 'You have completed the quiz!')

        cy.get('button').should('contain.text', "Take Again").click()
        for (let i = 0; i < 5; i++) {
            cy.get('button').should('have.text', 'Next').click()
        }

        cy.get('button').should('contain.text', 'Take New Quiz').click()
        for (let i = 0; i < 10; i++) {
        
            cy.get('[data-test="test-item-2"] button').click()
        }
        cy.get('h2').should('contain.text', 'Quiz Finished')
        cy.get('div[class="alert alert-success"]').invoke('text').should('match', /Your Score: \d+\/10/i)
        cy.get('button').should('contain.text', 'Take New Quiz').click()

    })
})