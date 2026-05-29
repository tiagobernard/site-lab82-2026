"use client";

import { Icon } from "@iconify/react";

type TechItem = { name: string; iconId: string; hex: string };

const TECHS: TechItem[] = [
  { name: "WordPress",        iconId: "simple-icons:wordpress",       hex: "21759B" },
  { name: "Nuxt.js",          iconId: "simple-icons:nuxt",            hex: "00DC82" },
  { name: "Vue.js",           iconId: "simple-icons:vuedotjs",        hex: "4FC08D" },
  { name: "Pinia",            iconId: "simple-icons:pinia",           hex: "FFD859" },
  { name: "Vercel",           iconId: "simple-icons:vercel",          hex: "FFFFFF" },
  { name: "Cloudflare Pages", iconId: "simple-icons:cloudflarepages", hex: "F38020" },
  { name: "Cloudflare",       iconId: "simple-icons:cloudflare",      hex: "F38020" },
  { name: "Next.js",          iconId: "simple-icons:nextdotjs",       hex: "FFFFFF" },
  { name: "React",            iconId: "simple-icons:react",           hex: "61DAFB" },
  { name: "Redux",            iconId: "simple-icons:redux",           hex: "764ABC" },
  { name: "TypeScript",       iconId: "simple-icons:typescript",      hex: "3178C6" },
  { name: "Node.js",          iconId: "simple-icons:nodedotjs",       hex: "5FA04E" },
  { name: "n8n",              iconId: "simple-icons:n8n",             hex: "EA4B71" },
  { name: "Open Project",     iconId: "simple-icons:openproject",     hex: "0770B8" },
  { name: "Python",           iconId: "simple-icons:python",          hex: "3776AB" },
  { name: "PostgreSQL",       iconId: "simple-icons:postgresql",      hex: "4169E1" },
  { name: "Docker",           iconId: "simple-icons:docker",          hex: "2496ED" },
  { name: "OpenAI",           iconId: "simple-icons:openai",          hex: "10A37F" },
  { name: "Anthropic",        iconId: "simple-icons:anthropic",       hex: "FFFFFF" },
  { name: "Git",              iconId: "simple-icons:git",             hex: "F03C2E" },
  { name: "Cypress",          iconId: "simple-icons:cypress",         hex: "69D3A7" },
  { name: "Tailwind CSS",     iconId: "simple-icons:tailwindcss",     hex: "06B6D4" },
];

export default function TechCarousel() {
  const items = [...TECHS, ...TECHS];

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="tech-marquee">
        {items.map((tech, i) => (
          <div
            key={i}
            className="tech-item"
            style={{ "--c": `#${tech.hex}` } as React.CSSProperties}
          >
            <Icon icon={tech.iconId} width={42} height={42} />
            <span className="tech-label">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
