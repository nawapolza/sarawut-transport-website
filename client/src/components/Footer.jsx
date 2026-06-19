import { Link } from "react-router-dom";
import BrandIcon from "./BrandIcon.jsx";

export default function Footer({ company }) {
  return (
    <footer className="site-footer">
      <div className="container footer-trust-row">
        <div><BrandIcon name="shield" /><span>บริการอย่างมืออาชีพ</span></div>
        <div><BrandIcon name="truck" /><span>รถพร้อม ทีมพร้อม</span></div>
        <div><BrandIcon name="phone" /><span>ติดต่อสะดวก</span></div>
        <div><BrandIcon name="system" /><span>มีระบบจัดการภายใน</span></div>
      </div>

      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/company/logo.png" alt={company.brand.thName} />
          <h3>{company.brand.thName}</h3>
          <p>{company.brand.description}</p>
        </div>

        <div>
          <h4>ช่องทางติดต่อ</h4>
          <div className="footer-links icon-links">
            <a href={company.contact.phoneHref}><BrandIcon name="phone" /> {company.contact.phone}</a>
            <a href={company.contact.facebook} target="_blank" rel="noreferrer"><BrandIcon name="facebook" /> เพจเฟซบุ๊กบริษัท</a>
            <span><BrandIcon name="map" /> {company.office.coverage}</span>
          </div>
        </div>

        <div>
          <h4>ที่อยู่บริษัท</h4>
          <p>{company.office.address}</p>
          <p>เวลาทำการ: {company.office.officeHours}</p>
        </div>

        <div>
          <h4>เมนูหลัก</h4>
          <div className="footer-links">
            <Link to="/about">เกี่ยวกับบริษัท</Link>
            <Link to="/products">บริการและสินค้า</Link>
            <Link to="/service-center">ศูนย์บริการ</Link>
            <Link to="/project">ผลงาน</Link>
            <Link to="/contact">ติดต่อเรา</Link>
            <Link to="/privacy">นโยบายความเป็นส่วนตัว</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">สงวนลิขสิทธิ์ © {new Date().getFullYear()} {company.brand.thName}</div>
      </div>
    </footer>
  );
}
