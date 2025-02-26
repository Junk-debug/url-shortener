"use client";

import { useFetch } from "@/hooks/useFetch";

type ShortenUrlResponse = {
  data: {
    shortLink: string;
  };
};

const shortenUrlFetcher = async (url: string): Promise<ShortenUrlResponse> => {
  const response = await fetch("https://io.up.railway.app/links/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error("Failed to shorten the URL");
  }

  return response.json();
};

export function useUrlShortener() {
  const { data, isLoading, error, fetchData } = useFetch<ShortenUrlResponse, [string]>(shortenUrlFetcher);

  return {
    shortUrl: data?.data.shortLink,
    error,
    isLoading,
    handleSubmit: fetchData, 
  };
}
