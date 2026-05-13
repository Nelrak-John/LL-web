import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const LiquidText = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      if (hovered) {
        meshRef.current.position.x = Math.sin(time * 3) * 0.1;
        meshRef.current.position.y = Math.cos(time * 2) * 0.05;
        meshRef.current.rotation.z = Math.sin(time * 2) * 0.1;
      } else {
        meshRef.current.position.x = 0;
        meshRef.current.position.y = 0;
        meshRef.current.rotation.z = 0;
      }
    }
  });

  return (
    <Text
      ref={meshRef}
      fontSize={2}
      color="white"
      anchorX="center"
      anchorY="middle"
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      LONELY LEGACY
    </Text>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/videos/metallic-loop.mp4" type="video/mp4" />
      </video>
      <div className="hero-slogan">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <LiquidText />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
