import React from "react";
import Quiz from "../../src/components/Quiz";
import { describe } from "vitest";

describe("Quiz", ({ test }) => {
    it("should render a quiz", () => {
        test(<Quiz />);
    });
});

