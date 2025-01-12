import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useRef, useState } from "react";

// Stars Component
function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 2.4 })
  );
  const [movement] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 0.75 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

    // Add floating motion to the stars for a subtle movement effect
    for (let i = 0; i < sphere.length; i++) {
      sphere[i] += movement[i] * delta * 0.1; // Controls the speed and intensity of floating effect
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="cyan" // Changed to cyan color (you can adjust this to your liking)
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// Plane Background Component
function AnimatedBackground() {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.05; // Adding rotation for animation
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -1]}>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}

// Main Background Component
export default function NetworkBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1] }} style={{ background: "white" }}>
        <AnimatedBackground /> {/* Add rotating plane */}
        <Stars />
      </Canvas>
    </div>
  );
}
