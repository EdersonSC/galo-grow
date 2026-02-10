export function createLightbox() {
  const dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.innerHTML = `
    <div class="lightbox__inner" role="document">
      <button class="icon-btn lightbox__close" type="button" aria-label="Fechar">
        <span aria-hidden="true">×</span>
      </button>
      <figure class="lightbox__figure">
        <img class="lightbox__img" alt="" />
        <figcaption class="lightbox__caption muted"></figcaption>
      </figure>
    </div>
  `;

  const img = dialog.querySelector(".lightbox__img");
  const cap = dialog.querySelector(".lightbox__caption");
  const closeBtn = dialog.querySelector(".lightbox__close");

  function open({ src, alt }) {
    img.src = src;
    img.alt = alt || "Imagem ampliada";
    cap.textContent = alt || "";
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "open");
  }

  function close() {
    if (dialog.open) dialog.close();
    else dialog.removeAttribute("open");
    img.src = "";
  }

  closeBtn.addEventListener("click", close);
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) close();
  });
  dialog.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  return Object.assign(dialog, {
    api: { open, close }
  });
}