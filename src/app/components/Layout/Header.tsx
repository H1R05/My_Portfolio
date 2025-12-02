"use client";
import gsap from "gsap";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { inter } from "../fonts/permanentMarker";

type NavLink = { name: string; id: string };

const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Contact", id: "contact" },
];

export default function Header() {
  const [active, setActive] = useState<string>("home");
  const cardRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 1.5, ease: "power3.out" },
      });
      tl.from(cardRef.current, { y: -80, opacity: 0, scale: 0.97 });
      tl.from(logoRef.current, { x: -30, opacity: 0, scale: 0.98 }, "-=0.8");
    }, cardRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const sections = navLinks
        .map((l) => document.getElementById(l.id))
        .filter(Boolean) as HTMLElement[];

      if (!sections.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { threshold: 0.5 }
      );
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-5xl px-6 pt-6">
        <div
          ref={cardRef}
          className="glass-card rounded-full px-6 py-3 flex items-center justify-between border border-white/10"
        >
          <div ref={logoRef} className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-orange to-cyan-400 shadow-lg shadow-cyan-500/20" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-300">
                Samuele Angelicchio
              </p>
              <p className="text-sm sm:text-base font-semibold text-white">
                Cloud &amp; Full‑Stack Developer
              </p>
            </div>
          </div>

          <nav className="hidden sm:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`relative px-2 py-1 transition-colors duration-300 ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                {active === link.id && (
                  <span className="absolute left-1/2 -bottom-2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-orange shadow-[0_0_12px_rgba(255,149,5,0.8)]" />
                )}
              </a>
            ))}
          </nav>
          <div className="sm:hidden">
            <a
              href="#contact"
              className={`${inter.className} text-sm text-white uppercase tracking-[0.25em]`}
            >
              Menu
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
