import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const persianDigits = "۰۱۲۳۴۵۶۷۸۹";

export function parsePrice(value) {
  if (!value) return null;
  const digits = String(value)
    .replace(/[۰-۹]/g, (digit) => String(persianDigits.indexOf(digit)))
    .replace(/[^\d]/g, "");
  if (!digits) return null;
  return Number(digits);
}
