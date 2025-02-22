"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, LinkIcon } from "lucide-react";
import { useState } from "react";

interface UrlFormProps {
  handleSubmit: (url: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}

export default function URLForm({
  handleSubmit,
  isLoading,
  error,
}: UrlFormProps) {
  const [url, setUrl] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(url);
  };

  return (
    <>
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
              <LinkIcon className={"h-12 w-12 bg-background"} />
            </motion.div>
          ) : (
            <motion.div
              key="static"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="inline-block mb-2"
            >
              <LinkIcon className={"h-12 w-12 bg-background"} />
            </motion.div>
          )}
        </AnimatePresence>
        <h1 className={"text-4xl font-bold bg-background"}>URL Shortener</h1>
        <p className={"mt-2 bg-background"}>
          Shorten your long URLs with style
        </p>
      </div>

      <motion.div
        className={"bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <Label
              htmlFor="url"
              className={"block text-sm font-medium bg-background"}
            >
              Enter your URL
            </Label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Input
                id="url"
                name="url"
                type="text"
                required
                className={
                  "block w-full pr-10 bg-background focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                }
                placeholder="https://example.com/very-long-url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isLoading}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <LinkIcon
                  className={"h-5 w-5 bg-background"}
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
      </motion.div>
    </>
  );
}
