"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy } from "lucide-react"

interface ShortUrlDisplayProps {
  shortUrl: string
  copyToClipboard: () => Promise<void>
  isDarkMode: boolean
}

export default function ShortUrlDisplay({ shortUrl, copyToClipboard, isDarkMode }: ShortUrlDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      <h2 className={`text-lg font-medium mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>Your shortened URL:</h2>
      <div className="flex items-center space-x-2">
        <Input
          value={shortUrl}
          readOnly
          className={`flex-grow ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
        />
        <Button onClick={copyToClipboard} className="flex-shrink-0 bg-purple-500 hover:bg-purple-600">
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}

