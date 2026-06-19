import { Link } from "react-router-dom";

export default function PageHeader({ eyebrow, title, description, breadcrumb = [] }) {
  return (
    <section className="page-header">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-header-text">{description}</p>
        <div className="breadcrumb">
          <Link to="/">หน้าแรก</Link>
          {breadcrumb.map((item, index) => (
            <span key={`${item}-${index}`}>/ {item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
