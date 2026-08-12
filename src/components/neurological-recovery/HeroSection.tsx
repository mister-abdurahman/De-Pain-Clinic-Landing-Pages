import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import '@/neurological.css';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-secondary via-background to-accent overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
            <span className="text-sm font-medium text-foreground">
              Lekki, Lagos • Advanced Neurological Care
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Expert Treatment for{" "}
            <span className="text-gradient">Neurological Conditions</span> &
            Pain Relief
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Specialized care for stroke recovery, paralysis, spinal cord
            injuries, Parkinson's disease, cerebral palsy, and more. Using
            advanced neuroacupuncture and neurorehabilitation techniques.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="tel:07078421626" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full hero-gradient text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </a>
            <a
              href="https://wa.me/2347078421626"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <p
            className="text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            📞 Call or WhatsApp:{" "}
            <span className="font-semibold text-foreground">07078421626</span> •
            Trusted by hundreds of patients across Nigeria
          </p>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
