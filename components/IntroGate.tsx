"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { forceAutoplay } from "./video";

const CROSSFADE_MS = 1000;
// Страховка на случай, если интро не загрузилось/не заиграло (data-saver, медленная сеть)
const FALLBACK_MS = 5000;

type Phase = "playing" | "fading" | "done";

/**
 * Интро-видео поверх контента с кроссфейдом вместо жёсткого ката.
 * Контент всегда в DOM (SSR/SEO); его reveal-анимации стартуют через
 * [data-intro="done"] в момент начала кроссфейда.
 * Играет при каждом заходе на главную (как в оригинале).
 */
export function IntroGate({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("playing");
  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    setPhase("fading");
    setTimeout(() => setPhase("done"), CROSSFADE_MS);
  }, []);

  // Пока играет интро — скролл заблокирован
  useEffect(() => {
    document.body.style.overflow = phase === "playing" ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    const t = setTimeout(finish, FALLBACK_MS);
    return () => clearTimeout(t);
  }, [phase, finish]);

  return (
    <div data-intro={phase === "playing" ? "playing" : "done"}>
      {children}
      {phase !== "done" && (
        <video
          className={`pointer-events-none fixed inset-0 z-50 h-full w-full object-cover ${
            phase === "fading" ? "intro-out" : ""
          }`}
          autoPlay
          muted
          playsInline
          aria-hidden="true"
          onLoadedData={(e) => forceAutoplay(e.currentTarget)}
          onEnded={finish}
          onError={finish}
        >
          <source src="/video/intro_transcoded.webm" type="video/webm" />
          <source src="/video/intro_transcoded.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
