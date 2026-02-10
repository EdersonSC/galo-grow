export function createToastHost() {
  const host = document.createElement("div");
  host.className = "toast-host";
  host.setAttribute("aria-live", "polite");
  host.setAttribute("aria-atomic", "true");

  function show({ title = "Aviso", message = "", variant = "info", timeout = 3500 }) {
    const toast = document.createElement("div");
    toast.className = `toast toast--${variant}`;
    toast.innerHTML = `
      <div class="toast__title">${escapeHtml(title)}</div>
      <div class="toast__msg muted">${escapeHtml(message)}</div>
      <button class="icon-btn toast__close" type="button" aria-label="Fechar">×</button>
    `;
    host.appendChild(toast);

    const close = () => {
      toast.classList.add("is-leaving");
      setTimeout(() => toast.remove(), 180);
    };

    toast.querySelector(".toast__close").addEventListener("click", close);
    setTimeout(close, timeout);
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<​", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  return Object.assign(host, { api: { show } });
}