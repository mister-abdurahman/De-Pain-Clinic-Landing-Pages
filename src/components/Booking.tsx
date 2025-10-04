import { InlineWidget } from "react-calendly";

export const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Book Your Appointment Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Take the first step towards pain-free living. Schedule your
              consultation now.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-xl overflow-hidden">
            <InlineWidget
              url="https://calendly.com/aramramadan7/30min"
              styles={{
                height: "700px",
                minWidth: "100%",
              }}
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Prefer to speak with us directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/2348106550997"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light font-semibold text-lg transition-colors"
              >
                WhatsApp: 0810 655 0997
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <a
                href="tel:+2348106550997"
                className="text-primary hover:text-primary-light font-semibold text-lg transition-colors"
              >
                Call: 0810 655 0997
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
