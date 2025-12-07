import Image from "next/image";

interface ProjectCardProps {
  Img: string;
  title: string;
  description: string;
  github: string;
  category: string;
}

export default function ProjectCard({
  Img,
  title,
  description,
  github,
  category,
}: ProjectCardProps) {
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
        <div className="relative h-56 overflow-hidden">
          <Image
            src={Img}
            alt={title}
            fill
            sizes="(min-width:1024px) 450px, 50vw"
            className="
              object-cover transition-transform duration-500 
              transform-gpu group-hover:scale-[1.05]
            "
          />

          <span
            className="
              absolute top-3 left-3 px-3 py-1 text-xs font-semibold 
              rounded-full bg-[var(--accent-2)] text-[var(--fg-strong)]
            "
          >
            {category}
          </span>
        </div>

        <div className="p-6 space-y-3 text-[var(--fg-strong)]">
          <h3 className="text-xl font-semibold">{title}</h3>

          <p className="text-sm text-[var(--fg-soft)] leading-relaxed">
            {description}
          </p>

          <div className="flex items-center justify-between pt-2">
            <span className="px-3 py-1 text-xs rounded-full bg-white/80 border border-[var(--border)]">
              Dettagli
            </span>

            <a
              href={github}
              target="_blank"
              className="
                font-semibold transition-colors 
                hover:text-[var(--accent)]
              "
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
