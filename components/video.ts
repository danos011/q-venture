// React не всегда надёжно выставляет DOM-свойство `muted` из JSX-атрибута,
// из-за чего браузер считает видео незамьюченным и блокирует autoplay.
// Форсируем через ref/событие.
export const forceAutoplay = (video: HTMLVideoElement | null) => {
  if (!video) return;
  video.muted = true;
  video.defaultMuted = true;
  video.play()?.catch(() => {});
};
