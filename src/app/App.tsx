"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, LinkIcon, Copy, Sun, Moon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "sonner";


const URLShortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setShortUrl("");
    setIsLoading(true);

    if (!url) {
      setError("Please enter a URL");
      setIsLoading(false);
      return;
    }

    try {
      new URL(url);
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setShortUrl(
        `https://short.url/${Math.random().toString(36).substr(2, 6)}`
      );
    } catch {
      setError("Please enter a valid URL");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      toast("Copied! The shortened URL has been copied to your clipboard.");
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy the URL. Please try again.");
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-900"
          : "bg-gradient-to-br from-purple-100 to-indigo-200"
      }`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="inline-block mb-2"
              >
                <LinkIcon
                  className={`h-12 w-12 ${
                    isDarkMode ? "text-purple-400" : "text-purple-600"
                  }`}
                />
              </motion.div>
            ) : (
              <motion.div
                key="static"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inline-block mb-2"
              >
                <LinkIcon
                  className={`h-12 w-12 ${
                    isDarkMode ? "text-purple-400" : "text-purple-600"
                  }`}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <h1
            className={`text-4xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            URL Shortener
          </h1>
          <p
            className={`mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Shorten your long URLs with style
          </p>
        </div>

        <motion.div
          className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 ${
            isDarkMode ? "shadow-purple-500/20" : "shadow-purple-500/50"
          }`}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label
                htmlFor="url"
                className={`block text-sm font-medium ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                Enter your URL
              </Label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Input
                  id="url"
                  name="url"
                  type="text"
                  required
                  className={`block w-full pr-10 ${
                    isDarkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-gray-900 border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500`}
                  placeholder="https://example.com/very-long-url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isLoading}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <LinkIcon
                    className={`h-5 w-5 ${
                      isDarkMode ? "text-gray-400" : "text-gray-400"
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Shorten URL"}
            </Button>
          </form>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {shortUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6"
            >
              <h2
                className={`text-lg font-medium mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Your shortened URL:
              </h2>
              <div className="flex items-center space-x-2">
                <Input
                  value={shortUrl}
                  readOnly
                  className={`flex-grow ${
                    isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"
                  }`}
                />
                <Button
                  onClick={copyToClipboard}
                  className="flex-shrink-0 bg-purple-500 hover:bg-purple-600"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      <div className="relative mt-8">
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
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              isDarkMode
                ? "bg-yellow-400 text-gray-900"
                : "bg-gray-800 text-white"
            }`}
            aria-label={
              isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
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
      </div>
      <Toaster />
    </div>
  );
}

export default URLShortener;  

