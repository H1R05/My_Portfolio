"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const greetings = [
  "ciao",
  "hello",
  "hola",
  "salut",
  "hallo",
  "olá",
  "namaste",
  "konnichiwa",
  "salam",
  "merhaba",
  "hej",
  "szia",
  "yassas",
];

export default function LoadingScreen() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 600);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <motion.div
      key="loader"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.45, 0, 0.25, 1], type: "tween" }}
      className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center text-[var(--fg-strong)] transform-gpu will-change-transform bg-[radial-gradient(circle_at_18%_20%,rgba(198,168,131,0.22),transparent_42%),radial-gradient(circle_at_78%_75%,rgba(217,200,176,0.2),transparent_44%),linear-gradient(120deg,#faf6ef,#f3ebde,#f9f4ea)]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_24%_28%,rgba(255,255,255,0.35),transparent_42%),radial-gradient(circle_at_78%_70%,rgba(255,255,255,0.28),transparent_46%)]" />
        <div className="absolute inset-0 opacity-45 bg-[linear-gradient(115deg,rgba(47,42,36,0.08)_1px,transparent_1px),linear-gradient(rgba(47,42,36,0.06)_1px,transparent_1px)] bg-[size:180px_180px]" />
        <div className="absolute inset-0 opacity-16 mix-blend-soft-light" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="relative flex items-center justify-center px-6"
      >
        <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_center,rgba(198,168,131,0.28),transparent_60%)]" />
        <div className="relative rounded-3xl border border-[var(--border)] bg-white/85 backdrop-blur-xl px-8 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="absolute -left-24 -top-20 h-40 w-40 rounded-full bg-[rgba(217,200,176,0.35)] blur-[120px]" />
          <div className="absolute -right-16 bottom-[-18%] h-36 w-36 rounded-full bg-[rgba(198,168,131,0.32)] blur-[110px]" />
          <div className="relative flex flex-col items-center gap-4">
            <span className="text-xs uppercase tracking-[0.28em] text-[var(--fg-soft)]/80">
              Sto caricando
            </span>
            <div className="relative h-12 w-[260px] md:w-[320px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={`${greetings[index]}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-semibold tracking-tight text-[var(--fg-strong)] will-change-transform"
                  style={{ transform: "translateZ(0)" }}
                >
                  {greetings[index]}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="relative h-1.5 w-28 rounded-full bg-[rgba(47,42,36,0.08)] overflow-hidden">
              <motion.div
                key={index}
                initial={{ x: "-70%" }}
                animate={{ x: "110%" }}
                transition={{ duration: 1.1, ease: [0.33, 1, 0.68, 1] }}
                className="absolute inset-y-0 w-16 rounded-full bg-gradient-to-r from-[var(--accent)] to-[rgba(198,168,131,0.65)]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
