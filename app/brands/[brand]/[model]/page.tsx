type Props = {
  params: Promise<{ brand: string; model: string }>;
};

export default async function ModelPage({ params }: Props) {
  const { brand, model } = await params;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      {/* Breadcrumb */}
      <p className="text-gray-400 mb-4 text-sm">
        <a href="/brands" className="hover:text-white">Brands</a> /{" "}
        <a
          href={`/brands/${brand}`}
          className="hover:text-white capitalize"
        >
          {brand}
        </a>{" "}
        / <span className="capitalize">{model}</span>
      </p>

      {/* Header */}
      <h1 className="text-4xl font-semibold tracking-wide mb-6 capitalize">
        {brand} {model}
      </h1>

      {/* Info section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Vehicle Image Placeholder */}
        <div className="bg-white/5 rounded-xl h-72 flex items-center justify-center border border-white/10">
          <p className="text-gray-400">
            Vehicle Image / 3D Preview
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-6">
          <p className="text-gray-300">
            Explore customization options, garage services,
            and premium packages for your vehicle.
          </p>

          <div className="flex gap-4">
            <a
              href="/customize"
              className="lux-btn px-6 py-3"
            >
              Customize
            </a>

            <a
              href="/services"
              className="border border-white/20 px-6 py-3 rounded-xl
                         hover:bg-white hover:text-black transition"
            >
              View Services
            </a>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">Fuel</p>
              <p>Petrol / Diesel</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">Transmission</p>
              <p>Automatic</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">Body Type</p>
              <p>SUV / Sedan</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">Rating</p>
              <p>⭐ 4.5</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
<div className="mt-10">
  <h2 className="text-xl mb-4">Packages</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
      <p className="font-semibold">Basic</p>
      <p className="text-gray-400 text-sm">Wash + Inspection</p>
      <p className="mt-2">₹1,499</p>
    </div>

    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
      <p className="font-semibold">Premium</p>
      <p className="text-gray-400 text-sm">Service + Detailing</p>
      <p className="mt-2">₹4,999</p>
    </div>

    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
      <p className="font-semibold">Ultimate</p>
      <p className="text-gray-400 text-sm">Mods + Custom Build</p>
      <p className="mt-2">₹14,999</p>
    </div>
  </div>
</div>
