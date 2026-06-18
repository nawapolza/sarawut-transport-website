import { Link } from "react-router-dom";
import { InfoCard, SectionTitle } from "../components/Card.jsx";
import CTA from "../components/CTA.jsx";
import BrandIcon from "../components/BrandIcon.jsx";

export default function Home({ company }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">ศราวุฒิ ทรานสปอร์ต 2023</p>
            <h1>{company.hero.title}</h1>
            <p className="hero-text">{company.hero.description}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">สอบถามงานขนส่ง</Link>
              <Link className="btn btn-outline" to="/project">ดูผลงานและภาพหน้างาน</Link>
            </div>
            <div className="hero-contact-strip">
              <a href={company.contact.phoneHref}><BrandIcon name="phone" /> {company.contact.phone}</a>
              <a className="facebook-chip" href={company.contact.facebook} target="_blank" rel="noreferrer"><BrandIcon name="facebook" /> เพจเฟซบุ๊ก</a>
              <span><BrandIcon name="map" /> {company.office.coverage}</span>
            </div>
          </div>
          <div className="hero-visual">
            <img src={company.hero.image} alt="ภาพหลักบริษัทศราวุฒิทรานสปอร์ต" />
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {company.metrics.map((item) => (
            <div className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="premium-trust-band">
        <div className="container trust-band-grid">
          <div className="trust-brand-mark">
            <img src="/images/company/logo.png" alt="โลโก้บริษัทศราวุฒิทรานสปอร์ต" />
            <div>
              <span>บริษัทขนส่งวัสดุก่อสร้างมืออาชีพ ใช้งานง่าย ติดต่อสะดวก</span>
              <strong>{company.brand.shortName}</strong>
            </div>
          </div>
          <div className="trust-band-copy">
            <strong>รถบรรทุกพร้อมให้บริการ • ทีมงานประสานงานไว • ช่องทางติดต่อชัดเจน</strong>
            <p>ออกแบบให้ลูกค้าเข้ามาแล้วเห็นชัดทันทีว่าบริษัทมีตัวตน มีรถ มีทีม มีช่องทางติดต่อ และมีระบบการทำงานที่น่าเชื่อถือ</p>
          </div>
        </div>
      </section>



      <section className="section">
        <div className="container security-polish-card">
          <div>
            <BrandIcon name="shield" />
            <h3>ความน่าเชื่อถือ</h3>
            <p>ข้อมูลบริษัท ช่องทางติดต่อ และภาพหน้างานถูกจัดวางให้ลูกค้าเห็นชัดตั้งแต่ครั้งแรกที่เข้าเว็บไซต์</p>
          </div>
          <div>
            <BrandIcon name="truck" />
            <h3>ภาพลักษณ์มืออาชีพ</h3>
            <p>ใช้ไอคอนโทนเดียวกับโลโก้ สีสม่ำเสมอ ปุ่มใหญ่ และโครงสร้างที่เหมาะกับบริษัทขนส่งจริง</p>
          </div>
          <div>
            <BrandIcon name="lock" />
            <h3>ระบบปลอดภัยขึ้น</h3>
            <p>หลังบ้านมีระบบเข้าสู่ระบบ จำกัดการส่งข้อมูลถี่เกินไป และตรวจชนิดไฟล์ก่อนอัปโหลดรูป</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="ทำไมลูกค้าจึงเลือกเรา" title="มาตรฐานงานขนส่งที่ดูเป็นระบบตั้งแต่หน้าแรก" text="สื่อสารภาพบริษัทด้วยรถจริง หน้างานจริง ทีมงานจริง และดีไซน์ที่ทำให้ลูกค้าเข้ามาแล้วรู้สึกว่าเป็นบริษัทมืออาชีพทันที" center />
          <div className="card-grid four">
            {company.valueProps.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <SectionTitle eyebrow="บริการของเรา" title="บริการหลักของบริษัท" text="ครอบคลุมทั้งงานขนส่งวัสดุก่อสร้าง การประสานงานหน้างาน และระบบบริหารจัดการที่ทันสมัย" />
          <div className="card-grid two">
            {company.services.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.text}>
                <div className="tag-list">
                  {item.bullets.map((bullet) => (
                    <span key={bullet}>{bullet}</span>
                  ))}
                </div>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <div>
            <SectionTitle eyebrow="เกี่ยวกับบริษัท" title="ทีมงานคุณภาพ เหมาะสมกับการเป็นเว็บแนะนำบริษัทมืออาชีพ" text={company.about.intro} />
            <div className="check-list">
              {company.about.principles.map((item) => (
                <span key={item}>✓ {item}</span>
              ))}
            </div>
            <div className="hero-actions" style={{ marginTop: 28 }}>
              <Link className="btn btn-primary" to="/about">อ่านข้อมูลบริษัทเพิ่มเติม</Link>
            </div>
          </div>
          <div className="image-card tall">
            <img src="/images/company/team.png" alt="ทีมงานบริษัท" />
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionTitle eyebrow="ระบบบริษัทที่ทันสมัย" title={company.technology.title} text={company.technology.description} />
          <div className="tech-grid">
            <div className="info-card dark-card">
              <h3>ระบบน้ำมันของบริษัท</h3>
              <p>ช่วยให้ภาพลักษณ์ของบริษัทดูทันสมัยมากขึ้น และแสดงให้ลูกค้าเห็นว่าบริษัทมีการบริหารจัดการภายในอย่างเป็นระบบ</p>
              <div className="check-list dark-list">
                {company.technology.bullets.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="image-card qr-card">
              <img src={company.technology.image} alt="คิวอาร์ระบบน้ำมันของบริษัท" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="รถบริษัทและภาพหน้างาน" title="ภาพรถจริงและบรรยากาศหน้างาน" text="ใช้ภาพจริงของบริษัทเพื่อสร้างความน่าเชื่อถือ และสะท้อนความพร้อมในการให้บริการ" />
          <div className="gallery-grid">
            {company.gallery.slice(0, 6).map((image, index) => (
              <div className="gallery-item" key={image}>
                <img src={image} alt={`รถบริษัท ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <SectionTitle eyebrow="ขั้นตอนการทำงาน" title="ขั้นตอนการให้บริการ" text="ชัดเจน เข้าใจง่าย และเหมาะกับลูกค้าที่ต้องการงานรวดเร็ว" center />
          <div className="process-grid">
            {company.process.map((item) => (
              <div className="process-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA company={company} />
    </>
  );
}
