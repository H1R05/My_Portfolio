import React from "react";
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
    <article className="group relative rounded-3xl border border-[var(--border)] bg-white/85 soft-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
      <div className="overflow-hidden rounded-3xl">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={Img}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(247,243,237,0.9)] via-[rgba(247,243,237,0.4)] to-transparent" />
          <div className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent-2)] text-[var(--fg-strong)] shadow-sm">
            {category}
          </div>
        </div>

        <div className="p-6 space-y-3 text-[var(--fg-strong)]">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-[var(--fg-soft)] leading-relaxed text-sm">{description}</p>
          <div className="flex items-center justify-between pt-2">
            <span className="px-3 py-1 text-xs rounded-full bg-white/80 border border-[var(--border)] text-[var(--fg-strong)]">
              Dettagli
            </span>
            <a
              href={github}
              target="_blank"
              className="font-semibold text-[var(--fg-strong)] hover:text-[var(--accent)] transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
