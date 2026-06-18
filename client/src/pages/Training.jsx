import PageHeader from "../components/PageHeader.jsx";
import { SectionTitle } from "../components/Card.jsx";
import CTA from "../components/CTA.jsx";

export default function Training({ company }) {
  return (
    <>
      <PageHeader eyebrow="เกี่ยวกับบริษัท" title="ทีมงานและการอบรม" description="สื่อสารว่าบริษัทให้ความสำคัญกับทีมงานคุณภาพ การขับขี่ปลอดภัย และการทำงานหน้างานอย่างเข้าใจจริง" breadcrumb={["เกี่ยวกับบริษัท", "ทีมงานและการอบรม"]} />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="การพัฒนาทีมงาน" title="การพัฒนาทีมงาน" text="ทีมงานคุณภาพคือหนึ่งในหัวใจสำคัญของภาพลักษณ์บริษัทที่ดี" />
          <div className="timeline">
            {company.trainings.map((item, index) => (
              <div className="timeline-item" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container split-grid">
          <div>
            <SectionTitle eyebrow="ทีมงานคุณภาพ" title="ทีมงานที่เหมาะกับงานหน้างานจริง" text="หน้านี้ช่วยเพิ่มความมั่นใจให้ลูกค้าว่าบริษัทไม่ได้มีแค่รถ แต่ยังมีคนทำงานที่รับผิดชอบและพร้อมดูแลงานอย่างเหมาะสม" />
            <div className="check-list">
              <span>✓ พนักงานเข้าใจลักษณะงานขนส่งวัสดุก่อสร้าง</span>
              <span>✓ ให้ความสำคัญกับการขับขี่และการลงวัสดุอย่างปลอดภัย</span>
              <span>✓ ประสานงานหน้างานและลูกค้าอย่างมืออาชีพ</span>
            </div>
          </div>
          <div className="image-card tall">
            <img src="/images/company/team.png" alt="ทีมงานและการอบรม" />
          </div>
        </div>
      </section>

      <CTA company={company} />
    </>
  );
}
