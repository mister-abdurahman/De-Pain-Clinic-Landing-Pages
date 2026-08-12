interface TestimonialVideoProps {
  videoId: string;
  caption: string;
}

const TestimonialVideo = ({ videoId, caption }: TestimonialVideoProps) => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl mb-6">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Patient Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-center text-lg text-foreground/80 italic">
            "{caption}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideo;
