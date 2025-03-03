"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LinkIcon } from "lucide-react";
import { useState } from "react";
import ErrorMessage from "@/components/ui/ErrorMessage";

interface UrlFormProps {
  handleSubmit: (url: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
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
                type="url"
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

        {error && <ErrorMessage error={error} />}
      </motion.div>
    </>
  );
}
