export const ContatoPage = {
  path: "/contato",
  meta: {
    title: "Contato / Contrate — Galo Grow",
    description: "Solicite orçamento: nome, e-mail, tipo de evento, data, cidade e mensagem. Feedback claro e acessível."
  },
  render() {
    const el = document.createElement("div");
    el.innerHTML = `
      <section class="page-hero container">
        <h1>Contato / Contrate</h1>
        <p class="muted">
          Quer fechar show? Envie os detalhes e retornamos com proposta.  
          <strong>Do rock ao pop</strong>, do nacional ao internacional — set versátil para qualquer evento.
        </p>
      </section>

      <section class="section container">
        <div class="split split--form">
          <div class="card">
            <h2 class="card__title">Pedir orçamento</h2>

            <form id="contactForm" novalidate>
              <div class="form-grid">
                <label class="field">
                  <span class="field__label">Nome *</span>
                  <input class="input" name="name" autocomplete="name" required minlength="2" />
                  <span class="field__error" data-error-for="name"></span>
                </label>

                <label class="field">
                  <span class="field__label">E-mail *</span>
                  <input class="input" name="email" type="email" autocomplete="email" required />
                  <span class="field__error" data-error-for="email"></span>
                </label>

                <label class="field">
                  <span class="field__label">Tipo de evento *</span>
                  <select class="input" name="eventType" required>
                    <option value="">Selecione…</option>
                    <option>Bar / Pub</option>
                    <option>Festa / Aniversário</option>
                    <option>Casamento</option>
                    <option>Corporativo</option>
                    <option>Outro</option>
                  </select>
                  <span class="field__error" data-error-for="eventType"></span>
                </label>

                <label class="field">
                  <span class="field__label">Data *</span>
                  <input class="input" name="date" type="date" required />
                  <span class="field__error" data-error-for="date"></span>
                </label>

                <label class="field field--full">
                  <span class="field__label">Cidade *</span>
                  <input class="input" name="city" required minlength="2" />
                  <span class="field__error" data-error-for="city"></span>
                </label>

                <label class="field field--full">
                  <span class="field__label">Mensagem *</span>
                  <textarea class="input" name="message" rows="5" required minlength="10"
                    placeholder="Conte sobre o evento (público, duração, local, repertório desejado, etc.)"></textarea>
                  <span class="field__error" data-error-for="message"></span>
                </label>
              </div>

              <div class="form-actions">
                <button class="btn btn--primary" type="submit">Enviar</button>
                <p class="muted small">
                  Sem backend neste template: o envio é simulado. No README tem opções de deploy com formulário.
                </p>
              </div>

              <div class="form-status" role="status" aria-live="polite"></div>
            </form>
          </div>

          <aside class="card">
            <h2 class="card__title">Alternativas</h2>
            <ul class="list">
              <li><strong>E-mail:</strong> <a class="link" href="mailto:contato@SEUEMAIL.com">contato@SEUEMAIL.com</a></li>
              <li><strong>Telefone:</strong> <a class="link" href="tel:+5500000000000">+55 (00) 00000-0000</a></li>
              <li><strong>WhatsApp:</strong> <a class="link" href="https://wa.me/55SEUNUMERO" target="_blank" rel="noreferrer">Abrir conversa</a></li>
            </ul>

            <div class="callout mt">
              <div class="callout__icon" aria-hidden="true">✓</div>
              <div>
                <h3 class="callout__title">O que ajuda no orçamento</h3>
                <p class="muted">Data, cidade, tipo de evento, duração e estrutura (som/palco) disponível.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    `;
    return el;
  },
  mount({ main, toast }) {
    const form = main.querySelector("#contactForm");
    const status = main.querySelector(".form-status");

    const setError = (name, msg) => {
      const input = form.elements[name];
      const err = form.querySelector(`[data-error-for="${name}"]`);
      if (!input || !err) return;

      err.textContent = msg || "";
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      if (msg) {
        const id = `${name}-err`;
        err.id = id;
        input.setAttribute("aria-describedby", id);
      } else {
        input.removeAttribute("aria-describedby");
      }
    };

    const validators = {
      name: (v) => (v.trim().length >= 2 ? "" : "Informe seu nome."),
      email: (v) => (/^\S+@\S+\.\S+$/.test(v) ? "" : "Informe um e-mail válido."),
      eventType: (v) => (v ? "" : "Selecione o tipo de evento."),
      date: (v) => (v ? "" : "Selecione a data."),
      city: (v) => (v.trim().length >= 2 ? "" : "Informe a cidade."),
      message: (v) => (v.trim().length >= 10 ? "" : "Escreva uma mensagem com pelo menos 10 caracteres.")
    };

    function validateAll() {
      let ok = true;
      for (const [name, fn] of Object.entries(validators)) {
        const v = String(form.elements[name]?.value || "");
        const msg = fn(v);
        setError(name, msg);
        if (msg) ok = false;
      }
      return ok;
    }

    form.addEventListener("input", (e) => {
      const name = e.target?.name;
      if (!name || !validators[name]) return;
      setError(name, validators[name](String(e.target.value || "")));
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.textContent = "";

      const ok = validateAll();
      if (!ok) {
        status.textContent = "Revise os campos destacados.";
        toast.show({ variant: "error", title: "Formulário incompleto", message: "Corrija os campos obrigatórios." });
        // foca no primeiro inválido
        const firstInvalid = form.querySelector('[aria-invalid="true"]');
        firstInvalid?.focus();
        return;
      }

      // Simulação de envio (sem backend)
      const data = Object.fromEntries(new FormData(form).entries());
      console.log("Contato (simulado):", data);

      form.reset();
      Object.keys(validators).forEach((k) => setError(k, ""));
      status.textContent = "Mensagem enviada! Em breve retornaremos com orçamento.";
      toast.show({ variant: "success", title: "Enviado", message: "Recebemos sua mensagem (simulação)." });
    });
  }
};