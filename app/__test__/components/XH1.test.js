import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import XH1 from "@/components/Atoms/XH1";

describe("XH1", () => {
  const title = "Test Title";

  test("renders the title correctly", () => {
    const { getByText } = render(<XH1 title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders a header correctly", () => {
    const { getByRole } = render(<XH1 title={title} />);
    const header = getByRole("heading");
    expect(header).toHaveTextContent(title);
  });
});
