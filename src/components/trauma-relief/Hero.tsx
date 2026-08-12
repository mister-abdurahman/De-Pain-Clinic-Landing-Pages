import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  const scrollToBooking = () => {
    document
      .getElementById("ourMethod")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-accent to-background overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmMTYxNiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Beyond Emotional Scars:{" "}
            <span className="text-primary"> Heal the Root </span> Neurological
            Impact of Trauma.
          </h1>

          <p className="text-xl md:text-2xl mb-6 text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Emotional trauma, from betrayal and rejection to accidents or
            violence, doesn't just leave a mental mark. It can{" "}
            <span className="font-semibold"> rewire your nervous system, </span>{" "}
            causing real physical and mental disruption.
          </p>

          <p className="text-sm md:text-base mb-8 text-muted-foreground max-w-2xl mx-auto">
            We specialize in advanced Neuroacupuncture and Neurorehabilitation
            to truly reset your brain and body's response to trauma.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToBooking}
            >
              Stop the Tremors: Book Your Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2"
              asChild
            >
              <a href="tel:08106550997">
                <Phone className="mr-2 h-5 w-5" />
                08106550997
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
