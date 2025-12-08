export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-8">
        <h1 className="text-2xl font-semibold tracking-widest">
          GARAGX
        </h1>
        <nav className="space-x-6 text-gray-400">
          <a href="/brands" className="hover:text-white">Brands</a>
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/customize" className="hover:text-white">Customize</a>
          <a href="/login" className="hover:text-white">Login</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center mt-32 px-6">
        <h2 className="text-5xl font-bold tracking-wide mb-6">
          Your Garage. Reinvented.
        </h2>

        <p className="text-gray-400 max-w-xl mb-10">
          Discover vehicles, customize designs, and book premium
          garage services — all in one place.
        </p>

        <div className="flex gap-6">
          <a href="/brands" className="lux-btn px-8 py-4">
            Explore Brands
          </a>
          <a href="/services" className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
            View Services
          </a>
        </div>
      </section>
    </main>
  );
}
