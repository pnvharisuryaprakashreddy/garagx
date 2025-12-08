"use client";

import { useState } from "react";
import ThreeDViewer from "../../components/ThreeDViewer";

export default function Page() {
  const [color, setColor] = useState("orange");

  return (
    <main className="fade-in min-h-screen text-white p-10">
      <h1 className="text-4xl font-semibold tracking-wider mb-8">
  Vehicle Customization Studio
</h1>
<p className="text-gray-400 mb-10">
  Visualize before you build.
</p>


      <div className="grid grid-cols-3 gap-6">
        <div className="space-y-4">
          <button
  onClick={() => setColor("red")}
  className="lux-btn w-full py-3"
>
  Red Finish
</button>

<button
  onClick={() => setColor("black")}
  className="lux-btn w-full py-3"
>
  Black Edition
</button>

<button
  onClick={() => setColor("blue")}
  className="lux-btn w-full py-3"
>
  Blue Sport
</button>

        </div>

        <div className="col-span-2 rounded-2xl p-4 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
          <ThreeDViewer color={color} />
        </div>
      </div>
    </main>
  );
}
