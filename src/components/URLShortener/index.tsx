"use client"

import { motion } from "framer-motion"
import UrlForm from "./UrlForm"
import ShortURLDisplay from "./ShortUrlDisplay"
import { ModeToggle } from "@/components/mode-toggle"
import { useUrlShortener } from "@/hooks/useUrlShortener"
import { useTheme } from "next-themes"

export default function UrlShortener() {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"
  const { url, setUrl, shortUrl, error, isLoading, handleSubmit, copyToClipboard } = useUrlShortener()

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-purple-100 to-indigo-200"
      }`}
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
          isDarkMode={isDarkMode}
        />
        {shortUrl && <ShortURLDisplay shortUrl={shortUrl} copyToClipboard={copyToClipboard} isDarkMode={isDarkMode} />}
      </motion.div>
      <div className="relative mt-8">
        <ModeToggle />
      </div>
    </div>
  )
}

