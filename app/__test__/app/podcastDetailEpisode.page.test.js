import React from "react";
import { render, screen } from "@testing-library/react";
import HomePageApp from "../../podcast/[podcastId]/episode/[episodeId]/page";

jest.mock(
  "../../../components/Podcaster/PodcastDetail/PodcastEpisodeDetailPage",
  () => jest.fn().mockReturnValue(<div>Podcaster Component</div>)
);

describe("HomePageApp", () => {
  test("renders the MainTemplate component with the Podcaster component inside", () => {
    render(<HomePageApp />);
    const podcasterComponent = screen.getByText("Podcaster Component");
    expect(podcasterComponent).toBeInTheDocument();
  });
});
