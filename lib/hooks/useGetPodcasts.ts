import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { fetchPodcasts, storePodcasts } from "@/lib/redux/reducers/podcasts";

export const useGetPodcasts = () => {
  const podcasts: any = useSelector((state: RootState) => state.podcasts);
  const { data, loading, error } = podcasts;
  const dispatch = useDispatch();
  useEffect(() => {
    const isClient = typeof document !== "undefined";
    if (isClient) {
      if (data && data.length === 0) {
        const storedData = localStorage.getItem("podcasts");
        if (!loading && !error) {
          if (storedData) {
            storePodcasts(dispatch, JSON.parse(storedData));
          } else {
            fetchPodcasts(dispatch);
          }
        }
      }
    }
  }, [data, loading, error, dispatch]);

  return {
    data,
    loading,
    error,
  };
};
