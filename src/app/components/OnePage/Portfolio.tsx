import ProjectCard from "../UI/ProjectCard";
import TechStackTicker from "../UI/lineTechStack";
import CertificateCard from "../UI/CertificateCard";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    preview: "/certificate/CertificatoWebDeveloperPreview.png",
    name: "Certificato Web Developer",
    file: "/certificate/CertificatoWebDeveloper.pdf",
    category: "Certificato",
  },
  {
    preview: "/certificate/AWSCertifiedCloudPractitionerPreview.png",
    name: "Certificato AWS Cloud Practitioner",
    file: "/certificate/AWSCertifiedCloudPractitioner.pdf",
    category: "Certificato",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-fade", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative min-h-screen px-6 py-32 overflow-hidden"
    >
      {/* FRAME + MINI BLUR + HUD */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Mini blur SX (ciano) */}
        <div className="absolute left-[-5%] top-[25%] h-[15rem] w-[14rem] rounded-full bg-cyan-400 blur-[150px] opacity-15"></div>

        {/* Mini blur DX (rosso) */}
        <div className="absolute right-[-5%] bottom-[20%] h-[15rem] w-[15rem] rounded-full bg-[#ee4266] blur-[150px] opacity-15"></div>

        {/* Frame HUD - linee laterali */}
        <div className="absolute top-0 left-[3rem] w-px h-full bg-white/5"></div>
        <div className="absolute top-0 right-[3rem] w-px h-full bg-white/5"></div>

        {/* Linea orizzontale sopra la griglia */}
        <div className="absolute top-[23%] left-0 w-full h-px bg-white/5"></div>

        {/* Corner tech sopra il titolo */}
        <div className="absolute top-[23%] left-[3rem] -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-px bg-white/10"></div>
          <div className="w-px h-6 bg-white/10"></div>
        </div>
      </div>

      {/* CONTENUTO */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* INTRO */}
        <div className="portfolio-fade space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
            Selezione
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Progetti e credenziali recenti
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl">
            Un mix di prodotti web, automazioni e certificazioni che mostrano
            come trasformo idee e problemi reali in esperienze digitali solide,
            funzionali e moderne.
          </p>
        </div>

        {/* GRID PROGETTI */}
        <div className="grid gap-6 md:grid-cols-2 portfolio-fade">
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

        {/* STACK */}
        <div className="glass-card portfolio-fade rounded-3xl border border-white/10 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Stack tecnologico
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Tecnologie che uso ogni giorno
              </h3>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
            <TechStackTicker />
          </div>
        </div>

        {/* CERTIFICAZIONI */}
        <div className="portfolio-fade space-y-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Certificazioni
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Attestati di competenza
              </h3>
            </div>
            <span className="tag">2023 — 2024</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <CertificateCard key={idx} {...cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
