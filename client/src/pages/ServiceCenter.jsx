import PageHeader from "../components/PageHeader.jsx";
import { InfoCard, SectionTitle } from "../components/Card.jsx";
import CTA from "../components/CTA.jsx";

export default function ServiceCenter({ company }) {
  return (
    <>
      <PageHeader eyebrow="ศูนย์บริการ" title="ศูนย์บริการและระบบการทำงาน" description="โชว์ความพร้อมของทีมงาน การดูแลรถ และระบบที่ช่วยให้บริษัทดูทันสมัยมากขึ้น" breadcrumb={["ศูนย์บริการ"]} />

      <section className="section">
        <div className="container split-grid">
          <div>
            <SectionTitle eyebrow="ศูนย์บริการ" title="พร้อมดูแลงานอย่างครบมิติ" text={company.serviceCenter.intro} />
            <div className="card-grid three single-column-mobile">
              {company.serviceCenter.blocks.map((block) => (
                <InfoCard key={block.title} icon="⭐" title={block.title} text={block.text} />
              ))}
            </div>
          </div>
          <div className="image-card tall">
            <img src="/images/company/truck-05.png" alt="ศูนย์บริการ" />
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container tech-grid">
          <div className="info-card dark-card">
            <p className="eyebrow light">เทคโนโลยีของบริษัท</p>
            <h2>{company.technology.title}</h2>
            <p>{company.technology.description}</p>
            <ul className="bullet-list light-list">
              {company.technology.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="image-card qr-card">
            <img src={company.technology.image} alt="ระบบน้ำมันของบริษัท" />
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <SectionTitle eyebrow="ระบบการให้บริการ" title="การทำงานที่ดูเป็นระบบและทันสมัย" text="เหมาะสำหรับใช้เป็นหน้าโชว์ศักยภาพบริษัท ทั้งในเชิงการบริการและการจัดการภายใน" center />
          <div className="process-grid">
            <div className="process-card"><span>01</span><h3>รับงาน</h3><p>ทีมงานตอบกลับรวดเร็วและรับรายละเอียดงานอย่างครบถ้วน</p></div>
            <div className="process-card"><span>02</span><h3>วางคิวรถ</h3><p>ประเมินจำนวนเที่ยว ช่วงเวลา และเส้นทางอย่างเหมาะสม</p></div>
            <div className="process-card"><span>03</span><h3>ควบคุมต้นทุน</h3><p>ใช้แนวคิดระบบน้ำมันของบริษัทช่วยจัดการข้อมูล</p></div>
            <div className="process-card"><span>04</span><h3>ติดตามงาน</h3><p>ดูแลงานต่อเนื่องและพร้อมประสานเมื่อลูกค้าต้องการงานเพิ่ม</p></div>
          </div>
        </div>
      </section>

      <CTA company={company} />
    </>
  );
}
