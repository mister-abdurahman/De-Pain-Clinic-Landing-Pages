"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Calendar, CheckCircle2, ChevronDown, Loader2, X } from "lucide-react";
import { useBookingModal } from "./BookingModalContext";

// const SERVICE_OPTIONS = [
//   "General Consultation",
//   "Neuroacupuncture",
//   "Neurorehabilitation",
//   "Physical Therapy",
//   "Exercise Therapy",
//   "Lifestyle Management",
//   "Therapeutic Massage",
//   "Electrostimulation",
//   "Diet & Nutrition",
// ];

const URGENCY_OPTIONS = ["High", "Medium", "Low"];

const WHO_FOR_OPTIONS = ["For Self", "For Family", "For Relative"];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  state: "",
  country: "",
  service: "",
  whoFor: "",
  complaint: "",
  urgency: "",
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/30";

const labelClasses = "mb-2 block text-sm font-medium text-gray-900";

export const BookingModal = () => {
  const { defaultService, closeBookingModal } = useBookingModal();
  const [form, setForm] = useState({ ...initialForm, service: defaultService });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const focusTimer = window.setTimeout(
      () => nameInputRef.current?.focus(),
      50,
    );

    return () => window.clearTimeout(focusTimer);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBookingModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeBookingModal]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/appointments@depainclinic.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: form.name,
            Email: form.email,
            Phone: form.phone,
            State: form.state,
            Country: form.country,
            Service: form.service,
            "Who is it for?": form.whoFor,
            Complaint: form.complaint,
            Urgency: form.urgency,
            _subject: "New Appointment Request - De Pain & Paralysis Clinic",
            _template: "table",
            _captcha: "false",
            _honey: "",
          }),
        },
      );

      const data = await response.json().catch(() => null);

      if (response.ok && data && String(data.success) === "true") {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeBookingModal}
      />

      {/* Panel */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={closeBookingModal}
          aria-label="Close booking form"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          <X className="h-4 w-4" />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center py-10 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fff0f0]">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h2
              id="booking-modal-title"
              className="mt-6 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl"
            >
              Request Received
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600 sm:text-base">
              Thank you, {form.name.split(" ")[0] || "there"}. Our team will
              contact you shortly to confirm your appointment and prepare your
              invoice.
            </p>
            <button
              type="button"
              onClick={closeBookingModal}
              className="mt-8 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary/80"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="pr-10">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
                Book Appointment
              </span>
              <h2
                id="booking-modal-title"
                className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl"
              >
                Book Your Assessment
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Fill in your details and our team will reach out to confirm your
                appointment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="booking-name" className={labelClasses}>
                    Full name
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    id="booking-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClasses}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="booking-email" className={labelClasses}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="booking-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClasses}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="booking-phone" className={labelClasses}>
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="booking-phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 000 000 0000"
                    className={inputClasses}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="booking-state" className={labelClasses}>
                    State
                  </label>
                  <input
                    type="text"
                    id="booking-state"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    placeholder="Your state"
                    className={inputClasses}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="booking-country" className={labelClasses}>
                    Country
                  </label>
                  <input
                    type="text"
                    id="booking-country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Your country"
                    className={inputClasses}
                    required
                  />
                </div>
              </div>

              {/* <div>
                <label htmlFor="booking-service" className={labelClasses}>
                  Service
                </label>
                <div className="relative">
                  <select
                    id="booking-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none pr-10 ${
                      form.service ? "" : "text-gray-400"
                    }`}
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div> */}

              <div>
                <label htmlFor="booking-who-for" className={labelClasses}>
                  Who is it for?
                </label>
                <div className="relative">
                  <select
                    id="booking-who-for"
                    name="whoFor"
                    value={form.whoFor}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none pr-10 ${
                      form.whoFor ? "" : "text-gray-400"
                    }`}
                    required
                  >
                    <option value="" disabled>
                      Select who this is for
                    </option>
                    {WHO_FOR_OPTIONS.map((whoFor) => (
                      <option key={whoFor} value={whoFor}>
                        {whoFor}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div>
                <label htmlFor="booking-complaint" className={labelClasses}>
                  Complaint
                </label>
                <textarea
                  id="booking-complaint"
                  name="complaint"
                  value={form.complaint}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Briefly describe your condition or symptoms"
                  className={`${inputClasses} resize-none`}
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="booking-urgency" className={labelClasses}>
                  Urgency
                </label>
                <div className="relative">
                  <select
                    id="booking-urgency"
                    name="urgency"
                    value={form.urgency}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none pr-10 ${
                      form.urgency ? "" : "text-gray-400"
                    }`}
                    required
                  >
                    <option value="" disabled>
                      Select urgency level
                    </option>
                    {URGENCY_OPTIONS.map((urgency) => (
                      <option key={urgency} value={urgency}>
                        {urgency}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {status === "error" && (
                <div className="rounded-xl border border-primary/20 bg-[#fff0f0] px-4 py-3 text-sm text-primary">
                  We couldn&apos;t send your request right now. Please try again
                  or call us on{" "}
                  <a
                    href="tel:+2347078421626"
                    className="font-semibold underline"
                  >
                    +234 707 842 1626
                  </a>
                  .
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-primary/80 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="h-5 w-5" />
                    <span>Request Appointment</span>
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
