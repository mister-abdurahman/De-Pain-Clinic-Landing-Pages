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

    // Detect whether the original input contains a time component.
    // For strings, look for 'T' with time or a time-like pattern. For Date/number, check hours/minutes.
    let hasTime = false;
    if (typeof dateLike === "string") {
      // Common time indicators: 'T' (ISO), or a space followed by HH:MM, or presence of ':'
      hasTime = /T\d{2}:\d{2}|\d{1,2}:\d{2}/.test(dateLike);
    } else if (typeof dateLike === "number") {
      // treat as timestamp -> check if time portion is non-midnight
      hasTime =
        new Date(dateLike).getHours() !== 0 ||
        new Date(dateLike).getMinutes() !== 0;
    } else {
      // Date object
      hasTime = d.getHours() !== 0 || d.getMinutes() !== 0;
    }

    const datePart = d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    if (!hasTime) return datePart;

    const timePart = d.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
    });

    return `${datePart} • ${timePart}`;
  } catch (e) {
    void e;
    return "-";
  }
}
