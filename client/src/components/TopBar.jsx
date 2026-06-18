import BrandIcon from "./BrandIcon.jsx";

export default function TopBar({ company }) {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span className="topbar-pill"><BrandIcon name="map" /> {company.office.coverage}</span>
          <span className="topbar-hide-mobile">สำนักงานใหญ่: {company.office.address}</span>
        </div>
        <div className="topbar-right">
          <a href={company.contact.phoneHref}><BrandIcon name="phone" /> โทร {company.contact.phone}</a>
          <a href={company.contact.facebook} target="_blank" rel="noreferrer"><BrandIcon name="facebook" /> เพจเฟซบุ๊ก</a>
        </div>
      </div>
    </div>
  );
}
