"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, LinkIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function URLShortener() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setShortUrl("")

    if (!url) {
      setError("Please enter a URL")
      return
    }

    try {
      new URL(url)
      // Here you would typically make an API call to your URL shortening service
      // For this example, we'll just simulate a shortened URL
      setShortUrl(`https://short.url/${Math.random().toString(36).substr(2, 6)}`)
    } catch {
      setError("Please enter a valid URL")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">URL Shortener</h1>
          <p className="mt-2 text-gray-600">Shorten your long URLs with ease</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <Label htmlFor="url" className="sr-only">
              Enter your URL
            </Label>
            <Input
              id="url"
              name="url"
              type="text"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-neutral-200 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm dark:border-neutral-800"
              placeholder="Enter your URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-neutral-200 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:border-neutral-800"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LinkIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Shorten URL
            </Button>
          </div>
        </form>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {shortUrl && (
          <div className="mt-8">
            <h2 className="text-lg font-medium mb-2">Your shortened URL:</h2>
            <div className="flex items-center space-x-2">
              <Input value={shortUrl} readOnly className="flex-grow" />
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(shortUrl)
                }}
                className="flex-shrink-0"
              >
                Copy
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

