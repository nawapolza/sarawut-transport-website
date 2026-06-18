import BrandIcon from "./BrandIcon.jsx";

export default function ContactShowcase({ company }) {
  return (
    <section className="quick-contact-section">
      <div className="container quick-contact-card">
        <div className="quick-contact-heading">
          <p className="eyebrow">ติดต่อสะดวก เห็นชัด ใช้งานง่าย</p>
          <h2>ช่องทางติดต่อบริษัท</h2>
          <p>ตัวอักษรอ่านง่าย ปุ่มใหญ่ เหมาะสำหรับผู้สูงอายุและลูกค้าทุกกลุ่ม โทรหรือเปิดเพจเฟซบุ๊กได้ทันที</p>
        </div>
        <div className="quick-contact-grid professional-icons">
          <a className="quick-contact-item phone" href={company.contact.phoneHref}>
            <span><BrandIcon name="phone" /></span>
            <div>
              <strong>โทรสอบถามทันที</strong>
              <p>{company.contact.phone}</p>
            </div>
          </a>
          <a className="quick-contact-item facebook" href={company.contact.facebook} target="_blank" rel="noreferrer">
            <span><BrandIcon name="facebook" /></span>
            <div>
              <strong>เพจเฟซบุ๊กบริษัท</strong>
              <p>{company.contact.facebookLabel}</p>
            </div>
          </a>
          <a className="quick-contact-item map" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.office.mapQuery)}`} target="_blank" rel="noreferrer">
            <span><BrandIcon name="map" /></span>
            <div>
              <strong>พื้นที่ให้บริการ</strong>
              <p>{company.office.coverage}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
