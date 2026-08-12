import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold text-xl mb-4">
                De Pain and Paralysis Clinic
              </h3>
              <p className="text-background/80 text-sm">
                Expert treatment for migraine, PTSD, and neurological conditions
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4" />
                Contact
              </h4>
              <div className="space-y-2 text-background/80 text-sm">
                <p>Phone: 08106550997</p>
                <p>WhatsApp: 08106550997</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </h4>
              <p className="text-background/80 text-sm">
                26, Akin Leigh Crescent off Admiralty Way Lekki Phase 1, Lagos
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/60">
            <p>
              &copy; {new Date().getFullYear()} De Pain and Paralysis Clinic.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
