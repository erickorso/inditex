import React from "react";
import { render, screen } from "@testing-library/react";
import HomePageApp from "../../podcast/[podcastId]/page";

jest.mock("../../../components/Podcaster/PodcastDetail", () =>
  jest.fn().mockReturnValue(<div>Podcaster Component</div>)
);

describe("HomePageApp", () => {
  test("renders the MainTemplate component with the Podcaster component inside", () => {
    render(<HomePageApp />);
    const podcasterComponent = screen.getByText("Podcaster Component");
    expect(podcasterComponent).toBeInTheDocument();
  });
});
