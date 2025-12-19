import { useState, useLayoutEffect, useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
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
  const contentRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const target = contentRef.current;
      if (!target) return;

      gsap.set(target, {
        autoAlpha: 0,
        y: 32,
        force3D: true,
        willChange: "transform, opacity",
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        invalidateOnRefresh: true,
        onEnter: () => {
          gsap.to(target, {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    if (form.honeypot.trim() !== "") {
      console.warn("Bot rilevato! Invio bloccato");
      setLoading(false);
      return;
    }

    if (!form.name || !form.email || !form.message) {
      setError("Per favore compila tutti i campi.");
      setLoading(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Inserisci un'email valida.");
      setLoading(false);
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError(
        "Configurazione EmailJS mancante. Verifica le variabili NEXT_PUBLIC_EMAILJS_*."
      );
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey }
      );
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "", honeypot: "" });

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      const errStatus =
        err instanceof EmailJSResponseStatus
          ? err.status
          : typeof err === "object" && err !== null && "status" in err
          ? Number((err as { status?: number }).status)
          : undefined;
      const errText =
        err instanceof EmailJSResponseStatus
          ? err.text
          : typeof err === "object" && err !== null && "text" in err
          ? String((err as { text?: string }).text)
          : undefined;

      if (typeof errStatus === "number" && errText) {
        console.error("EmailJS send error:", {
          status: errStatus,
          text: errText,
        });
        setError(`Invio fallito (${errStatus}). ${errText}`);
      } else if (err instanceof Error) {
        console.error("EmailJS send error:", err.message, err.stack);
        setError(`Errore durante l'invio: ${err.message}`);
      } else if (typeof err === "string") {
        console.error("EmailJS send error:", err);
        setError(`Errore durante l'invio: ${err}`);
      } else {
        console.error("EmailJS send error:", err);
        setError("Errore durante l'invio, riprova");
      }
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden ${inter.className}`}
    >
      <div className="section-bg absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute left-[-6%] top-[15%] h-[15rem] w-[15rem] rounded-full bg-[rgba(var(--glow-pink),0.18)] blur-[160px]" />
        <div className="absolute right-[-6%] bottom-[15%] h-[15rem] w-[15rem] rounded-full bg-[rgba(var(--glow-cyan),0.2)] blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.2),transparent_38%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.16),transparent_42%)] opacity-30" />
      </div>

      {/* contenuto */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-6xl w-full grid gap-10 lg:grid-cols-[1fr_1fr] items-start"
      >
        <div className="space-y-6">
          <div className="about-fade flex items-center gap-3 text-base uppercase tracking-[0.3em] text-[var(--fg-soft)]">
            <div className="h-px w-10 bg-[rgba(243,238,230,0.18)]" />
            <span>Contatti</span>
          </div>
          <h2
            className={`${bebasNeue.className} text-5xl md:text-6xl text-[var(--fg-strong)] leading-[0.95]`}
          >
            Se mi vuoi contattare, scrivimi pure.
          </h2>
          <p className="text-lg md:text-xl text-[var(--fg-soft)] leading-relaxed">
            Qualsiasi domanda o proposta di collaborazione, non esitare a
            scrivermi. Rispondo sempre con piacere!
          </p>
          <div className="space-y-3 text-[var(--fg-soft)]">
            <div className="flex items-center gap-3">
              <span className="tag">Email preferita</span>
              <a
                href="mailto:angelicchio.samuele2004@gmail.com"
                className="text-[var(--fg-strong)] font-semibold hover:text-[var(--accent)]"
              >
                samu.canu09@gmail.com
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-3xl p-8 border border-[var(--border)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] space-y-5"
        >
          <div className="grid gap-2">
            <label className="text-sm uppercase tracking-[0.2em] text-[var(--fg-soft)]">
              Nome
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="nome completo"
              required
              className="w-full px-4 py-3 rounded-xl bg-[rgba(16,21,25,0.88)] border border-[var(--border)] text-[var(--fg-strong)] placeholder-[var(--fg-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm uppercase tracking-[0.2em] text-[var(--fg-soft)]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="nome.cognome@esempio.it"
              required
              className="w-full px-4 py-3 rounded-xl bg-[rgba(16,21,25,0.88)] border border-[var(--border)] text-[var(--fg-strong)] placeholder-[var(--fg-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
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
              placeholder="Scrivi il tuo messaggio qui..."
              required
              className="w-full px-4 py-3 rounded-xl bg-[rgba(16,21,25,0.88)] border border-[var(--border)] text-[var(--fg-strong)] placeholder-[var(--fg-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40 h-32 resize-none"
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
          {success && (
            <p className="text-emerald-600 text-sm">
              Messaggio inviato con successo!
            </p>
          )}

          <button
            type="submit"
            disabled={loading || success}
            className={`inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-[var(--bg-base)] font-semibold w-full py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-[1.01] disabled:opacity-50 ${
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
