import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar.jsx";
import Navbar from "./Navbar.jsx";
import ContactShowcase from "./ContactShowcase.jsx";
import Footer from "./Footer.jsx";
import BrandIcon from "./BrandIcon.jsx";

export default function Layout({ company }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <>
      <TopBar company={company} />
      <Navbar company={company} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen ? <button className="mobile-menu-backdrop" type="button" aria-label="ปิดเมนู" onClick={() => setMenuOpen(false)} /> : null}
      <main>
        <Outlet />
      </main>
      <ContactShowcase company={company} />
      <div className="floating-contact-group" aria-label="ช่องทางติดต่อด่วน">
        <a className="floating-phone" href={company.contact.phoneHref}><BrandIcon name="phone" /> โทร {company.contact.phone}</a>
        <a className="floating-facebook" href={company.contact.facebook} target="_blank" rel="noreferrer"><BrandIcon name="facebook" /> เพจ</a>
      </div>
      <Footer company={company} />
    </>
  );
}
