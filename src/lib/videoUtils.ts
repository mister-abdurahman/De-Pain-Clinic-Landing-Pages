/**
 * Extracts the YouTube video ID from various URL formats.
 * Supports:
 * - Normal: https://www.youtube.com/watch?v=dQw4w9WgXcQ
 * - Shortened: https://youtu.be/dQw4w9WgXcQ
 * - Shorts: https://www.youtube.com/shorts/dQw4w9WgXcQ
 * - Direct ID: dQw4w9WgXcQ
 */
export const getYouTubeId = (url: string): string => {
  if (!url) return "";
  
  // If it's already a 11-character ID, return it
  if (url.length === 11 && !url.includes("/") && !url.includes(".")) {
    return url;
  }

  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : "";
};
