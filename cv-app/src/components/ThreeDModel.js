/// src/components/ThreeDModel.js
// src/components/ThreeDModel.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import '../styles/ThreeDModel.css';

const ThreeDModel = () => {
  return (
    <div className="three-d-model-container">
      <Canvas style={{ height: '400px', width: '100%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} />
        <mesh>
          <boxGeometry args={[1, 0.6, 0.02]} />
          <meshStandardMaterial color="lightblue" />
          <Html>
            <div className="business-letter-content">
              <h3>Suvanshi Gupta</h3>
              <p>MCA Student</p>
              <p>Email: isuvanshi@gmail.com</p>
              <p>Address: Jammu, India</p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </Html>
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
