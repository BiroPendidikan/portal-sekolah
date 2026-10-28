"use client";

import { useEffect, useState } from "react";

const KEY = "portal:favourites";

export function useFavourites() {
  const [favs, setFavs] = useState<string[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    if (raw) setFavs(JSON.parse(raw));
  }, []);

  const toggle = (id: string) => {
    setFavs((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  };

  return { favs, toggle };
}