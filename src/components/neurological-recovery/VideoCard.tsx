import YouTubePlayer from "./YouTubePlayer";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  url: string;
  title: string;
  description: string;
  className?: string;
}

const VideoCard = ({ url, title, description, className }: VideoCardProps) => {
  return (
    <div className={cn(
      "group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300",
      className
    )}>
      {/* Video Container */}
      <YouTubePlayer url={url} title={title} className="rounded-none shadow-none" />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
