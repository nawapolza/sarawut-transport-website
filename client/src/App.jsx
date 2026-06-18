import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getCompany, getPublicUploads } from "./services/api.js";
import Loading from "./components/Loading.jsx";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CompanyProfile from "./pages/CompanyProfile.jsx";
import Certificate from "./pages/Certificate.jsx";
import Training from "./pages/Training.jsx";
import PMPlan from "./pages/PMPlan.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import ServiceCenter from "./pages/ServiceCenter.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const [company, setCompany] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([getCompany(), getPublicUploads().catch(() => [])])
      .then(([data, uploads]) => {
        setCompany({ ...data, uploads });
        document.title = data.seo.title;
      })
      .catch(() => setError("โหลดข้อมูลบริษัทไม่สำเร็จ กรุณาตรวจสอบว่าเปิด Node server แล้ว"));
  }, []);

  if (error) {
    return <div className="error-screen"><h1>เกิดข้อผิดพลาด</h1><p>{error}</p></div>;
  }

  if (!company) return <Loading />;

  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard company={company} />} />
      <Route element={<Layout company={company} />}>
        <Route path="/" element={<Home company={company} />} />
        <Route path="/about" element={<About company={company} />} />
        <Route path="/about/company-profile" element={<CompanyProfile company={company} />} />
        <Route path="/about/certificate" element={<Certificate company={company} />} />
        <Route path="/about/training" element={<Training company={company} />} />
        <Route path="/about/pm-plan" element={<PMPlan company={company} />} />
        <Route path="/products" element={<Products company={company} />} />
        <Route path="/products/:slug" element={<ProductDetail company={company} />} />
        <Route path="/service-center" element={<ServiceCenter company={company} />} />
        <Route path="/project" element={<Project company={company} />} />
        <Route path="/contact" element={<Contact company={company} />} />
        <Route path="/privacy" element={<Privacy company={company} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
