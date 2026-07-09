import Link from "next/link";
import { ARTICLES } from "@/content/articles";
import { ScrollReveal } from "./ScrollReveal";

/**
 * Превью Базы знаний на лендинге: сетка карточек-статей
 * (контраст к строкам-индексу Портфолио).
 */
export function KnowledgeBase() {
  return (
    <section
      id="knowledgeBase"
      className="relative flex w-full flex-col gap-[6vh] px-5 py-[6vh] md:px-8 lg:px-12"
    >
      <ScrollReveal>
        <header className="flex items-end justify-between gap-6">
          <h2 className="font-bigstem text-[15vw] uppercase leading-none md:text-8xl lg:text-9xl">
            faq
          </h2>
          <div className="hidden pb-3 text-right font-bajazzo text-xs uppercase tracking-[0.3em] text-white/50 md:block">
            {ARTICLES.length} статей
            <span className="mx-2 text-q-purple">/</span>
            инвестиции
          </div>
        </header>
      </ScrollReveal>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {ARTICLES.map((article, i) => (
          <li key={article.slug}>
            <ScrollReveal delay={(i % 3) * 0.1} className="h-full">
              <Link
                href={`/${article.slug}`}
                className="group flex h-full flex-col rounded-md border border-white/10 bg-q-indigo/15 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-q-purple/60 hover:bg-q-indigo/25 lg:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-bajazzo text-xs tracking-[0.3em] text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-bajazzo text-xl leading-none text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-q-purple"
                  >
                    →
                  </span>
                </div>
                <h3 className="mt-8 text-left font-bigstem text-2xl uppercase leading-[1.2] lg:text-3xl">
                  {article.name}
                </h3>
                <p className="mt-3 text-left font-body text-sm leading-relaxed text-white/60">
                  {article.lead}
                </p>
              </Link>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
