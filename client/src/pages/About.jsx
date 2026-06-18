import PageHeader from "../components/PageHeader.jsx";
import { InfoCard, SectionTitle } from "../components/Card.jsx";
import CTA from "../components/CTA.jsx";

export default function About({ company }) {
  return (
    <>
      <PageHeader eyebrow="เกี่ยวกับบริษัท" title="เกี่ยวกับบริษัท" description="แนะนำตัวตนของบริษัท จุดยืนในการให้บริการ และแนวทางการพัฒนาระบบการทำงานให้ทันสมัย" breadcrumb={["เกี่ยวกับบริษัท"]} />

      <section className="section">
        <div className="container split-grid">
          <div>
            <SectionTitle eyebrow="เรื่องราวบริษัท" title={company.brand.thName} text={company.about.intro} />
            <div className="info-stack">
              <InfoCard icon="🎯" title="ภารกิจของบริษัท" text={company.about.mission} />
              <InfoCard icon="🚀" title="วิสัยทัศน์" text={company.about.vision} />
            </div>
          </div>
          <div className="image-card tall">
            <img src="/images/company/hero-poster.png" alt="เกี่ยวกับบริษัท" />
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <SectionTitle eyebrow="จุดแข็งของเรา" title="จุดแข็งของบริษัท" text="เน้นทั้งงานภาคสนาม การบริการ และการบริหารงานภายในที่เป็นระบบ" center />
          <div className="card-grid four">
            {company.valueProps.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid reverse-mobile">
          <div className="image-card tall">
            <img src="/images/company/team.png" alt="ทีมงานคุณภาพ" />
          </div>
          <div>
            <SectionTitle eyebrow="ทีมงานคุณภาพ" title="ทีมงานคุณภาพ" text="สำหรับเว็บไซต์แนะนำบริษัท เราเน้นภาพลักษณ์ที่น่าเชื่อถือ พร้อมสื่อสารว่าบริษัทมีทีมงานจริง มีประสบการณ์จริง และพร้อมดูแลงานอย่างเหมาะสม" />
            <div className="check-list">
              <span>✓ ทีมขับรถและทีมประสานงานทำงานร่วมกันอย่างเป็นระบบ</span>
              <span>✓ มีการตรวจรถและเตรียมความพร้อมก่อนลงงาน</span>
              <span>✓ ให้ความสำคัญกับมารยาทบริการและการสื่อสารกับลูกค้า</span>
              <span>✓ พัฒนาระบบภายในเพื่อรองรับการเติบโตของบริษัท</span>
            </div>
          </div>
        </div>
      </section>

      <CTA company={company} />
    </>
  );
}
