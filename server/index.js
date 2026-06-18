import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import fs from "fs/promises";
import fsSync from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { company } from "./data/company.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const PORT = Number(process.env.PORT || 5000);
const NODE_ENV = process.env.NODE_ENV || "development";
const IS_PRODUCTION = NODE_ENV === "production";
const JWT_SECRET = process.env.JWT_SECRET || "change-this-secret-before-production";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123456";
const MAX_UPLOAD_MB = Number(process.env.MAX_UPLOAD_MB || 10);
const CONTACT_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const ADMIN_LIMIT_WINDOW_MS = 15 * 60 * 1000;

const dataDir = path.resolve(process.env.DATA_DIR || path.join(__dirname, "data"));
const uploadsDir = path.resolve(process.env.UPLOAD_DIR || path.join(__dirname, "uploads"));
const inquiriesFile = path.join(dataDir, "inquiries.json");
const uploadsFile = path.join(dataDir, "uploads.json");

for (const dir of [dataDir, uploadsDir]) {
  if (!fsSync.existsSync(dir)) fsSync.mkdirSync(dir, { recursive: true });
}
if (!fsSync.existsSync(inquiriesFile)) fsSync.writeFileSync(inquiriesFile, "[]", "utf8");
if (!fsSync.existsSync(uploadsFile)) fsSync.writeFileSync(uploadsFile, "[]", "utf8");

if (JWT_SECRET === "change-this-secret-before-production" && IS_PRODUCTION) {
  console.warn("WARNING: Please set JWT_SECRET in production environment variables.");
}
if (ADMIN_PASSWORD === "admin123456" && IS_PRODUCTION) {
  console.warn("WARNING: Please change ADMIN_PASSWORD before public deployment.");
}

app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: false,
  referrerPolicy: { policy: "no-referrer-when-downgrade" }
}));
app.use(cors({
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",").map((item) => item.trim()) : true,
  credentials: false
}));
app.use(express.json({ limit: "2mb" }));
app.use(morgan(IS_PRODUCTION ? "combined" : "dev"));
app.use("/uploads", express.static(uploadsDir, { maxAge: IS_PRODUCTION ? "7d" : 0, immutable: IS_PRODUCTION }));

const buckets = new Map();
function getIp(req) {
  return req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.ip || req.socket.remoteAddress || "unknown";
}
function rateLimit({ keyPrefix, windowMs, max, message }) {
  return (req, res, next) => {
    const key = `${keyPrefix}:${getIp(req)}`;
    const now = Date.now();
    const current = buckets.get(key) || { count: 0, resetAt: now + windowMs };
    if (now > current.resetAt) {
      current.count = 0;
      current.resetAt = now + windowMs;
    }
    current.count += 1;
    buckets.set(key, current);
    if (current.count > max) {
      return res.status(429).json({ message });
    }
    return next();
  };
}

setInterval(() => {
  const now = Date.now();
  for (const [key, value] of buckets.entries()) {
    if (now > value.resetAt) buckets.delete(key);
  }
}, 10 * 60 * 1000).unref();

async function readJson(file, fallback = []) {
  try {
    const raw = await fs.readFile(file, "utf8");
    return JSON.parse(raw || "[]");
  } catch {
    return fallback;
  }
}

async function writeJson(file, data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2), "utf8");
  return data;
}

function safeText(value, maxLength = 500) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function createToken() {
  return jwt.sign({ role: "admin", username: ADMIN_USERNAME }, JWT_SECRET, { expiresIn: "7d" });
}

function requireAdmin(req, res, next) {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!token) return res.status(401).json({ message: "กรุณาเข้าสู่ระบบแอดมิน" });
  try {
    req.admin = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: "เซสชันหมดอายุ กรุณาเข้าสู่ระบบใหม่" });
  }
}

