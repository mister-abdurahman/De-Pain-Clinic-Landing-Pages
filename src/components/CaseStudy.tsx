import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const CaseStudy = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
              Real Results, Real Recovery
            </h2>
            <p className="text-lg text-muted-foreground">
              How Mrs. Lolade Fadayiro avoided surgery and reclaimed her life
            </p>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8 sm:p-12">
              <div className="space-y-6">
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    The Challenge
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Mrs. Fadayiro returned from the UK with severe cervical
                    spondylosis affecting C4–C6 levels. With a history of
                    thoracocervical surgery seven years prior, she could barely
                    turn her neck or lift her right arm. The nerve pain had
                    affected her entire right side, and she arrived wearing a
                    neck collar—already scheduled for another surgery.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-foreground flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      After First Session
                    </h4>
                    <p className="text-foreground/80">
                      Immediate significant relief with improved neck rotation
                      and arm mobility after just 30 minutes of diagnostic
                      Neuroacupuncture.
                    </p>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-foreground flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      After 5 Sessions
                    </h4>
                    <p className="text-foreground/80">
                      Over 70% recovery achieved. Nerve pain completely
                      resolved, leaving only mild localized discomfort. Surgery
                      cancelled.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-8 rounded-lg text-center border border-accent/20">
                  <p className="text-xl font-semibold text-foreground mb-2">
                    "Today, she is living well—without the need for another
                    surgical procedure."
                  </p>
                  <p className="text-muted-foreground italic">
                    From unable to move freely to 70% recovery in just 5
                    sessions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
