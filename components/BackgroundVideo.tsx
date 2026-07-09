"use client";

import { forceAutoplay } from "./video";

/**
 * Живой фон: сине-фиолетовые «лава-лампа» блобы (замена 63MB q_bg.gif из CRA-версии).
 * Лежит на fixed-слое позади контента; поверх — лёгкая виньетка для контраста текста.
 */
export function BackgroundVideo() {
  return (
    <>
      <video
        className="pointer-events-none fixed inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        onLoadedData={(e) => forceAutoplay(e.currentTarget)}
      >
        <source src="/video/q_bg.webm" type="video/webm" />
        <source src="/video/q_bg.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-transparent to-black/50"
      />
    </>
  );
}
