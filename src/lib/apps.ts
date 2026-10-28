export type Role = "guru" | "pentadbir" | "admin";

export type AppItem = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  roles: Role[];
  icon: string;
  color: string;
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
    color: "bg-blue-50 border-blue-200 hover:border-blue-400",
  },
  {
    id: "guru-ganti",
    name: "Sistem Guru Ganti",
    description: "Urus jadual guru ganti dan tugas harian.",
    url: "https://biropendidikan.github.io/sistem-guru-ganti/",
    category: "Pengurusan",
    roles: ["pentadbir", "admin"],
    icon: "🔁",
    color: "bg-green-50 border-green-200 hover:border-green-400",
  },
  {
    id: "ai",
    name: "Sekolah AI App",
    description: "Alat bantu AI untuk perancangan PdP dan tugasan guru.",
    url: "https://sekolah-ai-app.vercel.app/",
    category: "AI & PdP",
    roles: ["guru", "pentadbir"],
    icon: "🤖",
    color: "bg-purple-50 border-purple-200 hover:border-purple-400",
  },
  {
    id: "bq",
    name: "Sistem BQ Sekolah",
    description: "Pengurusan sebut harga dan dokumen kewangan sekolah.",
    url: "https://sistem-bq-sekolah.vercel.app/login",
    category: "Kewangan",
    roles: ["pentadbir", "admin"],
    icon: "📊",
    color: "bg-amber-50 border-amber-200 hover:border-amber-400",
  },
];

export const CATEGORIES = ["Semua", ...new Set(APPS.map((a) => a.category))];