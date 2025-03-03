"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import { copyToClipboard } from "@/lib/copyToClipboard";

interface ShortUrlDisplayProps {
  shortUrl: string;
}

export default function ShortUrlDisplay({
  shortUrl,
}: ShortUrlDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      <h2 className={`text-lg font-medium mb-2`}>Your shortened URL:</h2>
      <div className="flex items-center space-x-2">
        <Input
          value={shortUrl}
          readOnly
          className={`grow bg-background dark:bg-input`}
        />
        <Button onClick={() => copyToClipboard(shortUrl)} className="shrink-0">
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
