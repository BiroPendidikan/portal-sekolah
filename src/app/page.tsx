"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
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
      const matchQ = !q || a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  return (
    <div className="flex h-screen flex-col bg-slate-50 md:flex-row overflow-hidden">
      
      {/* SIDEBAR (KIRI) */}
      <aside className="flex w-full flex-col border-b border-slate-200 bg-white md:h-screen md:w-72 md:border-b-0 md:border-r shrink-0">
        {/* Logo & Nama Sekolah */}
        <div className="flex items-center gap-3 p-6 border-b border-slate-100">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
            <Image src="/logo-sk.png" alt="Logo" width={48} height={48} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold leading-tight text-slate-900">SK R.C. KUBONG</span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Limbang</span>
          </div>
        </div>

        {/* Menu Kategori */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <p className="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-slate-400">Kategori</p>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`flex w-full items-center rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                category === c
                  ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-slate-100">
           <p className="text-xs text-center text-slate-400 font-medium">Sistem Dalaman</p>
        </div>
      </aside>

      {/* KANDUNGAN UTAMA (KANAN) */}
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-5xl p-6 md:p-10">
          
          {/* Header & Search */}
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Portal Aplikasi
              </h1>
              <p className="mt-1 text-sm font-medium text-slate-500">
                Akses semua sistem sekolah anda di satu tempat.
              </p>
            </div>

            {/* Kotak Carian */}
            <div className="relative w-full max-w-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari aplikasi..."
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm font-medium text-slate-900 shadow-sm outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          {/* Grid Aplikasi */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <AppCard key={a.id} app={a} isFav={favs.includes(a.id)} onToggleFav={toggle} />
            ))}
          </div>

          {/* Tiada Hasil */}
          {filtered.length === 0 && (
            <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl">🔍</div>
              <h3 className="text-lg font-bold text-slate-900">Tiada aplikasi dijumpai</h3>
              <p className="mt-1 text-sm text-slate-500">Cuba gunakan kata kunci carian yang lain.</p>
              <button 
                onClick={() => { setQuery(""); setCategory("Semua"); }}
                className="mt-6 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Kosongkan Carian
              </button>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-16 border-t border-slate-200 pt-6 text-center text-xs font-medium text-slate-400">
            {currentYear !== null && `© ${currentYear} `}SK R.C. Kubong Limbang. Hak Cipta Terpelihara.
          </footer>
        </div>
      </main>
    </div>
  );
}