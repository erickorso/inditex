import React from "react";
import { render, screen } from "@testing-library/react";
import StyledComponentsRegistry from "../../registry";
import { useServerInsertedHTML } from "next/navigation";

// Mock de useServerInsertedHTML
jest.mock("next/navigation", () => ({
  useServerInsertedHTML: jest.fn(),
}));

describe("StyledComponentsRegistry", () => {
  beforeEach(() => {
    // Simular el objeto window
    global.window = {};
  });

  test("renders the children when window is defined", () => {
    // Asignar un valor a window
    global.window = {};

    useServerInsertedHTML.mockImplementationOnce((callback) => {
      const result = callback();
      return result;
    });

    render(
      <StyledComponentsRegistry>
        <div data-testid="child-component">Child Component</div>
      </StyledComponentsRegistry>
    );

    const childComponent = screen.getByTestId("child-component");
    const childComponentText = screen.getByText("Child Component");
    expect(childComponent).toBeInTheDocument();
    expect(childComponentText).toBeInTheDocument();
  });
});
