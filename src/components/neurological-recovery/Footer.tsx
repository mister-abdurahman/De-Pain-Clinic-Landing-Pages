import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Clinic info */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                De Pain and Paralysis Clinic
              </h3>
              <p className="text-background/70 mb-4">
                Specialized neurological care using advanced neuroacupuncture
                and neurorehabilitation techniques.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/80">
                  26 Akin Leigh Crescent, Off Admiralty Way, Lekki Phase 1,
                  Lagos.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:07078421626"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  07078421626
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@depainclinic.com"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  hello@depainclinic.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/80">
                  Mon - Sat: 9:00 AM - 5:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-background/20 mb-6" />

          {/* Copyright */}
          <div className="text-center text-background/60 text-sm">
            <p>
              © {new Date().getFullYear()} De Pain and Paralysis Clinic. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
