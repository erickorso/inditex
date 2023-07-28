import React from "react";
import { render } from "@testing-library/react";
import Maintemplate from "@/components/Templates/Maintemplate";

describe("Maintemplate", () => {
  test("renders the XNav component", () => {
    const { getByText } = render(<Maintemplate />);
    const xNavComponent = getByText("Podcaster");
    expect(xNavComponent).toBeInTheDocument();
  });

  test("renders the XFooter component", () => {
    const { getByText } = render(<Maintemplate />);
    const footerText = getByText(/erickorso@gmail.com | 2023/i);
    expect(footerText).toBeInTheDocument();
  });

  test("renders the children components", () => {
    const { getByTestId } = render(
      <Maintemplate>
        <div data-testid="child-component">Child Component</div>
      </Maintemplate>
    );
    const childComponent = getByTestId("child-component");
    expect(childComponent).toBeInTheDocument();
  });
});
