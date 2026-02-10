import { createHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { createLightbox } from "./components/lightbox.js";
import { createToastHost } from "./components/toast.js";
import { createRouter } from "./lib/router.js";
import { routes } from "./routes.js";
import { applyMeta } from "./lib/meta.js";
import { focusMainOnRouteChange } from "./lib/a11y.js";

export function mountApp(root) {
  root.innerHTML = "";

  const header = createHeader();
  const main = document.createElement("main");
  main.id = "main";
  main.className = "main";
  main.tabIndex = -1;

  const footer = createFooter();
  const lightbox = createLightbox();
  const toastHost = createToastHost();

  root.append(header, main, footer, lightbox, toastHost);

  const router = createRouter({
    routes,
    onRoute: (route) => {
      applyMeta(route.meta);
      main.replaceChildren(route.render());
      route.mount?.({ main, toast: toastHost.api, lightbox: lightbox.api });
      focusMainOnRouteChange(main);
      header.api.setActivePath(route.path);
    }
  });

  header.api.setNavigate(router.navigate);
  router.start();
}