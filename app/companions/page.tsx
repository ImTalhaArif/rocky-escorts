"use client";

import { useState } from "react";

const models = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Model ${i + 1}`,
  age: 20 + (i % 10),
  tone: ["Fair", "Medium", "Tan", "Olive"][i % 4],
  image: `/model${i + 1}.jpg`,
}));

const PER_PAGE = 9;

export default function CompanionsPage() {
  const [page, setPage] = useState(1);
  const [tone, setTone] = useState("");

  const filtered = tone ? models.filter(m => m.tone === tone) : models;
  const pages = Math.ceil(filtered.length / PER_PAGE);

  const view = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-[var(--font-playfair)] text-center">
        Our Companions
      </h1>

      {/* Filters */}
      <div className="flex justify-center gap-4 mt-10">
        <select
          value={tone}
          onChange={e => { setTone(e.target.value); setPage(1); }}
          className="px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-700"
        >
          <option value="">All Skin Tones</option>
          <option>Fair</option>
          <option>Medium</option>
          <option>Tan</option>
          <option>Olive</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {view.map(m => (
          <div key={m.id} className="rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800">
            <img src={m.image} className="h-80 w-full object-cover hover:scale-105 transition" />
            <div className="p-5">
              <p className="font-medium">{m.name}</p>
              <p className="text-sm text-neutral-400">
                Age {m.age} • {m.tone}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-14">
        {Array.from({ length: pages }, (_, i) => i + 1).map(p => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`px-4 py-2 rounded-lg ${
              p === page
                ? "bg-amber-400 text-neutral-900"
                : "bg-neutral-800 hover:bg-neutral-700"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}