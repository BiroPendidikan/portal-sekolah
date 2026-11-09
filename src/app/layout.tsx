import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Portal SK R.C. Kubong Limbang",
  description: "Hab aplikasi sekolah",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <body className={`${jakarta.className} min-h-screen bg-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}