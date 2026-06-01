'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations, Center, Float } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

function RobotMesh({ isGreeting }: { isGreeting: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  
  // 1. Extract nodes and animations from the GLTF
  const { scene, animations, nodes } = useGLTF('/robot.glb');
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    // 2. PLAY GREETING ANIMATION & SMILE
    // Note: 'Wave' and 'Idle' must match the animation names in your .glb file
    if (isGreeting && actions['Wave']) {
      actions['Wave'].reset().fadeIn(0.5).play();

      // Transition to a continuous idle animation after waving
      setTimeout(() => {
        actions['Wave']?.fadeOut(0.5);
        if (actions['Idle']) actions['Idle'].reset().fadeIn(0.5).play();
      }, 3000);
    } else if (actions['Idle']) {
      actions['Idle'].play();
    }

    // Trigger Smile (Assuming your model uses Morph Targets for facial expressions)
    // Replace 'FaceMesh' with the actual node name of your robot's face
    const faceMesh = nodes.FaceMesh as THREE.Mesh & {
  morphTargetInfluences?: number[];
};

if (faceMesh?.morphTargetInfluences) {
  faceMesh.morphTargetInfluences[0] = isGreeting ? 1 : 0;
}
  }, [isGreeting, actions, nodes]);

  useFrame(() => {
    if (!groupRef.current) return;

    // 3. CONTINUOUS INTERACTION: HEAD TRACKING
    const targetX = pointer.x * 0.8;
    const targetY = pointer.y * 0.6;

    // Tracking the cursor with the Head bone looks much more natural than the whole body
    // Replace 'Head' with the exact name of the head bone in your model
    const head = nodes.Head as THREE.Object3D;

if (head) {
  head.rotation.y = THREE.MathUtils.lerp(
    head.rotation.y,
    targetX,
    0.08
  );

  head.rotation.x = THREE.MathUtils.lerp(
    head.rotation.x,
    -targetY,
    0.08
  );
} else {
      // Fallback: rotate the whole body slightly if no head bone is found
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX * 0.5, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY * 0.5, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* 4. ENABLED FLOAT FOR CONTINUOUS IDLE MOVEMENT */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
        <Center>
          {/* 5. INCREASED SIZE: Changed scale from 2 to 4 */}
          <primitive object={scene} scale={4} />
        </Center>
      </Float>
    </group>
  );
}

export default function GreetingRobot3D({ isGreeting }: { isGreeting: boolean }) {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative z-10 select-none">
      {/* Adjusted camera to accommodate the larger model */}
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-5, 5, 2]} intensity={1} color="#06b6d4" />
        <RobotMesh isGreeting={isGreeting} />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/robot.glb');