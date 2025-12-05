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
    <article className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-1 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
      {/* Inner container */}
      <div className="rounded-[26px] overflow-hidden bg-black/40">
        {/* IMAGE */}
        <div className="relative h-60 overflow-hidden">
          <Image
            src={Img}
            alt={title}
            fill
            className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
          />

          {/* CATEGORY BADGE */}
          <div className="absolute top-4 left-4 px-4 py-1 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-md text-white shadow-md">
            {category}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>

        {/* TEXT CONTENT */}
        <div className="p-6 space-y-4 text-white">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <p className="text-gray-200 leading-relaxed">{description}</p>

          <div className="flex items-center justify-between pt-2">
            <span className="px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-md text-white/80">
              Dettagli
            </span>

            <a
              href={github}
              target="_blank"
              className="font-semibold text-white hover:text-orange transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
