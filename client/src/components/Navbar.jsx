import { Link, NavLink } from "react-router-dom";
import BrandIcon from "./BrandIcon.jsx";

const menuIcons = {
  "/": "truck",
  "/about": "team",
  "/products": "material",
  "/service-center": "wrench",
  "/project": "project",
  "/contact": "phone"
};

export default function Navbar({ company, menuOpen, setMenuOpen }) {
  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/images/company/logo.png" alt={company.brand.thName} />
          <div>
            <strong>{company.brand.shortName}</strong>
            <span>บริษัทขนส่งวัสดุก่อสร้าง</span>
          </div>
        </Link>

        <button
          className={`mobile-toggle ${menuOpen ? "is-active" : ""}`.trim()}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={menuOpen}
          type="button"
        >
          <i aria-hidden="true">
            <span />
            <span />
            <span />
          </i>
          <b>{menuOpen ? "ปิด" : "เมนู"}</b>
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`.trim()} aria-label="เมนูหลัก">
          <div className="mobile-menu-head">
            <div className="mobile-menu-head-brand">
              <img src="/images/company/logo.png" alt="SWT" />
              <div>
                <strong>เมนูเว็บไซต์</strong>
                <span>เลือกดูข้อมูลบริษัทได้สะดวก</span>
              </div>
            </div>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="ปิดเมนู">
              ×
            </button>
          </div>

          <div className="mobile-menu-contact">
            <a href={company.contact.phoneHref} onClick={() => setMenuOpen(false)}>
              <BrandIcon name="phone" />
              <span>โทร {company.contact.phone}</span>
            </a>
            <a
              href={company.contact.facebook}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <BrandIcon name="facebook" />
              <span>เพจเฟซบุ๊ก</span>
            </a>
          </div>

          {company.nav.map((item) => (
            <div
              key={item.label}
              className={`nav-item ${item.children ? "has-children" : "is-single"}`.trim()}
            >
              <NavLink
                to={item.path}
                end={item.path === "/"}
                onClick={() => !item.children && setMenuOpen(false)}
              >
                <span className="nav-link-content">
                  <BrandIcon name={menuIcons[item.path] || "star"} />
                  <span>{item.label}</span>
                </span>
                {item.children ? <span className="chevron">⌄</span> : null}
              </NavLink>

              {item.children ? (
                <div className="dropdown">
                  {item.children.map((child) => (
                    <NavLink key={child.path} to={child.path} onClick={() => setMenuOpen(false)}>
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
          ))}

          <a className="nav-cta" href={company.contact.phoneHref} onClick={() => setMenuOpen(false)}>
            <BrandIcon name="phone" />
            โทรติดต่อ
          </a>
        </nav>
      </div>
    </header>
  );
}