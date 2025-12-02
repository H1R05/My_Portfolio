import gsap, { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import { bebasNeue } from "../fonts/permanentMarker";

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
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden"
    >
      {/* PATTERN HUD + MINI BLUR */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Mini Blur Rosso */}
        <div className="absolute right-[8%] top-[18%] h-[11rem] w-[11rem] rounded-full bg-[#ee4266] blur-[130px] opacity-15"></div>

        {/* Mini Blur Ciano */}
        <div className="absolute left-[-4%] bottom-[12%] h-[13rem] w-[13rem] rounded-full bg-cyan-400 blur-[150px] opacity-15"></div>

        {/* Linea HUD orizzontale (allineata come Portfolio) */}
        <div className="absolute top-[22%] left-0 w-full h-px bg-white/5"></div>

        {/* Linea HUD verticale (stessa posizione di Portfolio) */}
        <div className="absolute top-[22%] left-[3rem] h-[45%] w-px bg-white/5"></div>

        {/* Corner HUD */}
        <div className="absolute top-[22%] left-[3rem] -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-px bg-white/10"></div>
          <div className="w-px h-6 bg-white/10"></div>
        </div>

        {/* Accento ciano laterale */}
        <div className="absolute left-[3rem] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
          <div className="w-7 h-px bg-cyan-400/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
        </div>

        {/* Accento rosso laterale */}
        <div className="absolute right-[3rem] top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
          <div className="w-7 h-px bg-[#ee4266]/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#ee4266] shadow-[0_0_10px_rgba(238,66,102,0.8)]"></div>
        </div>

        {/* Label verticale ABOUT (stessa estetica delle altre sezioni) */}
        <div className="absolute right-[3rem] top-1/2 -translate-y-1/2 rotate-90 flex items-center gap-3 text-white/30 text-sm tracking-[0.25em] font-semibold">
          <span className="h-px w-10 bg-white/10"></span>
          <span>ABOUT</span>
          <span className="h-1 w-1 rounded-full bg-white/20"></span>
        </div>
      </div>

      {/* CONTENUTO */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid gap-16 lg:grid-cols-2 items-start">
        {/* COLONNA SINISTRA */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
            Profilo
          </p>

          <h2
            className={`${bebasNeue.className} text-4xl md:text-5xl font-semibold text-white leading-tight`}
          >
            Da sempre sono affascinato dal mondo della tecnologia e
            dell&apos;informatica.
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed">
            Questa passione mi ha portato a scegliere un percorso che unisce
            competenze tecniche e creatività. Amo ideare soluzioni moderne,
            funzionali e belle da usare. Ogni giorno cerco di migliorarmi e
            imparare qualcosa di nuovo.
          </p>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all"
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
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-semibold shadow-md hover:-translate-y-[2px] transition-all"
          >
            Scarica il CV completo
            <span className="text-lg">↓</span>
          </a>
        </div>

        {/* COLONNA DESTRA */}
        <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.18em] text-gray-400">
              Percorso
            </p>
            <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white tracking-widest">
              In crescita
            </span>
          </div>

          <div className="space-y-5">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="border-b border-white/10 pb-5 last:border-0 last:pb-0"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-gray-400 mb-2">
                  {exp.period}
                </p>
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="text-sm text-gray-300">{exp.place}</p>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
