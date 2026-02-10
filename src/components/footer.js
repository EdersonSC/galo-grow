export function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";

  footer.innerHTML = `
    <div class="container footer__grid">
      <div>
        <h2 class="footer__title">Galo Grow</h2>
        <p class="muted">
          Rock na alma. <strong>Repertório pra todo mundo</strong> — do rock ao pop,
          do nacional ao internacional, com set versátil para qualquer evento.
        </p>
      </div>

      <div>
        <h3 class="footer__subtitle">Contato</h3>
        <ul class="footer__list">
          <li><a class="link" href="mailto:contato@SEUEMAIL.com">contato@SEUEMAIL.com</a></li>
          <li><a class="link" href="tel:+5500000000000">+55 (00) 00000-0000</a></li>
          <li><a class="link" href="https://wa.me/55SEUNUMERO" target="_blank" rel="noreferrer">WhatsApp (opcional)</a></li>
        </ul>
        <p class="note muted">Edite esses links em <code>src/components/footer.js</code> e <code>src/pages/contato.js</code>.</p>
      </div>

      <div>
        <h3 class="footer__subtitle">Redes</h3>
        <ul class="footer__list">
          <li><a class="link" href="#" aria-label="Instagram (placeholder)">Instagram</a></li>
          <li><a class="link" href="#" aria-label="YouTube (placeholder)">YouTube</a></li>
          <li><a class="link" href="#" aria-label="Spotify (placeholder)">Spotify</a></li>
        </ul>
      </div>
    </div>

    <div class="container footer__bottom">
      <small class="muted">© ${new Date().getFullYear()} Galo Grow. Todos os direitos reservados.</small>
      <small class="muted">Feito com Vite · Mobile-first · Acessível</small>
    </div>
  `;

  return footer;
}