import React from "react";
import { render, screen } from "@testing-library/react";
import TestPage from "../../test/page";

jest.mock("../../../components/templates/Maintemplate", () =>
  jest.fn().mockReturnValue(<div>Podcaster Component</div>)
);

describe("TestPage", () => {
  test("renders the MainTemplate component with the Podcaster component inside", () => {
    render(<TestPage />);
    const podcasterComponent = screen.getByText("Podcaster Component");
    expect(podcasterComponent).toBeInTheDocument();
  });
});
