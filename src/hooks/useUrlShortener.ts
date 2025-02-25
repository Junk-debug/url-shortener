"use client";

import { useState } from "react";

export function useUrlShortener() {
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (url: string) => {
    setError(null);
    setShortUrl(null);
    setIsLoading(true);

    if (!url) {
      setError("Please enter a URL");
      setIsLoading(false);
      return;
    }

    try {
      new URL(url);

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

      const data = await response.json();
      console.log("API Response:", data);

      if (data?.data?.shortLink) {
        setShortUrl(data.data.shortLink);
      } else {
        setError("Failed to shorten the URL, please try again.");
      }
    } catch (error) {
      setError("Failed to shorten the URL or invalid URL");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    shortUrl,
    error,
    isLoading,
    handleSubmit,
  };
}
