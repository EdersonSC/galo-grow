export function normalizePath(path) {
  if (!path) return "/";
  const u = new URL(path, window.location.origin);
  let p = u.pathname || "/";
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

export function pad2(n) {
  return String(n).padStart(2, "0");
}

export function formatDateBR(iso) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(d);
}

export function formatTimeBR(iso) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("pt-BR", { timeStyle: "short" }).format(d);
}

export function isFutureOrToday(iso) {
  const d = new Date(iso);
  const now = new Date();
  const a = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const b = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  return b >= a;
}