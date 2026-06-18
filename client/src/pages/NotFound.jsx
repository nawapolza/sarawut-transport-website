import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container center-box">
        <h1>404</h1>
        <p>ไม่พบหน้าที่คุณต้องการ</p>
        <Link className="btn btn-primary" to="/">กลับหน้าแรก</Link>
      </div>
    </section>
  );
}
