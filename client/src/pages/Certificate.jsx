import PageHeader from "../components/PageHeader.jsx";
import { InfoCard, SectionTitle } from "../components/Card.jsx";
import CTA from "../components/CTA.jsx";

export default function Certificate({ company }) {
  return (
    <>
      <PageHeader eyebrow="เกี่ยวกับบริษัท" title="ความพร้อมและมาตรฐาน" description="หน้านี้เน้นความพร้อม ความน่าเชื่อถือ และมาตรฐานการทำงานของบริษัทในมุมมองลูกค้า" breadcrumb={["เกี่ยวกับบริษัท", "ความพร้อมและมาตรฐาน"]} />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="ความพร้อมแบบมืออาชีพ" title="ความพร้อมในการทำงานอย่างมืออาชีพ" text="แม้ไม่ได้แสดงเอกสารทั้งหมดบนเว็บไซต์ แต่บริษัทสามารถสื่อสารความพร้อมผ่านโครงสร้างเนื้อหาและการออกแบบที่น่าเชื่อถือ" center />
          <div className="card-grid three">
            {company.certificates.map((item) => (
              <InfoCard key={item.title} icon="📄" title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container split-grid reverse-mobile">
          <div className="image-card">
            <img src="/images/company/truck-01.png" alt="ความพร้อมหน้างาน" />
          </div>
          <div>
            <SectionTitle eyebrow="ความมั่นใจของลูกค้า" title="โครงสร้างเว็บไซต์ช่วยเพิ่มความมั่นใจ" text="เราออกแบบส่วนนี้ให้สื่อถึงการทำงานที่มีมาตรฐาน เช่น การตรวจรถก่อนใช้งาน การประสานงานที่เป็นระบบ และการมีเทคโนโลยีสนับสนุนภายในบริษัท" />
            <div className="check-list">
              <span>✓ ภาพจริงจากหน้างาน</span>
              <span>✓ เนื้อหาเน้นคุณภาพงานบริการ</span>
              <span>✓ โชว์ระบบบริษัทและการดูแลรถ</span>
              <span>✓ เหมาะสำหรับใช้เป็นเว็บแนะนำองค์กร</span>
            </div>
          </div>
        </div>
      </section>

      <CTA company={company} />
    </>
  );
}
