import { Heart, Brain, Sparkles } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="caseStudy" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            From Trauma to <span className="text-primary">Transformation</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-accent p-8 rounded-xl border border-primary/10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      The Challenge
                    </h3>
                    <p className="text-foreground/70">
                      A 14-year-old boy became emotionally numb and mentally
                      withdrawn after severe bullying abroad. He experienced
                      panic episodes, trust issues, and significant personality
                      changes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Our Approach
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      We used targeted neuroacupuncture and manual neurotherapy
                      to help his brain relearn healthy response patterns.
                    </p>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Brain-focused neuroacupuncture sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Manual neurotherapy for trauma release</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>Botanical medicine for nerve inflammation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent p-8 md:p-12 rounded-xl border border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    The Results
                  </h3>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-background/50 backdrop-blur p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3 text-foreground">
                    Within a Few Sessions:
                  </h4>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Panic episodes significantly reduced</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Trust began to rebuild with family and peers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Emotional responsiveness returned</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Personality changes began to fade</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg font-medium text-foreground bg-background/50 backdrop-blur p-6 rounded-lg">
                  "His parents reported seeing their son smile again for the
                  first time in months. The neurological pathways were healing,
                  and so was he."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
