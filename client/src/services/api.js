const API_BASE = import.meta.env.VITE_API_URL || "/api";

function authHeader() {
  const token = localStorage.getItem("swt_admin_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function getCompany() {
  const response = await fetch(`${API_BASE}/company`);
  if (!response.ok) throw new Error("โหลดข้อมูลบริษัทไม่สำเร็จ");
  return response.json();
}

export async function getPublicUploads() {
  const response = await fetch(`${API_BASE}/uploads`);
  if (!response.ok) return [];
  return response.json();
}

export async function sendContact(payload) {
  const response = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "ส่งข้อมูลไม่สำเร็จ");
  return data;
}

export async function adminLogin(payload) {
  const response = await fetch(`${API_BASE}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "เข้าสู่ระบบไม่สำเร็จ");
  localStorage.setItem("swt_admin_token", data.token);
  return data;
}

export function adminLogout() {
  localStorage.removeItem("swt_admin_token");
}

export async function getAdminMe() {
  const response = await fetch(`${API_BASE}/admin/me`, { headers: authHeader() });
  if (!response.ok) throw new Error("กรุณาเข้าสู่ระบบ");
  return response.json();
}

export async function getAdminUploads() {
  const response = await fetch(`${API_BASE}/admin/uploads`, { headers: authHeader() });
  if (!response.ok) throw new Error("โหลดรูปภาพไม่สำเร็จ");
  return response.json();
}

export async function uploadAdminImage(formData) {
  const response = await fetch(`${API_BASE}/admin/uploads`, {
    method: "POST",
    headers: authHeader(),
    body: formData
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "อัปโหลดไม่สำเร็จ");
  return data;
}

export async function deleteAdminUpload(id) {
  const response = await fetch(`${API_BASE}/admin/uploads/${id}`, {
    method: "DELETE",
    headers: authHeader()
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "ลบรูปไม่สำเร็จ");
  return data;
}

export async function getAdminInquiries() {
  const response = await fetch(`${API_BASE}/admin/inquiries`, { headers: authHeader() });
  if (!response.ok) throw new Error("โหลดรายการติดต่อไม่สำเร็จ");
  return response.json();
}

export async function deleteAdminInquiry(id) {
  const response = await fetch(`${API_BASE}/admin/inquiries/${id}`, {
    method: "DELETE",
    headers: authHeader()
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "ลบรายการไม่สำเร็จ");
  return data;
}
