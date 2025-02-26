"use client";

import { motion } from "framer-motion";
import URLForm from "./URLForm";
import ShortUrlDisplay from "./ShortUrlDisplay";
import { ModeToggle } from "@/components/mode-toggle";
import { useUrlShortener } from "@/hooks/useUrlShortener";
import Headline from "@/components/ui/headline";

export default function UrlShortener() {
  const { shortUrl, error, isLoading, handleSubmit } = useUrlShortener();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 bg-linear-to-br from-purple-100 to-indigo-200 dark:bg-background dark:bg-none">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8"
      >
        <Headline isLoading={isLoading} />
        <URLForm
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
        />
        {shortUrl && <ShortUrlDisplay shortUrl={shortUrl} />}
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
