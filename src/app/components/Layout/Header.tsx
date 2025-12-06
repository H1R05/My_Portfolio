"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const clickLockRef = useRef<number | null>(null);

  /* Fade-in navbar */
  useEffect(() => {
    gsap.from(".nav-wrap", {
      y: -12,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
    setMounted(true);
  }, []);

  /* Track scroll for background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track section in view (rAF debounced) */
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;
    let ticking = false;

    const updateActive = () => {
      if (clickLockRef.current) {
        const now = performance.now();
        if (now - clickLockRef.current < 900) return;
        clickLockRef.current = null;
      }

      if (window.scrollY < 160) {
        setActive("home");
        return;
      }

      const viewportCenter = window.innerHeight * 0.35;
      let closestId = active;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = section.id;
        }
      });
      setActive((prev) => (prev === closestId ? prev : closestId));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
      }
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, [active]);

  if (!mounted) return null;

  return (
    <header
      className={`nav-wrap fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-[var(--border)] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-10">
        {/* LOGO */}
        <div className="flex items-center gap-3 text-[var(--fg-strong)]">
          <span className="text-lg font-semibold tracking-tight">
            Samuele Angelicchio
          </span>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--fg-soft)]">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <Link
                key={link.id}
                href={`#${link.id}`}
                data-link={link.id}
                className="group relative px-1 py-1 transition-colors duration-150 hover:text-[var(--fg-strong)]"
                onClick={() => {
                  setActive(link.id);
                  clickLockRef.current = performance.now();
                }}
              >
                <span
                  className={`relative z-10 tracking-tight ${
                    isActive
                      ? "text-[var(--fg-strong)]"
                      : "group-hover:text-[var(--fg-strong)]"
                  }`}
                >
                  {link.name}
                </span>
                <span
                  className={`pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] rounded-full transition-all duration-200 ${
                    isActive
                      ? "opacity-100 bg-[var(--accent)]"
                      : "opacity-0 group-hover:opacity-70 bg-[var(--accent)]/70"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden text-[var(--fg-strong)] text-sm px-3 py-2 rounded-full border border-[var(--border)] bg-white/80 backdrop-blur-md">
          Menu
        </div>
      </div>
    </header>
  );
}
