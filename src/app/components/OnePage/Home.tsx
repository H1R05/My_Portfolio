import React, { useLayoutEffect, useRef } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import gsap from "gsap";
import { inter, bebasNeue } from "../fonts/permanentMarker";

export default function Home() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(introRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`relative min-h-screen flex items-center px-6 pt-28 pb-40 overflow-hidden ${inter.className}`}
    >
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute right-[8%] top-[6%] h-[22rem] w-[22rem] rounded-full bg-[rgba(217,200,176,0.35)] blur-[160px]" />
        <div className="absolute left-[-10%] bottom-[-12%] h-[30rem] w-[30rem] rounded-full bg-[rgba(198,168,131,0.28)] blur-[200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.55),transparent_38%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.4),transparent_42%)] opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-[rgba(247,243,237,0.65)] to-[rgba(247,243,237,1)]" />
        <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(120deg,rgba(47,42,36,0.06)_1px,transparent_1px),linear-gradient(rgba(47,42,36,0.06)_1px,transparent_1px)] bg-[size:220px_220px]" />
        <span
          className={`${bebasNeue.className} absolute right-[3%] top-1/2 -translate-y-1/2 rotate-90 text-transparent font-bold leading-none text-[22vw] md:text-[12rem] tracking-[0.25em] whitespace-nowrap mix-blend-multiply opacity-60`}
          style={{
            WebkitTextStroke: "2.5px rgba(47,42,36,0.14)",
            WebkitTextFillColor: "rgba(255,255,255,0.06)",
            textShadow: "0 0 40px rgba(47,42,36,0.08)",
          }}
        >
          H1R05
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div ref={introRef} className="space-y-12">
          <div className="flex items-center gap-3 text-base uppercase tracking-[0.3em] text-[var(--fg-soft)]">
            <div className="h-px w-10 bg-[rgba(47,42,36,0.2)]" />
            <span>Junior Cloud DevOps / Full-Stack Developer</span>
          </div>

          <div className="space-y-5">
            <h1
              className={`${bebasNeue.className} text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-[var(--fg-strong)]`}
            >
              Ciao, mi chiamo{" "}
              <span className="bg-gradient-to-r from-[var(--fg-strong)] via-[var(--accent)] to-[var(--fg-strong)] bg-clip-text text-transparent">
                Samu !
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--fg-soft)] leading-relaxed max-w-3xl">
              Sono uno studente e sviluppatore junior, sempre curioso di
              scoprire e imparare cose nuove, benvenuti nel mio portfolio!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--fg-strong)] text-[var(--bg-base)] text-base font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.1)] hover:-translate-y-[2px] transition-all"
            >
              Esplora i progetti ↗
            </a>
            <a
              href="/cvDocument/CVSamu.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] text-[var(--fg-strong)] text-base hover:border-[var(--fg-soft)] transition-colors"
            >
              Scarica CV
            </a>
          </div>

          <div className="space-y-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-4 text-2xl text-[var(--fg-strong)]">
              <a
                href="https://github.com/H1R05"
                className="hover:text-[var(--accent)] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/samuele-angelicchio-639927363/"
                className="hover:text-[var(--accent)] transition-colors"
              >
                <CiLinkedin />
              </a>
              <a
                href="https://www.instagram.com/angelicchio_samuele/"
                className="hover:text-[var(--accent)] transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
