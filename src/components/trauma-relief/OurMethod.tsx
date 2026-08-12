import React from "react";
import { Brain, Shield, Leaf, Heart } from "lucide-react"; // Recommended: Using Lucide Icons for simplicity

const ConversionBridgeSection = () => {
  // Define the specialized services with icons
  const services = [
    {
      icon: Brain,
      title: "Advanced Neuroacupuncture",
      description:
        "Precisely stimulates brain regions to restore balance and harmony in your neurological system.",
    },
    {
      icon: Shield,
      title: "Manual Neurotherapy",
      description:
        "Gently guides your brain to re-pattern and relearn healthy, non-trauma response patterns.",
    },
    {
      icon: Leaf,
      title: "Botanical Medicine",
      description:
        "Targeted, natural support to calm stress, soften trauma memory imprints, and reduce nerve inflammation.",
    },
    {
      icon: Heart,
      title: "Mind-Body Strategies",
      description:
        "Effective techniques for deep trauma release and long-term resilience building.",
    },
  ];

  return (
    <section id="ourMethod" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Problem Validation Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Your Symptoms Aren't Just Mental. They're{" "}
            <span className="text-primary">Neurological.</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            If you're noticing any of the following, your nervous system is
            signaling a deeper imbalance that requires specialized care:
          </p>
        </div>

        {/* Symptom List - Highly Mobile-Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {/* Symptom Group 1 */}
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-2 text-red-500 font-bold">
                •
              </span>
              <span>
                Physical Disruptions: Unexplained tremors, numbness, or tingling
                in your limbs.
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-2 text-red-500 font-bold">
                •
              </span>
              <span>
                Sleep & Cognition: Persistent difficulty sleeping or
                debilitating memory lapses and mental fog.
              </span>
            </li>
          </ul>
          {/* Symptom Group 2 */}
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-2 text-red-500 font-bold">
                •
              </span>
              <span>
                Overwhelm: Sudden, severe panic attacks or a feeling of
                dissociation.
              </span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-2 text-red-500 font-bold">
                •
              </span>
              <span>
                Isolation: Extreme social withdrawal or heightened paranoia.
              </span>
            </li>
          </ul>
        </div>

        <p className="text-center text-xl text-gray-800 italic mb-12">
          These signs indicate your trauma has rewired your brain's circuits.
          They won't fade on their own—
          <span className="font-semibold">it’s time to address the root.</span>
        </p>

        {/* --- Solution/Service Section --- */}
        <div className="bg-accent p-8 rounded-xl border border-primary/10">
          <h3 className="text-center text-3xl font-bold mb-10">
            Rewire, Restore, & Recover: How We Get to the Root
          </h3>
          <p className="text-center text-lg max-w-3xl mx-auto mb-12">
            At De Pain and Paralysis Clinic, we use targeted, brain-focused
            therapies to gently calm the over-fired circuits and help your
            nervous system relearn safety.
          </p>

          {/* Service Grid - Adapts from 1 to 2 columns on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-black mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <a
              href="#caseStudy" // Replace with your actual booking link
              className="inline-block px-12 py-4 text-lg font-bold text-white bg-primary rounded-full shadow-lg hover:bg-primary/90 transition duration-300 transform hover:scale-105"
            >
              Explore Our Specialized Recovery Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionBridgeSection;
