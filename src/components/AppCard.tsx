"use client";

import { AppItem } from "@/lib/apps";

type Props = {
  app: AppItem;
  isFav: boolean;
  onToggleFav: (id: string) => void;
};

export function AppCard({ app, isFav, onToggleFav }: Props) {
  return (
    <div
      className={`relative rounded-2xl border-2 p-5 transition-all ${app.color}`}
    >
      <button
        onClick={() => onToggleFav(app.id)}
        className="absolute right-3 top-3 text-xl"
        aria-label="Tanda favourite"
      >
        {isFav ? "⭐" : "☆"}
      </button>

      <div className="text-3xl">{app.icon}</div>
      <h3 className="mt-2 text-lg font-semibold text-gray-800">{app.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{app.description}</p>

      <div className="mt-3 flex flex-wrap gap-1">
        <span className="rounded-full bg-white/70 px-2 py-0.5 text-xs text-gray-700">
          {app.category}
        </span>
        {app.roles.map((r) => (
          <span
            key={r}
            className="rounded-full bg-gray-800/10 px-2 py-0.5 text-xs text-gray-700"
          >
            {r}
          </span>
        ))}
      </div>

      <a
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
      >
        Buka aplikasi →
      </a>
    </div>
  );
}