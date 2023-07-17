import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import Search from "@/components/Search";
import { RootState } from "@/lib/redux/store";
import { setSearchAction } from "@/lib/redux/reducers/search";

// Mock del useDispatch y useSelector
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock del setSearchAction
jest.mock("../../../lib/redux/reducers/search", () => ({
  setSearchAction: jest.fn(),
}));

describe("Search", () => {
  beforeEach(() => {
    // Configurar el estado inicial para useSelector
    useSelector.mockReturnValue("some");
  });

  test("renders the search input with initial value", () => {
    render(<Search />);
    useSelector.mockReturnValue("");
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe("");
  });

  test("dispatches setSearchAction on input change", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    render(<Search />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(setSearchAction).toHaveBeenCalledWith(dispatch, "new value");
  });

  test("clears the search value on button click", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    render(<Search />);
    const clearButtonElement = screen.getByRole("button", { name: "x" });
    fireEvent.click(clearButtonElement);
    expect(setSearchAction).toHaveBeenCalledWith(dispatch, "");
  });

  test("resets the search value on unmount if it is not empty", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue("nonEmptyValue");
    const { unmount } = render(<Search />);
    unmount();
    expect(setSearchAction).toHaveBeenCalledWith(dispatch, "");
  });
});
