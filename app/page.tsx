export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-[var(--font-playfair)]">
            Premium Companionship
            <span className="block text-amber-400 mt-3">In Karachi</span>
          </h1>

          <p className="mt-6 text-neutral-300">
            Verified elite companions. Absolute privacy. Refined experiences.
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
      <section id="privacy" className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          {["100% Confidential", "Verified Profiles", "Discreet Locations", "Premium Experience"].map(t => (
            <div key={t} className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-[var(--font-playfair)] text-center">
            Featured Companions
          </h2>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800">
                <img
                  src={`/model${i}.jpg`}
                  className="h-80 w-full object-cover hover:scale-105 transition"
                />
                <div className="p-5">
                  <p className="font-medium"></p>
                  <p className="text-sm text-neutral-400">Karachi • Verified</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/companions"
              className="inline-block px-8 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700"
            >
              View All Companions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}