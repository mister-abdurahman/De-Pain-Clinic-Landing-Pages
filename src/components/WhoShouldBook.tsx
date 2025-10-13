export default function WhoShouldBook() {
  return (
    <section id="whoshouldbook" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center">
              Who Should Book an Appointment?
            </h2>
            <p className="mt-3 text-md text-center  text-muted-foreground">
              Find out if Neuroacupuncture is right for you. At De Pain &
              Paralysis Clinic, our advanced Neuroacupuncture treatment is
              designed for individuals living with chronic pain, nerve injury,
              or mobility challenges — conditions that ordinary therapy often
              fails to resolve.
            </p>
            <p className="mt-3 text-lg text-red-600 text-center font-semibold  text-muted-foreground">
              You should book an appointment if you:
            </p>

            <ul className="mt-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <li className="flex gap-4">
                <span className="bg-red-600 w-4 h-4 mt-1 rounded-full block aspect-square" />
                <div>
                  <h3 className="text-md font-semibold text-foreground">
                    Live With Persistent Neck or Back Pain
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    If you experience cervical or lumbar pain, stiffness, or
                    numbness radiating into your limbs, Neuroacupuncture can
                    relieve nerve compression and restore proper movement.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="bg-red-600 w-4 h-4 mt-1 rounded-full block aspect-square" />
                <div>
                  <h3 className="text-md font-semibold text-foreground">
                    Struggle With Knee or Joint Pain
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    For arthritis, joint degeneration, or post-injury
                    discomfort, this treatment helps rebuild joint function,
                    improve circulation, and reduce inflammation.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="bg-red-600 w-4 h-4 mt-1 rounded-full block aspect-square" />
                <div>
                  <h3 className="text-md font-semibold text-foreground">
                    Experience Nerve Pain, Weakness, or Numbness
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    If you feel tingling, burning, or loss of sensation from
                    conditions like peripheral neuropathy or spinal nerve
                    compression, Neuroacupuncture can help reactivate damaged
                    nerves and restore function.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="bg-red-600 w-4 h-4 mt-1 rounded-full block aspect-square" />
                <div>
                  <h3 className="text-md font-semibold text-foreground">
                    Recovering From Neurological Conditions
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    If you’re recovering from stroke, facial paralysis, or
                    spinal cord injuries, this treatment stimulates motor and
                    sensory brain regions, promoting faster, more coordinated
                    recovery.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="bg-red-600 w-4 h-4 mt-1 rounded-full block aspect-square" />
                <div>
                  <h3 className="text-md font-semibold text-foreground">
                    Suffer From Muscle Tension or Chronic Headaches
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Persistent muscle spasms, tightness, or tension headaches
                    often signal a nerve imbalance. Neuroacupuncture restores
                    harmony between the brain and muscles, easing tension and
                    improving comfort.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="bg-red-600 w-4 h-4 mt-1 rounded-full block aspect-square" />
                <div>
                  <h3 className="text-md font-semibold text-foreground">
                    Tried Other Therapies Without Lasting Results
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    When medications, injections, or even classical acupuncture
                    have failed to provide lasting relief, Neuroacupuncture
                    offers a modern, neuroscience-based approach that treats
                    pain at its source.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <aside className="space-y-6">
            {/* <div className="sticky top-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 shadow-md"> */}
            <div className="mt-4">
              <h4 className="text-lg font-bold text-foreground">
                Take the Step Toward a Pain-Free Life
              </h4>
              <p className="text-muted-foreground">
                If any of these describe you, don’t wait until the pain worsens.
                At De Pain & Paralysis Clinic, we combine precision, science,
                and compassionate care to help your body heal naturally.
              </p>
            </div>
            {/* </div> */}

            <div className="bg-slate-50 rounded-lg p-6 shadow-sm text-center">
              <p className="text-muted-foreground mb-4 font-medium">
                Book your appointment today — and take the first step toward
                lasting relief.
              </p>
              <a
                href="#booking"
                className="inline-block bg-[#ff1616] text-white px-6 py-3 rounded-full font-medium shadow hover:bg-[#ff1616]/90"
              >
                <span className="text-white">Ease the Pain — Book Now</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
