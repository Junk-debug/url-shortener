"use client";

import { useFetch } from "@/hooks/useFetch";

type ShortenSuccess = {
  message: string;
  statusCode: number;
  data: {
    shortLink: string;
  };
};

type ShortenError = {
  error: string;
  message: string[];
  statusCode: 400;
};

function isShortenError(obj: unknown): obj is ShortenError {
  return (
    obj !== null &&
    typeof obj === "object" &&
    "error" in obj &&
    typeof obj.error === "string" &&
    "message" in obj &&
    Array.isArray(obj.message) &&
    "statusCode" in obj &&
    typeof obj.statusCode === "number"
  );
}

const shortenUrlFetcher = async (url: string) => {
  const response = await fetch("https://io.up.railway.app/links/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  const res = (await response.json()) as ShortenSuccess | ShortenError;

  if (isShortenError(res) && !response.ok) {
    throw new Error(res.message.join("\n"));
  }

  return (res as ShortenSuccess).data;
};

export function useUrlShortener() {
  return useFetch(shortenUrlFetcher);
}
