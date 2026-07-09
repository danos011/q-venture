"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { name: "сферы деятельности", anchor: "aboutus" },
  { name: "faq", anchor: "knowledgeBase" },
  { name: "портфолио", anchor: "portfolio" },
  { name: "контакты", anchor: "contactus" },
];

/** Минималистичная навигация: Q-лого + бургер, полноэкранное меню с якорями. */
export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (anchor: string) => {
    setOpen(false);
    document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="reveal-up fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 md:px-8 lg:px-10" style={{ animationDelay: "1.2s" }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Наверх"
          className="font-bigstem text-3xl uppercase leading-none text-white transition-colors hover:text-q-purple"
        >
          q
        </button>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          className="group flex h-11 w-11 flex-col items-end justify-center gap-[7px]"
        >
          <span
            className={`h-px bg-white transition-all duration-300 ${
              open ? "w-7 translate-y-[4px] rotate-45" : "w-7 group-hover:w-5"
            }`}
          />
          <span
            className={`h-px bg-white transition-all duration-300 ${
              open ? "w-7 -translate-y-[4px] -rotate-45" : "w-5 group-hover:w-7"
            }`}
          />
        </button>
      </div>

      {/* Полноэкранное меню */}
      <div
        className={`fixed inset-0 z-30 flex flex-col justify-center gap-2 bg-black/85 px-8 backdrop-blur-md transition-opacity duration-300 md:px-16 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {LINKS.map((link, i) => (
          <button
            key={link.anchor}
            onClick={() => go(link.anchor)}
            tabIndex={open ? 0 : -1}
            className={`w-fit text-left font-bigstem text-4xl uppercase leading-tight text-white transition-all duration-500 hover:text-q-purple md:text-6xl ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${0.08 + i * 0.06}s` : "0s" }}
          >
            {link.name}
          </button>
        ))}
      </div>
    </>
  );
}
