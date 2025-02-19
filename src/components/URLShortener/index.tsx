"use client";

import { motion } from "framer-motion";
import UrlForm from "./URLForm";
import ShortURLDisplay from "./ShortUrlDisplay";
import { ModeToggle } from "@/components/mode-toggle";
import { useUrlShortener } from "@/hooks/useUrlShortener";
import { useTheme } from "next-themes";

export default function UrlShortener() {
  const {
    url,
    setUrl,
    shortUrl,
    error,
    isLoading,
    handleSubmit,
    copyToClipboard,
  } = useUrlShortener();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 bg-gradient-to-br from-purple-100 to-indigo-200 dark:bg-background dark:bg-none`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8"
      >
        <UrlForm
          url={url}
          setUrl={setUrl}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
        />
        {shortUrl && (
          <ShortURLDisplay
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
