import React from "react";
import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import Podcasts from "@/components/Podcaster";
import { filterPodcasts } from "@/components/Podcaster/filterFunction";
import { useGetPodcasts } from "../../../lib/hooks/useGetPodcasts";
import cardMock from "../__mocks/cardMock";

const mockInfo = [cardMock];

// Mock de useSelector
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock de useGetPodcasts
jest.mock("../../../lib/hooks/useGetPodcasts", () => ({
  useGetPodcasts: jest.fn(() => {
    return {
      data: mockInfo,
      loading: false,
      error: false,
    };
  }),
}));
// Mock de filterPodcasts
jest.mock("../../../components/Podcaster/filterFunction", () => ({
  filterPodcasts: jest.fn(),
}));

describe("Podcasts", () => {
  beforeEach(() => {
    useSelector.mockReturnValue("");
  });

  test("renders the Search component", () => {
    const { getByRole } = render(<Podcasts />);
    const searchComponent = getByRole("textbox");
    expect(searchComponent).toBeInTheDocument();
  });

  test("renders the GridContainer", () => {
    const { getByTestId } = render(<Podcasts />);
    const gridContainer = getByTestId("podcaster-grid-container");
    expect(gridContainer).toBeInTheDocument();
  });

  test("renders the Loading component while loading", () => {
    useGetPodcasts.mockReturnValue({ data: null, loading: true, error: null });
    const { getByTestId } = render(<Podcasts />);
    const loadingAnimation = getByTestId("loading-animation");
    expect(loadingAnimation).toBeInTheDocument();
  });

  test("renders the Loading component when there is an error", () => {
    const errorMessage = "Error fetching data";
    useGetPodcasts.mockReturnValue({
      data: null,
      loading: false,
      error: errorMessage,
    });
    const { getByText, debug } = render(<Podcasts />);
    const errorElement = getByText(`Error: ${errorMessage}`);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveStyle({ marginTop: "50px", color: "red" });
  });

  test("renders the Card components with filtered data", () => {
    const mockData = [cardMock];
    useGetPodcasts.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });
    filterPodcasts.mockReturnValue(cardMock);
    const { getByText, getByRole } = render(<Podcasts />);
    const nameElement = getByText(cardMock["im:name"].label);
    const authorElement = getByText(cardMock["im:artist"].label);
    const searchComponent = getByRole("textbox");
    expect(searchComponent).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
  });
});
