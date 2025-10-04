import React from "react";

type Props = {
  videoUrl: string;
  heading?: string;
  caption?: string;
};

/**
 * TestimonialVideo
 * - Converts a YouTube url (shorts or watch) to an embed url
 * - Renders a responsive iframe with a dark card and caption
 */
export const TestimonialVideo: React.FC<Props> = ({
  videoUrl,
  heading,
  caption,
}) => {
  // Helper: convert various YouTube URLs to an embed URL
  const toEmbedUrl = (url: string) => {
    try {
      const u = new URL(url);
      // shorts: /shorts/<id>
      if (
        u.hostname.includes("youtube.com") &&
        u.pathname.startsWith("/shorts/")
      ) {
        const id = u.pathname.split("/shorts/")[1];
        return `https://www.youtube.com/embed/${id}?rel=0&autoplay=1&mute=1&playsinline=1`;
      }
      // watch?v=...
      if (
        (u.hostname.includes("youtube.com") ||
          u.hostname.includes("www.youtube.com")) &&
        u.searchParams.get("v")
      ) {
        const id = u.searchParams.get("v");
        return `https://www.youtube.com/embed/${id}?rel=0&autoplay=1&mute=1&playsinline=1`;
      }
      // youtu.be short link
      if (u.hostname === "youtu.be") {
        const id = u.pathname.slice(1);
        return `https://www.youtube.com/embed/${id}?rel=0&autoplay=1&mute=1&playsinline=1`;
      }
    } catch (e) {
      void e;
    }

    // Fall back to the raw URL
    return url;
  };

  const embed = toEmbedUrl(videoUrl);

  return (
    <section
      aria-labelledby="testimonial-heading"
      className="py-16 bg-gradient-to-b from-transparent to-black/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h2
            id="testimonial-heading"
            className="text-3xl md:text-4xl font-bold text-center mb-8"
          >
            {heading}
          </h2>
        )}

        <div className="max-w-3xl mx-auto bg-[#ff1717]/70 rounded-xl shadow-xl overflow-hidden">
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              title={heading ?? "testimonial video"}
              src={embed}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              className="absolute inset-0 w-full h-full"
              frameBorder={0}
              allowFullScreen
            />
          </div>

          {caption && (
            <div className="p-4 text-center text-sm text-white/90">
              {caption}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideo;
