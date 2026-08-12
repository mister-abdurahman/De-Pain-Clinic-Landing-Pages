import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const conditions = [
  "Stroke survivors seeking rehabilitation and recovery",
  "Patients with paralysis or limited mobility",
  "Those suffering from Bell's Palsy or facial paralysis",
  "Individuals with Parkinson's disease symptoms",
  "Children or adults with cerebral palsy",
  "Spinal cord injury patients",
  "Those experiencing cervical myelopathy",
  "Patients with dementia or cognitive decline",
  "Individuals with Down syndrome",
  "Those with cerebellar ataxia or balance issues",
  "Patients with sensory imbalances",
  "Those experiencing speech impairment (aphasia)",
  "People suffering from frozen shoulder, limb, or neck",
  "Individuals dealing with PTSD-related neurological symptoms",
  "Those experiencing tremors, numbness, or tingling",
  "Anyone with chronic pain from neurological conditions",
];

const WhoShouldBookSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Is This For You?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who Should{" "}
                <span className="text-gradient">Book an Appointment</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our specialized neurological treatments are designed for
                patients dealing with a wide range of conditions. If you or a
                loved one is experiencing any of these, we can help.
              </p>

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
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            {/* Conditions list */}
            <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow">
              <ul className="space-y-3">
                {conditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldBookSection;
