const services = [
  {
    title: "Car Wash",
    desc: "Exterior & interior premium cleaning",
    price: "₹999",
  },
  {
    title: "Full Service",
    desc: "Oil change, inspection, tuning",
    price: "₹4,999",
  },
  {
    title: "Custom Modding",
    desc: "Wraps, rims, lights, spoilers",
    price: "₹9,999+",
  },
  {
    title: "Bike Service",
    desc: "Engine tuning & detailing",
    price: "₹1,999",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-semibold tracking-wide mb-10">
        Garage Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-xl
                       border border-white/10 hover:scale-105 transition"
          >
            <h3 className="text-xl mb-2">{s.title}</h3>
            <p className="text-gray-400 mb-4">{s.desc}</p>
            <p className="text-lg">{s.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
