export const SobrePage = {
  path: "/sobre",
  meta: {
    title: "Sobre — Galo Grow",
    description:
      "Conheça a Galo Grow: história, integrantes e o que tocamos. Do rock ao pop, do nacional ao internacional — set versátil para qualquer evento."
  },
  render() {
    const el = document.createElement("div");
    el.innerHTML = `
      <section class="page-hero container">
        <h1>Sobre</h1>
        <p class="muted">
          A <strong>Galo Grow</strong> carrega atitude rock no palco — e ao mesmo tempo entrega
          <strong>repertório versátil</strong> para agradar públicos diferentes.
        </p>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>História</h2>
          <p class="muted">
            (Placeholder) A Galo Grow nasceu da vontade de tocar com energia e identidade.
            A cada show, a banda mistura clássicos e hits atuais, ajustando o set para o clima do evento —
            sem perder a pegada.
          </p>
        </header>

        <div class="split">
          <div class="split__media">
            <img src="/media/Banda3.jpeg" alt="Foto da banda Galo Grow para imprensa." loading="lazy" decoding="async" />
            <div class="split__mediaOverlay" aria-hidden="true"></div>
          </div>

          <div class="split__content">
            <h3>O que nos define</h3>
            <ul class="list">
              <li><strong>Show dinâmico:</strong> leitura de pista + repertório adaptável.</li>
              <li><strong>Do rock ao pop:</strong> nacional e internacional, 80/90/2000+.</li>
              <li><strong>Profissionalismo:</strong> pontualidade, alinhamento técnico e comunicação clara.</li>
            </ul>
            <a class="btn btn--primary" href="/contato" data-link>Falar com a banda</a>
          </div>
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Integrantes</h2>
          <p class="muted">Substitua os nomes e fotos quando tiver (cards com placeholder por enquanto).</p>
        </header>

        <div class="cards">
          ${[
            { name: "Voz", role: "Vocal" },
            { name: "Guitarra", role: "Guitarra / Backing" },
            { name: "Baixo", role: "Baixo" },
            { name: "Bateria", role: "Bateria" }
          ]
            .map(
              (m) => `
            <article class="card member">
              <img src="/media/placeholders/integrante.svg" alt="Foto do integrante (placeholder)" loading="lazy" decoding="async" />
              <div class="member__body">
                <h3 class="card__title">${m.name}</h3>
                <p class="muted">${m.role}</p>
              </div>
            </article>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>O que tocamos / Onde tocamos</h2>
          <p class="muted">
            Set versátil para diferentes formatos. Edite conforme o foco comercial da banda.
          </p>
        </header>

        <div class="cards">
          <article class="card">
            <h3 class="card__title">Eventos</h3>
            <ul class="list">
              <li>Casamentos</li>
              <li>Festas (aniversários, formaturas)</li>
              <li>Corporativo (confraternizações, lançamentos)</li>
            </ul>
          </article>
          <article class="card">
            <h3 class="card__title">Casas / Bares</h3>
            <ul class="list">
              <li>Bares</li>
              <li>Pub / Rock bar</li>
              <li>Festivais locais</li>
            </ul>
          </article>
          <article class="card">
            <h3 class="card__title">Repertório</h3>
            <p class="muted">
              Do rock ao pop, do nacional ao internacional. Clássicos, anos 80/90/2000 e hits atuais.
              O objetivo é <strong>manter o público junto</strong>.
            </p>
          </article>
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Depoimentos</h2>
          <p class="muted">Opcional — placeholders prontos.</p>
        </header>

        <div class="cards">
          ${[
            "“Show forte, repertório amplo e muita presença de palco.” — Cliente (placeholder)",
            "“Do rock ao pop sem perder a vibe. A pista ficou cheia.” — Produção (placeholder)",
            "“Profissionais e fáceis de alinhar.” — Casa de shows (placeholder)"
          ]
            .map(
              (t) => `
            <blockquote class="card quote">
              <p>${t}</p>
            </blockquote>
          `
            )
            .join("")}
        </div>
      </section>
    `;
    return el;
  }
};