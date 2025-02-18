"use client"
import { motion } from "framer-motion"
import URLForm from "./URLForm"
import ShortUrlDisplay from "./ShortUrlDisplay"
import DarkModeToggle from "./DarkModeToggle"
import { useDarkMode } from "@/hooks/useDarkMode"
import { useUrlShortener } from "@/hooks/useUrlShortener"
//C:\Users\Lenovo laptop\Documents\programming stuff\react\url-shortener\src\hooks\useURLShortener.ts

export default function URLShortener() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
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
        <URLForm
          url={url}
          setUrl={setUrl}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          error={error}
          isDarkMode={isDarkMode}
        />
        {shortUrl && <ShortUrlDisplay shortUrl={shortUrl} copyToClipboard={copyToClipboard} isDarkMode={isDarkMode} />}
      </motion.div>
      <div className="relative mt-8">
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  )
}

