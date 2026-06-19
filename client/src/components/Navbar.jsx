import { Link, NavLink } from "react-router-dom";
import BrandIcon from "./BrandIcon.jsx";

<<<<<<< HEAD
const menuIcons = {
  "/": "truck",
  "/about": "team",
  "/products": "material",
  "/service-center": "wrench",
  "/project": "project",
  "/contact": "phone"
};

=======
>>>>>>> 47fc5ab95126156e0123447cc59e8c843e36db5b
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
<<<<<<< HEAD
          <i aria-hidden="true"><span /><span /><span /></i>
          <b>{menuOpen ? "ปิด" : "เมนู"}</b>
=======
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
>>>>>>> 47fc5ab95126156e0123447cc59e8c843e36db5b
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`.trim()} aria-label="เมนูหลัก">
          <div className="mobile-menu-head">
            <div className="mobile-menu-head-brand">
<<<<<<< HEAD
              <img src="/images/company/logo.png" alt="SWT" />
              <div>
                <strong>เมนูเว็บไซต์</strong>
                <span>เลือกดูข้อมูลบริษัทได้สะดวก</span>
=======
              <img src="/images/company/logo.png" alt={company.brand.shortName} />
              <div>
                <strong>เมนูเว็บไซต์</strong>
                <span>เลือกหน้าที่ต้องการดูได้เลย</span>
>>>>>>> 47fc5ab95126156e0123447cc59e8c843e36db5b
              </div>
            </div>
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="ปิดเมนู">×</button>
          </div>

          <div className="mobile-menu-contact">
            <a href={company.contact.phoneHref} onClick={() => setMenuOpen(false)}>
<<<<<<< HEAD
              <BrandIcon name="phone" /> <span>โทร {company.contact.phone}</span>
            </a>
            <a href={company.contact.facebook} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
              <BrandIcon name="facebook" /> <span>เพจเฟซบุ๊ก</span>
            </a>
          </div>

          {company.nav.map((item) => (
            <div key={item.label} className={`nav-item ${item.children ? "has-children" : "is-single"}`.trim()}>
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
            <BrandIcon name="phone" /> โทรติดต่อ
=======
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
>>>>>>> 47fc5ab95126156e0123447cc59e8c843e36db5b
          </a>
        </nav>
      </div>
    </header>
  );
}
