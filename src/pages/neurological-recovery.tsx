import HeroSection from "@/components/neurological-recovery/HeroSection";
// import TestimonialVideoSection from "@/components/neurological-recovery/TestimonialVideoSection";
// import PatientStorySection from "@/components/neurological-recovery/PatientStorySection";
import ConditionsGrid from "@/components/neurological-recovery/ConditionsGrid";
import WhatToExpectSection from "@/components/neurological-recovery/WhatToExpectSection";
import WhoShouldBookSection from "@/components/neurological-recovery/WhoShouldBookSection";
import BookAppointmentSection from "@/components/neurological-recovery/BookAppointmentSection";
import Footer from "@/components/neurological-recovery/Footer";
import '@/neurological.css';

const NeurologicalRecovery = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <TestimonialVideoSection /> */}
      {/* <PatientStorySection /> */}
      <ConditionsGrid />
      <WhatToExpectSection />
      <WhoShouldBookSection />
      <BookAppointmentSection />
      <Footer />
    </main>
  );
};

export default NeurologicalRecovery;
