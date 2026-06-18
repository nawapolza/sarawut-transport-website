import PageHeader from "../components/PageHeader.jsx";
import { SectionTitle } from "../components/Card.jsx";
import CTA from "../components/CTA.jsx";

export default function CompanyProfile({ company }) {
  const profileRows = [
    ["ชื่อบริษัท", company.brand.thName],
    ["เลขทะเบียนนิติบุคคล", company.companyProfile.registrationNo],
    ["ประเภทธุรกิจ", company.companyProfile.businessType],
    ["วันที่จดทะเบียน", company.companyProfile.registrationDate],
    ["สถานะกิจการ", company.companyProfile.status],
    ["สำนักงานใหญ่", company.companyProfile.headOffice]
  ];

  const summaryCards = [
    { label: "เลขทะเบียน", value: company.companyProfile.registrationNo, text: "ข้อมูลนิติบุคคล" },
    { label: "เริ่มกิจการ", value: company.companyProfile.registrationDate, text: "วันที่จดทะเบียน" },
    { label: "พื้นที่บริการ", value: company.office.coverage, text: "พื้นที่ให้บริการหลัก" }
  ];

  return (
    <>
      <PageHeader
        eyebrow="เกี่ยวกับบริษัท"
        title="ข้อมูลบริษัท"
        description="ข้อมูลบริษัทแบบพรีเมียม อ่านง่าย น่าเชื่อถือ เหมาะสำหรับแนะนำองค์กรกับลูกค้า ผู้รับเหมา และพาร์ตเนอร์ทางธุรกิจ"
        breadcrumb={["เกี่ยวกับบริษัท", "ข้อมูลบริษัท"]}
      />

      <section className="section profile-section profile-premium-section">
        <div className="container company-profile-grid">
          <article className="company-profile-panel premium-profile-panel">
            <div className="profile-heading-row no-capital">
              <div>
                <p className="eyebrow">ภาพรวมบริษัท</p>
                <h2>{company.brand.thName}</h2>
                <p className="profile-lead">{company.brand.description}</p>
              </div>
              <div className="profile-logo-badge">
                <img src="/images/company/logo.png" alt={company.brand.thName} />
                <strong>{company.brand.shortName}</strong>
                <span>บริการขนส่งมืออาชีพ</span>
              </div>
            </div>

            <div className="profile-highlight-strip premium-no-capital-strip">
              {summaryCards.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <small>{item.text}</small>
                </div>
              ))}
            </div>

            <div className="profile-table premium-profile-table clean-profile-table">
              {profileRows.map(([label, value]) => (
                <div className="profile-table-row" key={label}>
                  <div className="profile-table-label">{label}</div>
                  <div className="profile-table-value">{value}</div>
                </div>
              ))}
            </div>

            <p className="profile-note">{company.companyProfile.note}</p>
          </article>

          <aside className="work-guideline-card premium-guideline-card">
            <div className="guideline-top-card">
              <img src="/images/company/logo.png" alt={company.brand.thName} />
              <div>
                <span>มาตรฐานการทำงาน</span>
                <strong>{company.brand.shortName}</strong>
              </div>
            </div>
            <h3>แนวทางการทำงาน</h3>
            {company.process.map((item) => (
              <div className="guideline-item" key={item.step}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="section muted premium-company-strength">
        <div className="container split-grid">
          <div>
            <SectionTitle
              eyebrow="จุดแข็งของบริษัท"
              title="ภาพลักษณ์บริษัทที่พร้อมใช้งานจริงและดูเป็นมืออาชีพ"
              text="หน้าข้อมูลบริษัทนี้ออกแบบให้เหมือนหน้าแนะนำองค์กรระดับบริษัท อ่านง่าย สวยงาม และสื่อสารความน่าเชื่อถือโดยแสดงเฉพาะข้อมูลที่เหมาะสมกับเว็บไซต์"
            />
            <div className="check-list premium-check-list">
              <span>✓ แสดงข้อมูลบริษัทครบในรูปแบบมืออาชีพ</span>
              <span>✓ แสดงเฉพาะข้อมูลบริษัทที่เหมาะกับการเผยแพร่บนเว็บไซต์</span>
              <span>✓ ใช้ตารางข้อมูลที่ดูสะอาด อ่านง่าย และน่าเชื่อถือ</span>
              <span>✓ รองรับมือถือและการใช้งานจริง</span>
              <span>✓ เชื่อมโยงกับบริการขนส่ง ระบบน้ำมัน และทีมงานคุณภาพ</span>
            </div>
          </div>
          <div className="image-card tall premium-image-frame">
            <img src="/images/company/truck-06.png" alt="รถบริษัทศราวุฒิ ทรานสปอร์ต" />
          </div>
        </div>
      </section>

      <CTA company={company} />
    </>
  );
}