const allowedExt = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const allowedMime = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, uploadsDir),
  filename: (_, file, cb) => {
    const ext = path.extname(file.originalname || "").toLowerCase();
    const safeExt = allowedExt.has(ext) ? ext : ".jpg";
    cb(null, `swt-${Date.now()}-${crypto.randomUUID()}${safeExt}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: MAX_UPLOAD_MB * 1024 * 1024, files: 1 },
  fileFilter: (_, file, cb) => {
    const ext = path.extname(file.originalname || "").toLowerCase();
    const ok = allowedMime.has(file.mimetype) && allowedExt.has(ext);
    cb(ok ? null : new Error("รองรับเฉพาะไฟล์รูปภาพ JPG, PNG, WEBP, GIF"), ok);
  }
});

app.get("/api/health", (_, res) => {
  res.json({
    ok: true,
    service: "sarawut-transport-api",
    environment: NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

app.get("/api/company", (_, res) => res.json(company));
app.get("/api/products", (_, res) => res.json(company.products));
app.get("/api/products/:slug", (req, res) => {
  const product = company.products.find((item) => item.slug === req.params.slug);
  if (!product) return res.status(404).json({ message: "ไม่พบสินค้า/บริการนี้" });
  res.json(product);
});

app.get("/api/uploads", async (_, res) => {
  const uploads = await readJson(uploadsFile, []);
  res.json(uploads);
});

app.post(
  "/api/contact",
  rateLimit({ keyPrefix: "contact", windowMs: CONTACT_LIMIT_WINDOW_MS, max: 20, message: "ส่งข้อมูลถี่เกินไป กรุณารอสักครู่แล้วลองใหม่" }),
  async (req, res) => {
    const name = safeText(req.body?.name, 120);
    const phone = safeText(req.body?.phone, 50);
    const service = safeText(req.body?.service || "ทั่วไป", 120);
    const message = safeText(req.body?.message, 1200);

    if (!name || !phone || !message) {
      return res.status(400).json({ message: "กรุณากรอกชื่อ เบอร์โทร และรายละเอียดงาน" });
    }
    if (phone.length < 8) {
      return res.status(400).json({ message: "กรุณากรอกเบอร์โทรให้ถูกต้อง" });
    }

    const inquiry = {
      id: `INQ-${Date.now()}`,
      name,
      phone,
      service,
      message,
      createdAt: new Date().toISOString()
    };

    const current = await readJson(inquiriesFile, []);
    await writeJson(inquiriesFile, [inquiry, ...current].slice(0, 1000));
    res.status(201).json({ message: "ส่งข้อมูลสำเร็จ ทีมงานจะติดต่อกลับโดยเร็ว", inquiry });
  }
);

app.post(
  "/api/admin/login",
  rateLimit({ keyPrefix: "admin-login", windowMs: ADMIN_LIMIT_WINDOW_MS, max: 15, message: "พยายามเข้าสู่ระบบถี่เกินไป กรุณารอแล้วลองใหม่" }),
  (req, res) => {
    const username = safeText(req.body?.username, 80);
    const password = String(req.body?.password || "");
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return res.status(401).json({ message: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" });
    }
    res.json({ token: createToken(), admin: { username: ADMIN_USERNAME, role: "admin" } });
  }
);

app.get("/api/admin/me", requireAdmin, (req, res) => {
  res.json({ admin: { username: req.admin.username, role: req.admin.role } });
});

app.get("/api/admin/inquiries", requireAdmin, async (_, res) => {
  const inquiries = await readJson(inquiriesFile, []);
  res.json(inquiries);
});

app.delete("/api/admin/inquiries/:id", requireAdmin, async (req, res) => {
  const inquiries = await readJson(inquiriesFile, []);
  const next = inquiries.filter((item) => item.id !== req.params.id);
  await writeJson(inquiriesFile, next);
  res.json({ message: "ลบรายการติดต่อแล้ว" });
});

app.get("/api/admin/uploads", requireAdmin, async (_, res) => {
  const uploads = await readJson(uploadsFile, []);
  res.json(uploads);
});

app.post(
  "/api/admin/uploads",
  requireAdmin,
  rateLimit({ keyPrefix: "admin-upload", windowMs: 60 * 60 * 1000, max: 100, message: "อัปโหลดถี่เกินไป กรุณารอสักครู่" }),
  upload.single("image"),
  async (req, res) => {
    if (!req.file) return res.status(400).json({ message: "กรุณาเลือกรูปภาพ" });
    const uploads = await readJson(uploadsFile, []);
    const item = {
      id: `UP-${Date.now()}`,
      title: safeText(req.body?.title || "รูปหน้างาน", 150),
      category: safeText(req.body?.category || "แกลเลอรี", 80),
      note: safeText(req.body?.note || "", 500),
      filename: req.file.filename,
      url: `/uploads/${req.file.filename}`,
      size: req.file.size,
      mimetype: req.file.mimetype,
      createdAt: new Date().toISOString()
    };
    await writeJson(uploadsFile, [item, ...uploads].slice(0, 1000));
    res.status(201).json({ message: "อัปโหลดรูปสำเร็จ", item });
  }
);

app.delete("/api/admin/uploads/:id", requireAdmin, async (req, res) => {
  const uploads = await readJson(uploadsFile, []);
  const found = uploads.find((item) => item.id === req.params.id);
  if (!found) return res.status(404).json({ message: "ไม่พบรูปภาพ" });
  const next = uploads.filter((item) => item.id !== req.params.id);
  await writeJson(uploadsFile, next);
  if (found.filename && !found.filename.includes("/") && !found.filename.includes("..")) {
    await fs.rm(path.join(uploadsDir, found.filename), { force: true });
  }
  res.json({ message: "ลบรูปภาพแล้ว" });
});

app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    return res.status(400).json({ message: error.code === "LIMIT_FILE_SIZE" ? `ไฟล์ใหญ่เกิน ${MAX_UPLOAD_MB}MB` : error.message });
  }
  if (error?.message?.includes("รองรับเฉพาะ")) {
    return res.status(400).json({ message: error.message });
  }
  return next(error);
});

const clientDist = path.join(__dirname, "..", "client", "dist");
app.use(express.static(clientDist, { maxAge: IS_PRODUCTION ? "1d" : 0 }));
app.get("*", async (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  try {
    await fs.access(path.join(clientDist, "index.html"));
    res.sendFile(path.join(clientDist, "index.html"));
  } catch {
    res.status(200).send("<h1>Sarawut Transport API</h1><p>Run <code>npm run build</code> before production start.</p>");
  }
});

app.use((error, req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: IS_PRODUCTION ? "ระบบขัดข้อง กรุณาลองใหม่" : error.message });
});

const server = app.listen(PORT, () => {
  console.log(`Sarawut Transport API running on port ${PORT}`);
});

function shutdown(signal) {
  console.log(`${signal} received. Closing server...`);
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(1), 10000).unref();
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
