"use client";

import { motion } from "framer-motion";
import { FaCopy } from "react-icons/fa";
import { useState } from "react";
import ShuffleText from "./ShuffleText";

export default function Component() {
  const [copied, setCopied] = useState(false);
  const email = "patilnandan859@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-b from-black to-zinc-900 text-white py-6 px-8  pb-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10">
        {/* Left Side: Name */}
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold text-center sm:text-left"
        >
          <ShuffleText text="Nandan Patil" />
        </motion.div>

        {/* Right Side: Copyright Text */}
        <motion.div
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base text-gray-300 text-center sm:text-left"
        >
          <ShuffleText text="© 2024 Nandan Patil. All Rights Reserved" />
        </motion.div>

        {/* Email Copy Button */}
        
        <motion.button
          onClick={handleCopy}
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ delay: 0.4 }}
          className="px-4 py-2 bg-white text-black rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors mt-4 sm:mt-0"
        >
          <span className="font-medium">{email}</span>
          <FaCopy
            className={`text-sm ${copied ? "text-green-500" : "text-gray-500"}`}
          />
        </motion.button>
      </div>
    </motion.footer>
  );
}
