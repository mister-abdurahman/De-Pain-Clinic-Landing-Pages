import { Hero } from "@/components/Hero";
import { CaseStudy } from "@/components/CaseStudy";
// import { Benefits } from "@/components/Benefits";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import TestimonialVideo from "@/components/TestimonialVideo";
import WhatToExpect from "@/components/WhatToExpect";
import WhoShouldBook from "@/components/WhoShouldBook";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <TestimonialVideo
        videoUrl={"https://youtube.com/shorts/J4xyVpVpvFU?feature=share"}
        heading={"Happy Patient Testimonial"}
        caption={
          "Short testimonial: See how our treatment helped this patient regain mobility."
        }
        id_name="first_video"
      />
      <CaseStudy />
      {/* <Benefits /> */}
      <WhatToExpect />
      <WhoShouldBook />
      <Booking />
      <TestimonialVideo
        videoUrl={"https://youtube.com/shorts/U2MZoxDx6Jk?feature=share"}
        heading={"Mrs Shipeolu shares her story"}
        caption={
          "Short testimonial: Our treatment helped this patient battling lumbar spondylosis regain mobility."
        }
        id_name="second_video"
      />
      <Footer />
    </main>
  );
};

export default Index;
