"use client";

import { useState } from "react";

const allModels = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Model ${i + 1}`,
  age: 20 + (i % 10),
  tone: ["Fair", "Medium", "Tan", "Olive"][i % 4],
  preference: ["Male", "Female", "Both"][i % 3],
  image: `/model${i + 1}.jpg`,
}));

const itemsPerPage = 9;

export default function CompanionsPage() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    age: "",
    tone: "",
    preference: "",
  });

  const filteredModels = allModels.filter((model) => {
    return (
      (filters.age === "" || model.age === Number(filters.age)) &&
      (filters.tone === "" || model.tone === filters.tone) &&
      (filters.preference === "" || model.preference === filters.preference)
    );
  });

  const totalPages = Math.ceil(filteredModels.length / itemsPerPage);
  const displayedModels = filteredModels.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      <h1 className="text-3xl md:text-4xl font-[var(--font-playfair)] text-center mb-8">
        Our Companions
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <select
          name="age"
          value={filters.age}
          onChange={handleFilterChange}
          className="p-3 rounded-lg border border-neutral-700 bg-neutral-950 text-neutral-100"
        >
          <option value="">All Ages</option>
          {Array.from({ length: 10 }, (_, i) => 20 + i).map((age) => (
            <option key={age} value={age}>
              {age} years
            </option>
          ))}
        </select>

        <select
          name="tone"
          value={filters.tone}
          onChange={handleFilterChange}
          className="p-3 rounded-lg border border-neutral-700 bg-neutral-950 text-neutral-100"
        >
          <option value="">All Skin Tones</option>
          {["Fair", "Medium", "Tan", "Olive"].map((tone) => (
            <option key={tone} value={tone}>
              {tone}
            </option>
          ))}
        </select>

        <select
          name="preference"
          value={filters.preference}
          onChange={handleFilterChange}
          className="p-3 rounded-lg border border-neutral-700 bg-neutral-950 text-neutral-100"
        >
          <option value="">All Preferences</option>
          {["Male", "Female", "Both"].map((pref) => (
            <option key={pref} value={pref}>
              {pref}
            </option>
          ))}
        </select>
      </div>

      {/* Models Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedModels.map((model) => (
          <div
            key={model.id}
            className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950"
          >
            <div className="h-72 w-full flex items-center justify-center overflow-hidden">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <p className="font-medium">{model.name}</p>
              <p className="text-sm text-neutral-400">
                Age: {model.age} • Tone: {model.tone} • Preference: {model.preference}
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-amber-400 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center gap-4">
        <button
          className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-100 hover:bg-neutral-700 transition"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            className={`px-4 py-2 rounded-lg ${
              p === page
                ? "bg-amber-400 text-neutral-900"
                : "bg-neutral-800 text-neutral-100 hover:bg-neutral-700"
            } transition`}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}

        <button
          className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-100 hover:bg-neutral-700 transition"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}