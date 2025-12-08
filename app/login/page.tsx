"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TEMP auth (frontend only)
    if (email && password) {
      localStorage.setItem("user", email);
      router.push("/dashboard");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl w-96 border border-white/10">
        <h1 className="text-2xl mb-6 text-center">Login</h1>

        <input
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-xl bg-white/5 border border-white/10"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-xl bg-white/5 border border-white/10"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="lux-btn w-full py-3">
          Login
        </button>

        <p className="text-sm text-gray-400 text-center mt-4">
          New here?{" "}
          <a href="/signup" className="text-white underline">
            Create account
          </a>
        </p>
      </div>
    </main>
  );
}
