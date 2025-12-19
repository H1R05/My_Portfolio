import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaCss3Alt,
  FaHtml5,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCSharp } from "react-icons/tb";
import { SiPnpm } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiVitest } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

type TechStackItem = { name: string; Icon: React.ElementType };

const techStack: TechStackItem[] = [
  { name: "React", Icon: FaReact },
  { name: "Typescript", Icon: SiTypescript },
  { name: "Tailwind", Icon: RiTailwindCssFill },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Javascript", Icon: IoLogoJavascript },
  { name: "Html", Icon: FaHtml5 },
  { name: "Css", Icon: FaCss3Alt },
  { name: "Docker", Icon: FaDocker },
  { name: "MongoDb", Icon: SiMongodb },
  { name: "Aws", Icon: FaAws },
  { name: "C#", Icon: TbBrandCSharp },
  { name: "Pnpm", Icon: SiPnpm },
  { name: "MySql", Icon: SiMysql },
  { name: "Vitest", Icon: SiVitest },
];

export default function TechStackTicker() {
  return (
    <div className="relative w-full overflow-hidden py-3">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[rgba(13,17,21,1)] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[rgba(13,17,21,1)] to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap gap-6">
        {techStack.concat(techStack).map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--fg-strong)] text-sm shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            <item.Icon className="h-5 w-5 text-[var(--accent)]" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
