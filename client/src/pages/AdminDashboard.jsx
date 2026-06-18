import { useEffect, useMemo, useState } from "react";
import {
  adminLogin,
  adminLogout,
  deleteAdminInquiry,
  deleteAdminUpload,
  getAdminInquiries,
  getAdminMe,
  getAdminUploads,
  uploadAdminImage
} from "../services/api.js";

const loginInitial = { username: "admin", password: "" };
const uploadInitial = { title: "", category: "แกลเลอรี", note: "", image: null };

export default function AdminDashboard({ company }) {
  const [admin, setAdmin] = useState(null);
  const [login, setLogin] = useState(loginInitial);
  const [uploadForm, setUploadForm] = useState(uploadInitial);
  const [uploads, setUploads] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const stats = useMemo(() => ([
    { label: "รูปที่อัปโหลด", value: uploads.length },
    { label: "รายการติดต่อ", value: inquiries.length },
    { label: "สถานะระบบ", value: admin ? "ออนไลน์" : "รอเข้าสู่ระบบ" }
  ]), [uploads.length, inquiries.length, admin]);

  async function loadAdminData() {
    const [uploadList, inquiryList] = await Promise.all([
      getAdminUploads(),
      getAdminInquiries()
    ]);
    setUploads(uploadList);
    setInquiries(inquiryList);
  }

  useEffect(() => {
    getAdminMe()
      .then((data) => {
        setAdmin(data.admin);
        return loadAdminData();
      })
      .catch(() => setAdmin(null))
      .finally(() => setLoading(false));
  }, []);

  const submitLogin = async (event) => {
    event.preventDefault();
    setSaving(true);
    setMessage("กำลังเข้าสู่ระบบ...");
    try {
      const data = await adminLogin(login);
      setAdmin(data.admin);
      await loadAdminData();
      setMessage("เข้าสู่ระบบสำเร็จ");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  };

  const submitUpload = async (event) => {
    event.preventDefault();
    if (!uploadForm.image) {
      setMessage("กรุณาเลือกรูปภาพก่อนอัปโหลด");
      return;
    }
    const formData = new FormData();
    formData.append("title", uploadForm.title || "รูปหน้างาน");
    formData.append("category", uploadForm.category || "แกลเลอรี");
    formData.append("note", uploadForm.note || "");
    formData.append("image", uploadForm.image);

    setSaving(true);
    setMessage("กำลังอัปโหลดรูป...");
    try {
      await uploadAdminImage(formData);
      setUploadForm(uploadInitial);
      setPreview("");
      await loadAdminData();
      setMessage("อัปโหลดรูปสำเร็จ รูปจะแสดงในหน้าผลงานอัตโนมัติ");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  };

  const removeUpload = async (id) => {
    if (!confirm("ต้องการลบรูปนี้ใช่ไหม?")) return;
    setMessage("กำลังลบรูป...");
    try {
      await deleteAdminUpload(id);
      await loadAdminData();
      setMessage("ลบรูปสำเร็จ");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const removeInquiry = async (id) => {
    if (!confirm("ต้องการลบรายการติดต่อนี้ใช่ไหม?")) return;
    setMessage("กำลังลบรายการ...");
    try {
      await deleteAdminInquiry(id);
      await loadAdminData();
      setMessage("ลบรายการติดต่อแล้ว");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const logout = () => {
    adminLogout();
    setAdmin(null);
    setUploads([]);
    setInquiries([]);
    setMessage("ออกจากระบบแล้ว");
  };

  if (loading) {
    return <div className="admin-screen"><div className="loader" /><p>กำลังโหลดหลังบ้าน...</p></div>;
  }

  if (!admin) {
    return (
      <div className="admin-login-screen">
        <div className="admin-login-card">
          <img src="/images/company/logo.png" alt="โลโก้บริษัท" />
          <p className="eyebrow">หลังบ้านแอดมิน</p>
          <h1>ระบบจัดการเว็บไซต์</h1>
          <p>เข้าสู่ระบบเพื่ออัปโหลดรูปหน้างาน ดูรายการติดต่อ และจัดการข้อมูลพื้นฐานสำหรับเว็บไซต์</p>
          <form onSubmit={submitLogin} className="admin-form">
            <input
              value={login.username}
              onChange={(e) => setLogin((prev) => ({ ...prev, username: e.target.value }))}
              placeholder="ชื่อผู้ใช้แอดมิน"
            />
            <input
              type="password"
              value={login.password}
              onChange={(e) => setLogin((prev) => ({ ...prev, password: e.target.value }))}
              placeholder="รหัสผ่านแอดมิน"
            />
            <button className="btn btn-primary full" disabled={saving}>{saving ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบแอดมิน"}</button>
          </form>
          {message ? <div className="form-status info">{message}</div> : null}
          <div className="admin-hint">
            ค่าเริ่มต้นสำหรับทดสอบ: <strong>admin</strong> / <strong>admin123456</strong><br />
            ตอนนำขึ้นโฮสต์จริงให้เปลี่ยนรหัสผ่านใน Environment Variables ทันที
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <img src="/images/company/logo.png" alt="โลโก้บริษัท" />
        <h2>หลังบ้านเว็บไซต์</h2>
        <p>{company.brand.thName}</p>
        <a href="/" target="_blank" rel="noreferrer">เปิดหน้าเว็บ</a>
        <button className="btn btn-outline full" onClick={logout}>ออกจากระบบ</button>
      </aside>

      <main className="admin-main">
        <div className="admin-topline">
          <div>
            <p className="eyebrow">ระบบจัดการข้อมูล</p>
            <h1>หลังบ้านเว็บไซต์</h1>
            <p>จัดการรูปหน้างานและรายการติดต่อจากลูกค้า</p>
          </div>
          <div className="admin-badge">ผู้ใช้งาน: {admin.username}</div>
        </div>

        {message ? <div className="form-status success admin-message">{message}</div> : null}

        <section className="admin-stats-grid">
          {stats.map((item) => (
            <div className="admin-stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </section>

        <section className="admin-grid">
          <div className="admin-card">
            <h2>อัปโหลดรูปเอง</h2>
            <p>รูปที่อัปโหลดจะถูกนำไปแสดงในหน้าผลงานอัตโนมัติ</p>
            <form className="admin-form" onSubmit={submitUpload}>
              <input
                value={uploadForm.title}
                onChange={(e) => setUploadForm((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="ชื่อรูป / ชื่องาน เช่น งานส่งหินหน้างาน"
              />
              <select
                value={uploadForm.category}
                onChange={(e) => setUploadForm((prev) => ({ ...prev, category: e.target.value }))}
              >
                <option>แกลเลอรี</option>
                <option>รถบริษัท</option>
                <option>ผลงาน</option>
                <option>ทีมงาน</option>
                <option>บริการ</option>
              </select>
              <textarea
                value={uploadForm.note}
                onChange={(e) => setUploadForm((prev) => ({ ...prev, note: e.target.value }))}
                rows="4"
                placeholder="รายละเอียดรูป / หมายเหตุ"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setUploadForm((prev) => ({ ...prev, image: file }));
                  setPreview(file ? URL.createObjectURL(file) : "");
                }}
              />
              {preview ? <img className="admin-preview" src={preview} alt="ตัวอย่างรูปก่อนอัปโหลด" /> : null}
              <button className="btn btn-primary full" disabled={saving}>{saving ? "กำลังบันทึก..." : "อัปโหลดรูป"}</button>
            </form>
          </div>

          <div className="admin-card">
            <h2>รายการติดต่อจากลูกค้า</h2>
            <p>รายการจากฟอร์มหน้าติดต่อเรา</p>
            <div className="admin-list">
              {inquiries.length === 0 ? <p className="admin-empty">ยังไม่มีรายการติดต่อ</p> : null}
              {inquiries.map((item) => (
                <div className="admin-list-item" key={item.id}>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.phone} • {item.service}</span>
                    <p>{item.message}</p>
                    <small>{new Date(item.createdAt).toLocaleString("th-TH")}</small>
                  </div>
                  <button onClick={() => removeInquiry(item.id)}>ลบ</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="admin-card">
          <h2>รูปที่อัปโหลดแล้ว</h2>
          <div className="admin-upload-grid">
            {uploads.length === 0 ? <p className="admin-empty">ยังไม่มีรูปที่อัปโหลด</p> : null}
            {uploads.map((item) => (
              <article className="admin-upload-card" key={item.id}>
                <img src={item.url} alt={item.title} />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.category}</span>
                  <p>{item.note}</p>
                  <button onClick={() => removeUpload(item.id)}>ลบรูป</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
