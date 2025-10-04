import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Heart, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Avoid Surgery",
    description:
      "Non-invasive treatment that addresses root causes without the risks and recovery time of surgery.",
  },
  {
    icon: Zap,
    title: "Fast Results",
    description:
      "Experience relief after your first session. Most patients report significant improvement within 5 visits.",
  },
  {
    icon: Heart,
    title: "Proven Success",
    description:
      "Specialized Neuroacupuncture targeting nerve pathways for lasting pain relief and mobility restoration.",
  },
  {
    icon: TrendingUp,
    title: "Long-term Recovery",
    description:
      "Address the underlying neurological issues for sustained improvement, not just temporary relief.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Why Choose Neuroacupuncture?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven, non-invasive approach to treating chronic pain and
            neurological disorders
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
