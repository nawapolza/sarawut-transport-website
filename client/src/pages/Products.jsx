import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import { SectionTitle } from "../components/Card.jsx";
import CTA from "../components/CTA.jsx";

export default function Products({ company }) {
  return (
    <>
      <PageHeader eyebrow="บริการและสินค้า" title="สินค้าและบริการ" description="จัดกลุ่มข้อมูลให้อ่านง่าย คล้ายเว็บบริษัทมืออาชีพ โดยรวมทั้งงานขนส่งและหมวดวัสดุก่อสร้าง" breadcrumb={["บริการและสินค้า"]} />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="หมวดบริการ" title="หมวดบริการและหมวดงาน" text="ออกแบบให้ดูเป็นระบบ ใช้ง่าย และรองรับทั้งเดสก์ท็อปและมือถือ" />
          <div className="product-grid">
            {company.products.map((item) => (
              <article className="product-card" key={item.slug}>
                <img src={item.image} alt={item.name} />
                <div className="product-card-body">
                  <p className="eyebrow">{item.subtitle}</p>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link className="btn btn-outline small" to={`/products/${item.slug}`}>ดูรายละเอียด</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA company={company} />
    </>
  );
}
