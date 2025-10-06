import { Phone, Mail, MapIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Pain, Paralysis & Neurological Disorder Treatment
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Expert Neuroacupuncture therapy helping patients avoid surgery
                and reclaim their lives.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a
                  href="tel:+2348106550997"
                  className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  0810 655 0997
                </a>
                <a
                  href="https://wa.me/2348106550997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  WhatsApp: 0810 655 0997
                </a>
                <div className="flex items-center text-primary-foreground/80">
                  <Mail className="h-5 w-5 mr-2" />
                  Send us a DM for inquiries
                </div>
                <div className="flex items-center text-primary-foreground/80">
                  <MapIcon className="h-5 w-5 mr-2" />
                  26, Akin Leigh Crescent off Admiralty Way Lekki Phase 1, Lagos
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 text-center">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} De Pain & Paralysis Clinic. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
