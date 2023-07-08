import { useEffect, useState } from "react";

export const useGetData = (url: string, err: null | string = '') => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const ERROR_MESSAGE = err !== '' ? err :  'Error en la respuesta del servidor'

  useEffect(() => {
    setLoading(true);
    if (!data) {
        setTimeout(() => {
            fetch(url)
              .then((response) => {
                if (!response.ok) {
                  setError(ERROR_MESSAGE)
                  console.error(ERROR_MESSAGE);
                }
                setLoading(false);
                return response.json();
              })
              .then((data) => setData(data))
              .catch((error) => {
                setLoading(false);
                setError(error.message)
              });
        }, 1000)
    }
  }, []);

  return {
    data,
    loading,
    error,
  };
};
