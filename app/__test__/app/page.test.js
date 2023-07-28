import React from "react";
import { render, screen } from "@testing-library/react";
import HomePageApp from "../../page";

jest.mock("../../../components/Podcaster", () =>
  jest.fn().mockReturnValue(<div>Podcaster Component</div>)
);

describe("HomePageApp", () => {
  test("renders the MainTemplate component with the Podcaster component inside", () => {
    render(<HomePageApp />);
    const podcasterComponent = screen.getByText("Podcaster Component");
    expect(podcasterComponent).toBeInTheDocument();
  });
});
