// import { InlineWidget } from "react-calendly";
// import { Button } from "./ui/button";
import React, { useState } from "react";
import { submitLead } from "@/services/leads";

export const Booking = () => {
  // const scrollToBooking = () => {
  //   document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  // };

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const redirectUrl = "https://kindlybook.me/depain_clinic";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }

    if (phone.trim().length < 10 || phone.trim().length > 11) {
      setError("Your phone number must be 11 digits.");
      return;
    }

    if (!/^\d+$/.test(phone.trim())) {
      setError("Your phone number must contain only digits.");
      return;
    }

    try {
      setLoading(true);
      await submitLead({
        full_name: name.trim(),
        phone_number: phone.trim(),
        date: new Date().toISOString(),
        message: message.trim(),
      });

      // if (res) {
      window.location.href = redirectUrl;
      // }
      // on success, redirect to scheduling page
    } catch (e: unknown) {
      setError(
        (e as { error: string }).error ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section id="booking" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Book Your Appointment Today
              </h2>
              <p className="text-lg text-muted-foreground">
                Take the first step towards pain-free living. Schedule your
                consultation now.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => setOpen(true)}
                className="inline-block bg-[#ff1616] text-white px-5 py-3 rounded-full font-medium shadow hover:bg-[#ff1616]/90"
              >
                <span className="text-white">Get Started Here</span>
              </button>
            </div>

            {/* <div className="bg-card rounded-lg shadow-xl overflow-hidden">
            <InlineWidget
              url="https://calendly.com/aramramadan7/30min"
              styles={{
                height: "700px",
                minWidth: "100%",
              }}
            />
          </div> */}

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Prefer to speak with us directly?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/2348106550997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light font-semibold text-lg transition-colors"
                >
                  WhatsApp: 0810 655 0997
                </a>
                <span className="hidden sm:inline text-muted-foreground">
                  |
                </span>
                <a
                  href="tel:+2348106550997"
                  className="text-primary hover:text-primary-light font-semibold text-lg transition-colors"
                >
                  Call: 0810 655 0997
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
        >
          <div className="bg-white rounded-lg max-w-md w-full shadow-lg">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold">Get Started</h3>
                <button
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  ✕
                </button>
              </div>

              <form className="mt-4" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="text-sm text-slate-700">Full name</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your fullname"
                    className="mt-1 text-sm block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-600 focus:ring-red-600 focus:outline focus:outline-red-600 p-2"
                    required
                  />
                </label>

                <label className="block mt-4">
                  <span className="text-sm text-slate-700">Phone number</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="mt-1 text-sm focus:border-red-600 focus:ring-red-600 focus:outline focus:outline-red-600  p-2 block w-full rounded-md  border border-gray-300 shadow-sm"
                    required
                  />
                </label>

                <label className="block mt-4">
                  <span className="text-sm text-slate-700">Message</span>
                  <input
                    type="text"
                    value={message}
                    placeholder="Please, briefly describe the nature of your pain condition"
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 text-sm focus:border-red-600 focus:ring-red-600 focus:outline focus:outline-red-600 p-2 block w-full rounded-md  border border-gray-300 shadow-sm"
                    required
                  />
                </label>

                {error && (
                  <div className="mt-3 text-sm text-red-600">{error}</div>
                )}

                <div className="mt-6 flex items-center justify-end gap-3">
                  {/* <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-md bg-slate-100"
                    disabled={loading}
                  >
                    Cancel
                  </button> */}
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md bg-[#ff1616] text-white font-medium disabled:opacity-60"
                    disabled={loading}
                  >
                    {loading ? "Submitting…" : "Schedule Now"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Modal and form logic added below
