export function focusMainOnRouteChange(mainEl) {
  // ajuda leitores de tela + teclado após navegação SPA
  requestAnimationFrame(() => mainEl.focus());
}