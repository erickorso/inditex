import { call, put } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { setPodcastsSuccess, setPodcastsFailure } from "./slice.saga";
import ROUTES from "@/lib/constants/routes.ctte";
import { workGetData, podcastsWatcher } from "./podcastsSaga"; // Asegúrate de importar las funciones correctamente

describe("podcastsSaga", () => {
  it("should fetch podcasts and dispatch success action", () => {
    const formatedPodcastData = {
      feed: { entry: [{ id: 1, title: "Podcast 1" }] },
    };
    const mockResponse = { json: () => formatedPodcastData };

    return expectSaga(workGetData)
      .provide([[call(fetch, `/api${ROUTES.router.podcast}`), mockResponse]])
      .put(setPodcastsSuccess(formatedPodcastData.feed.entry))
      .run();
  });

  it("should handle error and dispatch failure action", () => {
    const errorMessage = "the service has a problem";
    const mockResponse = {
      json: () => Promise.reject(new Error(errorMessage)),
    };

    return expectSaga(workGetData)
      .provide([[call(fetch, `/api${ROUTES.router.podcast}`), mockResponse]])
      .put(setPodcastsFailure(errorMessage))
      .run();
  });

  it("should watch for action and call workGetData", () => {
    return expectSaga(podcastsWatcher)
      .takeEvery("podcasts-saga/setPodcastsStart", workGetData)
      .run();
  });
});
