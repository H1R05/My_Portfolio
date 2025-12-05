"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      key="loader"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-3xl font-semibold tracking-tight"
      >
        Loading...
      </motion.p>
    </motion.div>
  );
}
