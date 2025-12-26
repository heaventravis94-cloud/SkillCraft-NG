import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function clearAppData() {
  localStorage.removeItem('favoriteActivityIds');
  // If there were other app-specific items in localStorage, they would be cleared here too.
  console.log("Application data (favorites) cleared from local storage.");
}