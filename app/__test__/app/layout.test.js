import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "../../layout";

describe("RootLayout", () => {
  test("renders the ReduxProvider component with the StyledComponentsRegistry component inside", () => {
    render(
      <RootLayout>
        <div>Child Component</div>
      </RootLayout>
    );
    const childComponent = screen.getByText("Child Component");
    expect(childComponent).toBeInTheDocument();
  });
});
