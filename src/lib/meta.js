const DEFAULTS = {
  title: "Galo Grow — Rock na alma. Repertório pra todo mundo.",
  description:
    "Banda Galo Grow: atitude rock e repertório versátil — do nacional ao internacional, do rock ao pop. Contrate para eventos, bares, casamentos e corporativo.",
  ogImage: "/media/Banda3.jpeg"
};

function upsertMeta(selector, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [key, val] = selector
      .replace("meta[", "")
      .replace("]", "")
      .split("=");

    // key like property or name
    el.setAttribute(key, val.replaceAll('"', ""));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function applyMeta(meta = {}) {
  const title = meta.title || DEFAULTS.title;
  const description = meta.description || DEFAULTS.description;
  const ogImage = meta.ogImage || DEFAULTS.ogImage;

  document.title = title;

  // description
  let desc = document.querySelector('meta[name="description"]');
  if (!desc) {
    desc = document.createElement("meta");
    desc.setAttribute("name", "description");
    document.head.appendChild(desc);
  }
  desc.setAttribute("content", description);

  // OG / Twitter
  upsertMeta('meta[property="og:title"]', "content", title);
  upsertMeta('meta[property="og:description"]', "content", description);
  upsertMeta('meta[property="og:image"]', "content", ogImage);
  upsertMeta('meta[name="twitter:card"]', "content", "summary_large_image");
}