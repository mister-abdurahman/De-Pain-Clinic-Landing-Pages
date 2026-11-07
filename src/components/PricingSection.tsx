import { Button } from "@/components/ui/button";
import { CheckCircle2, Info, ArrowRight } from "lucide-react";
import { useBookingModal } from "@/components/booking/BookingModalContext";

const inclusions = [
  "Clinical consultation",
  "Physical assessment and neurological evaluation",
  "30-minute initial Neuroacupuncture treatment",
  "Total appointment duration 60 minutes",
];

const PricingSection = () => {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Pricing
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Transparent Pricing for Your{" "}
              <span className="text-gradient">Recovery</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Clear, upfront pricing so you know exactly what to expect before
              your first visit.
            </p>
          </div>

          {/* Pricing card */}
          <div className="bg-card rounded-2xl p-6 md:p-10 card-shadow">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Price block */}
              <div>
                <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  Initial Appointment
                </div>
                <div className="text-5xl md:text-6xl font-bold tracking-tight mb-2">
                  ₦78,000
                </div>
                <p className="text-muted-foreground text-lg mb-6">
                  One-time initial appointment fee
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Your First Visit. A Comprehensive Clinical Assessment.
                </h3>
                <p className="text-muted-foreground text-base">
                  Your first appointment is designed to help us understand your
                  condition, assess your neurological and physical function, and
                  determine an appropriate treatment direction.
                </p>
              </div>

              {/* Inclusions */}
              <div>
                <h4 className="text-lg font-bold mb-5">
                  What your appointment includes:
                </h4>
                <ul className="space-y-4">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Important information */}
            <div className="mt-10 bg-primary/10 rounded-xl p-5 flex items-start gap-4">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground text-base">
                The ₦78,000 fee covers your initial appointment only. Subsequent
                treatment sessions or structured rehabilitation programmes are
                discussed and priced separately following your clinical
                assessment.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <Button
                size="lg"
                className="hero-gradient text-primary-foreground hover:opacity-90 text-lg px-8 py-6"
                onClick={() => openBookingModal()}
              >
                Book Your Initial Appointment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
