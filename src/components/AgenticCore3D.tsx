'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, RoundedBox, Float } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function SolidCube({ position, rotation, speed, scale, isActive }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer, viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    const floatOffset = Math.sin(time * speed) * 0.1;
    meshRef.current.position.y = position[1] + floatOffset;
    
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;

    const targetX = (pointer.x * viewport.width) / 15;
    const targetY = (pointer.y * viewport.height) / 15;
    
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, position[0] + targetX, 0.03);
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, position[2] + targetY, 0.03);

    if (isActive) {
      meshRef.current.rotation.z += 0.01;
      const pulseScale = scale * (1 + Math.sin(time * 10) * 0.02);
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, pulseScale, 0.1));
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <RoundedBox args={[1, 1, 1]} radius={0.04} smoothness={4}>
        {/* Upgraded to Physical Material to capture the background color bleed */}
        <meshPhysicalMaterial
          color="#140303"        // Deep red/black base so it absorbs the background color
          roughness={0.15}       // Slightly softer so the red glow spreads across the surface
          metalness={0.8}        // Lowered slightly so the base color shows through
          clearcoat={1}          // Keeps the sharp, glossy reflections on the edges
          clearcoatRoughness={0.05}
          envMapIntensity={1.2}  
        />
      </RoundedBox>
    </mesh>
  );
}

export default function FloatingCubes3D({ isActive }: { isActive: boolean }) {
  const cubeData = useMemo(() => [
    { position: [5.5, 3.5, -2], rotation: [0.5, 0.8, 0], speed: 1.2, scale: 1.6 }, 
    { position: [2.2, 1.8, 0], rotation: [0.2, -0.4, 0.1], speed: 0.9, scale: 1.1 },  
    { position: [4.5, 1.2, -1], rotation: [0.7, 0.3, -0.2], speed: 1.1, scale: 1.3 }, 
    { position: [1.8, -0.5, 1.5], rotation: [-0.2, 0.5, 0.1], speed: 0.8, scale: 1.2 }, 
    { position: [3.8, -1.0, 0], rotation: [0.4, -0.6, 0.3], speed: 1.3, scale: 1.0 },   
    { position: [2.5, -2.8, 1], rotation: [0.8, 0.2, 0.5], speed: 1.0, scale: 1.5 },  
    { position: [5.8, -3.5, -0.5], rotation: [0.1, 0.9, 0], speed: 1.4, scale: 1.7 }, 
  ], []);

  return (
    <div className="absolute inset-0 w-full h-[100vh] z-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
        <Environment preset="city" />
        
        {/* Added a red tinted ambient light so the dark sides of the cubes glow slightly red */}
        <ambientLight intensity={0.4} color="#4c0519" />
        
        <directionalLight position={[-5, 8, 4]} intensity={4} color="#ffffff" />
        {/* Massive red light washing over the blocks from the bottom right */}
        <pointLight position={[4, -6, 2]} intensity={30} color="#dc2626" />
        <spotLight position={[6, 0, 0]} intensity={8} angle={0.6} penumbra={1} color="#990000" />

        <Float floatIntensity={0.2} rotationIntensity={0.2} speed={1}>
          {cubeData.map((cube, index) => (
            <SolidCube key={index} {...cube} isActive={isActive} />
          ))}
        </Float>
      </Canvas>
    </div>
  );
}