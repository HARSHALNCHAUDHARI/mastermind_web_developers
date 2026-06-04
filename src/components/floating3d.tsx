'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, RoundedBox, Float, Text } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

// --------------------------------------------------------
// INDIVIDUAL CUBE COMPONENT
// --------------------------------------------------------
function ServiceCube({ position, speed, scale, isActive, title, icon }: any) {
  const meshRef = useRef<THREE.Group>(null);
  const { pointer, viewport } = useThree();

  // Define the 6 faces of a cube (Position offset & Rotation)
  const faces = useMemo(() => [
    { pos: [0, 0, 0.51], rot: [0, 0, 0] },                   // Front
    { pos: [0, 0, -0.51], rot: [0, Math.PI, 0] },            // Back
    { pos: [0.51, 0, 0], rot: [0, Math.PI / 2, 0] },         // Right
    { pos: [-0.51, 0, 0], rot: [0, -Math.PI / 2, 0] },       // Left
    { pos: [0, 0.51, 0], rot: [-Math.PI / 2, 0, 0] },        // Top
    { pos: [0, -0.51, 0], rot: [Math.PI / 2, 0, 0] },        // Bottom
  ], []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // 1. CONTINUOUS ROTATION (Slightly increased speed)
    meshRef.current.rotation.x += 0.12 * delta * speed;
    meshRef.current.rotation.y += 0.18 * delta * speed;
    meshRef.current.rotation.z += 0.08 * delta * speed;

    // 2. MOUSE PARALLAX
    const targetX = (pointer.x * viewport.width) / 25;
    const targetY = (pointer.y * viewport.height) / 25;
    
    const currentX = meshRef.current.position.x;
    const currentZ = meshRef.current.position.z;
    meshRef.current.position.x = THREE.MathUtils.lerp(currentX, position[0] + targetX, 0.05);
    meshRef.current.position.z = THREE.MathUtils.lerp(currentZ, position[2] + targetY, 0.05);

    // 3. SCALE PULSE ON FOCUS
    const targetScale = isActive ? scale * 1.1 : scale;
    meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1));
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      
      {/* RED GLASS GEOMETRY */}
      <RoundedBox args={[1, 1, 1]} radius={0.08} smoothness={4}>
        <meshPhysicalMaterial 
          color="#0d0d0d"         
          emissive="#450a0a"      
          emissiveIntensity={0.5}
          metalness={0.1} 
          roughness={0.05}        
          transmission={0.95}     
          thickness={1.5}         
          clearcoat={1}           
          clearcoatRoughness={0.1}
        />
      </RoundedBox>

      {/* RENDER UI ON ALL 6 FACES */}
      {faces.map((face, index) => (
        <group key={index} position={face.pos as any} rotation={face.rot as any}>
          <Text 
            position={[0, 0.15, 0]} 
            fontSize={0.28} 
            color="#ffffff"       
            anchorX="center"
            anchorY="middle"
            fontWeight="bold"
          >
            {icon}
          </Text>
          
          <Text 
            position={[0, -0.22, 0]} 
            fontSize={0.08} 
            color="#ffffff"
            maxWidth={0.8} 
            textAlign="center"
            lineHeight={1.2}
            fontWeight="bold"
          >
            {title}
          </Text>
        </group>
      ))}
      
    </group>
  );
}

// --------------------------------------------------------
// MAIN SCENE COMPONENT
// --------------------------------------------------------
export default function FloatingServiceCubes({ isActive }: { isActive: boolean }) {
  // NEW ARRANGEMENT: A more dynamic, staggered waterfall layout
  const cubeData = useMemo(() => [
    { 
      title: "WEB & SOFTWARE\nDEVELOPMENT",
      icon: "</>", 
      position: [-0.2, 2.6, -0.5],  // Top center-left
      speed: 1.2, 
      scale: 1.4, 
    }, 
    { 
      title: "CLOUD\nARCHITECTURE",
      icon: "☁", 
      position: [2.2, 1.9, 0.8], // Top right, popping forward
      speed: 0.9, 
      scale: 1.3,
    },  
    { 
      title: "DIGITAL\nGROWTH",
      icon: "↗", 
      position: [-1.4, 0.3, 0.2], // Mid left, slightly closer
      speed: 1.1, 
      scale: 1.4,
    },
    { 
      title: "STRATEGY &\nCONSULTING",
      icon: "⚙", 
      position: [1.4, -0.4, -1.2], // Mid right, pushed deeper back
      speed: 1.3, 
      scale: 1.5,
    },
    {
      title: "DATA\nSCIENCE",
      icon: "∑", 
      position: [-0.5, -2.1, 0.8], // Bottom left, popping forward
      speed: 1.0,
      scale: 1.4,
    },
    {
      title: "UI / UX\nENGINEERING",
      icon: "◨", 
      position: [2.0, -2.4, -0.5], // Bottom right, pushed slightly back
      speed: 1.2,
      scale: 1.4,
    }
  ], []);

  return (
    <div className="absolute top-0 right-0 w-full h-[100vh] pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
        <Suspense fallback={null}>
          <Environment preset="studio" />
          
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={3} color="#ffffff" />
          <directionalLight position={[-10, 0, -5]} intensity={1.5} color="#ffb3b3" />
          <spotLight position={[0, -10, 5]} intensity={5} color="#ffffff" angle={0.6} penumbra={1} />

          {/* INCREASED FLOAT SPEED: Changed from 0.8 to 1.3 */}
          <Float floatIntensity={0.6} rotationIntensity={0} speed={1.3}>
            {cubeData.map((cube, index) => (
              <ServiceCube key={index} {...cube} isActive={isActive} />
            ))}
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}