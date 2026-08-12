import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const WhatToExpect = () => {
  const scrollToBooking = () => {
    document
      .getElementById("whoShouldBook")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const steps = [
    {
      title: "Comprehensive Assessment",
      description:
        "We'll discuss your trauma history, current symptoms, and how they're affecting your daily life.",
    },
    {
      title: "Neurological Evaluation",
      description:
        "A detailed examination to understand how trauma has impacted your nervous system and brain function.",
    },
    {
      title: "Personalized Treatment Plan",
      description:
        "Based on your unique needs, we'll create a targeted therapy plan using neuroacupuncture, manual therapy, and botanical medicine.",
    },
    {
      title: "First Treatment Session",
      description:
        "Many patients experience a sense of calm and relief after their very first session.",
    },
  ];

  return (
    <section
      id="whatToExpect"
      className="py-20 bg-gradient-to-br from-accent via-background to-accent"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            What to Expect During Your{" "}
            <span className="text-primary">First Appointment</span>
          </h2>

          <p className="text-center text-xl text-foreground/70 mb-12 max-w-3xl mx-auto">
            Your journey to healing starts with understanding. Here's what
            happens when you visit De Pain and Paralysis Clinic.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 shadow-lg"
              onClick={scrollToBooking}
            >
              Schedule Your First Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
