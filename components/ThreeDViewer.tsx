"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/models/Duck.glb");
  return <primitive object={scene} scale={1.5} />;
}

export default function ThreeDViewer() {
  return (
    <Canvas camera={{ position: [2, 2, 5] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
}
