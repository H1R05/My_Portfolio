import { useState } from "react";
import emailjs from "@emailjs/browser";
import gsap, { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

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
      className="relative min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/40 opacity-50" aria-hidden />
      <div className="relative z-10 max-w-5xl w-full grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-center">
        <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Parliamo del tuo prossimo progetto</p>
          <h2 className="text-4xl font-semibold text-white leading-tight">
            Dimmi di cosa hai bisogno e costruiremo qualcosa di essenziale e performante.
          </h2>
          <p className="text-lg text-gray-200">
            Che si tratti di ottimizzare un flusso cloud, creare un design system o lanciare una nuova esperienza web, posso aiutarti a trasformare l&apos;idea in realtà.
          </p>
          <div className="space-y-3 text-gray-200">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <p>Disponibile per collaborazioni remote • CET</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="tag">Email preferita</span>
              <a href="mailto:angelicchio.samuele2004@gmail.com" className="text-white font-semibold hover:text-orange">
                angelicchio.samuele2004@gmail.com
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-3xl p-8 border border-white/10 shadow-2xl"
        >
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-sm uppercase tracking-[0.2em] text-gray-400">Nome</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Il tuo nome completo"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm uppercase tracking-[0.2em] text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="nome.cognome@esempio.it"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm uppercase tracking-[0.2em] text-gray-400">Messaggio</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Raccontami cosa vorresti realizzare"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange h-32 resize-none"
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
            {success && <p className="text-emerald-400 text-sm">Messaggio inviato con successo!</p>}

            <button
              type="submit"
              disabled={loading || success}
              className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange to-amber-400 text-blue-900 font-semibold w-full py-3 rounded-xl shadow-[0_10px_30px_rgba(255,149,5,0.35)] transition-transform duration-200 hover:scale-[1.01] disabled:opacity-50 ${success ? "bg-green-400 text-green-900" : ""}`}
            >
              {loading ? "Invio..." : success ? "Inviato" : "Invia messaggio"}
              <span className="text-lg">↗</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
