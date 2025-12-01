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
      <div
        className="absolute right-10 top-24 h-64 w-64 rounded-full bg-orange blur-3xl opacity-20"
        aria-hidden
      />
      <div
        className="absolute left-10 bottom-10 h-72 w-72 rounded-full bg-cyan-400 blur-3xl opacity-20"
        aria-hidden
      />

      <div className="relative z-10 grid max-w-8xl mx-auto gap-12 grid-cols-1 place-items-center items-center">
        <div ref={introRef} className="space-y-10 text-center">
          {/* TAG */}
          <div className="flex flex-wrap gap-5 justify-center">
            <span className="tag text-lg px-4 py-2 tracking-wider">
              Cloud DevOps
            </span>
            <span className="tag text-lg px-4 py-2 tracking-wider">
              Full-Stack Developer
            </span>
          </div>

          {/* TITOLO */}
          <h1 className="text-5xl md:text-6xl leading-tight text-white font-bold">
            Ciao, mi chiamo{" "}
            <span className="text-red-600 text-7xl font-extrabold">Samu</span> !
          </h1>

          {/* DESCRIZIONE */}
          <p className="text-2xl text-gray-200 max-w-2xl leading-relaxed tracking-wide mx-auto">
            Sono uno studente e sviluppatore junior, sempre curioso di scoprire
            e imparare cose nuove, benvenuti nel mio portfolio!
          </p>

          {/* BOTTONI */}
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-slate-900 text-lg font-semibold shadow-[0_15px_40px_rgba(255,255,255,0.2)] hover:-translate-y-[2px] transition-all"
            >
              Esplora i progetti
              <span className="text-2xl">↗</span>
            </a>
            <a
              href="/cvDocument/CVSamu.pdf"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white text-lg hover:border-white/60 transition-colors"
            >
              Scarica CV
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-6 text-3xl text-white justify-center">
            <a
              href="https://github.com/H1R05"
              className="hover:text-orange transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/samuele-angelicchio-639927363/"
              className="hover:text-orange transition-colors"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://www.instagram.com/angelicchio_samuele/"
              className="hover:text-orange transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
