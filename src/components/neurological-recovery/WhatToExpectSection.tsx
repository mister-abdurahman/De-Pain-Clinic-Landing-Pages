import { Button } from "@/components/ui/button";
import {
  ClipboardCheck,
  UserCheck,
  Stethoscope,
  Calendar,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Initial Assessment",
    description:
      "We begin with a thorough evaluation of your condition, medical history, and treatment goals.",
  },
  {
    icon: UserCheck,
    title: "Personalized Plan",
    description:
      "Your treatment plan is custom-designed based on your specific neurological needs and recovery objectives.",
  },
  {
    icon: Stethoscope,
    title: "Expert Treatment",
    description:
      "Receive neuroacupuncture, manual neurotherapy, and botanical medicine from our specialized team.",
  },
  {
    icon: Calendar,
    title: "Ongoing Support",
    description:
      "We monitor your progress closely and adjust your treatment as you improve and heal.",
  },
];

const WhatToExpectSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Your Journey
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What to Expect During Your{" "}
              <span className="text-gradient">First Appointment</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've designed our process to be thorough yet comfortable,
              ensuring you receive the personalized care you deserve.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 group"
              >
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://wa.me/2347078421626"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="hero-gradient text-primary-foreground hover:opacity-90 text-lg px-8 py-6"
              >
                Schedule Your First Visit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectSection;
