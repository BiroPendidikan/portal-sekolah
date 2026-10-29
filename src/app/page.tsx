"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image"; // 👈 IMPORT IMAGE DITAMBAH
import { APPS, CATEGORIES } from "@/lib/apps";
import { AppCard } from "@/components/AppCard";
import { useFavourites } from "@/hooks/useFavourites";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const { favs, toggle } = useFavourites();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const filtered = useMemo(() => {
    return APPS.filter((a) => {
      const matchCat = category === "Semua" || a.category === category;
      const q = query.toLowerCase();
      const matchQ =
        !q ||
        a.name.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar Korporat dengan Logo */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            
            {/* Logo Sekolah */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-slate-100 bg-white p-1 shadow-sm">
              <Image
                src="/logo-sk.png"
                alt="Logo SK R.C. Kubong Limbang"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            {/* Teks Nama Sekolah */}
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight tracking-tight text-slate-900">
                SK R.C. Kubong Limbang
              </span>
              <span className="text-xs font-medium text-slate-500">
                Portal Aplikasi Sekolah
              </span>
            </div>
          </div>

          <div className="hidden text-sm font-medium text-slate-500 sm:block">
            Sistem Dalaman
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Hero Section */}
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Hab Aplikasi Sekolah
          </h1>
          <p className="mt-2 text-base text-slate-500">
            Akses semua sistem pengurusan dan alat bantu PdP anda di satu tempat.
          </p>
        </div>

        {/* Bar Carian & Penapis */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Input Carian */}
          <div className="relative w-full max-w-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari aplikasi..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Penapis Kategori */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  category === c
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Aplikasi */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <AppCard
              key={a.id}
              app={a}
              isFav={favs.includes(a.id)}
              onToggleFav={toggle}
            />
          ))}
        </div>

        {/* Paparan Tiada Hasil */}
        {filtered.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <p className="text-slate-500">Tiada aplikasi sepadan dengan carian anda.</p>
            <button 
              onClick={() => { setQuery(""); setCategory("Semua"); }}
              className="mt-4 text-sm font-medium text-blue-600 hover:underline"
            >
              Kosongkan carian
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
          {currentYear !== null && `© ${currentYear} `}SK R.C. Kubong Limbang · Dibina untuk kegunaan dalaman
        </footer>
      </main>
    </div>
  );
}