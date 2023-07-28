import { renderHook } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import { useGetPodcasts } from "../../../lib/hooks/useGetPodcasts";
import {
  fetchPodcasts,
  storePodcasts,
} from "../../../lib/redux/reducers/podcasts";

// Simulamos el estado inicial del store de Redux para usar en los tests
const initialState = {
  podcasts: {
    data: [],
    loading: true,
    error: null,
  },
};

// Mock de useSelector para devolver el estado inicial
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
// Mock de useSelector para devolver el estado inicial
jest.mock("../../../lib/redux/reducers/podcasts", () => ({
  fetchPodcasts: jest.fn(() => ({
    data: [],
    loading: true,
    error: null,
  })),
  useDispatch: jest.fn(),
}));

describe("useGetPodcasts", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch podcasts if data is empty", async () => {
    // Configuramos el mock de useSelector para devolver el estado inicial
    useSelector.mockImplementation((selector) => selector(initialState));

    // Mock de useDispatch para simular el dispatch de Redux
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    // Renderizamos el hook
    const { result } = renderHook(() => useGetPodcasts());

    // Verificamos que el hook haya realizado la llamada fetchPodcasts
    expect(result.current).toEqual(fetchPodcasts());
  });

  it("should not fetch podcasts if data is already available", () => {
    // Creamos un estado con datos ya cargados
    const loadedPodcasts = [
      { id: 1, title: "Podcast 1" },
      { id: 2, title: "Podcast 2" },
    ];
    const loadedState = {
      podcasts: {
        data: loadedPodcasts,
        loading: false,
        error: null,
      },
    };

    // Configuramos el mock de useSelector para devolver el estado con datos cargados
    useSelector.mockImplementation((selector) => selector(loadedState));

    // Mock de useDispatch para simular el dispatch de Redux
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    // Renderizamos el hook
    const { result } = renderHook(() => useGetPodcasts());

    // Verificamos que el hook no haya realizado la llamada fetchPodcasts
    expect(mockDispatch).not.toHaveBeenCalledWith(fetchPodcasts(mockDispatch));
  });
});
