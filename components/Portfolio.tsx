"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const PROJECTS = [
  { link: "https://www.allora.network", name: "Allora", image: "/image/allora.webp" },
  { link: "https://gudchain.com", name: "Gudchain", image: "/image/gud.webp" },
  { link: "https://zkx.fi", name: "ZKX", image: "/image/zkx.webp" },
  { link: "https://www.renzoprotocol.com", name: "Renzo", image: "/image/renzo.webp" },
  { link: "https://bringsocial.com", name: "Bring", image: "/image/bring.webp" },
  { link: "https://agentlayer.xyz", name: "AgentLayer", image: "/image/agent.webp" },
  { link: "https://www.wasabi.xyz", name: "Wasabi", image: "/image/wasabi.webp" },
  { link: "https://holdstation.com", name: "Holdstation", image: "/image/hold.webp" },
  {
    link: "https://updates.rio.network/updates/eigen-labs-infinity-rio-network",
    name: "Rio Network",
    image: "/image/rio.webp",
  },
  { link: "https://www.zyfi.org", name: "Zyfi", image: "/image/zyfi.webp" },
  { link: "https://codatta.io", name: "codatta", image: "/image/codatta.webp" },
  { link: "https://kima.finance", name: "Kima", image: "/image/kima.webp" },
  { link: "https://www.bluwhale.com", name: "Bluwhale", image: "/image/bluewave.webp" },
];

/**
 * Портфолио: компактная сетка квадратных плиток (лого + имя).
 * На ховере призрачный wordmark за сеткой меняется с PORTFOLIO на имя проекта.
 */
export function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="portfolio"
      className="relative flex w-full flex-col gap-[6vh] px-5 py-[6vh] md:px-8 lg:px-12"
    >
      {/* Ghost-слой: PORTFOLIO ↔ имя проекта под курсором */}
      <span
        aria-hidden="true"
        key={hovered === null ? "portfolio" : PROJECTS[hovered].name}
        className="ghost-word ghost-swap absolute right-0 top-[2vh] hidden lg:block"
      >
        {hovered === null ? "portfolio" : PROJECTS[hovered].name}
      </span>

      <ScrollReveal>
        <h2 className="font-bigstem text-[15vw] uppercase leading-none md:text-8xl lg:text-9xl">
          portfolio
        </h2>
      </ScrollReveal>

      <ul
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5 xl:grid-cols-6"
        onMouseLeave={() => setHovered(null)}
      >
        {PROJECTS.map((p, i) => (
          <li key={p.name}>
            <ScrollReveal delay={(i % 5) * 0.06} className="h-full">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                className="group relative flex aspect-square flex-col items-center justify-center gap-4 rounded-md border border-white/10 bg-q-indigo/15 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-q-purple/60 hover:bg-q-indigo/25"
              >
                <span className="absolute left-3 top-3 font-bigstem text-sm leading-none text-white/25 transition-colors duration-300 group-hover:text-q-purple">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="h-16 w-16 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20"
                />
                <span className="text-center font-bigstem text-base uppercase leading-none tracking-tight md:text-lg">
                  {p.name}
                </span>
              </a>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
