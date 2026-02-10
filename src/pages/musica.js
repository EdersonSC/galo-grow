export const MusicaPage = {
  path: "/musica",
  meta: {
    title: "Música — Galo Grow",
    description: "Ouça demos e ao vivo. Embeds responsivos com fallback de links."
  },
  render() {
    const el = document.createElement("div");
    el.innerHTML = `
      <section class="page-hero container">
        <h1>Música</h1>
        <p class="muted">
          Repertório versátil: <strong>do rock ao pop</strong>, nacional e internacional.
          Aqui vão demos e trechos ao vivo (placeholders prontos para trocar).
        </p>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Destaque (YouTube)</h2>
          <p class="muted">Embed responsivo + link de fallback.</p>
        </header>

        <div class="embed">
          <iframe
            src="${music.highlight.youtubeEmbed}"
            title="${music.highlight.title}"
            loading="lazy"
            referrerpolicy="no-referrer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <p class="muted small">
          Se o embed não carregar, abra: <a class="link" href="${music.highlight.youtubeLink}" target="_blank" rel="noreferrer">YouTube</a>
        </p>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Spotify</h2>
          <p class="muted">Embed responsivo + link de fallback.</p>
        </header>

        <div class="embed embed--spotify">
          <iframe
            src="${music.spotify.embed}"
            title="Spotify (placeholder)"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
        <p class="muted small">
          Fallback: <a class="link" href="${music.spotify.link}" target="_blank" rel="noreferrer">Abrir no Spotify</a>
        </p>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Discografia / Demos</h2>
        </header>

        <div class="cards">
          ${music.discography
            .map(
              (d) => `
            <article class="card">
              <div class="card__top">
                <h3 class="card__title">${d.title}</h3>
                <span class="badge">${d.year}</span>
              </div>
              <p class="muted">${d.description}</p>
            </article>
          `
            )
            .join("")}
        </div>

        <div class="cta-band mt">
          <div>
            <h2>Quer o set ideal pro seu evento?</h2>
            <p class="muted">Diga público, duração e vibe. A gente monta um repertório certeiro.</p>
          </div>
          <div class="cta-band__actions">
            <a class="btn btn--primary" href="/contato" data-link>Solicitar orçamento</a>
            <a class="btn btn--ghost" href="/agenda" data-link>Ver datas</a>
          </div>
        </div>
      </section>
    `;
    return el;
  }
};