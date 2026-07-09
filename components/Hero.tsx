/**
 * Hero: WE ARE ↖ / Q в центре / PROJECT ↘ — диагональная композиция
 * с призрачными wordmarks на фоне (текст с обводкой вместо webp-картинок).
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[100svh] w-full flex-col justify-center gap-3 overflow-hidden p-5 uppercase md:p-8 lg:h-screen lg:flex-row lg:px-12 lg:py-[8vh]"
    >
      <h1 className="sr-only">
        Q Venture Capital — венчурные инвестиции, трейдинг и финтех-разработка в Web3
      </h1>

      {/* Призрачные wordmarks — только десктоп, на планшете/телефоне давят контент */}
      <span
        aria-hidden="true"
        className="ghost-word reveal-right absolute -right-[3vw] top-[5vh] hidden lg:block"
        style={{ animationDelay: "0.5s" }}
      >
        project
      </span>
      <span
        aria-hidden="true"
        className="ghost-word reveal-left absolute -left-[3vw] bottom-[8vh] hidden lg:block"
        style={{ animationDelay: "0.5s" }}
      >
        we are
      </span>

      {/* WE ARE — верхний левый угол диагонали */}
      <div
        aria-hidden="true"
        className="reveal-left flex w-full flex-col items-start justify-center gap-5 lg:w-[40%] lg:self-start"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="font-bigstem text-[17vw] leading-none tracking-tighter md:text-[7rem] lg:text-9xl">
          we are
        </div>
        <div className="h-2 w-[120px] bg-white" />
      </div>

      {/* Q — центр */}
      <div className="mx-auto flex min-h-[42svh] flex-col items-center justify-center gap-8 lg:min-h-0 lg:gap-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/image/q.webp"
          alt=""
          className="reveal-q max-h-[36svh] min-h-[30svh] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] lg:mt-10 lg:max-h-[400px]"
          style={{ animationDelay: "0.35s" }}
        />
        <p
          className="reveal-up max-w-[38ch] text-balance text-center font-bajazzo text-xs uppercase tracking-[0.35em] text-white/70 md:text-sm"
          style={{ animationDelay: "0.9s" }}
        >
          Венчурные инвестиции · трейдинг · финтех&#8209;разработка в&nbsp;Web3
        </p>
      </div>

      {/* PROJECT — нижний правый угол диагонали */}
      <div
        aria-hidden="true"
        className="reveal-right flex w-full flex-col items-end justify-center gap-4 lg:w-[40%] lg:self-end"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="font-bigstem text-[17vw] leading-none tracking-tighter md:text-[7rem] lg:text-9xl">
          project
        </div>
        <div className="h-2 w-[120px] bg-white lg:w-[200px]" />
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        className="reveal-up absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        style={{ animationDelay: "1.4s" }}
      >
        <span className="font-bajazzo text-[10px] tracking-[0.5em] text-white/50">
          scroll
        </span>
        <span className="scroll-cue-line" />
      </div>
    </section>
  );
}
