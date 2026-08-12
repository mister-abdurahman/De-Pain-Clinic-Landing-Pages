import { Button } from "@/components/ui/button";

const WhoShouldBook = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const conditions = [
    "Experiencing PTSD from bullying, sexual violence, betrayal, rejection, or accidents",
    "Suffering from migraine or chronic headaches with no clear cause",
    "Noticing tremors, numbness, or tingling in hands or feet",
    "Having difficulty sleeping or waking up disoriented",
    "Experiencing memory lapses or mental fog",
    "Dealing with panic attacks or dissociation",
    "Feeling extreme social withdrawal or paranoia",
    "Living with emotional numbness after trauma",
    "Struggling with trust issues or personality changes",
    "Looking for brain-focused, non-pharmaceutical solutions",
  ];

  return (
    <section id="whoShouldBook" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Who Should <span className="text-primary">Book an Appointment</span>
          </h2>

          <p className="text-center text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Our specialized treatments are designed for anyone experiencing
            trauma-related neurological symptoms or chronic pain conditions.
          </p>

          <div className="bg-card rounded-xl p-8 md:p-12 shadow-xl border border-border mb-8">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              You should consider treatment if you're:
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{condition}</span>
                </div>
              ))}
            </div>

            <div className="bg-accent rounded-lg p-6 border border-primary/20">
              <p className="text-foreground/70 text-center">
                <strong className="text-foreground">Remember:</strong> Trauma
                doesn't just leave emotional scars—it rewires your nervous
                system. These aren't problems you should face alone, and they
                don't go away on their own.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-lg"
              onClick={scrollToBooking}
            >
              Get the Help You Deserve
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldBook;
