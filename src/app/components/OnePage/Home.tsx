import React, { useLayoutEffect, useRef } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import gsap from "gsap";
import { inter, bebasNeue } from "../fonts/permanentMarker";

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
      className="relative min-h-screen flex items-center px-6 pt-40 pb-20 overflow-hidden"
    >
      {/* BLOB ROSSO */}
      <div className="absolute right-[5%] top-[0%] h-[24rem] w-[24rem] rounded-full bg-[#ee4266] blur-[150px] opacity-40"></div>

      {/* BLOB CIANO */}
      <div className="absolute left-[-5%] bottom-[-5%] h-[28rem] w-[28rem] rounded-full bg-cyan-400 blur-[170px] opacity-40"></div>

      {/* HUD + BACKGROUND TYPO */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Riga orizzontale tech */}
        <div className="absolute top-[32%] left-0 w-full h-px bg-white/5"></div>

        {/* Riga verticale tech */}
        <div className="absolute top-[32%] left-[3.5rem] h-[45%] w-px bg-white/5"></div>

        {/* Corner HUD */}
        <div className="absolute top-[32%] left-[3.5rem] -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-px bg-white/15"></div>
          <div className="w-px h-6 bg-white/15"></div>
        </div>

        {/* ACCENTO CIANO TECH (DESTRA) */}
        <div className="absolute right-[1.8rem] top-1/2 -translate-y-1/2 translate-x-6 flex flex-col items-center gap-2">
          <div className="w-10 h-px bg-cyan-400/60"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]"></div>
        </div>

        {/* ACCENTO ROSSO TECH (SINISTRA — SPECCHIO) */}
        <div className="absolute left-[1.8rem] top-1/2 -translate-y-1/2 -translate-x-6 flex flex-col items-center gap-2">
          <div className="w-10 h-px bg-[#ee4266]/60"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#ee4266] shadow-[0_0_14px_rgba(238,66,102,0.9)]"></div>
        </div>

        {/* Coordinate HUD */}
        <div className="absolute bottom-[12%] right-[3rem] text-[10px] tracking-widest text-white/30 font-mono">
          COORD: 47.29 / 12.6
        </div>

        {/* Background Typo: CODE */}
        <span
          className={`
      ${bebasNeue.className}
      absolute
      right-[2.5rem]
      top-1/2
      -translate-y-1/2
      rotate-90
      text-white/5
      font-bold
      leading-none
      text-[25vw] md:text-[14rem]
      tracking-[0.2em]
      whitespace-nowrap
    `}
        >
          Angel
        </span>
      </div>

      {/* CONTENUTO */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* TITOLO */}
        <h1 className="font-bold leading-[0.8] text-left space-y-3">
          {/* Lineetta tech + Ciao */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-white/30"></div>
            <span
              className={`${bebasNeue.className} text-5xl md:text-6xl text-gray-300 tracking-wide`}
            >
              CIAO,
            </span>
          </div>

          {/* MI CHIAMO */}
          <span
            className={`${bebasNeue.className} block text-7xl md:text-8xl text-white tracking-tight`}
          >
            MI CHIAMO
          </span>

          {/* SA / MU */}
          <div className="flex items-end gap-4">
            <span
              className={`
            ${bebasNeue.className}
            text-[20vw] md:text-[11rem]
            text-[#ee4266]
            leading-[0.8]
          `}
            >
              SA
            </span>

            <span
              className={`
            ${bebasNeue.className}
            text-[17vw] md:text-[9rem]
            text-white
            leading-[0.8]
            mb-[0.3em]
          `}
            >
              MU
            </span>
          </div>
        </h1>

        {/* DESCRIZIONE */}
        <p
          className={`${inter.className} text-xl md:text-2xl text-gray-300 max-w-xl mt-12`}
        >
          Sviluppatore Cloud & Full-Stack. Costruisco interfacce moderne, pulite
          e ad alte prestazioni.
        </p>

        {/* BOTTONI */}
        <div className="flex flex-wrap gap-6 items-center mt-12">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-slate-900 text-lg font-semibold shadow-[0_15px_40px_rgba(255,255,255,0.2)] hover:-translate-y-[2px] transition-all"
          >
            Esplora i progetti ↗
          </a>

          <a
            href="/cvDocument/CVSamu.pdf"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white text-lg hover:border-white/60 transition-colors"
          >
            Scarica CV
          </a>
        </div>

        {/* SOCIAL */}
        <div className="flex gap-6 text-3xl text-white mt-12">
          <a
            href="https://github.com/H1R05"
            className="hover:text-[#ee4266] transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/samuele-angelicchio-639927363/"
            className="hover:text-[#ee4266] transition-colors"
          >
            <CiLinkedin />
          </a>
          <a
            href="https://www.instagram.com/angelicchio_samuele/"
            className="hover:text-[#ee4266] transition-colors"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
