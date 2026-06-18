# วิธีแก้ npm install ติด ETIMEDOUT / EPERM บน Windows

สาเหตุที่เจอในเครื่อง Windows:

1. `ETIMEDOUT` เพราะ npm ไปอ่าน URL registry จากไฟล์ lock เดิมที่ชี้ไป internal registry ของ sandbox
2. `EPERM` เพราะ Windows ลบโฟลเดอร์ `node_modules` ไม่ได้ อาจมี VS Code, Terminal, Node process, antivirus หรือ XAMPP จับไฟล์อยู่

เวอร์ชัน ZIP นี้แก้แล้วโดยลบ lock file เดิมและใส่ `.npmrc` ให้ใช้ public npm registry:

```bash
registry=https://registry.npmjs.org/
```

## คำสั่งแนะนำให้รันใน PowerShell แบบ Run as Administrator

เข้าโฟลเดอร์โปรเจกต์ก่อน:

```powershell
cd C:\xampp\htdocs\sarawut-transport-website\sarawut-transport-website
```

ปิด node process ที่อาจค้าง:

```powershell
taskkill /F /IM node.exe
```

บังคับ registry เป็น npm public:

```powershell
npm config set registry https://registry.npmjs.org/
npm config delete proxy
npm config delete https-proxy
npm cache clean --force
```

ลบไฟล์เก่าที่อาจทำให้ติด internal registry:

```powershell
rmdir /s /q node_modules
rmdir /s /q server\node_modules
rmdir /s /q client\node_modules
del package-lock.json
del server\package-lock.json
del client\package-lock.json
```

ติดตั้งใหม่:

```powershell
npm install
npm run install:all
npm run build
npm start
```

เปิดเว็บ:

```text
http://localhost:5000
```

เปิดหลังบ้าน:

```text
http://localhost:5000/admin
```

ข้อมูลแอดมินเริ่มต้น:

```text
Username: admin
Password: admin123456
```

## ถ้ายังติด EPERM

ให้ปิด VS Code, Terminal, XAMPP, antivirus ชั่วคราว แล้วเปิด PowerShell แบบ Run as Administrator จากนั้นรันคำสั่งลบ `node_modules` อีกครั้ง

หรือย้ายโปรเจกต์ออกจาก `C:\xampp\htdocs` ไปไว้ที่:

```text
C:\projects\sarawut-transport-website
```

แล้วค่อยรัน npm ใหม่ จะลดปัญหา permission บน Windows ได้มาก
