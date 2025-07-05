import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ViewedRose = {
  id: string;
  title: string;
  image: string;
  price: string;
  rating: number;
  link: string;
};

const STORAGE_KEY = "viewedRoses";

export const saveViewedRose = (rose: ViewedRose) => {
  const stored = localStorage.getItem(STORAGE_KEY);
  let roses: ViewedRose[] = stored ? JSON.parse(stored) : [];

  // Видалити вже наявну, якщо така є
  roses = roses.filter((r) => r.id !== rose.id);

  // Додати в початок списку
  roses.unshift(rose);

  // Обмежити кількість, наприклад 10
  if (roses.length > 10) {
    roses = roses.slice(0, 10);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(roses));
};

export const getViewedRoses = (): ViewedRose[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};
