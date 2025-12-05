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
    <article className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-1 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
      {/* Inner container */}
      <div className="rounded-[26px] overflow-hidden bg-black/40">
        {/* PREVIEW OR PDF */}
        <div className="relative h-48 cursor-pointer">
          {!showPdf ? (
            <Image
              src={preview}
              alt={name}
              fill
              className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
              onClick={() => setShowPdf(true)}
            />
          ) : (
            <iframe src={file} className="w-full h-48"></iframe>
          )}

          {/* CATEGORY BADGE */}
          <div className="absolute top-3 left-3 px-4 py-1 text-xs font-semibold rounded-full bg-white/25 text-white backdrop-blur-md shadow-md">
            {category}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>

        {/* TEXT CONTENT */}
        <div className="p-6 space-y-4 text-white">
          <h3 className="text-xl font-semibold">{name}</h3>

          <p className="text-sm text-gray-300">
            Visualizza o scarica il PDF del certificato.
          </p>

          <div className="flex items-center justify-between">
            <span className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-md text-white/70">
              PDF
            </span>

            <a
              href={file}
              target="_blank"
              className="font-semibold hover:text-orange transition-colors"
            >
              {showPdf ? "Scarica" : "Apri"} ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
