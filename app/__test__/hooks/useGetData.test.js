import { renderHook, act } from "@testing-library/react";
import { useGetData } from "../../../lib/hooks/useGetData";
import { rest } from "msw";
import { setupServer } from "msw/node";

const data = { id: 1, name: "John Doe" };

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json([...data]));
  })
);

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useGetData tests", () => {
  test("should send the loading state", async () => {
    const { result } = renderHook(() => useGetData("/api"));

    act(() => {
      console.log({ result });
    });

    expect(result.current.loading).toBeTruthy();
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeFalsy();
  });
});
