import { ScrollReveal } from "./ScrollReveal";

const CHANNELS = [
  {
    label: "telegram",
    value: "@OverheardinQ",
    href: "https://t.me/OverheardinQ",
    external: true,
    primary: true,
  },
  {
    label: "телефон",
    value: "+7 931 324 4444",
    href: "tel:+79313244444",
    external: false,
    primary: false,
  },
  {
    label: "почта",
    value: "partner@qventure.ru",
    href: "mailto:Partner@qventure.ru",
    external: false,
    primary: false,
  },
];

/** Закрывающая секция: колонка контактов слева, светящаяся Q справа. */
export function Contacts() {
  return (
    <section
      id="contactus"
      className="relative flex min-h-[95svh] w-full flex-col gap-[7vh] px-5 py-[8vh] md:px-8 lg:px-12"
    >
      <span
        aria-hidden="true"
        className="ghost-word absolute right-0 top-[4vh] hidden lg:block"
      >
        contact
      </span>

      <ScrollReveal>
        <header className="flex flex-col gap-4">
          <h2 className="font-bigstem text-[15vw] uppercase leading-none md:text-8xl lg:text-9xl">
            contact us
          </h2>
          <p className="max-w-[44ch] font-body text-base leading-relaxed text-white/70 lg:text-lg">
            Есть проект или идея в Web3 — напишите нам.
          </p>
        </header>
      </ScrollReveal>

      <div className="flex flex-1 flex-col gap-14 lg:flex-row lg:items-center lg:gap-8">
        {/* Контакты — одна колонка слева */}
        <div className="flex flex-col gap-10 lg:w-[55%] lg:gap-12">
          {CHANNELS.map((c, i) => (
            <ScrollReveal key={c.label} delay={i * 0.12}>
              <a
                href={c.href}
                {...(c.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex w-fit flex-col gap-3"
              >
                <span
                  className={`font-bajazzo text-xs uppercase tracking-[0.35em] ${
                    c.primary ? "text-q-purple" : "text-white/50"
                  }`}
                >
                  {c.label}
                </span>
                <span
                  className={`font-bigstem uppercase leading-none tracking-tight ${
                    c.primary
                      ? "text-4xl md:text-5xl lg:text-6xl"
                      : "text-3xl transition-colors group-hover:text-q-purple md:text-4xl"
                  }`}
                >
                  {c.value}
                </span>
                {c.primary && (
                  <span className="h-2 w-[120px] bg-white transition-all duration-500 group-hover:w-full group-hover:bg-q-purple" />
                )}
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Q — перекличка с hero */}
        <ScrollReveal
          delay={0.2}
          className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image/q.webp"
            alt=""
            loading="lazy"
            className="max-h-[32vh] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          />
        </ScrollReveal>
      </div>

      <footer className="flex items-center justify-between font-bajazzo text-xs uppercase tracking-[0.3em] text-white/40">
        <span>© {new Date().getFullYear()} Q Venture Capital</span>
        <span>web3 · trading · invest</span>
      </footer>
    </section>
  );
}
