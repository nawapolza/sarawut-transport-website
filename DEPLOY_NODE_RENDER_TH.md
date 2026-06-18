# คู่มือขึ้น Render / Node Hosting

## 1) สร้าง Web Service บน Render

เลือก Runtime เป็น Node

## 2) Build Command

```bash
npm run render-build
```

## 3) Start Command

```bash
npm start
```

## 4) Health Check Path

```text
/api/health
```

## 5) Environment Variables ที่ต้องตั้ง

```env
NODE_ENV=production
JWT_SECRET=ใส่รหัสลับยาวมากๆ
ADMIN_USERNAME=admin
ADMIN_PASSWORD=เปลี่ยนเป็นรหัสผ่านจริง
MAX_UPLOAD_MB=10
```

## 6) สำหรับระบบอัปโหลดรูป

ถ้าใช้ Render Free แบบไม่มี Disk รูปอัปโหลดอาจหายเมื่อ redeploy
ถ้าต้องการให้รูปอยู่ถาวร ให้เพิ่ม Persistent Disk แล้วตั้ง:

```env
DATA_DIR=/var/data
UPLOAD_DIR=/var/data/uploads
```

## 7) หลัง deploy

หน้าเว็บหลัก:

```text
https://ชื่อโปรเจกต์.onrender.com
```

หลังบ้านแอดมิน:

```text
https://ชื่อโปรเจกต์.onrender.com/admin
```

## 8) เช็กระบบ

เปิด:

```text
https://ชื่อโปรเจกต์.onrender.com/api/health
```

ถ้าขึ้น `ok: true` แปลว่า Node server ทำงานแล้ว
