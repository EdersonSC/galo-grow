import { normalizePath } from "./utils.js";

export function createRouter({ routes, onRoute }) {
  const routeTable = new Map(routes.map((r) => [r.path, r]));
  let current = null;

  function getRoute(path) {
    const p = normalizePath(path);
    return routeTable.get(p) || routeTable.get("/404");
  }

  function render(path) {
    const route = getRoute(path);

    if (current?.unmount) current.unmount();
    current = route;

    onRoute({ ...route, path: normalizePath(path) });
  }

  function navigate(to) {
    const target = normalizePath(to);
    window.history.pushState({}, "", target);
    render(target);
  }

  function handleLinkClick(e) {
    const a = e.target.closest("a[data-link]");
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href) return;

    // allow cmd/ctrl click, external, downloads, etc.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target === "_blank") return;
    if (href.startsWith("http")) return;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return;

    e.preventDefault();
    navigate(href);
  }

  function start() {
    window.addEventListener("popstate", () => render(window.location.pathname));
    document.addEventListener("click", handleLinkClick);
    render(window.location.pathname);
  }

  return { start, navigate };
}