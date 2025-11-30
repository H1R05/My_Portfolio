import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  Img: string;
  title: string;
  description: string;
  github: string;
}

const ProjectCard = ({ Img, title, description, github }: ProjectCardProps) => (
  <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-1">
    <div className="overflow-hidden rounded-[26px] bg-black/60">
      <div className="relative">
        <div className="relative w-full h-56">
          <Image
            src={Img}
            alt={title}
            fill
            className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-3">
          <span className="tag bg-white/10 text-xs uppercase tracking-[0.2em]">Progetto</span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-gray-200 leading-relaxed">{description}</p>
          </div>
          <span className="h-10 w-10 rounded-full bg-gradient-to-br from-orange to-amber-400 opacity-80" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">Tecnologie: React • Node • AWS</p>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold transition-colors hover:text-orange"
          >
            GitHub
            <span className="text-lg">↗</span>
          </a>
        </div>
      </div>
    </div>
  </article>
);

export default ProjectCard;
