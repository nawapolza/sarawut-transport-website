import { Link, NavLink } from "react-router-dom";
import BrandIcon from "./BrandIcon.jsx";

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
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`.trim()} aria-label="เมนูหลัก">
          <div className="mobile-menu-head">
            <div className="mobile-menu-head-brand">
              <img src="/images/company/logo.png" alt={company.brand.shortName} />
              <div>
                <strong>เมนูเว็บไซต์</strong>
                <span>เลือกหน้าที่ต้องการดูได้เลย</span>
              </div>
            </div>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="ปิดเมนู">×</button>
          </div>

          <div className="mobile-menu-contact">
            <a href={company.contact.phoneHref} onClick={() => setMenuOpen(false)}>
              <BrandIcon name="phone" /> โทร {company.contact.phone}
            </a>
            <a href={company.contact.facebook} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
              <BrandIcon name="facebook" /> เพจเฟซบุ๊ก
            </a>
          </div>

          <div className="mobile-nav-grid">
            {company.nav.map((item) => (
              <div key={item.label} className={`nav-item ${item.children ? "has-children" : ""}`.trim()}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => !item.children && setMenuOpen(false)}
                >
                  <span className="nav-label">{item.label}</span>
                  {item.children ? <span className="chevron">⌄</span> : <BrandIcon name="arrow" className="nav-arrow" />}
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
          </div>

          <a className="nav-cta" href={company.contact.phoneHref} onClick={() => setMenuOpen(false)}>
            <BrandIcon name="phone" /> โทรติดต่อทันที
          </a>
        </nav>
      </div>
    </header>
  );
}
