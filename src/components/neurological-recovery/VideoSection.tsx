import YouTubePlayer from "./YouTubePlayer";

interface VideoSectionProps {
  title: string;
  description: string;
  videoUrl: string;
  reverse?: boolean;
}

const VideoSection = ({ title, description, videoUrl, reverse = false }: VideoSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          {/* Video */}
          <div className={`${reverse ? 'md:order-2' : ''}`}>
            <YouTubePlayer url={videoUrl} title={title} />
          </div>

          {/* Content */}
          <div className={`${reverse ? 'md:order-1' : ''}`}>
            <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Patient Success Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
