import * as React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { LinkIcon } from "lucide-react";

interface AnimationIconProps {
    isLoading: boolean;
  }

export default function AnimationIcon({ isLoading }: AnimationIconProps) {
    return (
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
    );
}