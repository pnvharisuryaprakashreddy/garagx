"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

const vehicles: Record<string, string[]> = {
  bmw: ["X1", "X3", "X5", "M4"],
  audi: ["A4", "A6", "Q5", "RS7"],
  mercedes: ["C-Class", "E-Class", "GLA", "GLE"],
  toyota: ["Fortuner", "Innova", "Camry"],
  honda: ["City", "Civic", "CR-V"],
};

export default function BrandPage() {
  const params = useParams<{ brand: string }>();
  const brand = params.brand?.toLowerCase() || "";

  const models = vehicles[brand] || [];

  const [query, setQuery] = useState("");

  const filteredModels = models.filter((m) =>
    m.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-semibold mb-6 capitalize">
        {brand} Models
      </h1>

      {/* Search */}
      <input
        placeholder="Search model..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-8 w-full md:w-1/3 p-3 rounded-xl
                   bg-white/5 border border-white/10
                   text-white placeholder-gray-400"
      />

      {/* Models */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredModels.map((model) => (
          <a
            key={model}
            href={`/brands/${brand}/${model.toLowerCase()}`}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-xl
                       border border-white/10 hover:scale-105
                       transition text-center"
          >
            <p className="text-lg">{model}</p>
          </a>
        ))}

        {filteredModels.length === 0 && (
          <p className="col-span-full text-gray-400">
            No models found.
          </p>
        )}
      </div>
    </main>
  );
}
