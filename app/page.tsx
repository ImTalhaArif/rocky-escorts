export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-[var(--font-playfair)] leading-tight">
            Premium Escorts & Elite Companionship
            <span className="block text-amber-400 mt-3">
              In Karachi, Pakistan
            </span>
          </h1>

          <p className="mt-6 text-neutral-300 text-lg">
            Discover verified, discreet, and high-class escort services in Karachi.
            Our platform connects you with elite companions offering refined,
            private, and unforgettable experiences.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/companions"
              className="px-8 py-4 rounded-full bg-amber-400 text-neutral-900 font-semibold hover:bg-amber-300"
            >
              View Companions
            </a>
            <a
              href="#privacy"
              className="px-8 py-4 rounded-full border border-neutral-700 hover:border-neutral-500"
            >
              Our Discretion
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section id="privacy" className="py-20 bg-neutral-950/40">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          {[
            "100% Confidential Escort Services",
            "Verified & Screened Profiles",
            "Discreet Locations Across Karachi",
            "Luxury Companionship Experience",
          ].map(t => (
            <div
              key={t}
              className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800"
            >
              <p className="font-medium">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl font-[var(--font-playfair)]">
            High-Class Escort Services in Karachi
          </h2>

          <p className="text-neutral-300 leading-relaxed">
            We provide premium escort services in Karachi for clients seeking
            elegance, discretion, and professionalism. Every companion featured
            on our platform is carefully verified to ensure authenticity,
            privacy, and a refined experience. Whether you are visiting Karachi
            or reside locally, our services are designed to meet the highest
            standards of companionship.
          </p>

          <h3 className="text-2xl font-[var(--font-playfair)]">
            Why Choose Our Karachi Escort Agency?
          </h3>

          <p className="text-neutral-300 leading-relaxed">
            Unlike ordinary escort listings, we focus on quality over quantity.
            Our companions are selected based on appearance, communication,
            etiquette, and discretion. Clients across Karachi trust us for safe,
            confidential, and premium escort arrangements tailored to individual
            preferences.
          </p>

          <h3 className="text-2xl font-[var(--font-playfair)]">
            Discreet & Private Escort Bookings
          </h3>

          <p className="text-neutral-300 leading-relaxed">
            Privacy is our highest priority. All bookings are handled securely,
            ensuring complete confidentiality. Whether you prefer hotel visits
            or private locations, our Karachi escort services guarantee
            discretion at every step.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-24 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-[var(--font-playfair)] text-center">
            Featured Escorts in Karachi
          </h2>

          <p className="mt-4 text-center text-neutral-400 max-w-3xl mx-auto">
            Explore some of our most popular and highly requested companions,
            available across Karachi for premium escort experiences.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800"
              >
                <img
                  src={`/model${i}.jpg`}
                  alt={`Elite Karachi Escort ${i}`}
                  className="h-80 w-full object-cover hover:scale-105 transition"
                />
                <div className="p-5">
                  <p className="font-medium">Elite Companion</p>
                  <p className="text-sm text-neutral-400">
                    Karachi • Verified Profile
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/companions"
              className="inline-block px-8 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700"
            >
              View All Escorts in Karachi
            </a>
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-[var(--font-playfair)]">
            Frequently Asked Questions
          </h2>

          <div>
            <h3 className="font-medium text-lg">
              Are your Karachi escorts verified?
            </h3>
            <p className="text-neutral-400 mt-2">
              Yes. Every companion is screened and verified to ensure safety,
              authenticity, and professionalism.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">
              Is my privacy guaranteed?
            </h3>
            <p className="text-neutral-400 mt-2">
              Absolutely. All bookings and conversations are handled with strict
              confidentiality.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">
              Do you offer escort services across Karachi?
            </h3>
            <p className="text-neutral-400 mt-2">
              Yes. Our companions are available in major areas of Karachi,
              including DHA, Clifton, PECHS, and surrounding locations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}