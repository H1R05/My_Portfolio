import { useState, useLayoutEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import gsap, { ScrollTrigger } from "gsap/all";
import { bebasNeue, inter } from "../fonts/permanentMarker";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      tl.from(sectionRef.current, { y: 50, autoAlpha: 0, duration: 0.5 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    if (form.honeypot.trim() !== "") {
      console.warn("Bot rilevato! Invio bloccato");
      return;
    }

    if (!form.name || !form.email || !form.message) {
      setError("Per favore compila tutti i campi.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Inserisci un'email valida.");
      return;
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: "", email: "", message: "", honeypot: "" });

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(() => {
        setLoading(false);
        setError("Errore durante l'invio, riprova");
      });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden ${inter.className}`}
    >
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute left-[-6%] top-[15%] h-[15rem] w-[15rem] rounded-full bg-[rgba(198,168,131,0.25)] blur-[160px]" />
        <div className="absolute right-[-6%] bottom-[15%] h-[15rem] w-[15rem] rounded-full bg-[rgba(217,200,176,0.22)] blur-[160px]" />
        <div className="absolute inset-x-0 top-[24%] h-px bg-[rgba(47,42,36,0.08)]" />
        <div className="absolute left-[3rem] top-[24%] h-[55%] w-px bg-[rgba(47,42,36,0.08)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.45),transparent_38%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.35),transparent_42%)] opacity-30" />
      </div>

      {/* CONTENUTO */}
      <div className="relative z-10 max-w-6xl w-full grid gap-10 lg:grid-cols-[1fr_1fr] items-start">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--fg-soft)]">
            Parliamo del tuo prossimo progetto
          </p>
          <h2
            className={`${bebasNeue.className} text-5xl md:text-6xl text-[var(--fg-strong)] leading-[0.95]`}
          >
            Dimmi di cosa hai bisogno e realizzeremo qualcosa di essenziale e performante.
          </h2>
          <p className="text-lg md:text-xl text-[var(--fg-soft)] leading-relaxed">
            Che si tratti di ottimizzare un flusso cloud, creare un design system o sviluppare una
            nuova esperienza web, posso aiutarti a trasformare l&apos;idea in un progetto solido.
          </p>
          <div className="space-y-3 text-[var(--fg-soft)]">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <p>Disponibile per collaborazioni remote • CET</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="tag">Email preferita</span>
              <a
                href="mailto:angelicchio.samuele2004@gmail.com"
                className="text-[var(--fg-strong)] font-semibold hover:text-[var(--accent)]"
              >
                angelicchio.samuele2004@gmail.com
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-3xl p-8 border border-[var(--border)] shadow-[0_20px_60px_rgba(0,0,0,0.08)] space-y-5"
        >
          <div className="grid gap-2">
            <label className="text-sm uppercase tracking-[0.2em] text-[var(--fg-soft)]">Nome</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Il tuo nome completo"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[var(--border)] text-[var(--fg-strong)] placeholder-[var(--fg-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm uppercase tracking-[0.2em] text-[var(--fg-soft)]">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="nome.cognome@esempio.it"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[var(--border)] text-[var(--fg-strong)] placeholder-[var(--fg-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm uppercase tracking-[0.2em] text-[var(--fg-soft)]">
              Messaggio
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Raccontami cosa vorresti realizzare"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/80 border border-[var(--border)] text-[var(--fg-strong)] placeholder-[var(--fg-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40 h-32 resize-none"
            />
          </div>

          <input
            type="text"
            name="honeypot"
            value={form.honeypot}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {error && <p className="text-red-400 text-sm">{error}</p>}
          {success && <p className="text-emerald-600 text-sm">Messaggio inviato con successo!</p>}

          <button
            type="submit"
            disabled={loading || success}
            className={`inline-flex items-center justify-center gap-2 bg-[var(--fg-strong)] text-[var(--bg-base)] font-semibold w-full py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:scale-[1.01] disabled:opacity-50 ${
              success ? "bg-emerald-300 text-emerald-900" : ""
            }`}
          >
            {loading ? "Invio..." : success ? "Inviato" : "Invia messaggio"}
            <span className="text-lg">↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}
