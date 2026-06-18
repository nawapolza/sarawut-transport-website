import { Link } from "react-router-dom";

export default function CTA({ company, title = "ต้องการสอบถามงานขนส่ง หิน ทราย กรวด หรือวัสดุก่อสร้าง?", text = "ทีมงานพร้อมช่วยประเมินงาน แนะนำรูปแบบบริการ และจัดคิวรถให้ตรงกับความต้องการของลูกค้า" }) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div>
            <p className="eyebrow light">ติดต่อทีมงาน</p>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-light" href={company.contact.phoneHref}>โทร {company.contact.phone}</a>
            <a className="btn btn-dark" href={company.contact.facebook} target="_blank" rel="noreferrer">เปิดเพจเฟซบุ๊ก</a>
            <Link className="btn btn-dark" to="/contact">ดูช่องทางติดต่อ</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
