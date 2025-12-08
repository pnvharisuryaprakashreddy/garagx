"use client";

import { useState } from "react";

const brands = [
  "BMW", "Audi", "Mercedes", "Toyota", "Honda",
  "Kia", "Hyundai", "Tata", "Mahindra"
];

export default function BrandsPage() {
  // ✅ 1. State to store search text
  const [query, setQuery] = useState("");

  // ✅ 2. Filter brands based on search text
  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-semibold mb-6 tracking-wider">
        Select Your Brand
      </h1>

      {/* ✅ 3. Search input */}
      <input
        type="text"
        placeholder="Search brand..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-8 w-full md:w-1/3 p-3 rounded-xl
                   bg-white/5 border border-white/10
                   text-white placeholder-gray-400
                   focus:outline-none"
      />

      {/* ✅ 4. Brand grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredBrands.map((brand) => (
          <a
            key={brand}
            href={`/brands/${brand.toLowerCase()}`}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-xl
                       text-center hover:scale-105 transition
                       border border-white/10"
          >
            <p className="text-lg tracking-wide">{brand}</p>
          </a>
        ))}

        {/* ✅ 5. If no result */}
        {filteredBrands.length === 0 && (
          <p className="col-span-full text-gray-400">
            No brand found.
          </p>
        )}
      </div>
    </main>
  );
}
