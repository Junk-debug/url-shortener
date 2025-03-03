import { useState, useCallback } from "react";

type FetchOptions<R> = {
  onSuccess?: (data: R) => void;
  onError?: (error: Error) => void;
  onSettled?: () => void;
};

export function useFetch<R, T extends unknown[]>(
  fetcherFn: (...params: T) => Promise<R>,
  { onError, onSettled, onSuccess }: FetchOptions<R> = {}
) {
  const [data, setData] = useState<R | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (...params: T) => {
      setIsLoading(true);
      setError(null);
      setData(null);

      try {
        const response = await fetcherFn(...params);
        setData(response);
        setError(null);
        if (onSuccess) onSuccess(response);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          if (onError) onError(err);
        }
      } finally {
        setIsLoading(false);
        if (onSettled) onSettled();
      }
    },
    [fetcherFn, onError, onSettled, onSuccess]
  );

  return { data, isLoading, error, fetchData };
}
