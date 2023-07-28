import React from "react";
import { render, screen } from "@testing-library/react";
import XNav from "@/components/XNav";
import { usePathname } from "next/navigation";

// Mock de usePathname
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("XNav", () => {
  test('renders the XH1 component with title "Podcaster" when path is home', () => {
    usePathname.mockReturnValue("/");
    render(<XNav />);
    const xh1Component = screen.getByText(/Podcaster/i);
    expect(xh1Component).toBeInTheDocument();
  });

  test('renders the XH1 component with title "Podcaster" wrapped in a Link when path is not home', () => {
    usePathname.mockReturnValue("/some-path");
    render(<XNav />);
    const linkElement = screen.getByRole("link");
    const xh1Component = screen.getByText(/Podcaster/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
    expect(xh1Component).toBeInTheDocument();
  });

  test('renders the XH1 component with title "Podcaster" when path is ROUTES.router.podcast', () => {
    usePathname.mockReturnValue("/podcast");
    render(<XNav />);
    const xh1Component = screen.getByText(/Podcaster/i);
    expect(xh1Component).toBeInTheDocument();
  });
});
