import { render } from "@testing-library/react";
import PodcastEpisodeDetailPage from "@/components/Podcaster/PodcastDetail/PodcastEpisodeDetailPage";
import ReduxProvider from "../../../lib/providers/ReduxProvider";
import cardMock from "../__mocks/cardMock";
import episodeMock from "../__mocks/episodeMock";

const mockInfo = [cardMock];
const mockInfoEpisodes = [episodeMock];

jest.mock("next/navigation", () => ({
  useParams: jest.fn(() => {
    return {
      podcastId: "1535809341",
    };
  }),
  redirect: jest.fn(),
}));
jest.mock("../../../lib/hooks/useGetPodcasts", () => ({
  useGetPodcasts: jest.fn(() => {
    return {
      data: mockInfo,
      loading: false,
      error: false,
    };
  }),
}));
jest.mock("../../../lib/hooks/useGetData", () => ({
  useGetData: jest.fn(() => {
    return {
      data: {
        results: mockInfoEpisodes,
      },
      loading: false,
      error: false,
    };
  }),
}));

describe("PodcastEpisodeDetailPage", () => {
  test("renders CardXl and PodcastEpisodeDetail components", () => {
    const { getByTestId } = render(
      <ReduxProvider>
        <PodcastEpisodeDetailPage />
      </ReduxProvider>
    );

    const cardXlElement = getByTestId("card-xl");
    const podcastEpisodeDetailElement = getByTestId("podcast-episode-detail");

    expect(cardXlElement).toBeInTheDocument();
    expect(podcastEpisodeDetailElement).toBeInTheDocument();
  });

  test("renders cardXl correctly & redirect", () => {
    jest.mock("../../../lib/hooks/useGetData", () => ({
      useGetData: jest.fn(() => {
        return {
          data: null,
          loading: true,
          error: false,
        };
      }),
    }));
    const { debug } = render(
      <ReduxProvider>
        <PodcastEpisodeDetailPage />
      </ReduxProvider>
    );
    debug();
  });
});
