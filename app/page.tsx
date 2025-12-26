export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-[var(--font-playfair)] leading-tight">
            Rocky Escorts Karachi – Premium Escort Services
            <span className="block text-amber-400 mt-3">
              VIP Female Escorts & Call Girls in Karachi, Pakistan
            </span>
          </h1>

          <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
            Welcome to <strong>Rocky Escorts Karachi</strong>, your trusted destination for
            <strong> luxury escorts Karachi</strong>, <strong>VIP escorts Karachi</strong>,
            and <strong>elite escorts in Karachi</strong>. We provide
            <strong> discreet escorts Karachi</strong> and
            <strong> high class escorts Karachi</strong> for clients seeking
            privacy, elegance, and unforgettable companionship.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/companions"
              className="px-8 py-4 rounded-full bg-amber-400 text-neutral-900 font-semibold hover:bg-amber-300"
            >
              View Escorts in Karachi
            </a>
            <a
              href="#privacy"
              className="px-8 py-4 rounded-full border border-neutral-700 hover:border-neutral-500"
            >
              Discreet Booking
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section id="privacy" className="py-20 bg-neutral-950/40">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          {[
            "100% Confidential Escort Services Karachi",
            "Verified & Trusted Escorts in Karachi",
            "Luxury & Premium Escorts Experience",
            "24/7 Escorts Karachi Availability",
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
            Best Escorts in Karachi – Rocky Escorts Pakistan
          </h2>

          <p className="text-neutral-300 leading-relaxed">
            Rocky Escorts Pakistan offers <strong>escort services Karachi Pakistan</strong>
            with a curated selection of <strong>female escorts Karachi</strong>,
            <strong>model escorts Karachi</strong>, and
            <strong>elite escorts in Karachi</strong>.
            Whether you are searching for <strong>Karachi call girls</strong>,
            <strong>VIP call girls Karachi</strong>, or
            <strong>Karachi escort girls</strong>,
            we ensure safe, premium, and discreet experiences.
          </p>

          <h3 className="text-2xl font-[var(--font-playfair)]">
            Karachi Escort Agency You Can Trust
          </h3>

          <p className="text-neutral-300 leading-relaxed">
            As a leading <strong>escort agency Karachi</strong> and
            <strong>Karachi escort agency</strong>, we specialize in
            <strong>independent escorts Karachi</strong>,
            <strong>Karachi independent call girls</strong>,
            and <strong>Pakistani escorts Karachi</strong>.
            Our clients choose us for reliability, privacy, and premium service.
          </p>

          <h3 className="text-2xl font-[var(--font-playfair)]">
            Luxury, Affordable & Local Escorts in Karachi
          </h3>

          <p className="text-neutral-300 leading-relaxed">
            We offer <strong>affordable escorts Karachi</strong>,
            <strong>Karachi cheap escorts</strong>, and
            <strong>high profile escorts Karachi</strong>
            without compromising quality.
            Find <strong>Karachi local escorts</strong>,
            <strong>Karachi hotel escorts</strong>,
            <strong>outcall escorts Karachi</strong>, and
            <strong>incall escorts Karachi</strong> tailored to your needs.
          </p>

          <p className="text-neutral-300 leading-relaxed">
            Explore <strong>Karachi nightlife escorts</strong>,
            <strong>party escorts Karachi</strong>,
            <strong>Karachi travel companions</strong>,
            and <strong>discreet escorts Karachi</strong> for business trips,
            private meetings, or exclusive events.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-24 bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-[var(--font-playfair)] text-center">
            Featured Elite Escorts in Karachi
          </h2>

          <p className="mt-4 text-center text-neutral-400 max-w-3xl mx-auto">
            Browse <strong>premium escorts Karachi</strong>,
            <strong>Karachi female companions</strong>,
            <strong>mature escorts Karachi</strong>,
            <strong>young escorts Karachi</strong>,
            and <strong>Karachi Russian escorts</strong> available 24/7.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800"
              >
                <img
                  src={`/model${i}.jpg`}
                  alt={`Luxury Escort Girls Karachi ${i}`}
                  className="h-80 w-full object-cover hover:scale-105 transition"
                />
                <div className="p-5">
                  <p className="font-medium">Luxury Escort</p>
                  <p className="text-sm text-neutral-400">
                    Verified • Trusted Escorts in Karachi
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
              Escort Booking Karachi
            </a>
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-[var(--font-playfair)]">
            Karachi Escort Services – FAQs
          </h2>

          <div>
            <h3 className="font-medium text-lg">
              Are Rocky Escorts Karachi verified?
            </h3>
            <p className="text-neutral-400 mt-2">
              Yes. All profiles are screened and reviewed. Read
              <strong> Rocky escorts reviews</strong> and
              <strong> escort reviews Karachi</strong> for client feedback.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">
              How do I find escorts near me in Karachi?
            </h3>
            <p className="text-neutral-400 mt-2">
              We offer <strong>escorts near me Karachi</strong> with fast
              <strong> Karachi escort booking</strong> and transparent
              <strong> Karachi escort rates</strong>.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">
              Do you provide escort numbers and directory?
            </h3>
            <p className="text-neutral-400 mt-2">
              Yes. Our platform works as an <strong>escort directory Karachi</strong>
              with secure access to <strong>escort girls numbers Karachi</strong>.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg">
              Are services available 24/7?
            </h3>
            <p className="text-neutral-400 mt-2">
              Absolutely. We provide <strong>24/7 escorts Karachi</strong>,
              including <strong>Karachi premium escorts</strong> and
              <strong>Rocky call girls Karachi</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}