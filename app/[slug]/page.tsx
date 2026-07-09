import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBlocks } from "@/components/ArticleBlocks";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { ARTICLES } from "@/content/articles";

// Статические роуты со старыми слагами (/investicii-* уже в поисковом индексе)
export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.name,
    description: article.lead,
    openGraph: {
      title: article.title,
      description: article.lead,
      type: "article",
      locale: "ru_RU",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = ARTICLES.findIndex((a) => a.slug === slug);
  if (index === -1) notFound();

  const article = ARTICLES[index];
  const prev = index > 0 ? ARTICLES[index - 1] : null;
  const next = index < ARTICLES.length - 1 ? ARTICLES[index + 1] : null;

  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      {/* Верхняя планка: домой + метка раздела */}
      <nav className="flex items-center justify-between px-5 py-5 md:px-8 lg:px-12">
        <Link
          href="/"
          className="group flex items-center gap-4 text-white"
        >
          <span className="font-bigstem text-3xl uppercase leading-none transition-colors group-hover:text-q-purple">
            q
          </span>
          <span className="font-bajazzo text-xs uppercase tracking-[0.35em] text-white/50 transition-colors group-hover:text-white">
            ← на главную
          </span>
        </Link>
        <Link
          href="/#knowledgeBase"
          className="font-bajazzo text-xs uppercase tracking-[0.35em] text-white/50 transition-colors hover:text-white"
        >
          faq · {String(index + 1).padStart(2, "0")}/
          {String(ARTICLES.length).padStart(2, "0")}
        </Link>
      </nav>

      {/* Шапка статьи */}
      <header className="mx-auto max-w-4xl px-5 pb-[6vh] pt-[6vh] md:px-8">
        <h1 className="font-bigstem text-4xl uppercase leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          {article.title}
        </h1>
        <p className="mt-6 max-w-[52ch] font-body text-lg leading-relaxed text-q-purple md:text-xl">
          {article.lead}
        </p>
        <div className="mt-10 h-px w-24 bg-white/40" />
      </header>

      {/* Тело: узкая читабельная колонка */}
      <article className="mx-auto flex max-w-[72ch] flex-col gap-14 px-5 pb-[10vh] md:px-8">
        {article.sections.map((section, i) => (
          <section key={i} className="flex flex-col gap-5">
            <h2 className="font-bigstem text-2xl uppercase leading-tight tracking-wide text-white lg:text-3xl">
              {section.heading}
            </h2>
            <ArticleBlocks blocks={section.blocks} />
          </section>
        ))}
      </article>

      {/* Prev / Next с названиями статей */}
      <footer className="mx-auto max-w-4xl border-t border-white/10 px-5 py-10 md:px-8">
        <div className="flex flex-row items-start justify-between gap-6">
          {prev ? (
            <Link href={`/${prev.slug}`} className="group flex flex-col gap-1">
              <span className="font-bajazzo text-xs uppercase tracking-[0.3em] text-white/40">
                ← предыдущая
              </span>
              <span className="font-bigstem text-lg uppercase transition-colors group-hover:text-q-purple md:text-xl">
                {prev.name}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/${next.slug}`}
              className="group flex flex-col items-end gap-1 text-right"
            >
              <span className="font-bajazzo text-xs uppercase tracking-[0.3em] text-white/40">
                следующая →
              </span>
              <span className="font-bigstem text-lg uppercase transition-colors group-hover:text-q-purple md:text-xl">
                {next.name}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </footer>
    </div>
  );
}
