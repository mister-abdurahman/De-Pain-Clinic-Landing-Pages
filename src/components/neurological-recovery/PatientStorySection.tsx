import { Button } from "@/components/ui/button";
import { Quote, ArrowRight, Clock, CheckCircle } from "lucide-react";
import YouTubePlayer from "./YouTubePlayer";

const PatientStorySection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Real Patient Journey
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              5 Years of Struggle,{" "}
              <span className="text-gradient">10 Days to Hope</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A powerful testimony of recovery from Bell's Palsy (Facial
              Paralysis)
            </p>
          </div>

          {/* Story grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Video testimonial */}
            <div className="relative">
              <YouTubePlayer
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                title="Bell's Palsy Recovery Testimonial"
                className="bg-foreground/5"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-lg px-4 py-2 font-semibold shadow-lg z-10">
                Watch Full Story
              </div>
            </div>

            {/* Story content */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 card-shadow">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  "For over 5 years, my loved one struggled with Bell's Palsy.
                  We tried everything , countless treatments, specialists,
                  therapies , but nothing worked. We had almost given up
                  hope..."
                </p>
                <p className="text-sm text-muted-foreground">
                  , Patient's Caregiver
                </p>
              </div>

              {/* Timeline */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-5 card-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Before</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    5+ years of unsuccessful treatments and growing despair
                  </p>
                </div>
                <div className="bg-card rounded-xl p-5 card-shadow border-2 border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-semibold">After</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Visible improvements within just 10 days of treatment
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/2347078421626"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full hero-gradient text-primary-foreground hover:opacity-90 py-6 text-lg">
                  Start Your Recovery Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientStorySection;
