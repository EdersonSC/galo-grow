import { shows } from "../data/shows.js";
import { media } from "../data/media.js";
import { formatDateBR, formatTimeBR, isFutureOrToday } from "../lib/utils.js";

export const HomePage = {
  path: "/",
  meta: {
    title: "Galo Grow — Rock na alma. Repertório pra todo mundo.",
    description:
      "Contrate a Galo Grow: atitude rock e repertório versátil — do nacional ao internacional, do rock ao pop. Agenda, música, mídia e contato."
  },
  render() {
    const el = document.createElement("div");

    const nextShows = shows
      .filter((s) => isFutureOrToday(s.dateTimeISO))
      .sort((a, b) => new Date(a.dateTimeISO) - new Date(b.dateTimeISO))
      .slice(0, 3);

    el.innerHTML = `
      <section class="hero" aria-label="Destaque">
        <div class="hero__media">
          <img
            src="/media/Banda3.jpeg"
            alt="Foto principal da banda Galo Grow, com estética rock e alto contraste."
            width="1600"
            height="900"
            loading="eager"
            decoding="async"
          />
          <div class="hero__overlay" aria-hidden="true"></div>
          <div class="hero__grain" aria-hidden="true"></div>
        </div>

        <div class="container hero__content">
          <p class="eyebrow">Banda para eventos • ao vivo</p>
          <h1 class="hero__title">Galo Grow</h1>
          <p class="hero__tagline">
            <strong>Rock na alma.</strong> Repertório pra todo mundo.
            <span class="muted">Do rock ao pop, do nacional ao internacional — set versátil para qualquer evento.</span>
          </p>

          <div class="hero__ctas">
            <a class="btn btn--primary" href="/contato" data-link>Contratar / Orçamento</a>
            <a class="btn btn--ghost" href="/agenda" data-link>Ver agenda</a>
            <a class="btn btn--ghost" href="/musica" data-link>Ouça agora</a>
          </div>

          <div class="hero__trust muted">
            Touch targets 44px+ • Menu acessível • Performance leve
          </div>
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Repertório / A gente toca de tudo</h2>
          <p class="muted">Edite os estilos facilmente (chips). Misturamos clássicos e hits atuais sem perder a atitude rock.</p>
        </header>

        <div class="chips" role="list" aria-label="Estilos musicais">
          ${[
            "Rock",
            "Pop",
            "Sertanejo",
            "MPB",
            "Internacional",
            "Nacional",
            "Anos 80",
            "Anos 90",
            "2000+",
            "Clássicos",
            "Hits atuais"
          ]
            .map((c) => `<span class="chip" role="listitem">${c}</span>`)
            .join("")}
        </div>

        <div class="callout">
          <div class="callout__icon" aria-hidden="true">⚡</div>
          <div>
            <h3 class="callout__title">Versatilidade que converte</h3>
            <p class="muted">
              Do bar ao casamento, do corporativo à festa: ajustamos o set e a energia conforme o evento.
              <strong>Repertório amplo</strong>, execução firme, presença de palco.
            </p>
          </div>
        </div>
      </section>

      <section class="section container">
        <header class="section__header section__header--row">
          <div>
            <h2>Próximos shows</h2>
            <p class="muted">Atualize a lista em <code>src/data/shows.js</code>.</p>
          </div>
          <a class="btn btn--ghost" href="/agenda" data-link>Ver agenda completa</a>
        </header>

        <div class="cards">
          ${
            nextShows.length
              ? nextShows
                  .map(
                    (s) => `
                <article class="card">
                  <div class="card__top">
                    <h3 class="card__title">${formatDateBR(s.dateTimeISO)}</h3>
                    <span class="badge">${formatTimeBR(s.dateTimeISO)}</span>
                  </div>
                  <p class="muted">${s.city}</p>
                  <p><strong>${s.venue}</strong></p>
                  <div class="card__actions">
                    <a class="btn btn--primary btn--small" href="/agenda" data-link>Detalhes</a>
                    ${
                      s.ticketUrl
                        ? `<a class="btn btn--ghost btn--small" href="${s.ticketUrl}" target="_blank" rel="noreferrer">Ingressos</a>`
                        : `<span class="muted small">Ingressos: a confirmar</span>`
                    }
                  </div>
                </article>
              `
                  )
                  .join("")
              : `<p class="muted">Sem shows cadastrados no momento. Volte em breve!</p>`
          }
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Destaque de mídia</h2>
          <p class="muted">Fotos e vídeos com grid responsivo. Clique para ampliar.</p>
        </header>

        <div class="media-highlight">
          <button class="media-highlight__thumb" type="button" data-lightbox-src="${media.gallery[0].src}" data-lightbox-alt="${media.gallery[0].alt}">
            <img src="${media.gallery[0].src}" alt="${media.gallery[0].alt}" loading="lazy" decoding="async" />
            <span class="media-highlight__label">Abrir foto</span>
          </button>

          <div class="media-highlight__stack">
            ${media.gallery
              .slice(1, 4)
              .map(
                (img) => `
              <button class="thumb" type="button" data-lightbox-src="${img.src}" data-lightbox-alt="${img.alt}">
                <img src="${img.src}" alt="${img.alt}" loading="lazy" decoding="async" />
              </button>
            `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="section container">
        <div class="cta-band">
          <div>
            <h2>Quer orçamento rápido?</h2>
            <p class="muted">Conte data, cidade e tipo de evento. Respondemos com opções de formato e cachet.</p>
          </div>
          <div class="cta-band__actions">
            <a class="btn btn--primary" href="/contato" data-link>Contratar</a>
            <a class="btn btn--ghost" href="/epk" data-link>Ver Press Kit (EPK)</a>
          </div>
        </div>
      </section>
    `;

    return el;
  },
  mount({ main, lightbox }) {
    // Lightbox delegation
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