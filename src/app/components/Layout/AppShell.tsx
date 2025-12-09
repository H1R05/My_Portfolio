"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import LoadingScreen from "../UI/LoadingScreen";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  // Reset scroll position to Home on every fresh load/refresh
  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;
    const body = document.body;
    const prevHtml = root.style.scrollBehavior;
    const prevBody = body.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";

    if (window.location.hash) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo({ top: 0, left: 0 });

    requestAnimationFrame(() => {
      root.style.scrollBehavior = prevHtml;
      body.style.scrollBehavior = prevBody;
    });
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    gsap.registerPlugin(ScrollTrigger);
    root.classList.add("smooth-scroll");
    body.classList.add("smooth-scroll");
    return () => {
      root.classList.remove("smooth-scroll");
      body.classList.remove("smooth-scroll");
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    // Avoid scroll jank while the loader is covering the page
    if (loading) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
      // Recompute ScrollTrigger positions once the loader is gone
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }
    return () => {
      body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
