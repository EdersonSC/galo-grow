export function createHeader() {
  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
    <div class="container header__inner">
      <a class="brand" href="/" data-link aria-label="Ir para a Home">
        <img src="/logo-galo-grow.svg" class="brand__logo" alt="Galo Grow (logo)" width="160" height="40" />
      </a>

      <button class="icon-btn nav-toggle" type="button"
        aria-controls="site-nav" aria-expanded="false" aria-label="Abrir menu">
        <span class="nav-toggle__bars" aria-hidden="true"></span>
      </button>

      <nav id="site-nav" class="nav" aria-label="Navegação principal">
        <ul class="nav__list">
          <li><a href="/" data-link class="nav__link">Home</a></li>
          <li><a href="/sobre" data-link class="nav__link">Sobre</a></li>
          <li><a href="/agenda" data-link class="nav__link">Agenda</a></li>
          <li><a href="/musica" data-link class="nav__link">Música</a></li>
          <li><a href="/midia" data-link class="nav__link">Mídia</a></li>
          <li><a href="/epk" data-link class="nav__link">EPK</a></li>
          <li><a href="/contato" data-link class="nav__link nav__link--cta">Contrate</a></li>
        </ul>
      </nav>
    </div>
    <div class="nav-backdrop" hidden></div>
  `;

  const btn = header.querySelector(".nav-toggle");
  const nav = header.querySelector("#site-nav");
  const backdrop = header.querySelector(".nav-backdrop");
  const links = Array.from(header.querySelectorAll(".nav__link"));

  let navigate = null;

  function setOpen(open) {
    header.classList.toggle("is-nav-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    backdrop.hidden = !open;

    if (open) {
      // foco no primeiro link
      requestAnimationFrame(() => links[0]?.focus());
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }

  btn.addEventListener("click", () => setOpen(!header.classList.contains("is-nav-open")));
  backdrop.addEventListener("click", () => setOpen(false));

  header.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.classList.contains("is-nav-open")) {
      setOpen(false);
      btn.focus();
    }
  });

  // Fecha menu ao navegar
  header.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-link]");
    if (!a) return;
    if (header.classList.contains("is-nav-open")) setOpen(false);

    // Se quiser navegação programática (opcional)
    if (navigate) {
      const href = a.getAttribute("href");
      if (href && !href.startsWith("http")) {
        // router já intercepta, mas ok manter simples
      }
    }
  });

  function setActivePath(path) {
    links.forEach((l) => {
      const href = l.getAttribute("href");
      const active = href === path;
      l.toggleAttribute("aria-current", active ? "page" : false);
    });
  }

  return Object.assign(header, {
    api: {
      setNavigate(fn) {
        navigate = fn;
      },
      setActivePath
    }
  });
}