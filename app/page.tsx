export default function HomePage() { const models = [ { id: 1, name: 'Model 1', image: '/model1.jpg' }, { id: 2, name: 'Model 2', image: '/model2.jpg' }, { id: 3, name: 'Model 3', image: '/model3.jpg' }, ];

return ( <> {/* Hero Section */} <section className="relative overflow-hidden"> <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" /> <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.25),transparent_60%)]" />

<div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
      <h1 className="text-4xl md:text-6xl font-bold font-[var(--font-playfair)] leading-tight">
        Exclusive Companionship
        <span className="block text-amber-400 mt-2">Absolute Discretion</span>
      </h1>
      <p className="mt-6 text-neutral-300 max-w-2xl mx-auto">
        Elite & discreet companionship in Karachi. Verified profiles, private communication, and refined experiences.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#profiles" className="px-8 py-4 rounded-full bg-amber-400 text-neutral-900 font-semibold hover:bg-amber-300 transition">
          View Companions
        </a>
        <a href="#contact" className="px-8 py-4 rounded-full border border-neutral-700 hover:border-neutral-500 transition">
          Book Privately
        </a>
      </div>
    </div>
  </section>

  {/* Privacy / Trust */}
  <section id="privacy" className="py-20 bg-neutral-950">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
      {['100% Confidential', 'Verified Profiles', 'Discreet Locations', 'Private Communication'].map(item => (
        <div key={item} className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40">
          <p className="font-medium">{item}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Featured Profiles */}
  <section id="profiles" className="py-24 bg-neutral-900/30">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] text-center">Featured Companions</h2>
      <p className="text-neutral-400 text-center mt-4">Handpicked, verified, and presented with discretion.</p>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {models.map(model => (
          <div key={model.id} className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
            <div className="h-72 w-full flex items-center justify-center overflow-hidden">
              <img src={model.image} alt={model.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <p className="font-medium">{model.name}</p>
              <p className="text-sm text-neutral-400">Karachi • Verified</p>
              <a href="#contact" className="inline-block mt-4 text-amber-400 hover:underline">View Profile</a>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12 text-center">
        <a href="/companions/" className="inline-block px-8 py-4 rounded-full bg-amber-400 text-neutral-900 font-semibold hover:bg-amber-300 transition">
          View More Companions
        </a>
      </div>
    </div>
  </section>

  {/* Experience */}
  <section id="experience" className="py-24 bg-neutral-950">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)]">Tailored Experiences</h2>
      <p className="mt-6 text-neutral-400">Every interaction is built on respect, comfort, and mutual consent.</p>
      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {['Dinner Companionship', 'Event Escorting', 'Travel Partner', 'Private Meetings'].map(item => (
          <div key={item} className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/40">{item}</div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section id="contact" className="py-28 bg-gradient-to-br from-black to-neutral-950">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)]">Begin With Confidence</h2>
      <p className="mt-6 text-neutral-400">Your privacy matters. Contact us discreetly to begin your experience.</p>
      <div className="mt-10">
        <a href="https://wa.me/0000000000" className="px-10 py-4 rounded-full bg-amber-400 text-neutral-900 font-semibold hover:bg-amber-300 transition">Contact Discreetly</a>
      </div>
    </div>
  </section>
</>

); }