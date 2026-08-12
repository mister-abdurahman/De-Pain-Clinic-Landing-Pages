import YouTubePlayer from "./YouTubePlayer";

const TestimonialVideoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Video */}
          <YouTubePlayer 
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
            title="Patient Testimonial"
            className="mb-8"
          />

          {/* Caption */}
          <div className="text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              "When you experience emotional trauma from bullying, sexual violence, 
              betrayal, or accidents ,  it doesn't just leave emotional scars. It can 
              lead to neurological disorders that rewire your nervous system. At De Pain 
              and Paralysis Clinic, we use advanced <span className="text-primary font-semibold">neuroacupuncture</span> and{" "}
              <span className="text-primary font-semibold">neurorehabilitation</span> to help you rewire and recover."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideoSection;
