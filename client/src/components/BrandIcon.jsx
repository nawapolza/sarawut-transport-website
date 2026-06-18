const paths = {
  phone: (
    <path d="M15.5 3.5 19.8 5c.7.3 1.1 1 .9 1.8l-1 4.2c-.2.7-.9 1.1-1.6 1l-2.4-.4c-1.1 2.2-2.9 4-5.1 5.1l.4 2.4c.1.7-.3 1.4-1 1.6l-4.2 1c-.8.2-1.5-.2-1.8-.9L2.5 16.5c-.2-.5-.1-1.1.3-1.5C5.9 11.9 7.9 9.9 11 6.8c.4-.4 1-.5 1.5-.3Z" />
  ),
  facebook: (
    <path d="M15 8.2h2.1V4.7c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.2 1.9-5.2 5.4v3H5.5v4h3.3V24h4.1v-7.1h3.2l.5-4h-3.7v-2.6c0-1.2.3-2.1 2.1-2.1Z" />
  ),
  map: (
    <path d="M12 2.8c-3.7 0-6.7 3-6.7 6.7 0 5 6.7 11.7 6.7 11.7s6.7-6.7 6.7-11.7c0-3.7-3-6.7-6.7-6.7Zm0 9.1a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Z" />
  ),
  truck: (
    <path d="M3 6.5h11.5v8H3v-8Zm11.5 2.2H18l3 3.1v2.7h-2.1a2.6 2.6 0 0 0-5.1 0H9.1a2.6 2.6 0 0 0-5.1 0H3v-1.8h11.5v-4Zm-8 8.8a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm10 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z" />
  ),
  shield: (
    <path d="M12 2.8 20 6v6.1c0 4.9-3.3 8.5-8 10-4.7-1.5-8-5.1-8-10V6l8-3.2Zm3.8 6.2-4.7 4.8-2-2-1.5 1.5 3.5 3.5 6.2-6.3L15.8 9Z" />
  ),
  fuel: (
    <path d="M6 3h8c.8 0 1.5.7 1.5 1.5V21h-11V4.5C4.5 3.7 5.2 3 6 3Zm1 3v5h6V6H7Zm11.4.1 2.6 2.6v8.8c0 1.2-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1V13h1.8v4.5c0 .2.1.3.3.3s.3-.1.3-.3V9.4l-2.1-2.1 1.3-1.2Z" />
  ),
  system: (
    <path d="M4 5h16v10H4V5Zm2 2v6h12V7H6Zm2 11h8l1 2H7l1-2Zm2.5-8.5h3v1.8h-3V9.5Z" />
  ),
  construction: (
    <path d="M4 18h16v2H4v-2Zm2.2-1L10 6.5V4h4v2.5L17.8 17h-2.5l-.7-2h-5.2l-.7 2H6.2Zm4-4h3.6L12 7.9 10.2 13Z" />
  ),
  material: (
    <path d="M12 3 3.5 7.6 12 12l8.5-4.4L12 3Zm-8.5 7.1L12 14.6l8.5-4.5v4.2L12 19 3.5 14.3v-4.2Z" />
  ),
  project: (
    <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" />
  ),
  speed: (
    <path d="M12 4a9 9 0 0 1 8.7 11.4h-2.4A6.8 6.8 0 1 0 5.7 15.4H3.3A9 9 0 0 1 12 4Zm4.7 4.8-3.4 5.2a2 2 0 1 1-1.6-1.1l5-4.1Z" />
  ),
  team: (
    <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8 13c-3.2 0-5.5 1.6-5.5 3.8V19h11v-2.2C13.5 14.6 11.2 13 8 13Zm8 0c-.8 0-1.6.1-2.3.4 1.3.9 2.1 2.1 2.1 3.4V19h5.7v-2.2c0-2.2-2.3-3.8-5.5-3.8Z" />
  ),
  wrench: (
    <path d="M21 6.6a5.8 5.8 0 0 1-7.3 7.3L7.2 20.4a2.4 2.4 0 1 1-3.4-3.4l6.5-6.5A5.8 5.8 0 0 1 17.6 3l-3.1 3.1 3.4 3.4L21 6.6Z" />
  ),
  document: (
    <path d="M6 3h8l4 4v14H6V3Zm7 1.8V8h3.2L13 4.8ZM8 11h8v2H8v-2Zm0 4h8v2H8v-2Z" />
  ),
  training: (
    <path d="M12 3 2.5 8 12 13l7-3.7V15h2V8L12 3Zm-5 9.2V16c0 2 2.2 3.7 5 3.7s5-1.7 5-3.7v-3.8L12 15l-5-2.8Z" />
  ),
  route: (
    <path d="M6 5.5a2.5 2.5 0 1 0 0 5c1.9 0 3.5-1.1 3.5-2.5S7.9 5.5 6 5.5Zm12 8a2.5 2.5 0 1 0 0 5c1.9 0 3.5-1.1 3.5-2.5s-1.6-2.5-3.5-2.5ZM8 15h5.5a2 2 0 0 0 0-4H10V9h3.5a4 4 0 0 1 0 8H8v-2Z" />
  ),
  lock: (
    <path d="M7 10V8a5 5 0 0 1 10 0v2h1.2c.7 0 1.3.6 1.3 1.3v8.2c0 .7-.6 1.3-1.3 1.3H5.8c-.7 0-1.3-.6-1.3-1.3v-8.2c0-.7.6-1.3 1.3-1.3H7Zm2 0h6V8a3 3 0 0 0-6 0v2Zm3 3.5a1.5 1.5 0 0 0-.8 2.8V18h1.6v-1.7a1.5 1.5 0 0 0-.8-2.8Z" />
  ),
  star: (
    <path d="m12 2.8 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L2.9 9.4l6.3-.9L12 2.8Z" />
  ),
  upload: (
    <path d="M12 3 7 8h3v6h4V8h3l-5-5ZM5 16h14v4H5v-4Z" />
  ),
  inbox: (
    <path d="M4 4h16v12l-3 4H7l-3-4V4Zm2 2v8h4l1 2h2l1-2h4V6H6Z" />
  ),
  trash: (
    <path d="M8 4h8l1 2h4v2H3V6h4l1-2Zm-2 6h12l-1 11H7L6 10Z" />
  ),
  arrow: (
    <path d="M13 5 20 12l-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5Z" />
  )
};

