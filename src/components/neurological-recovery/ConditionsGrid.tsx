import VideoCard from "./VideoCard";

const conditions = [
  {
    id: 1,
    title: "Stroke Recovery",
    description: "Mama picked up a pen and wrote with a steady hand, her speech and strength returning with clarity after just five sessions at our Lekki clinic, a breakthrough her family joyfully celebrated. This integrated approach uses neuroacupuncture and physical therapy to stimulate motor-sensory regions, helping stroke survivors reclaim their independence and functional strength.",
    videoUrl: "https://youtu.be/hJYC9XnLAWY?feature=shared",
  },
  {
    id: 2,
    title: "Cervical Myelopathy",
    description: "He moved with steady, confident steps and newfound leg strength by his sixth session, overcoming five years of crippling weakness that even surgery couldn't fix, a breakthrough moment he traveled from the UK to achieve. \n\nThis treatment utilizes specialized neuroacupuncture to retrain damaged neural pathways, helping the brain and spinal cord reconnect with the body even years after a cervical myelopathy diagnosis.",
    videoUrl: "https://www.youtube.com/watch?v=G0Y5Y6GDaFg",
  },
  {
    id: 3,
    title: "Cerebral Palsy",
    description: "He moved his right hand with newfound control and strength, overcoming 22 years of spasticity and weakness caused by birth-related cerebral palsy, a functional breakthrough he hadn't experienced since early childhood. \n\nOur specialized neuro-rehabilitation targets the neural pathways responsible for muscle spasticity, allowing the brain to regain motor control and functional ability even decades after the initial injury.",
    videoUrl: "https://www.youtube.com/shorts/8_FQnDtFRvw",
  },
  {
    id: 4,
    title: "Stroke Recovery",
    description: "He walked down the stairs to his car without support, stood confidently without falling, and felt an immediate increase in strength and balance within 30mins of neurostimulation,  a moment he joyfully celebrated. This session served as a diagnostic response test, helping determine his suitability for our advanced stroke recovery protocols.",
    videoUrl: "https://www.youtube.com/shorts/pDEgGHFKYt0",
  }
];

const ConditionsGrid = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Our Specializations
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Conditions We <span className="text-gradient">Successfully Treat</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch real patient testimonials and learn about our treatment approaches 
            for various neurological conditions.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {conditions.map((condition) => (
            <VideoCard
              key={condition.id}
              url={condition.videoUrl}
              title={condition.title}
              description={condition.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsGrid;
