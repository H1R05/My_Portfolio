import React, { useLayoutEffect, useRef } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import gsap from "gsap";

export default function Home() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(introRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(cardRef.current, {
        x: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="absolute inset-0 grid-overlay opacity-60" aria-hidden />
      <div className="absolute right-10 top-24 h-64 w-64 rounded-full bg-orange blur-3xl opacity-20" aria-hidden />
      <div className="absolute left-10 bottom-10 h-72 w-72 rounded-full bg-cyan-400 blur-3xl opacity-20" aria-hidden />

      <div className="relative z-10 grid max-w-6xl mx-auto gap-12 md:grid-cols-[1.2fr_0.9fr] items-center">
        <div ref={introRef} className="space-y-6">
          <div className="flex flex-wrap gap-3">
            <span className="tag">Cloud DevOps</span>
            <span className="tag">Full‑Stack</span>
            <span className="tag">UI Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold text-white">
            Costruisco esperienze digitali essenziali e performanti per brand e startup.
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Mi chiamo Samuele Angelicchio. Porto precisione tecnica e gusto per il design su prodotti web,
            lavorando tra cloud, backend e interfacce per creare soluzioni robuste e piacevoli da usare.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-slate-900 font-semibold shadow-[0_15px_40px_rgba(255,255,255,0.2)] hover:-translate-y-[2px] transition-all"
            >
              Esplora i progetti
              <span className="text-lg">↗</span>
            </a>
            <a
              href="/cvDocument/CVSamu.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white hover:border-white/60 transition-colors"
            >
              Scarica CV
            </a>
          </div>
          <div className="flex gap-4 text-xl text-white">
            <a href="https://github.com/H1R05" className="hover:text-orange transition-colors" aria-label="GitHub">
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

        <div
          ref={cardRef}
          className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col gap-6 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Disponibilità</p>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-semibold">
              Aperto a collaborazioni
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-gray-400">Ruolo attuale</p>
                <p className="text-lg font-semibold text-white">Junior Cloud &amp; DevOps</p>
              </div>
              <span className="tag">AWS / Next.js</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-gray-400">Fuso orario</p>
                <p className="text-lg font-semibold text-white">CET (Italia)</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30" />
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm text-gray-200">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-xs uppercase tracking-[0.15em] text-gray-400">Focus</p>
                <p className="mt-2 font-semibold text-white">SaaS, dashboard, automazione</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-xs uppercase tracking-[0.15em] text-gray-400">Stack</p>
                <p className="mt-2 font-semibold text-white">Typescript • AWS • Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
