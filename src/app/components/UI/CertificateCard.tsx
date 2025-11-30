import { useState } from "react";
import Image from "next/image";

interface CertificateCardProps {
  preview: string;
  name: string;
  file: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  preview,
  name,
  file,
}) => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <article className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-1 overflow-hidden">
      <div className="rounded-[26px] overflow-hidden bg-black/60">
        <div className="relative">
          {!showPdf ? (
            <div className="relative w-full h-44 cursor-pointer" onClick={() => setShowPdf(true)}>
              <Image
                src={preview}
                alt={`Anteprima del certificato ${name}`}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, 100vw"
                priority
              />
            </div>
          ) : (
            <iframe
              src={file}
              className="w-full h-44 border-0"
              title={name}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute top-3 left-3 tag text-[11px]">Certificato</div>
        </div>

        <div className="p-5 space-y-4">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-300">
            Verifica e scarica il PDF per scoprire il percorso e le competenze validate.
          </p>
          <div className="flex items-center justify-between">
            <span className="tag">PDF</span>
            <a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-orange transition-colors"
            >
              {showPdf ? "Scarica" : "Apri"}
              <span className="text-lg">↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CertificateCard;
