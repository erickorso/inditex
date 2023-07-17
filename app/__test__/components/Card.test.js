import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "@/components/Cards/Card";

const mockInfo = {
  id: "1",
  name: "Test Name",
  title: "Test Title",
  author: "Test Author",
  images: [
    { label: "/logo.jpg" },
    { label: "/logo.jpg" },
    { label: "/logo.jpg" },
  ],
};

describe("Card", () => {
  test("renders card correctly", () => {
    const { getByText, getByAltText } = render(<Card info={mockInfo} />);
    const nameElement = getByText(mockInfo.name);
    const authorElement = getByText(mockInfo.author);
    const imageElement = getByAltText(mockInfo.name);

    expect(nameElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });

  test("navigates to correct link on click", () => {
    const { container } = render(<Card info={mockInfo} />);
    const cardWrapper = container.firstChild;

    fireEvent.click(cardWrapper);
  });
});
