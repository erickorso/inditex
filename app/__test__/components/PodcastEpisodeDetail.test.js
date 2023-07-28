import { render, waitFor } from "@testing-library/react";
import PodcastDetail from "@/components/Podcaster/PodcastDetail";
import ReduxProvider from "../../../lib/providers/ReduxProvider";
import cardMock from "../__mocks/cardMock";
import episodeMock from "../__mocks/episodeMock";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Erick" }));
  })
);

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

const mockInfo = [cardMock];
const mockInfoEpisodes = [1, episodeMock];

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

describe("PodcastDetail", () => {
  test("renders CardXl and PodcastEpisodeDetail components", async () => {
    const { getByText } = render(
      <ReduxProvider>
        <PodcastDetail />
      </ReduxProvider>
    );

    const spanElement = getByText("Episodes:");
    const titleElement = getByText("Title");

    expect(spanElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
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
        <PodcastDetail />
      </ReduxProvider>
    );
    debug();
  });
});
