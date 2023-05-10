import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(rotation => rotation + 0.007);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={rotation}
    />
  )}
  
 const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand' gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotateenableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas