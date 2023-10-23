"use client";

import useMixpanel from "@/mixpanel";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function CopyEmail(props: { alignLeft?: boolean }) {
  const { track } = useMixpanel();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    track("copy_email", {});

    // Handle the copy functionality here
    // For example:
    navigator.clipboard.writeText("ekertdenis@gmail.com").then(() => {
      // Set the state to trigger the animation
      setCopied(true);

      // Reset after the animation duration
      setTimeout(() => {
        setCopied(false);
      }, 1500); // assuming the animation lasts for 1 second
    });
  };

  return (
    <div
      className={`flex flex-col gap-1 ${
        props.alignLeft ? "" : "items-center"
      } relative `}
    >
      <AnimatePresence>
        {copied && (
          <motion.div
            className="absolute  text-green-400 "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: props.alignLeft ? 0 : -32,
              translateX: props.alignLeft ? "130%" : 0,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            Copied to clipboard!
          </motion.div>
        )}
        <div
          className="text-blue-400 text-lg hover:underline underline-offset-2 "
          onClick={handleCopy}
        >
          ekertdenis@gmail.com
        </div>
        <div className="opacity-50 hover:opacity-90" onClick={handleCopy}>
          click to copy
        </div>
      </AnimatePresence>
    </div>
  );
}
