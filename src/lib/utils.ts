import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// import { saveViewedRose } from "@/lib/utils";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ViewedRose = {
  id: string;
  name: string;
  img: string;
};

export function getViewedRoses(): ViewedRose[] {
  const data = localStorage.getItem("viewedRoses");
  if (!data) return [];
  try {
    return JSON.parse(data) as ViewedRose[];
  } catch {
    return [];
  }
}

export function saveViewedRose(rose: ViewedRose) {
  const data = localStorage.getItem("viewedRoses");
  let viewed: ViewedRose[] = [];
  if (data) {
    try {
      viewed = JSON.parse(data) as ViewedRose[];
    } catch {
      viewed = [];
    }
  }
  // Додаємо нову троянду, якщо її ще немає
  if (!viewed.find((r) => r.id === rose.id)) {
    viewed.push(rose);
    localStorage.setItem("viewedRoses", JSON.stringify(viewed));
  }
}
