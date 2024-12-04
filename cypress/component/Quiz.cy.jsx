import React from "react";
import Quiz from "../../src/components/Quiz";
import { describe } from "vitest";

describe("Quiz", ({ test }) => {
    it("should render a quiz", () => {
        test(<Quiz />);
    });
});

cy.mount(<Quiz />);

cy.get("button").should('contain', 'Submit').click();
for (let i = 0; i < 5; i++) {
    cy.get("button").click();
    cy.get("button").should('contain', 'Next').click();
    cy.get("button").should('contain', 'Submit').click();
}

cy. get('h2').should('contain', 'You have completed the quiz!');
cy.get('div[class="score"]').should('contain', 'Your score is 0 out of 5');
cy.get('button').should('contain', 'Restart Quiz').click();
