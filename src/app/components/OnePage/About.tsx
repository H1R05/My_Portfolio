import gsap, { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef, useState } from "react";
import { bebasNeue, inter } from "../fonts/permanentMarker";

const highlights = [
  {
    title: "Collaborazione",
    body: "Processi leggeri, feedback rapidi, documentazione chiara. Mi piace lavorare vicino al team.",
  },
  {
    title: "Formazione continua",
    body: "Certificato AWS Cloud Practitioner, esploro UI moderne, sicurezza e performance.",
  },
];

const experiences = [
  {
    period: "2024 — presente",
    role: "Full‑stack & Cloud",
    place: "Progetti personali e studio",
    desc: "Next.js, architetture cloud ottimizzate, pipeline CI/CD e componenti riutilizzabili.",
  },
  {
    period: "2023",
    role: "Formazione tecnica",
    place: "Certificazioni & corsi",
    desc: "Approfondimenti su AWS, sicurezza e design system per prodotti scalabili.",
  },
  {
    period: "2023",
    role: "Formazione tecnica",
    place: "Certificazioni & corsi",
    desc: "Approfondimenti su AWS, sicurezza e design system per prodotti scalabili.",
  },
  {
    period: "2023",
    role: "Formazione tecnica",
    place: "Certificazioni & corsi",
    desc: "Approfondimenti su AWS, sicurezza e design system per prodotti scalabili.",
  },
  {
    period: "2023",
    role: "Formazione tecnica",
    place: "Certificazioni & corsi",
    desc: "Approfondimenti su AWS, sicurezza e design system per prodotti scalabili.",
  },
  {
    period: "2023",
    role: "Formazione tecnica",
    place: "Certificazioni & corsi",
    desc: "Approfondimenti su AWS, sicurezza e design system per prodotti scalabili.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const collapsedHeight = 360;
  const [expanded, setExpanded] = useState(false);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState(360);
  const toggleLabel = expanded ? "Riduci il percorso" : "Espandi il percorso";
  const maskCollapsed =
    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.6) 85%, rgba(0,0,0,0) 100%)";
  const maskExpanded =
    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 92%, rgba(0,0,0,0.9) 100%)";

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".about-fade", {
        y: 24,
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

  useLayoutEffect(() => {
    const el = timelineRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const measure = () => {
      const fullHeight = el.scrollHeight;
      const targetHeight = expanded
        ? fullHeight
        : Math.min(fullHeight, collapsedHeight);
      setMaxHeight(targetHeight);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    return () => observer.disconnect();
  }, [expanded]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative min-h-screen flex items-center justify-center px-6 pt-56 pb-32 overflow-hidden mt-[-6rem] scroll-mt-32 ${inter.className}`}
    >
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute right-[6%] top-[10%] h-[18rem] w-[18rem] rounded-full bg-[rgba(217,200,176,0.26)] blur-[160px]" />
        <div className="absolute left-[-6%] bottom-[-10%] h-[26rem] w-[26rem] rounded-full bg-[rgba(198,168,131,0.22)] blur-[180px]" />
        <div className="absolute inset-x-0 top-[32%] h-px bg-[rgba(47,42,36,0.08)]" />
        <div className="absolute left-[3rem] top-[32%] h-[50%] w-px bg-[rgba(47,42,36,0.08)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.45),transparent_38%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.35),transparent_42%)] opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
        <div className="space-y-12">
          <div className="about-fade flex items-center gap-3 text-base uppercase tracking-[0.3em] text-[var(--fg-soft)]">
            <div className="h-px w-10 bg-[rgba(47,42,36,0.2)]" />
            <span>Profilo</span>
          </div>

          <div className="about-fade space-y-6 max-w-5xl">
            <h2
              className={`${bebasNeue.className} text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-[var(--fg-strong)]`}
            >
              Da sempre curioso, unisco tecnica e design per costruire prodotti
              essenziali e performanti.
            </h2>
            <p className="text-xl md:text-2xl text-[var(--fg-soft)] leading-relaxed">
              Parto da basi cloud solide, dati chiari e interfacce semplici.
              Lavoro con team distribuiti, documentando le scelte e mantenendo
              il ritmo con cicli brevi e feedback rapidi.
            </p>
          </div>

          <div className="about-fade grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--border)] bg-white/85 p-5 space-y-2 transition-all duration-200 hover:border-[var(--accent)]/50 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-[var(--fg-strong)]">
                  {item.title}
                </h3>
                <p className="text-base text-[var(--fg-soft)] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/cvDocument/CVSamu.pdf"
            className="about-fade inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] text-[var(--fg-strong)] text-base hover:border-[var(--accent)] transition-all bg-white/80"
          >
            Scarica il CV completo
            <span className="text-lg">↓</span>
          </a>
        </div>

        <div className="about-fade relative rounded-3xl border border-[var(--border)] bg-white/85 backdrop-blur-xl p-8 space-y-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--fg-soft)]">
              Percorso
            </p>
            <span className="px-3 py-1 text-xs rounded-full bg-[var(--accent-2)] text-[var(--fg-strong)] tracking-[0.15em]">
              In crescita
            </span>
          </div>
          <div
            ref={timelineRef}
            style={{
              maxHeight: `${maxHeight}px`,
              maskImage: expanded ? maskExpanded : maskCollapsed,
              WebkitMaskImage: expanded ? maskExpanded : maskCollapsed,
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
            className="relative divide-y divide-[var(--border)] overflow-hidden transition-[max-height] duration-[620ms] ease-[cubic-bezier(0.33,1,0.68,1)] will-change-[max-height]"
          >
            {experiences.map((exp, idx) => (
              <div key={idx} className="py-5 first:pt-0 last:pb-0 space-y-2">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[var(--fg-soft)]/70">
                  <span>{exp.period}</span>
                  <span className="text-[var(--fg-soft)]/80">{exp.place}</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--fg-strong)]">
                  {exp.role}
                </h3>
                <p className="text-base text-[var(--fg-soft)] leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--fg-strong)] hover:border-[var(--accent)] transition-colors"
            aria-label={toggleLabel}
            aria-expanded={expanded}
          >
            {toggleLabel}
            <span
              className={`text-base transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            >
              ↑
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
