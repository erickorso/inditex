import React from "react";
import { render, waitFor } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import { setPodcastsStart } from "@/lib/redux/reducers/saga/podcast/slice.saga";
import PodcasterWithSaga from "@/components/PodcasterWithSaga";
import { filterPodcasts } from "@/components/Podcaster/filterFunction";
import cardMock from "../__mocks/cardMock";

// Mock de useSelector
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// Mock de setPodcastsStart
jest.mock("../../../lib/redux/reducers/saga/podcast/slice.saga", () => ({
  setPodcastsStart: jest.fn(),
}));

// Mock de filterPodcasts
jest.mock("../../../components/Podcaster/filterFunction", () => ({
  filterPodcasts: jest.fn(),
}));

describe("PodcasterWithSaga", () => {
  beforeEach(() => {
    // Configurar el estado inicial para useSelector
    // useSelector.mockReturnValue({ data: [], loading: false, error: null });
    // useSelector.mockReturnValueOnce("");
    // useSelector.mockReturnValueOnce({ data: [], loading: false, error: null });

    // Configurar useDispatch para obtener el dispatch
    useDispatch.mockReturnValue(jest.fn());
  });

  test("dispatches setPodcastsStart on mount", () => {
    useSelector.mockReturnValueOnce({ data: [], loading: true, error: null });
    render(<PodcasterWithSaga />);
    expect(setPodcastsStart).toHaveBeenCalled();
  });

  test("renders the Loading component while loading", () => {
    useSelector.mockReturnValueOnce({ data: [], loading: true, error: null });
    const { getByTestId, debug } = render(<PodcasterWithSaga />);
    debug();
    const loadingComponent = getByTestId("loading-animation");
    expect(loadingComponent).toBeInTheDocument();
  });

  test("renders the Loading component when there is an error", () => {
    const errorMessage = "Error fetching data";
    useSelector.mockReturnValueOnce({
      data: [],
      loading: false,
      error: errorMessage,
    });
    const { getByText } = render(<PodcasterWithSaga />);
    const errorElement = getByText(`Error: ${errorMessage}`);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveStyle({ marginTop: "50px", color: "red" });
  });

  test("renders the GridContainer and Card components with filtered data", async () => {
    const mockData = [cardMock];
    useSelector.mockReturnValueOnce({
      data: mockData,
      loading: false,
      error: null,
    });
    useSelector.mockReturnValueOnce("searchValue");
    filterPodcasts.mockReturnValue(mockData);
    const { getByTestId, getByText } = render(<PodcasterWithSaga />);
    const gridContainer = getByTestId("saga-grid-container");
    const cardComponents = getByText(cardMock["im:name"].label);
    await waitFor(() => {
      expect(gridContainer).toBeInTheDocument();
      expect(cardComponents).toBeInTheDocument();
    });
  });

  test("renders the GridContainer and Card components with full data when search text is empty", async () => {
    const mockData = [cardMock];
    useSelector.mockReturnValueOnce({
      data: mockData,
      loading: false,
      error: null,
    });
    useSelector.mockReturnValueOnce("");
    const { getByTestId, getByText } = render(<PodcasterWithSaga />);
    const gridContainer = getByTestId("saga-grid-container");
    const cardComponents = getByText(cardMock["im:name"].label);
    await waitFor(() => {
      expect(gridContainer).toBeInTheDocument();
      expect(cardComponents).toBeInTheDocument();
    });
  });
});
