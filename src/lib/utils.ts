import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format an ISO date/string to a user-friendly format.
 * Example: 2025-10-05T14:30:00Z -> Oct 5, 2025 • 2:30 PM
 */
export function formatDate(dateLike: string | number | Date) {
  try {
    const d =
      typeof dateLike === "string" || typeof dateLike === "number"
        ? new Date(dateLike)
        : dateLike;
    if (Number.isNaN(d.getTime())) return "-";

    return d.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch (e) {
    void e;
    return "-";
  }
}
