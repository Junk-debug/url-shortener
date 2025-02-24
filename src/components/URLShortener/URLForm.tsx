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
              <LinkIcon className={"h-12 w-12 text-primary"} />
            </motion.div>
          ) : (
            <motion.div
              key="static"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="inline-block mb-2"
            >
              <LinkIcon className={"h-12 w-12 text-primary"} />
            </motion.div>
          )}
        </AnimatePresence>
        <h1 className={"text-4xl font-bold text-secondary-foreground"}>
          URL Shortener
        </h1>
        <p className={"mt-2 text-muted-foreground"}>
          Shorten your long URLs with style
        </p>
      </div>

      <motion.div
        className={"bg-card shadow-lg rounded-lg p-6 shadow-primary/50"}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <Label htmlFor="url" className={"block"}>
              Enter your URL
            </Label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Input
                id="url"
                name="url"
                type="text"
                required
                className={"block w-full pr-10"}
                placeholder="https://example.com/very-long-url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={isLoading}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <LinkIcon
                  className={"h-5 w-5 text-muted-foreground"}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full flex justify-center shadow-sm"
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
