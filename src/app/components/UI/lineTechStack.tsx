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
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { SiPnpm } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiVitest } from "react-icons/si";

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
  { name: "Aws", Icon: FaAws },
  { name: "Postegres", Icon: BiLogoPostgresql },
  { name: "C#", Icon: TbBrandCSharp },
  { name: "Pnpm", Icon: SiPnpm },
  { name: "MySql", Icon: SiMysql },
  { name: "Vitest", Icon: SiVitest },
];

export default function TechStackTicker() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
      <div className="flex animate-marquee whitespace-nowrap">
        {techStack.concat(techStack).map((item, idx) => (
          <div key={idx} className="flex flex-col items-center mx-4 mt-2">
            <item.Icon className="h-8 w-8 hover:scale-110 transition" />
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="flex animate-marquee-reverse whitespace-nowrap mt-8">
        {techStack.concat(techStack).map((item, idx) => (
          <div key={idx} className="flex flex-col items-center mx-4 mt-2">
            <item.Icon className="h-8 w-8 hover:scale-110 transition" />
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
