import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { InfoCard, SectionTitle } from "../components/Card.jsx";
import { sendContact } from "../services/api.js";
import BrandIcon from "../components/BrandIcon.jsx";

const initialForm = { name: "", phone: "", service: "งานขนส่งวัสดุก่อสร้าง", message: "" };

export default function Contact({ company }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ loading: false, message: "", type: "" });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: "กำลังส่งข้อมูล...", type: "info" });
    try {
      const response = await sendContact(form);
      setStatus({ loading: false, message: response.message, type: "success" });
      setForm(initialForm);
    } catch (error) {
      setStatus({ loading: false, message: error.message || "ส่งข้อมูลไม่สำเร็จ", type: "error" });
    }
  };

  return (
    <>
      <PageHeader eyebrow="ติดต่อเรา" title="ช่องทางติดต่อบริษัท" description="หน้านี้ออกแบบให้อ่านง่าย ตัวหนังสือชัด ปุ่มใหญ่ เหมาะสำหรับผู้สูงอายุและลูกค้าทุกกลุ่ม" breadcrumb={["ติดต่อเรา"]} />

      <section className="section contact-hero-section">
        <div className="container contact-grid">
          <div>
            <SectionTitle eyebrow="โทรศัพท์และเพจบริษัท" title="ติดต่อได้ง่าย เห็นชัดทุกช่องทาง" text="ลูกค้าสามารถโทรสอบถาม หรือเปิดเพจเฟซบุ๊กของบริษัทได้ทันทีจากปุ่มด้านล่าง" />
            <div className="contact-big-actions">
              <a className="contact-big-card phone" href={company.contact.phoneHref}>
                <span><BrandIcon name="phone" /></span>
                <div>
                  <strong>โทรสอบถามทันที</strong>
                  <p>{company.contact.phone}</p>
                </div>
              </a>
              <a className="contact-big-card facebook" href={company.contact.facebook} target="_blank" rel="noreferrer">
                <span><BrandIcon name="facebook" /></span>
                <div>
                  <strong>เปิดเพจเฟซบุ๊ก</strong>
                  <p>{company.contact.facebookLabel}</p>
                </div>
              </a>
            </div>

            <div className="facebook-showcase-card">
              <div className="facebook-showcase-logo"><BrandIcon name="facebook" /></div>
              <div>
                <p className="eyebrow">เพจเฟซบุ๊กอย่างเป็นทางการ</p>
                <h3>{company.contact.facebookLabel}</h3>
                <p>ติดตามภาพงานจริง รถจริง และแจ้งรายละเอียดงานผ่านเพจได้สะดวก</p>
                <a className="btn btn-primary" href={company.contact.facebook} target="_blank" rel="noreferrer">ไปที่เพจเฟซบุ๊ก</a>
              </div>
            </div>

            <div className="card-grid two single-column-mobile">
              <InfoCard icon="map" title="ที่อยู่บริษัท" text={company.office.address} />
              <InfoCard icon="route" title="พื้นที่ให้บริการ" text={company.office.coverage} />
              <InfoCard icon="document" title="เวลาทำการ" text={company.office.officeHours} />
              <InfoCard icon="truck" title="บริการหลัก" text="ขนส่งวัสดุก่อสร้าง หิน ทราย กรวด ลูกรัง และงานโครงการ" />
            </div>

            <div className="map-card">
              <iframe
                title="แผนที่บริษัท"
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.office.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <div className="form-card">
              <h3>ส่งรายละเอียดงาน</h3>
              <p>กรอกข้อมูลเบื้องต้น ทีมงานจะติดต่อกลับเพื่อแนะนำบริการที่เหมาะสม</p>
              <form className="contact-form" onSubmit={onSubmit}>
                <input name="name" value={form.name} onChange={onChange} placeholder="ชื่อผู้ติดต่อ" />
                <input name="phone" value={form.phone} onChange={onChange} placeholder="เบอร์โทรศัพท์" />
                <select name="service" value={form.service} onChange={onChange}>
                  <option>งานขนส่งวัสดุก่อสร้าง</option>
                  <option>หิน / ทราย / กรวด</option>
                  <option>งานลูกรัง / ถมที่ / ปรับพื้นที่</option>
                  <option>งานโครงการ</option>
                  <option>สอบถามทั่วไป</option>
                </select>
                <textarea name="message" value={form.message} onChange={onChange} rows="5" placeholder="รายละเอียดงาน / พื้นที่จัดส่ง / ปริมาณโดยประมาณ" />
                <button className="btn btn-primary full" type="submit" disabled={status.loading}>{status.loading ? "กำลังส่ง..." : "ส่งข้อมูลให้ทีมงาน"}</button>
              </form>
              {status.message ? <div className={`form-status ${status.type}`}>{status.message}</div> : null}
            </div>

            <div className="qr-panel">
              <img src={company.contact.qrImage} alt="ระบบน้ำมันของบริษัท" />
              <div>
                <h3>{company.technology.title}</h3>
                <p>ระบบภายในของบริษัทช่วยเพิ่มความน่าเชื่อถือและแสดงภาพการทำงานที่ทันสมัย</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
