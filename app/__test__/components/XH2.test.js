import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import XH2 from "@/components/Atoms/XH2";

describe("XH2", () => {
  const title = "Test Title";

  test("renders the title correctly", () => {
    const { getByText } = render(<XH2 title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders a header correctly", () => {
    const { getByRole } = render(<XH2 title={title} />);
    const header = getByRole("heading");
    expect(header).toHaveTextContent(title);
  });
});
