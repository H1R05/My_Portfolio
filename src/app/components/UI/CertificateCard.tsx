import { useState } from "react";
import Image from "next/image";

interface CertificateCardProps {
  preview: string;
  name: string;
  file: string;
  category: string;
}

export default function CertificateCard({
  preview,
  name,
  file,
  category,
}: CertificateCardProps) {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <article className="group relative rounded-3xl border border-[var(--border)] bg-white/85 soft-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
      <div className="overflow-hidden rounded-3xl">
        <div className="relative h-48 cursor-pointer">
          {!showPdf ? (
            <Image
              src={preview}
              alt={name}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              onClick={() => setShowPdf(true)}
            />
          ) : (
            <iframe src={file} className="w-full h-48" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(247,243,237,0.85)] via-[rgba(247,243,237,0.45)] to-transparent" />
          <div className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent-2)] text-[var(--fg-strong)] shadow-sm">
            {category}
          </div>
        </div>

        <div className="p-6 space-y-4 text-[var(--fg-strong)]">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-[var(--fg-soft)] leading-relaxed">
            Visualizza o scarica il PDF del certificato.
          </p>
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs rounded-full bg-white/80 border border-[var(--border)] text-[var(--fg-strong)]">
              PDF
            </span>
            <a
              href={file}
              target="_blank"
              className="font-semibold text-[var(--fg-strong)] hover:text-[var(--accent)] transition-colors"
            >
              {showPdf ? "Scarica" : "Apri"} ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
