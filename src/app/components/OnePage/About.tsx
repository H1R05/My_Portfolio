"use client";

import gsap, { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import { bebasNeue, inter } from "../fonts/permanentMarker";

const bio =
  "Questa passione mi ha portato a scegliere un percorso di studi che mi permette di unire competenze tecniche e creatività. Voglio imparare sempre di più e godermi il viaggio nel mondo dell'informatica, mettendo il cuore in tutto quello che faccio.";
const stats = [
  { label: "Progetti", value: "2", href: "#portfolio" },
  { label: "Certificazioni", value: "2", href: "#certifications" },
  { label: "Anni di Esperienza", value: "1", href: "#portfolio" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);

  // Fade-in leggero
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".about-fade");
      if (!items.length) return;

      gsap.set(items, {
        autoAlpha: 0,
        y: 24,
        force3D: true,
        willChange: "transform, opacity",
      });

      ScrollTrigger.batch(items, {
        start: "top 80%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            overwrite: true,
            clearProps: "will-change",
          });
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative min-h-screen flex items-center justify-center px-6 pt-56 pb-32 overflow-hidden mt-[-6rem] scroll-mt-32 ${inter.className}`}
    >
      {/* decorazione background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden section-bg">
        <div className="absolute right-[6%] top-[10%] h-[18rem] w-[18rem] rounded-full bg-[rgba(var(--glow-cyan),0.2)] blur-[160px]" />
        <div className="absolute left-[-6%] bottom-[-10%] h-[26rem] w-[26rem] rounded-full bg-[rgba(var(--glow-pink),0.18)] blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.2),transparent_38%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.16),transparent_42%)] opacity-30" />
      </div>

      {/* contenuto */}
      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <div className="about-fade flex items-center gap-3 text-base uppercase tracking-[0.3em] text-[var(--fg-soft)]">
          <div className="h-px w-10 bg-[rgba(243,238,230,0.18)]" />
          <span>Profilo</span>
        </div>

        <div className="about-fade mt-8 space-y-6">
          <h2
            className={`${bebasNeue.className} text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-[var(--fg-strong)]`}
          >
            Da sempre sono affascinato dal mondo della tecnologia e
            dell&apos;informatica.
          </h2>

          <p className="text-xl md:text-2xl text-[var(--fg-soft)] leading-relaxed">
            {bio}
          </p>
        </div>

        <div className="about-fade mt-8 grid gap-3 sm:grid-cols-3">
          {stats.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-4 text-center transition-all hover:-translate-y-[2px] hover:border-[var(--accent)]/60"
            >
              <p className="text-3xl font-semibold text-[var(--fg-strong)]">
                {item.value}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--fg-soft)]">
                {item.label}
              </p>
            </a>
          ))}
        </div>

        <a
          href="/cvDocument/2V_NewCv_SamueleAngelicchio.pdf"
          className="about-fade inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full border border-[var(--border)] text-[var(--fg-strong)] text-base hover:border-[var(--accent)] transition-all bg-[var(--card)]"
        >
          Scarica il CV completo ↓
        </a>
      </div>
    </section>
  );
}
