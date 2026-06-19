import { Link, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import CTA from "../components/CTA.jsx";

export default function ProductDetail({ company }) {
  const { slug } = useParams();
  const product = company.products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <>
        <PageHeader eyebrow="บริการและสินค้า" title="ไม่พบข้อมูล" description="ไม่พบหน้ารายละเอียดที่คุณกำลังค้นหา" breadcrumb={["บริการและสินค้า", "ไม่พบข้อมูล"]} />
        <section className="section">
          <div className="container center-box">
            <Link className="btn btn-primary" to="/products">กลับไปยังหน้าสินค้าและบริการ</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader eyebrow="บริการและสินค้า" title={product.name} description={product.description} breadcrumb={["บริการและสินค้า", product.name]} />
      <section className="section">
        <div className="container split-grid">
          <div className="image-card tall">
            <img src={product.image} alt={product.name} />
          </div>
          <div>
            <div className="profile-box">
              <p className="eyebrow">{product.subtitle}</p>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h3>เหมาะสำหรับ</h3>
              <div className="check-list">
                {product.uses.map((item) => (
                  <span key={item}>✓ {item}</span>
                ))}
              </div>
              <h3 style={{ marginTop: 24 }}>รายละเอียดบริการ</h3>
              <p>{product.spec}</p>
              <div className="hero-actions" style={{ marginTop: 24 }}>
                <Link className="btn btn-primary" to="/contact">สอบถามหน้างานนี้</Link>
                <Link className="btn btn-outline" to="/products">กลับหน้าหมวดทั้งหมด</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA company={company} />
    </>
  );
}
