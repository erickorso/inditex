import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "@/components/Loading";

describe("Loading", () => {
  test("renders LoadingAnimation when loading is true", () => {
    const { getByTestId, debug } = render(<Loading loading={true} />);
    const loadingAnimation = getByTestId("loading-animation");
    expect(loadingAnimation).toBeInTheDocument();
  });

  test("renders error message when error is provided", () => {
    const errorMessage = "Error fetching data";
    const { getByText } = render(
      <Loading loading={false} error={errorMessage} />
    );
    const errorElement = getByText(`Error: ${errorMessage}`);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveStyle({ marginTop: "50px", color: "red" });
  });
  test("no render", () => {
    const { debug } = render(<Loading loading={false} error={null} />);
    debug();
  });
});
