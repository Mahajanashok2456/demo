import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Environment } from '@react-three/drei';
import * as THREE from 'three';

function TravelBus({ position }: { position: [number, number, number] }) {
  const busRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (busRef.current) {
      busRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      busRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={busRef} position={position}>
      {/* Bus Body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 1.2, 1.5]} />
        <meshStandardMaterial color="#E94560" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[2.8, 0.3, 1.4]} />
        <meshStandardMaterial color="#16213E" metalness={0.4} roughness={0.5} />
      </mesh>
      
      {/* Windows */}
      {[-0.8, 0, 0.8].map((x, i) => (
        <mesh key={i} position={[x, 0.7, 0.76]}>
          <boxGeometry args={[0.5, 0.4, 0.05]} />
          <meshStandardMaterial color="#87CEEB" metalness={0.9} roughness={0.1} transparent opacity={0.8} />
        </mesh>
      ))}
      
      {/* Wheels */}
      {[[-1, -0.1, 0.7], [-1, -0.1, -0.7], [1, -0.1, 0.7], [1, -0.1, -0.7]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.8} />
        </mesh>
      ))}
      
      {/* Headlights */}
      <mesh position={[1.51, 0.4, 0.4]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#F39C12" emissive="#F39C12" emissiveIntensity={2} />
      </mesh>
      <mesh position={[1.51, 0.4, -0.4]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#F39C12" emissive="#F39C12" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

function Mountains() {
  const mountains = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      position: [-15 + i * 4, -2, -8 - Math.random() * 5] as [number, number, number],
      scale: [1.5 + Math.random(), 2 + Math.random() * 2, 1.5 + Math.random()] as [number, number, number],
      color: i % 2 === 0 ? '#0F3460' : '#16213E',
    }));
  }, []);

  return (
    <group>
      {mountains.map((m, i) => (
        <mesh key={i} position={m.position} scale={m.scale}>
          <coneGeometry args={[2, 4, 4]} />
          <meshStandardMaterial color={m.color} flatShading />
        </mesh>
      ))}
    </group>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#16213E" />
    </mesh>
  );
}

function Road() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.49, 0]}>
        <planeGeometry args={[4, 100]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      {/* Road lines */}
      {Array.from({ length: 20 }, (_, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.48, -40 + i * 4]}>
          <planeGeometry args={[0.2, 1.5]} />
          <meshStandardMaterial color="#F39C12" />
        </mesh>
      ))}
    </group>
  );
}

function AnimatedCamera() {
  useFrame((state) => {
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2;
    state.camera.position.z = 8 + Math.sin(state.clock.elapsedTime * 0.05) * 2;
    state.camera.lookAt(0, 0, 0);
  });
  
  return null;
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = Math.random() * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#F39C12" transparent opacity={0.6} />
    </points>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 3, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={['#0a1628', 10, 50]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#F39C12" />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#E94560" />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffffff" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
          <TravelBus position={[0, 0, 0]} />
        </Float>
        
        <Mountains />
        <Ground />
        <Road />
        <Particles />
        <AnimatedCamera />
        
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
