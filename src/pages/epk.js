export const EpkPage = {
  path: "/epk",
  meta: {
    title: "EPK / Press Kit — Galo Grow",
    description: "Bio, release, destaques, logos e materiais para imprensa. Press kit pronto para baixar."
  },
  render() {
    const el = document.createElement("div");
    el.innerHTML = `
      <section class="page-hero container">
        <h1>EPK / Press Kit</h1>
        <p class="muted">
          Material para contratação e imprensa. Mantemos a estética <strong>preto e branco</strong> e
          a mensagem central: <strong>rock com repertório versátil</strong>.
        </p>

        <div class="hero__ctas">
          <a class="btn btn--primary" href="/presskit/galo-grow-press-kit.pdf" download>
            Baixar Press Kit (PDF)
          </a>
          <a class="btn btn--ghost" href="/contato" data-link>Contratar / Orçamento</a>
        </div>

        <p class="note muted">
          Para ativar o download, coloque o PDF em <code>public/presskit/galo-grow-press-kit.pdf</code>
          (veja <code>public/presskit/README.txt</code>).
        </p>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Bio curta</h2>
        </header>
        <div class="card">
          <p>
            <strong>Galo Grow</strong> é uma banda com atitude rock e palco firme, mas com repertório amplo:
            do rock ao pop, do nacional ao internacional, com recortes de décadas (80/90/2000+) e hits atuais.
            Ideal para eventos que precisam de energia e versatilidade.
          </p>
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Release (texto editável)</h2>
          <p class="muted">Copie e cole em propostas, redes e imprensa.</p>
        </header>

        <div class="card">
          <p class="muted">
            (Placeholder) A Galo Grow entrega um show vibrante, com identidade rock e set adaptável:
            a banda alterna clássicos e hits atuais, respeitando o perfil do evento e mantendo a pista viva.
            Estrutura enxuta, comunicação profissional e foco total na experiência do público.
          </p>
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Logos</h2>
          <p class="muted">Logo monocromático incluso (SVG). Substitua se tiver o oficial.</p>
        </header>

        <div class="cards">
          <article class="card">
            <h3 class="card__title">Logo (SVG P&B)</h3>
            <a class="btn btn--ghost btn--small" href="/logo-galo-grow.svg" download>Baixar logo</a>
            <p class="muted small">Arquivo em <code>public/logo-galo-grow.svg</code>.</p>
          </article>
          <article class="card">
            <h3 class="card__title">Foto principal (hero)</h3>
            <a class="btn btn--ghost btn--small" href="/media/Banda3.jpeg" download>Baixar foto</a>
            <p class="muted small">Arquivo em <code>public/media/Banda3.jpeg</code>.</p>
          </article>
        </div>
      </section>

      <section class="section container">
        <header class="section__header">
          <h2>Destaques</h2>
        </header>
        <div class="cards">
          <article class="card">
            <h3 class="card__title">Repertório versátil</h3>
            <p class="muted">Do rock ao pop, nacional e internacional, com leitura de público.</p>
          </article>
          <article class="card">
            <h3 class="card__title">Formato para eventos</h3>
            <p class="muted">Casamentos, bares, festas e corporativo (editável).</p>
          </article>
          <article class="card">
            <h3 class="card__title">Contato rápido</h3>
            <p class="muted">Formulário com validação e CTAs claros para orçamento.</p>
          </article>
        </div>
      </section>
    `;
    return el;
  }
};