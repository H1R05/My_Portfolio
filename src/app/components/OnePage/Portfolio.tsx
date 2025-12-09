"use client";

import ProjectCard from "../UI/ProjectCard";
import TechStackTicker from "../UI/lineTechStack";
import CertificateCard from "../UI/CertificateCard";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bebasNeue, inter } from "../fonts/permanentMarker";
const projects = [
  {
    Img: "/project/galleriaSteganografia.png",
    title: "Galleria Immagini Steganografia",
    description:
      "Una semplice galleria immagini con l'implementazione della steganografia ",
    github: "https://github.com/H1R05/GalleriaIMG-Steganografia",
    category: "Progetto",
  },
  {
    Img: "/project/sitoPortfolio.png",
    title: "Modern Web Portfolio",
    description: "Portfolio personale moderno che mi rappresenta",
    github: "https://github.com/H1R05/SamuApp",
    category: "Progetto",
  },
];
const certificates = [
  {
    Img: "/certificate/CertificatoWebDeveloperPreview.png",
    title: "Certificato Web Developer",
    link: "/certificate/CertificatoWebDeveloper.pdf",
    category: "Certificato",
  },
  {
    Img: "/certificate/AWSCertifiedCloudPractitionerPreview.png",
    title: "Certificato AWS Cloud Practitioner",
    link: "/certificate/AWSCertifiedCloudPractitioner.pdf",
    category: "Certificato",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const certificatesRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  const PROJECTS_COLLAPSED = 520;
  const CERTS_COLLAPSED = 440;
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [certsExpanded, setCertsExpanded] = useState(false);
  const [projectsHeight, setProjectsHeight] = useState(PROJECTS_COLLAPSED);
  const [certsHeight, setCertsHeight] = useState(CERTS_COLLAPSED);
  const maskCollapsed =
    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0.55) 86%, rgba(0,0,0,0) 100%)";
  const maskExpanded =
    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 92%, rgba(0,0,0,0.9) 100%)";
  const projectsToggle = projectsExpanded
    ? "Riduci progetti"
    : "Espandi progetti";
  const certsToggle = certsExpanded
    ? "Riduci certificati"
    : "Espandi certificati";

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    gsap.registerPlugin(ScrollTrigger);

    let frame = 0;
    const ctx = gsap.context(() => {
      frame = requestAnimationFrame(() => {
        gsap.fromTo(
          ".portfolio-animate",
          { y: 60 },
          {
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              once: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => {
      cancelAnimationFrame(frame);
      ctx.revert();
    };
  }, []);

  useLayoutEffect(() => {
    const el = projectsRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    let frame = 0;

    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const fullHeight = el.scrollHeight;
        const target = projectsExpanded
          ? fullHeight
          : Math.min(fullHeight, PROJECTS_COLLAPSED);
        setProjectsHeight(target);
      });
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [projectsExpanded, PROJECTS_COLLAPSED]);

  useLayoutEffect(() => {
    const el = certificatesRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    let frame = 0;

    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const fullHeight = el.scrollHeight;
        const target = certsExpanded
          ? fullHeight
          : Math.min(fullHeight, CERTS_COLLAPSED);
        setCertsHeight(target);
      });
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [certsExpanded, CERTS_COLLAPSED]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className={`relative min-h-screen px-6 py-32 overflow-hidden ${inter.className}`}
    >
      {/* FRAME + MINI BLUR + HUD */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute left-[-6%] top-[18%] h-[16rem] w-[16rem] rounded-full bg-[rgba(var(--glow-cyan),0.16)] blur-[160px]" />
        <div className="absolute right-[-6%] bottom-[18%] h-[16rem] w-[16rem] rounded-full bg-[rgba(var(--glow-pink),0.14)] blur-[160px]" />
        <div className="absolute inset-x-0 top-[24%] h-px bg-white/5" />
        <div className="absolute left-[3rem] top-[24%] h-[55%] w-px bg-white/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.04),transparent_40%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <div className="portfolio-animate space-y-6 max-w-4xl">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[var(--fg-soft)]">
            <div className="h-px w-10 bg-[rgba(47,42,36,0.2)]" />
            <span>Portfolio</span>
          </div>
          <h2
            className={`${bebasNeue.className} text-5xl md:text-6xl text-[var(--fg-strong)] leading-[0.95]`}
          >
            Progetti e credenziali recenti
          </h2>
          <p className="text-lg md:text-xl text-[var(--fg-soft)] max-w-3xl">
            Un mix di prodotti web, automazioni e certificazioni: architetture
            solide, UI essenziali e attenzione alle performance.
          </p>
        </div>

        {/* GRID PROGETTI */}
        <div className="space-y-4">
          <div
            ref={projectsRef}
            style={{
              maxHeight: projectsHeight,
              maskImage: projectsExpanded ? maskExpanded : maskCollapsed,
              WebkitMaskImage: projectsExpanded ? maskExpanded : maskCollapsed,
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
            className="relative grid gap-6 md:grid-cols-2 overflow-hidden transition-[max-height] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[max-height]"
          >
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                category={project.category}
                Img={project.Img}
                title={project.title}
                description={project.description}
                github={project.github}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setProjectsExpanded((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--fg-strong)] hover:border-[var(--accent)] transition-colors"
            aria-label={projectsToggle}
            aria-expanded={projectsExpanded}
          >
            {projectsToggle}
            <span
              className={`text-base transition-transform duration-300 ${
                projectsExpanded ? "rotate-180" : ""
              }`}
            >
              ↑
            </span>
          </button>
        </div>

        <div className="glass-card portfolio-animate rounded-3xl border border-[var(--border)] p-6 bg-white/85">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--fg-soft)]">
                Stack tecnologico
              </p>
              <h3 className="text-2xl font-semibold text-[var(--fg-strong)]">
                Tecnologie che uso ogni giorno
              </h3>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-white/70 border border-[var(--border)]">
            <TechStackTicker />
          </div>
        </div>

        {/* CERTIFICAZIONI */}
        <div className="portfolio-animate space-y-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--fg-soft)]">
                Certificazioni
              </p>
              <h3 className="text-2xl font-semibold text-[var(--fg-strong)]">
                Attestati di competenza
              </h3>
            </div>
            <span className="tag text-[var(--fg-strong)] bg-white/85">
              2023 — 2024
            </span>
          </div>

          <div className="space-y-4">
            <div
              ref={certificatesRef}
              style={{
                maxHeight: certsHeight,
                maskImage: certsExpanded ? maskExpanded : maskCollapsed,
                WebkitMaskImage: certsExpanded ? maskExpanded : maskCollapsed,
                maskSize: "100% 100%",
                WebkitMaskSize: "100% 100%",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
              className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden transition-[max-height] duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[max-height]"
            >
              {certificates.map((cert, idx) => (
                <CertificateCard key={idx} {...cert} />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setCertsExpanded((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--fg-strong)] hover:border-[var(--accent)] transition-colors"
              aria-label={certsToggle}
              aria-expanded={certsExpanded}
            >
              {certsToggle}
              <span
                className={`text-base transition-transform duration-300 ${
                  certsExpanded ? "rotate-180" : ""
                }`}
              >
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
