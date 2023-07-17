import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CardXl from "@/components/Cards/CardXl";
import ReduxProvider from "../../../lib/providers/ReduxProvider";
import cardMock from "../__mocks/cardMock";
import mockRouter from "next-router-mock";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";

mockRouter.useParser(createDynamicRouteParser(["/podcast/[podcastId]"]));

const mockInfo = [cardMock];

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

describe("CardXl", () => {
  test("should parse dynamic routes", () => {
    mockRouter.push("podcast/1535809341");
    expect(mockRouter).toMatchObject({
      pathname: "/podcast/[podcastId]",
      query: { podcastId: "1535809341" },
    });
  });

  test("renders cardXl correctly", () => {
    mockRouter.push("podcast/1535809341");
    const { getByText, getByAltText } = render(
      <ReduxProvider>
        <CardXl />
      </ReduxProvider>
    );

    const nameElement = getByText(cardMock["im:name"].label);
    const authorElement = getByText(cardMock["im:artist"]?.label);
    const imageElement = getByAltText(cardMock["im:name"].label);

    expect(nameElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  test("renders cardXl correctly & redirect", () => {
    mockRouter.push("podcast/123");
    jest.mock("../../../lib/hooks/useGetPodcasts", () => ({
      useGetPodcasts: jest.fn(() => {
        return {
          data: null,
          loading: false,
          error: false,
        };
      }),
    }));
    const { debug } = render(
      <ReduxProvider>
        <CardXl />
      </ReduxProvider>
    );
    debug();
  });

  test("navigates to correct link on click", () => {
    const { container } = render(
      <ReduxProvider>
        <CardXl info={mockInfo} />
      </ReduxProvider>
    );
    const cardXlWrapper = container.firstChild;

    fireEvent.click(cardXlWrapper);
  });
});
