import { ScrollReveal } from "./ScrollReveal";

// Анимированные WebP с альфой (~600KB каждый) грузим сразу с loading=lazy:
// подмена статичного кадра на анимацию давала визуальный «скачок».
const SPHERES = [
  {
    key: "web3",
    title: "web3",
    icon: "/gifs/ball.webp",
    lead: "Инновационные решения",
    text:
      "Разработка децентрализованных финансовых платформ, смарт-контрактов, NFT и криптокошельков — " +
      "решений на технологиях блокчейна, которые улучшают качество финансовых услуг " +
      "и создают новые бизнес-модели.",
  },
  {
    key: "trading",
    title: "trading",
    icon: "/gifs/lights.webp",
    lead: "Торговые операции",
    text:
      "Собственный алгоритм автоматически анализирует ситуацию на финансовом рынке, " +
      "используя торговые индикаторы и искусственный интеллект. На основе этого анализа " +
      "команда опытных инвесторов и трейдеров размещает средства в торговые активы.",
  },
  {
    key: "invest",
    title: "invest",
    icon: "/gifs/invest.webp",
    lead: "Венчур",
    text:
      "Инвестиции в стартапы с оценкой рисков и анализом трендов: собственные " +
      "аналитические инструменты, технологические решения и финансовая поддержка " +
      "портфельных проектов на всех стадиях.",
  },
];

export function Activities() {
  return (
    <section
      id="aboutus"
      className="relative flex w-full flex-col gap-[7vh] px-5 py-[5vh] md:px-8 lg:px-12"
    >
      {/* Заголовок слева + карточка «Кто мы?» справа */}
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:gap-8">
        <ScrollReveal>
          <header className="font-bigstem uppercase leading-none">
            <h2 className="text-[16vw] md:text-8xl lg:text-9xl">сферы</h2>
            <div className="mt-2 text-[8vw] text-q-purple md:text-5xl lg:text-6xl">
              деятельности
            </div>
          </header>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="w-full md:w-[42%] lg:w-[38%]">
          <div className="rounded-md bg-q-indigo/20 p-6 text-left backdrop-blur-sm lg:p-8">
            <h3 className="font-bigstem text-3xl uppercase lg:text-5xl">
              кто <span className="text-q-purple">мы?</span>
            </h3>
            <p className="mt-4 font-body text-base leading-relaxed text-white/85 lg:text-lg">
              Q Venture Capital — компания, специализирующаяся на разработке
              программного обеспечения в сфере финансовых технологий, трейдинге
              и венчурных инвестициях в инновационные Web3-проекты.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Три сферы: заголовки, иконки и тексты выровнены по общим строкам */}
      <ul className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8 lg:gap-14">
        {SPHERES.map((s, i) => (
          <li key={s.key}>
            <ScrollReveal delay={i * 0.15} className="h-full">
              <article className="flex h-full flex-col gap-5 text-left">
                <h3 className="font-bigstem text-[11vw] uppercase leading-none md:text-4xl lg:text-6xl">
                  {s.title}
                </h3>
                <div className="flex h-32 items-center justify-center lg:h-40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.icon}
                    alt=""
                    loading="lazy"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <div className="font-bajazzo text-xs uppercase tracking-[0.3em] text-q-purple">
                    {s.lead}
                  </div>
                  <p className="mt-3 font-body text-base leading-relaxed text-white/80">
                    {s.text}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
