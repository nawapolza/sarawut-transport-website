import BrandIcon, { normalizeIcon } from "./BrandIcon.jsx";

export function InfoCard({ icon, title, text, children, className = "" }) {
  return (
    <article className={`info-card ${className}`.trim()}>
      {icon ? (
        <div className="card-icon" aria-hidden="true">
          <BrandIcon name={normalizeIcon(icon)} />
        </div>
      ) : null}
      <h3>{title}</h3>
      {text ? <p>{text}</p> : null}
      {children}
    </article>
  );
}

export function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={`section-title ${center ? "center" : ""}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
