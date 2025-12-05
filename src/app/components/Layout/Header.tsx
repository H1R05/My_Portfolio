"use client";

import { useEffect, useState } from "react";
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

  /* Fade-in navbar */
  useEffect(() => {
    gsap.from(".nav-wrap", {
      y: -10,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  /* Track scroll for background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track section in view */
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`
        nav-wrap fixed top-0 left-0 z-50 w-full transition-all duration-300 
        ${scrolled ? "bg-black/30 backdrop-blur-xl" : "bg-transparent"}
      `}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-10">
        {/* LOGO */}
        <div className="text-white font-semibold text-lg">
          Samuele Angelicchio
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <Link
                key={link.id}
                href={`#${link.id}`}
                className="relative text-[15px] text-gray-300 hover:text-white transition-colors"
                onClick={() => setActive(link.id)}
              >
                {link.name}

                {/* underline anima-only-active */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] w-full rounded-full 
                    bg-cyan-400 transition-all duration-300
                    ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden text-white">Menu</div>
      </div>
    </header>
  );
}
