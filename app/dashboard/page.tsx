"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (!u) {
      router.push("/login");
    } else {
      setUser(u);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) return null;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-4">Welcome</h1>
      <p className="text-gray-400 mb-6">{user}</p>

      <div className="flex gap-4">
        <a href="/brands" className="lux-btn px-6 py-3">
          Explore Vehicles
        </a>
        <button onClick={logout} className="border px-6 py-3 rounded-xl">
          Logout
        </button>
      </div>
    </main>
  );
}
