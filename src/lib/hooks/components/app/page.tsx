"use client";

import { useMemo, useState } from "react";
import { APPS, CATEGORIES } from "@/lib/apps";
import { AppCard } from "@/components/AppCard";
import { useFavourites } from "@/hooks/useFavourites";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");
  const { favs, toggle } = useFavourites();

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
    <main className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Portal Sekolah</h1>
        <p className="text-gray-600">Satu tempat untuk semua aplikasi sekolah.</p>
      </header>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari aplikasi…"
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                category === c
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <AppCard
            key={a.id}
            app={a}
            isFav={favs.includes(a.id)}
            onToggleFav={toggle}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-gray-500">
          Tiada aplikasi sepadan dengan carian.
        </p>
      )}

      <footer className="mt-12 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Portal Sekolah · Dibina untuk kegunaan dalaman
      </footer>
    </main>
  );
}