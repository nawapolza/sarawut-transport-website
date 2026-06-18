import PageHeader from "../components/PageHeader.jsx";
import { SectionTitle } from "../components/Card.jsx";
import CTA from "../components/CTA.jsx";

export default function Project({ company }) {
  const uploadedImages = company.uploads || [];

  return (
    <>
      <PageHeader eyebrow="ผลงาน" title="ผลงานและภาพหน้างาน" description="รวมภาพการทำงานจริงของบริษัท พร้อมรองรับรูปที่อัปโหลดจากหลังบ้านแอดมิน" breadcrumb={["ผลงาน"]} />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="ผลงานของบริษัท" title="ตัวอย่างผลงานและงานภาคสนาม" text="ใช้ภาพจริงจากงานจริง เพื่อสร้างเว็บไซต์ที่มีเอกลักษณ์และไม่เหมือนใคร" />
          <div className="project-grid">
            {company.projects.map((item) => (
              <article className="project-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="project-card-body">
                  <p className="eyebrow">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span>📍 {item.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <SectionTitle eyebrow="แกลเลอรีภาพหน้างาน" title="แกลเลอรีภาพหน้างานเพิ่มเติม" text="ช่วยให้หน้าผลงาน ดูเต็มและน่าเชื่อถือมากขึ้น" center />
          <div className="gallery-grid large-gap">
            {company.gallery.map((image, index) => (
              <div className="gallery-item" key={`${image}-${index}`}>
                <img src={image} alt={`project-gallery-${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="รูปที่อัปโหลดจากหลังบ้าน" title="รูปจากหลังบ้านแอดมิน" text="เมื่ออัปโหลดรูปจากหน้า /admin รูปจะแสดงในส่วนนี้อัตโนมัติ" center />
          {uploadedImages.length === 0 ? (
            <div className="center-box compact">
              <p>ยังไม่มีรูปที่อัปโหลดจากหลังบ้าน</p>
            </div>
          ) : (
            <div className="admin-public-gallery">
              {uploadedImages.map((item) => (
                <article className="project-card" key={item.id}>
                  <img src={item.url} alt={item.title} />
                  <div className="project-card-body">
                    <p className="eyebrow">{item.category}</p>
                    <h3>{item.title}</h3>
                    {item.note ? <p>{item.note}</p> : null}
                    <span>อัปโหลดเมื่อ {new Date(item.createdAt).toLocaleDateString("th-TH")}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA company={company} />
    </>
  );
}
