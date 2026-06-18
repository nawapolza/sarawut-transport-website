import { Link } from "react-router-dom";
import BrandIcon from "./BrandIcon.jsx";

export default function ContactHighlight({ company, compact = false }) {
  return (
    <section className={`contact-highlight ${compact ? "compact" : ""}`.trim()}>
      <div className="container contact-highlight-card">
        <div className="contact-highlight-title">
          <p className="eyebrow">ช่องทางติดต่อ</p>
          <h2>โทรง่าย เปิดเพจง่าย เห็นชัดทุกหน้า</h2>
          <p>ออกแบบให้ปุ่มใหญ่ อ่านง่าย เหมาะสำหรับผู้สูงอายุ ลูกค้าหน้างาน และผู้รับเหมาที่ต้องการติดต่อบริษัทอย่างรวดเร็ว</p>
        </div>
        <div className="quick-contact-grid professional-icons">
          <a className="quick-contact-card phone" href={company.contact.phoneHref}>
            <span><BrandIcon name="phone" /></span>
            <div>
              <strong>โทรสอบถามทันที</strong>
              <p>{company.contact.phone}</p>
            </div>
          </a>
          <a className="quick-contact-card facebook" href={company.contact.facebook} target="_blank" rel="noreferrer">
            <span><BrandIcon name="facebook" /></span>
            <div>
              <strong>เพจเฟซบุ๊กบริษัท</strong>
              <p>{company.contact.facebookLabel}</p>
            </div>
          </a>
          <Link className="quick-contact-card map" to="/contact">
            <span><BrandIcon name="map" /></span>
            <div>
              <strong>พื้นที่ให้บริการ</strong>
              <p>{company.office.coverage}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
