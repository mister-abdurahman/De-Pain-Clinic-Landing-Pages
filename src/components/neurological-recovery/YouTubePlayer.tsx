import { getYouTubeId } from "@/lib/videoUtils";
import { cn } from "@/lib/utils";

interface YouTubePlayerProps {
  url: string;
  title?: string;
  className?: string;
}

const YouTubePlayer = ({ url, title = "YouTube Video", className }: YouTubePlayerProps) => {
  const videoId = getYouTubeId(url);

  if (!videoId) {
    return (
      <div className={cn("aspect-video bg-secondary flex items-center justify-center rounded-2xl", className)}>
        <p className="text-muted-foreground">Invalid Video URL</p>
      </div>
    );
  }

  return (
    <div className={cn("relative aspect-video rounded-2xl overflow-hidden card-shadow bg-secondary", className)}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
};

export default YouTubePlayer;
