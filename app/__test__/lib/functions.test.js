import {
  changeDate,
  millisToTime,
  getRandomNumber,
  isLocal,
  createMarkup,
} from "../../../lib/helpers/functions";

describe("changeDate", () => {
  test("returns the formatted date string", () => {
    const dateString = "2023-07-15";
    const expectedDate = "15/07/2023";

    const formattedDate = changeDate(dateString);

    expect(formattedDate).toBe(expectedDate);
  });
});

describe("millisToTime", () => {
  test("returns the formatted time string", () => {
    const milliseconds = 65000;
    const expectedTime = "01:05";

    const formattedTime = millisToTime(milliseconds);

    expect(formattedTime).toBe(expectedTime);
  });
});

describe("getRandomNumber", () => {
  test("returns a random number between 1 and 20", () => {
    const randomNumber = getRandomNumber();

    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(20);
  });
});

describe("isLocal", () => {
  test('returns true when NODE_ENV is set to "development"', () => {
    process.env.NODE_ENV = "development";

    const result = isLocal();

    expect(result).toBe(true);
  });

  test('returns false when NODE_ENV is not set to "development"', () => {
    process.env.NODE_ENV = "production";

    const result = isLocal();

    expect(result).toBe(false);
  });
});

describe("createMarkup", () => {
  test("returns an object with __html property", () => {
    const html = "<p>Hello, world!</p>";
    const expectedMarkup = { __html: html };

    const markup = createMarkup(html);

    expect(markup).toEqual(expectedMarkup);
  });
});
