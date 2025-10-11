export default function WhatToExpect() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center font-bold mb-4">
          What to Expect During Your First Appointment (Neuroacupuncture
          Treatment)
        </h1>

        <p className="mb-6 text-muted-foreground text-sm text-center">
          At De Pain & Paralysis Clinic, every Neuroacupuncture session is
          carefully administered to restore your nervous system and relieve pain
          effectively. The following highlights how the process works:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {/* Numbered step cards (rendered first) */}
          <article className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              1. Initial Assessment
            </h3>
            <p className="text-muted-foreground">
              We begin with a detailed consultation to understand your medical
              history, symptoms, and pain pattern. Neurological and
              musculoskeletal evaluations are carried out to identify affected
              nerves, muscles, and functional limitations.
            </p>
          </article>

          <article className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              2. Treatment Planning
            </h3>
            <p className="text-muted-foreground">
              A personalized treatment protocol is created, tailored to your
              specific condition — whether it’s chronic neck pain, lumbar spine
              problems, knee pain, paralysis, or nerve damage. We determine
              which scalp, cranial, and body points will best stimulate your
              nervous system.
            </p>
          </article>

          <article className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              3. Needling
            </h3>
            <p className="text-muted-foreground">
              Very fine, sterile needles are inserted gently and precisely into
              specific points on the scalp and body. On the scalp, we target
              regions corresponding to the motor and sensory cortex to activate
              nerve pathways linked to movement and sensation. On the body,
              points may be selected to improve circulation, reduce
              inflammation, and strengthen muscles.
            </p>
          </article>

          <article className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              4. Neurostimulation
            </h3>
            <p className="text-muted-foreground">
              In some cases, a mild electrical stimulation is applied through
              the needles. This enhances the signals between the brain and
              nerves, helping to “reawaken” dormant nerve cells and accelerate
              repair.
            </p>
          </article>

          <article className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              5. Guided Movements & Monitoring
            </h3>
            <p className="text-muted-foreground">
              During the session, gentle movements of the limbs may be
              encouraged to reinforce brain-body communication. Patients often
              notice immediate changes such as reduced pain, increased strength,
              or improved mobility.
            </p>
          </article>

          <article className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              6. Duration & Frequency
            </h3>
            <p className="text-muted-foreground">
              Each session typically lasts 30–45 minutes. Noticeable
              improvements can be seen after the first few treatments, though
              chronic or long-standing conditions may require a structured
              treatment plan over several weeks.
            </p>
          </article>

          {/* Unnumbered cards appear last in the grid */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="text-2xl font-bold text-foreground mb-2">
              Why It Works
            </h4>
            <p className="text-muted-foreground">
              Neuroacupuncture works by directly influencing the brain and
              nervous system. It stimulates neuroplasticity — the brain’s
              ability to rewire and heal — helping damaged nerves recover and
              reducing chronic pain at its source.
            </p>
            <p className="italic py-2">
              Experience lasting relief from your pain and a restored function
              with Us!
            </p>
            <a
              href="#booking"
              className="inline-block mt-3 bg-[#ff1616] text-white px-5 py-3 rounded-full font-medium shadow hover:bg-[#ff1616]/90"
            >
              <span className="text-white">Book an Appointment</span>
            </a>
          </div>

          {/* <div className="bg-white rounded-lg p-6 shadow-sm">
            <h5 className="text-lg font-semibold text-foreground mb-2">
              What patients notice
            </h5>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Reduced pain and improved comfort</li>
              <li>Increased strength and mobility</li>
              <li>Better functional outcomes over time</li>
            </ul>
          </div> */}

          {/* <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <p className="text-muted-foreground mb-4">
              At De Pain & Paralysis Clinic, every step of your treatment is
              carried out with precision, safety, and care — so you can
              experience lasting relief and restored function.
            </p>
            <a
              href="#booking"
              className="inline-block bg-[#ff1616] text-white px-5 py-3 rounded-full font-medium shadow hover:bg-[#ff1616]/90"
            >
              <span className="text-white">Book an Appointment</span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
