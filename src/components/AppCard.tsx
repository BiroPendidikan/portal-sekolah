"use client";

import { AppItem } from "@/lib/apps";

type Props = {
  app: AppItem;
  isFav: boolean;
  onToggleFav: (id: string) => void;
};

export function AppCard({ app, isFav, onToggleFav }: Props) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5">
      
      <button
        onClick={() => onToggleFav(app.id)}
        className="absolute right-5 top-5 text-xl transition-transform hover:scale-125"
      >
        {isFav ? "⭐" : "☆"}
      </button>

      <div>
        <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl shadow-sm ${app.iconBg}`}>
          {app.icon}
        </div>

        <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-700">
          {app.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">
          {app.description}
        </p>
      </div>

      <div className="mt-6">
        <div className="mb-5 flex flex-wrap gap-2">
          <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
            {app.category}
          </span>
          {app.roles.map((r) => (
            <span key={r} className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-500 capitalize">
              {r}
            </span>
          ))}
        </div>

        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-between rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600"
        >
          Buka Aplikasi
          <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}