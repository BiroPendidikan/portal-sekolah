"use client";

import { AppItem } from "@/lib/apps";

type Props = {
  app: AppItem;
  isFav: boolean;
  onToggleFav: (id: string) => void;
};

export function AppCard({ app, isFav, onToggleFav }: Props) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
      
      {/* Butang Favourite */}
      <button
        onClick={() => onToggleFav(app.id)}
        className="absolute right-4 top-4 text-xl transition-transform hover:scale-110"
        aria-label="Tanda favourite"
      >
        {isFav ? "⭐" : "☆"}
      </button>

      <div>
        {/* Ikon */}
        <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${app.iconBg}`}>
          {app.icon}
        </div>

        {/* Tajuk & Keterangan */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {app.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          {app.description}
        </p>
      </div>

      <div className="mt-6">
        {/* Tag */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
            {app.category}
          </span>
          {app.roles.map((r) => (
            <span
              key={r}
              className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-500 capitalize"
            >
              {r}
            </span>
          ))}
        </div>

        {/* Butang Buka */}
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
        >
          Buka Aplikasi
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}