import { media } from "../data/media.js";

export const MidiaPage = {
  path: "/midia",
  meta: {
    title: "Mídia — Galo Grow",
    description: "Galeria de fotos responsiva com lightbox e grid de vídeos."
  },
  render() {
    const el = document.createElement("div");

    el.innerHTML = `
      <section class="page-hero container">
        <h1>Mídia</h1>
        <p class="muted">Fotos e vídeos. Clique para ampliar na galeria.</p>
      </section>

      <section class="section container">
        <header class="section__header section__header--row">
          <div>
            <h2>Fotos</h2>
            <p class="muted">Lightbox acessível (dialog) e imagens responsivas.</p>
          </div>
          <a class="btn btn--ghost" href="/epk" data-link>Ver EPK</a>
        </header>

        <div class="gallery" aria-label="Galeria de fotos">
          ${media.gallery
            .map(
              (img) => `
            <button class="gallery__item" type="button"
              data-lightbox-src="${img.src}" data-lightbox-alt="${img.alt}">
              <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async" />
              <span class="gallery__hint" aria-hidden="true">Ampliar</span>
            </button>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Vídeos</h2>
          <p class="muted">Embeds responsivos com fallback de links.</p>
        </header>

        <div class="video-grid">
          ${media.videos
            .map(
              (v) => `
            <article class="card">
              <div class="embed">
                <iframe
                  src="${v.embed}"
                  title="${v.title}"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="card__actions">
                <a class="btn btn--ghost btn--small" href="${v.link}" target="_blank" rel="noreferrer">Abrir vídeo</a>
              </div>
            </article>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Downloads (fotos oficiais)</h2>
          <p class="muted">Opcional — placeholders prontos. Substitua por JPG/PNG oficiais quando tiver.</p>
        </header>

        <div class="cards">
          ${media.downloads
            .map(
              (d) => `
            <article class="card">
              <h3 class="card__title">${d.label}</h3>
              <a class="btn btn--primary btn--small" href="${d.href}" download>Baixar</a>
              <p class="muted small">Troque os arquivos em <code>public/media/placeholders/</code>.</p>
            </article>
          `
            )
            .join("")}
        </div>
      </section>
    `;

    return el;
  },
  mount({ main, lightbox }) {
    const handler = (e) => {
      const btn = e.target.closest("[data-lightbox-src]");
      if (!btn) return;
      lightbox.open({
        src: btn.getAttribute("data-lightbox-src"),
        alt: btn.getAttribute("data-lightbox-alt")
      });
    };

    main.addEventListener("click", handler);
    this.unmount = () => main.removeEventListener("click", handler);
  }
};