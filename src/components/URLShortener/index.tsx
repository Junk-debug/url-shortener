"use client";

import { motion } from "framer-motion";
import URLForm from "./URLForm";
import ShortUrlDisplay from "./ShortUrlDisplay";
import { ModeToggle } from "@/components/mode-toggle";
import { useUrlShortener } from "@/hooks/useUrlShortener";
import { useState } from "react";

export default function UrlShortener() {
  const [url, setUrl] = useState<string>("");

  const { shortUrl, error, isLoading, handleSubmit, copyToClipboard } =
    useUrlShortener();

  const onSubmit = async (url: string) => {
    await handleSubmit(url);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 bg-linear-to-br from-purple-100 to-indigo-200 dark:bg-background dark:bg-none`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8"
      >
        <URLForm
          handleSubmit={onSubmit}
          isLoading={isLoading}
          error={error}
          url={url}
          setUrl={setUrl}
        />
        {shortUrl && (
          <ShortUrlDisplay
            shortUrl={shortUrl}
            copyToClipboard={copyToClipboard}
          />
        )}
      </motion.div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <ModeToggle />
      </motion.div>
    </div>
  );
}
