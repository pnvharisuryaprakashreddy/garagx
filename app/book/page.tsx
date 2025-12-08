export default function BookPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-6">Book Your Slot</h1>

      <form className="space-y-4 max-w-md">
        <input
          placeholder="Name"
          className="w-full p-3 bg-white/5 rounded-xl border border-white/10"
        />
        <input
          placeholder="Vehicle"
          className="w-full p-3 bg-white/5 rounded-xl border border-white/10"
        />
        <input
          type="date"
          className="w-full p-3 bg-white/5 rounded-xl border border-white/10"
        />
        <button className="lux-btn px-6 py-3 w-full">
          Book Now
        </button>
      </form>
    </main>
  );
}
