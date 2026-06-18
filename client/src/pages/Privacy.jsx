import PageHeader from "../components/PageHeader.jsx";

export default function Privacy({ company }) {
  return (
    <>
      <PageHeader eyebrow="นโยบายความเป็นส่วนตัว" title="นโยบายความเป็นส่วนตัว" description="หน้าแสดงนโยบายพื้นฐานเพื่อให้เว็บไซต์บริษัทดูครบถ้วนและเป็นมืออาชีพมากขึ้น" breadcrumb={["นโยบายความเป็นส่วนตัว"]} />
      <section className="section">
        <div className="container legal-card">
          <h2>การใช้งานข้อมูลติดต่อ</h2>
          <p>ข้อมูลที่ลูกค้าส่งผ่านแบบฟอร์มติดต่อ จะถูกใช้เพื่อการตอบกลับ การประสานงาน และการเสนอข้อมูลบริการของ {company.brand.thName} เท่านั้น</p>
          <h3>ข้อมูลที่อาจจัดเก็บ</h3>
          <ul className="bullet-list">
            <li>ชื่อผู้ติดต่อ</li>
            <li>เบอร์โทรศัพท์</li>
            <li>รายละเอียดงานหรือข้อความที่ส่งเข้ามา</li>
          </ul>
          <h3>การคุ้มครองข้อมูล</h3>
          <p>บริษัทให้ความสำคัญกับการใช้ข้อมูลอย่างเหมาะสม และจะไม่เปิดเผยข้อมูลติดต่อของลูกค้าโดยไม่จำเป็น</p>
        </div>
      </section>
    </>
  );
}
