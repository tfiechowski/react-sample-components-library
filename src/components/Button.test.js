import { render, getByText } from "@testing-library/react";
import React from "react";
import Button from "components/Button";

describe("Button", () => {
  test("should display text", () => {
    const { container } = render(<Button text="We Salute You!" />);

    getByText(container, "We Salute You!");
  });
});
