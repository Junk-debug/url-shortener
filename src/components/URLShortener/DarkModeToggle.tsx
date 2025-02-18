"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

interface DarkModeToggleProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export default function DarkModeToggle({ isDarkMode, toggleDarkMode }: DarkModeToggleProps) {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial={false}
      animate={{
        backgroundColor: isDarkMode ? "rgb(250 204 21)" : "rgb(31 41 55)",
      }}
      transition={{ duration: 0.3 }}
      style={{ borderRadius: "9999px" }}
    >
      <Button
        onClick={toggleDarkMode}
        className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
          isDarkMode ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-white"
        }`}
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <AnimatePresence mode="wait">
          {isDarkMode ? (
            <motion.div
              key="sun"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
        <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
      </Button>
    </motion.div>
  )
}

