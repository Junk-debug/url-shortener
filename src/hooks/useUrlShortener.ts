"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { copyToClipboard } from "@/lib/copyToClipboard";

export function useUrlShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (url: string) => {
    // event.preventDefault();
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

  const handleCopy = async () => {
    if (shortUrl) {
      const success = await copyToClipboard(shortUrl);
      if (success) {
        toast.success(
          "Copied! The shortened URL has been copied to your clipboard."
        );
      } else {
        toast.error("Failed to copy URL.");
      }
    }
  };

  useEffect(() => {
    if (copyStatus === "success") {
      console.log("success");
      toast.success(
        "Copied! The shortened URL has been copied to your clipboard."
      );
      setCopyStatus("idle");
    } else if (copyStatus === "error") {
      toast.success("Error copying URL");
      setCopyStatus("idle");
    }
  }, [copyStatus]);

  return {
    url,
    setUrl,
    shortUrl,
    error,
    isLoading,
    handleSubmit,
    copyToClipboard: handleCopy,
  };
}
