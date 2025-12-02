import gsap, { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

const highlights = [
  {
    title: "Collaborazione",
    body: "Lavoro bene in team, condividendo processi, documentazione e best practice per far avanzare i progetti più velocemente.",
  },
  {
    title: "Formazione continua",
    body: "Sono certificato AWS Cloud Practitioner e investo tempo nell'apprendere nuove tecnologie legate a cloud e front-end.",
  },
];

const experiences = [
  {
    period: "2024 — presente",
    role: "Full‑stack & Cloud",
    place: "Progetti personali e studio",
    desc: "Sviluppo applicazioni Next.js con infrastrutture cloud ottimizzate, pipeline CI/CD e componenti riutilizzabili.",
  },
  {
    period: "2023",
    role: "Formazione tecnica",
    place: "Certificazioni & corsi",
    desc: "Approfondimenti su AWS, sicurezza e design system per migliorare il modo in cui concepisco e consegno i prodotti digitali.",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-fade", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-40"
        aria-hidden
      />
      <div className="relative z-10 grid max-w-6xl mx-auto gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-6 about-fade">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
            Profilo
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            Da sempre sono affascinato dal mondo della tecnologia e
            dell&apos;informatica.
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Questa passione mi ha portato a scegliere un percorso di studi che
            mi permette di unire competenze tecniche e creatività. Mi piace
            affrontare nuove sfide, trovare soluzioni originali e realizzare
            progetti che funzionano bene ma sono anche belli da vedere. Sono
            curioso, voglio imparare sempre di più e godermi il viaggio nel
            mondo della tecnologia, mettendo il cuore in tutto quello che
            faccio.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="about-fade p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <a
            href="/cvDocument/CVSamu.pdf"
            className="about-fade inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-orange to-amber-400 text-blue-900 font-semibold shadow-[0_12px_30px_rgba(255,149,5,0.35)] hover:translate-y-[-2px] transition-transform"
          >
            Scarica il CV completo
            <span className="text-lg">↓</span>
          </a>
        </div>

        <div className="glass-card about-fade rounded-3xl p-8 border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.18em] text-gray-400">
              Percorso
            </p>
            <span className="tag">In crescita</span>
          </div>
          <div className="space-y-5">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="border-b border-white/10 pb-5 last:border-0 last:pb-0"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-orange mb-2">
                  {exp.period}
                </p>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-300">{exp.place}</p>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
