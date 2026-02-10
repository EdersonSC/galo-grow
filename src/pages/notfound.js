export const NotFoundPage = {
  path: "/404",
  meta: {
    title: "Página não encontrada — Galo Grow",
    description: "A página solicitada não existe. Volte para a Home."
  },
  render() {
    const el = document.createElement("div");
    el.innerHTML = `
      <section class="page-hero container">
        <h1>404</h1>
        <p class="muted">Página não encontrada.</p>
        <div class="hero__ctas">
          <a class="btn btn--primary" href="/" data-link>Voltar para Home</a>
          <a class="btn btn--ghost" href="/contato" data-link>Contratar</a>
        </div>
      </section>
    `;
    return el;
  }
};