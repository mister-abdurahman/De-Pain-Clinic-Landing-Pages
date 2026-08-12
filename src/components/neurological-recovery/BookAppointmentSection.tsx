import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar } from "lucide-react";

const BookAppointmentSection = () => {
  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          {/* Main content */}
          <Calendar className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Book Your Appointment Today
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Take the first step towards recovery. Our team of specialists is
            ready to create a personalized treatment plan for your neurological
            condition.
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/2347078421626"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10 py-6 mb-8"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </a>

          {/* Divider */}
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="h-px bg-primary-foreground/30 w-16" />
            <span className="text-sm opacity-80">
              Prefer to speak with us directly?
            </span>
            <div className="h-px bg-primary-foreground/30 w-16" />
          </div>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2347078421626"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/30 rounded-lg px-6 py-3 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">WhatsApp: 07078421626</span>
            </a>
            <a
              href="tel:07078421626"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/30 rounded-lg px-6 py-3 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Call: 07078421626</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentSection;
