import { filterPodcasts } from "@/components/Podcaster/filterFunction";

describe("filterPodcasts", () => {
  test("returns filtered array based on search text", () => {
    const data = [
      {
        title: { label: "Podcast 1" },
        "im:artist": { label: "Author 1" },
      },
      {
        title: { label: "Podcast 2" },
        "im:artist": { label: "Author 2" },
      },
      {
        title: { label: "Another Pocast" },
        "im:artist": { label: "Another Author" },
      },
    ];

    const searchText = "podcast";
    const filteredData = filterPodcasts(data, searchText);

    expect(filteredData).toHaveLength(2);
    expect(filteredData[0].title.label).toBe("Podcast 1");
    expect(filteredData[1].title.label).toBe("Podcast 2");
  });

  test("returns empty array when no matches found", () => {
    const data = [
      {
        title: { label: "Podcast 1" },
        "im:artist": { label: "Author 1" },
      },
      {
        title: { label: "Podcast 2" },
        "im:artist": { label: "Author 2" },
      },
    ];

    const searchText = "nonexistent";
    const filteredData = filterPodcasts(data, searchText);

    expect(filteredData).toHaveLength(0);
  });

  test("returns full array when search text is empty", () => {
    const data = [
      {
        title: { label: "Podcast 1" },
        "im:artist": { label: "Author 1" },
      },
      {
        title: { label: "Podcast 2" },
        "im:artist": { label: "Author 2" },
      },
    ];

    const searchText = "";
    const filteredData = filterPodcasts(data, searchText);

    expect(filteredData).toHaveLength(2);
    expect(filteredData[0].title.label).toBe("Podcast 1");
    expect(filteredData[1].title.label).toBe("Podcast 2");
  });
});
