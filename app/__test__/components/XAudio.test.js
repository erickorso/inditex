import React from "react";
import { render } from "@testing-library/react";
import XAudio from "@/components/XAudio";

describe("XAudio", () => {
  test("renders the audio element when URL is provided", () => {
    const url = "https://example.com/audio.mp3";
    const { getByTestId, debug } = render(<XAudio url={url} />);
    const audioElement = getByTestId("audio-element");
    expect(audioElement).toBeInTheDocument();
    expect(audioElement.getAttribute("src")).toBe(url);
  });

  test("does not render the audio element when URL is not provided", () => {
    const { queryByTestId } = render(<XAudio url="" />);
    const audioElement = queryByTestId("audio-element");
    expect(audioElement).toBeNull();
  });
});
