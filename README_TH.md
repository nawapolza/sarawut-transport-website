# เว็บไซต์บริษัท ศราวุฒิ ทรานสปอร์ต 2023 จำกัด

เวอร์ชัน V3.6 เป็นเว็บไซต์บริษัทแบบ **React + Node.js** พร้อมหลังบ้านแอดมิน ระบบอัปโหลดรูป และโครงสร้างพร้อมขึ้น Node Hosting / Render

## สิ่งที่ปรับใน V3.6

- เปลี่ยนไอคอนทั้งเว็บเป็นไอคอน SVG มืออาชีพ ไม่ใช้ emoji เป็นหลัก
- โทนไอคอนและปุ่มเข้ากับโลโก้ SWT 2023
- ปรับช่องทางติดต่อให้เห็นชัดทุกหน้า: โทร / เพจเฟซบุ๊ก / พื้นที่ให้บริการ
- เพิ่มส่วนภาพลักษณ์มืออาชีพในหน้าแรก
- ปรับ Footer ให้มี Trust Badge ดูน่าเชื่อถือขึ้น
- เพิ่ม favicon จากไอคอนบริษัท
- แก้ export ระบบแอดมินให้ build ได้ถูกต้อง
- เพิ่มความปลอดภัยฝั่ง Node server:
  - ปิด x-powered-by
  - ใช้ Helmet
  - จำกัดการส่งฟอร์มถี่เกินไป
  - จำกัดการล็อกอินแอดมินถี่เกินไป
  - จำกัดการอัปโหลดถี่เกินไป
  - ตรวจนามสกุลและชนิดไฟล์รูปก่อนอัปโหลด
  - ใช้ crypto.randomUUID สำหรับชื่อไฟล์
  - ทำความสะอาดข้อความจากฟอร์มก่อนบันทึก
  - รองรับ DATA_DIR / UPLOAD_DIR สำหรับ Persistent Disk
  - มี graceful shutdown สำหรับ Render/Node Hosting

## หน้าเว็บหลัก

- หน้าแรก
- เกี่ยวกับบริษัท
- ข้อมูลบริษัท
- ความพร้อมและมาตรฐาน
- ทีมงานและการอบรม
- แผนบำรุงรักษารถ
- บริการและสินค้า
- ศูนย์บริการ
- ผลงาน
- ติดต่อเรา
- นโยบายความเป็นส่วนตัว
- หลังบ้านแอดมิน `/admin`

## วิธีรันบนเครื่อง

```cmd
npm install && npm run install:all && npm run build && npm start
```

เปิดเว็บ:

```text
http://localhost:5000
```

เปิดหลังบ้าน:

```text
http://localhost:5000/admin
```

รหัสเริ่มต้น:

```text
ชื่อผู้ใช้: admin
รหัสผ่าน: admin123456
```

## ตั้งค่าก่อนขึ้นโฮสต์จริง

ตั้ง Environment Variables:

```env
NODE_ENV=production
JWT_SECRET=ใส่รหัสลับยาวๆ
ADMIN_USERNAME=admin
ADMIN_PASSWORD=เปลี่ยนรหัสผ่านใหม่
MAX_UPLOAD_MB=10
```

หากใช้ Render และต้องการให้รูปอัปโหลดไม่หายหลัง redeploy ควรใช้ Persistent Disk แล้วตั้ง:

```env
DATA_DIR=/var/data
UPLOAD_DIR=/var/data/uploads
```

## Render

Build Command:

```bash
npm run render-build
```

Start Command:

```bash
npm start
```

Health Check Path:

```text
/api/health
```


## อัปเดต V3.9 Mobile Card Layout

- ตัดส่วนพิกัด GPS ออกจากรูปที่มีพิกัดแล้ว
- ปรับปุ่มเมนู 3 ขีดบนมือถือให้สวยและชัดขึ้น
- เมนูมือถือเป็นการ์ด 2 คอลัมน์บางส่วน เลื่อนขึ้นลงได้
- หน้าเว็บใช้แนว Mobile-first, Card-based
- รูปภาพแกลเลอรีบนมือถือแสดงเป็น 2×2
- ช่องข้อมูลที่เป็นคู่ เช่น สถิติ/ช่องทางติดต่อ ใช้ 2 คอลัมน์เฉพาะจุดที่เหมาะสม
- การ์ดข้อความยาวยังคงอ่านง่าย ไม่บีบจนรก

### คำสั่งสำหรับ Render

Build Command:
```bash
npm run render-build
```

Start Command:
```bash
npm start
```

Health Check Path:
```text
/api/health
```
