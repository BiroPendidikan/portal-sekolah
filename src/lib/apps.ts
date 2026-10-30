export type Role = "guru" | "pentadbir" | "admin";

export type AppItem = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  roles: Role[];
  icon: string;
  iconBg: string;
};

export const APPS: AppItem[] = [
  {
    id: "plc",
    name: "e-Panduan PLC PBD",
    description: "Panduan komuniti pembelajaran profesional & pentaksiran bilik darjah.",
    url: "https://e-panduan-plc-pbd.vercel.app/",
    category: "PdP",
    roles: ["guru", "pentadbir"],
    icon: "📘",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    id: "guru-ganti",
    name: "Sistem Guru Ganti",
    description: "Urus jadual guru ganti dan tugas harian.",
    url: "https://biropendidikan.github.io/sistem-guru-ganti/",
    category: "Pengurusan",
    roles: ["pentadbir", "admin"],
    icon: "🔁",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "ai",
    name: "Sekolah AI App",
    description: "Alat bantu AI untuk perancangan PdP dan tugasan guru.",
    url: "https://sekolah-ai-app.vercel.app/",
    category: "AI & PdP",
    roles: ["guru", "pentadbir"],
    icon: "🤖",
    iconBg: "bg-purple-50 text-purple-600",
  },
  {
    id: "bq",
    name: "Sistem BQ Sekolah",
    description: "Pengurusan sebut harga dan dokumen kewangan sekolah.",
    url: "https://sistem-bq-sekolah.vercel.app/login",
    category: "Kewangan",
    roles: ["pentadbir", "admin"],
    icon: "📊",
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    id: "tugasan-sekolah",
    name: "Sistem Tugasan Sekolah",
    description: "Pengurusan dan penyerahan tugasan murid secara dalam talian.",
    url: "https://tugasan-sekolah.juliansimonpeter.workers.dev/",
    category: "PdP",
    roles: ["guru", "pentadbir"],
    icon: "📝",
    iconBg: "bg-rose-50 text-rose-600",
  },
  {
    id: "opr-skrc",
    name: "One Page Report (OPR)",
    description: "Sistem pelaporan ringkas One Page Report untuk SK R.C. Kubong Limbang.",
    // 👇 URL TELAH DIKEMAS KINI DI SINI 👇
    url: "https://belajar.interactivelink.site/OPRSKRCK",
    category: "Pengurusan",
    roles: ["guru", "pentadbir", "admin"],
    icon: "📑",
    iconBg: "bg-indigo-50 text-indigo-600",
  },
];

export const CATEGORIES = ["Semua", ...new Set(APPS.map((a) => a.category))];