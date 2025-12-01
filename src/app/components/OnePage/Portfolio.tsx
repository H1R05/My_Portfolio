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
  },
  {
    Img: "/project/sitoPortfolio.png",
    title: "Modern Web Portfolio",
    description: "Portfolio personale moderno che mi rappresenta",
    github: "https://github.com/H1R05/SamuApp",
  },
];
const certificates = [
  {
    preview: "/certificate/CertificatoWebDeveloperPreview.png",
    name: "Certificato Web Developer",
    file: "/certificate/CertificatoWebDeveloper.pdf",
  },
  {
    preview: "/certificate/AWSCertifiedCloudPractitionerPreview.png",
    name: "Certificato AWS Cloud Practitioner",
    file: "/certificate/AWSCertifiedCloudPractitioner.pdf",
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
      className="relative min-h-screen px-6 py-20"
    >
      <div
        className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent opacity-30"
        aria-hidden
      />
      <div className="relative z-10 max-w-6xl mx-auto space-y-14">
        <div className="portfolio-fade space-y-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
            Selezione
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Progetti e credenziali recenti
          </h2>
          <p className="text-lg text-gray-200">
            Un mix di prodotti web, automazioni e certificazioni che mostrano
            come traduco bisogni reali in esperienze digitali solide.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 portfolio-fade">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              Img={project.Img}
              title={project.title}
              description={project.description}
              github={project.github}
            />
          ))}
        </div>

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
