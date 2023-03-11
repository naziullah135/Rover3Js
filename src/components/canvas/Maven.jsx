import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import {
  Bounds,
  useBounds,
  useGLTF,
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function SelectToZoom({ children }) {
  const api = useBounds();
  return (
    <group
      rotation-y={(-Math.PI * 3.3) / 4}
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit()
      )}
      onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
    >
      {children}
    </group>
  );
}
const Maven = (props) => {
  const { nodes, materials } = useGLTF("/maven-3js.glb");
  materials["Material.005"].roughness = 0.12;
  materials["Material.004"].roughness = 0.6;
  materials["Material.011"].roughness = 0.1;
  materials["Material.004"].color = new THREE.Color(0.3, 0.3, 0.3);

  return (
    <Bounds fit clip observe margin={1.0}>
      <SelectToZoom>
        <group position={[-0.36, 0.19, -0.01]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Plane044.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            geometry={nodes.Plane044_1.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Plane044_2.geometry}
            material={materials["Material.006"]}
          />
        </group>
        <group position={[0.4, -0.23, -0.74]} rotation={[Math.PI / 2, 0.16, 0]}>
          <mesh
            geometry={nodes.Plane048.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Plane048_1.geometry}
            material={materials["Material.006"]}
          />
        </group>
        <group
          position={[-0.49, -0.51, -0.74]}
          rotation={[Math.PI / 2, 0.16, 0]}
        >
          <mesh
            geometry={nodes.Circle022.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Circle022_1.geometry}
            material={materials["Material.006"]}
          />
        </group>
        <group
          position={[-0.49, -0.51, 0.74]}
          rotation={[Math.PI / 2, 0.16, 0]}
        >
          <mesh
            geometry={nodes.Circle023.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Circle023_1.geometry}
            material={materials["Material.006"]}
          />
        </group>
        <group position={[0.4, -0.23, 0.74]} rotation={[Math.PI / 2, 0.16, 0]}>
          <mesh
            geometry={nodes.Plane061.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Plane061_1.geometry}
            material={materials["Material.006"]}
          />
        </group>
        <group
          position={[1.46, -1.4, 0.97]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1.5, 1]}
        >
          <mesh
            geometry={nodes.SuperToroid004.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_2.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_3.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[0.16, -1.4, 0.97]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1.5, 1]}
        >
          <mesh
            geometry={nodes.SuperToroid004.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_2.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_3.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[-1.11, -1.4, 0.97]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1.5, 1]}
        >
          <mesh
            geometry={nodes.SuperToroid004.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_2.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_3.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[1.46, -1.4, -0.97]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1.5, 1]}
        >
          <mesh
            geometry={nodes.SuperToroid004.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_2.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_3.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[0.16, -1.4, -0.97]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1.5, 1]}
        >
          <mesh
            geometry={nodes.SuperToroid004.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_2.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_3.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <group
          position={[-1.11, -1.4, -0.97]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1.5, 1]}
        >
          <mesh
            geometry={nodes.SuperToroid004.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_1.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_2.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            geometry={nodes.SuperToroid004_3.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          geometry={nodes.g1.geometry}
          material={materials["Material.005"]}
          position={[1.45, -1.39, 0.55]}
        />
        <mesh
          geometry={nodes.g2.geometry}
          material={materials["Material.005"]}
          position={[0.16, -1.39, 0.55]}
        />
        <mesh
          geometry={nodes.g3.geometry}
          material={materials["Material.005"]}
          position={[-1.11, -1.39, 0.55]}
        />
        <mesh
          geometry={nodes.g4.geometry}
          material={materials["Material.005"]}
          position={[1.45, -1.39, -0.59]}
          rotation={[0, 0, Math.PI]}
          scale={-1}
        />
        <mesh
          geometry={nodes.g5.geometry}
          material={materials["Material.005"]}
          position={[0.16, -1.39, -0.59]}
          rotation={[0, 0, Math.PI]}
          scale={-1}
        />
        <mesh
          geometry={nodes.g6.geometry}
          material={materials["Material.005"]}
          position={[-1.11, -1.39, -0.59]}
          rotation={[0, 0, Math.PI]}
          scale={-1}
        />
        <group position={[1.07, 0.14, 0.09]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Plane014.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            geometry={nodes.Plane014_1.geometry}
            material={materials["Zinc 001 001"]}
          />
          <mesh
            geometry={nodes.Plane014_2.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            geometry={nodes.Plane014_3.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            geometry={nodes.Plane014_4.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            geometry={nodes.Plane014_5.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            geometry={nodes.Plane014_6.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            geometry={nodes.Plane014_7.geometry}
            material={materials["Material.012"]}
          />
          <mesh
            geometry={nodes.Plane014_8.geometry}
            material={materials["Material.010"]}
          />
        </group>
      </SelectToZoom>
      <ContactShadows
        renderOrder={2}
        frames={1}
        resolution={1024}
        scale={5}
        blur={2}
        opacity={0.5}
        far={100}
        position={[0, -1.8, 0]}
      />
    </Bounds>
  );
};

useGLTF.preload("/maven-3js.glb");

const MavenCanvas = () => {
  const { gridSize, ...gridConfig } = {
    gridSize: [10.5, 10.5],
    cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
    cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
    cellColor: "#6f6f6f",
    sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
    sectionColor: "#9d4b4b",
    fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
    followCamera: false,
    infiniteGrid: true,
  };

  return (
    <div className="h-screen">
      <Canvas gl={{ toneMappingExposure: 0.7 }}>
        <Suspense fallback={null}>
          <Environment
            files="/old_depot_2k.hdr"
            ground={{ height: 100, radius: 130 }}
          />

          {/* <ambientLight intensity={0.0} /> */}
          {/* <Environment preset="warehouse" blur={30} opacity={0.5} /> */}
          <spotLight position={[50, 50, -30]} />
          <pointLight position={[-10, -10, -10]} color="white" intensity={2} />
          <pointLight position={[0, -5, 5]} intensity={0.5} />
          <directionalLight
            position={[0, -5, 0]}
            color="white"
            intensity={1}
            castShadow
          />
          <Maven
            position={[0, 8, 0]}
            scale={20}
            rotation-y={(-Math.PI * 3.5) / 4}
          />

          {/* <Grid position={[0, 0, 0]} args={[1, 1]} /> */}
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.0}
          makeDefault
        />
        {/* <PerspectiveCamera position={[-30, 10, 100]} fov={50} /> */}

        {/* <Html fullscreen className="data" prepend >

        </Html> */}
      </Canvas>
    </div>
  );
};

export default MavenCanvas;
