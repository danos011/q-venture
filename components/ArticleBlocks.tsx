import type { Block } from "@/content/articles";

/** Рендер контент-блоков статьи: абзацы, подзаголовки («Шаг N»), списки с терминами. */
export function ArticleBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p
                key={i}
                className="font-body text-lg leading-[1.8] text-white/85"
              >
                {block.text}
              </p>
            );
          case "sub":
            return (
              <h3
                key={i}
                className="mt-4 font-bigstem text-xl uppercase tracking-wide text-white lg:text-2xl"
              >
                {block.title}
              </h3>
            );
          case "list":
            return (
              <ul key={i} className="flex flex-col gap-4 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] h-px w-6 shrink-0 bg-q-purple"
                    />
                    <span className="font-body text-lg leading-[1.7] text-white/85">
                      {item.term && (
                        <span className="text-q-purple">{item.term} </span>
                      )}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            );
        }
      })}
    </>
  );
}
