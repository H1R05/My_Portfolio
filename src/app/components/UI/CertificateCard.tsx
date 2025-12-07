import { useState } from "react";
import Image from "next/image";

interface CertificateCardProps {
  preview?: string;
  Img?: string;
  name?: string;
  title?: string;
  file?: string;
  link?: string;
  category: string;
}

export default function CertificateCard({
  preview,
  Img,
  name,
  title,
  file,
  link,
  category,
}: CertificateCardProps) {
  const [showPdf, setShowPdf] = useState(false);
  const imageSrc = Img || preview || "";
  const displayTitle = title || name || "Certificato";
  const href = link || file || "#";

  return (
    <article
      className="
        group relative rounded-3xl border border-[var(--border)]
        bg-white/85 transition-all duration-300 
        hover:bg-white/92 hover:-translate-y-[4px]
        hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]
        will-change-transform
      "
    >
      <div className="overflow-hidden rounded-3xl">
        <div className="relative h-48 cursor-pointer">
          {!showPdf && imageSrc ? (
            <>
              <Image
                src={imageSrc}
                alt={displayTitle}
                fill
                sizes="(min-width:1024px) 320px, 50vw"
                className="
                  object-cover transition-transform duration-500
                  transform-gpu group-hover:scale-[1.05]
                "
                onClick={() => setShowPdf(true)}
              />
            </>
          ) : (
            <iframe
              src={href !== "#" ? href : undefined}
              className="w-full h-48 rounded-lg"
              loading="lazy"
            />
          )}

          <span
            className="
              absolute top-3 left-3 px-3 py-1 text-xs font-semibold 
              rounded-full bg-[var(--accent-2)] text-[var(--fg-strong)]
            "
          >
            {category}
          </span>
        </div>

        <div className="p-6 space-y-4 text-[var(--fg-strong)]">
          <h3 className="text-lg font-semibold">{displayTitle}</h3>

          <p className="text-sm text-[var(--fg-soft)]">
            Visualizza o scarica il PDF del certificato.
          </p>

          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs rounded-full bg-white/80 border border-[var(--border)]">
              PDF
            </span>

            <a
              href={href}
              target="_blank"
              className="font-semibold transition-colors hover:text-[var(--accent)]"
            >
              {showPdf ? "Scarica" : "Apri"} ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
