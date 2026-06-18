import PageHeader from "../components/PageHeader.jsx";
import { InfoCard, SectionTitle } from "../components/Card.jsx";
import CTA from "../components/CTA.jsx";

export default function PMPlan({ company }) {
  return (
    <>
      <PageHeader eyebrow="เกี่ยวกับบริษัท" title="แผนบำรุงรักษารถ" description="แสดงการดูแลรถอย่างเป็นระบบ เพื่อสะท้อนความพร้อมของบริษัทและความมั่นใจในการให้บริการ" breadcrumb={["เกี่ยวกับบริษัท", "แผนบำรุงรักษารถ"]} />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="แผนบำรุงรักษารถ" title="ดูแลรถอย่างเป็นระบบ" text="การมีแผนบำรุงรักษารถ ช่วยให้เว็บไซต์บริษัทดูมืออาชีพมากขึ้น และแสดงถึงความใส่ใจในความพร้อมของรถแต่ละคัน" center />
          <div className="card-grid three">
            {company.pmPlan.map((item) => (
              <InfoCard key={item.period} icon="🔧" title={item.period}>
                <ul className="bullet-list">
                  {item.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container split-grid reverse-mobile">
          <div className="image-card tall">
            <img src="/images/company/truck-08.png" alt="รถตามแผนบำรุงรักษา" />
          </div>
          <div>
            <SectionTitle eyebrow="การดูแลรถยุคใหม่" title="เชื่อมกับระบบน้ำมันของบริษัท" text="นอกจากการบำรุงรักษาเชิงป้องกัน บริษัทก็ยังมีแนวคิดด้านระบบบริหารจัดการน้ำมัน เพื่อช่วยติดตามต้นทุนและความพร้อมในการใช้งานรถอย่างมีประสิทธิภาพ" />
            <div className="lead-box">รถพร้อม + ทีมพร้อม + ระบบพร้อม = ภาพลักษณ์บริษัทที่ดูน่าเชื่อถือและทันสมัย</div>
          </div>
        </div>
      </section>

      <CTA company={company} />
    </>
  );
}