const fallback = paths.star;

export default function BrandIcon({ name = "star", className = "", title }) {
  const icon = paths[name] || fallback;
  return (
    <svg
      className={`brand-icon ${className}`.trim()}
      viewBox="0 0 24 24"
      role={title ? "img" : "presentation"}
      aria-label={title}
      focusable="false"
    >
      {icon}
    </svg>
  );
}

export function normalizeIcon(icon) {
  const key = String(icon || "").trim();
  const map = {
    "☎": "phone",
    "☎️": "phone",
    "📞": "phone",
    "📘": "facebook",
    "💬": "facebook",
    "📍": "map",
    "🚚": "truck",
    "🚛": "truck",
    "⚡": "speed",
    "🛡️": "shield",
    "📲": "system",
    "⛽": "fuel",
    "🏗️": "construction",
    "🪨": "material",
    "⭐": "star",
    "📄": "document",
    "🔧": "wrench",
    "🎯": "project",
    "🚀": "route",
    phone: "phone",
    facebook: "facebook",
    map: "map",
    truck: "truck",
    shield: "shield",
    fuel: "fuel",
    system: "system",
    construction: "construction",
    material: "material",
    project: "project",
    speed: "speed",
    team: "team",
    wrench: "wrench",
    document: "document",
    training: "training",
    route: "route",
    lock: "lock",
    upload: "upload",
    inbox: "inbox",
    trash: "trash",
    star: "star"
  };
  return map[key] || key || "star";
}
