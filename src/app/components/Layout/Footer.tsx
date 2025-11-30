"use client";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-gray-300 text-sm">
          © 2025 — Disegnato e sviluppato da <span className="text-white font-semibold">Samuele Angelicchio</span>
        </div>
        <div className="flex gap-4 text-xl text-white">
          <a href="https://github.com/H1R05/" className="hover:text-orange transition-colors" aria-label="GitHub">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/samuele-angelicchio-639927363/"
            className="hover:text-orange transition-colors"
            aria-label="LinkedIn"
          >
            <CiLinkedin />
          </a>
          <a
            href="https://www.instagram.com/angelicchio_samuele/"
            className="hover:text-orange transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
