import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

export const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          // gradient first = overlay on top of image. Use semi-transparent black so image is visible.
          backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.75)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center text-[#ff1616]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Avoid Surgery. Reclaim Your Life.
          </h1>

          <p
            className="text-xl sm:text-2xl mb-4 text-black/95 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Expert Treatment for Pain, Paralysis & Neurological Disorders
          </p>

          <p
            className="text-lg mb-10 text-black/90 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            If Mrs. Fadayiro could avoid surgery and achieve 70% recovery in
            just 5 sessions, so can you.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              variant="default"
              className="bg-[#ff1616] hover:bg-[#ff1616]/90 text-white shadow-lg text-lg px-8 py-6 rounded-full"
              onClick={scrollToBooking}
            >
              Book Your Appointment
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-[#ff1616] text-white hover:bg-white/20 hover:text-primary text-lg px-8 py-6 rounded-full"
              asChild
            >
              <a
                href="https://wa.me/2348106550997"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call/WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
