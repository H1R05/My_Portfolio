"use client";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 overflow-hidden text-[var(--fg-strong)]">
      <div className="section-bg absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-x-0 top-0 h-px bg-[rgba(243,238,230,0.08)]" />
        <div className="absolute -left-24 top-[-35%] h-64 w-64 rounded-full bg-[rgba(var(--glow-cyan),0.2)] blur-[140px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-72 w-72 rounded-full bg-[rgba(var(--glow-pink),0.16)] blur-[170px]" />
        <div className="absolute inset-0 opacity-14 mix-blend-soft-light" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-8">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[var(--fg-soft)] flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_rgba(209,176,109,0.22)]" />
            <span>
              © 2025 — Disegnato e sviluppato da{" "}
              <span className="text-[var(--fg-strong)] font-semibold">
                Samuele Angelicchio
              </span>
            </span>
          </div>
          <div className="flex gap-4 text-xl text-[var(--fg-strong)]">
            <a
              href="https://github.com/H1R05/"
              className="hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/samuele-angelicchio-639927363/"
              className="hover:text-[var(--accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://www.instagram.com/angelicchio_samuele/"
              className="hover:text-[var(--accent)] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
