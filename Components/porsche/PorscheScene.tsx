"use client";

import * as THREE from 'three';
import { useLayoutEffect, useRef, useState } from 'react';
import { Canvas, applyProps, useFrame, useThree } from '@react-three/fiber';
import { PerformanceMonitor, AccumulativeShadows, RandomizedLight, Environment, Lightformer, Float, useGLTF } from '@react-three/drei';
import { LayerMaterial, Color, Depth } from 'lamina';
import { GLTF } from 'three-stdlib';

interface PorscheProps {
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
}

interface CameraRigProps {
  v?: THREE.Vector3;
}

interface LightformersProps {
  positions?: number[];
}

interface GLTFResult extends GLTF {
  nodes: {
    [name: string]: THREE.Mesh;
  };
  materials: {
    [name: string]: THREE.Material;
  };
}

export function PorscheScene() {
  const [degraded, degrade] = useState<boolean>(false);
  return (
    <Canvas shadows camera={{ position: [5, 0, 15], fov: 30 }}>
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <ambientLight intensity={0.5} />
      <Porsche scale={1.6} position={[-0.5, -0.18, 0]} rotation={[0, Math.PI / 5, 0]} />
      <AccumulativeShadows position={[0, -1.16, 0]} frames={100} alphaTest={0.9} scale={10}>
        <RandomizedLight amount={8} radius={10} ambient={0.5} position={[1, 5, -1]} />
      </AccumulativeShadows>
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <Environment frames={degraded ? 1 : Infinity} resolution={256} background blur={1}>
        <Lightformers />
      </Environment>
      <CameraRig />
    </Canvas>
  );
}

function Porsche(props: PorscheProps) {
  const { scene, nodes, materials } = useGLTF('/free_porsche_911_carrera_4s.glb');
  useLayoutEffect(() => {
    Object.values(nodes).forEach((node) => node.isMesh && (node.receiveShadow = node.castShadow = true));
    applyProps(materials.rubber, { color: '#222', roughness: 0.6, roughnessMap: null, normalScale: [4, 4] });
    applyProps(materials.window, { color: 'black', roughness: 0, clearcoat: 0.1 });
    applyProps(materials.coat, { envMapIntensity: 4, roughness: 0.5, metalness: 1 });
    applyProps(materials.paint, { envMapIntensity: 2, roughness: 0.45, metalness: 0.8, color: '#555' });
  }, [nodes, materials]);
  return <primitive object={scene} {...props} />;
}

function CameraRig({ v = new THREE.Vector3() }: CameraRigProps) {
  const { camera, clock } = useThree();
  return useFrame(() => {
    const t = clock.elapsedTime;
    camera.position.lerp(v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2), 0.05);
    camera.lookAt(0, 0, 0);
  });
}

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }: LightformersProps) {
  const group = useRef<THREE.Group>();
  useFrame((state, delta) => group.current && (group.current.position.z += delta * 10) > 20 && (group.current.position.z = -60));
  return (
    <>
      <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer key={i} form="circle" intensity={2} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[3, 1, 1]} />
          ))}
        </group>
      </group>
      <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
      <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
      <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer form="ring" color="red" intensity={1} scale={10} position={[-15, 4, -18]} target={[0, 0, 0]} />
      </Float>
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide} key={undefined} map={undefined} fog={undefined} id={undefined} dispose={undefined} attach={undefined} onUpdate={undefined} args={undefined} clone={undefined} copy={undefined} toJSON={undefined} uuid={undefined} type={undefined} userData={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} visible={undefined} isMaterial={undefined} alphaToCoverage={undefined} blendDst={undefined} blendDstAlpha={undefined} blendEquation={undefined} blendEquationAlpha={undefined} blending={undefined} blendSrc={undefined} blendSrcAlpha={undefined} clipIntersection={undefined} clippingPlanes={undefined} clipShadows={undefined} colorWrite={undefined} defines={undefined} depthFunc={undefined} depthTest={undefined} depthWrite={undefined} stencilWrite={undefined} stencilFunc={undefined} stencilRef={undefined} stencilWriteMask={undefined} stencilFuncMask={undefined} stencilFail={undefined} stencilZFail={undefined} stencilZPass={undefined} opacity={undefined} polygonOffset={undefined} polygonOffsetFactor={undefined} polygonOffsetUnits={undefined} precision={undefined} premultipliedAlpha={undefined} dithering={undefined} shadowSide={undefined} toneMapped={undefined} transparent={undefined} vertexColors={undefined} version={undefined} alphaTest={undefined} onBeforeCompile={undefined} customProgramCacheKey={undefined} setValues={undefined} needsUpdate={undefined} lightMap={undefined} lightMapIntensity={undefined} aoMap={undefined} aoMapIntensity={undefined} specularMap={undefined} alphaMap={undefined} envMap={undefined} combine={undefined} reflectivity={undefined} refractionRatio={undefined} wireframe={undefined} wireframeLinewidth={undefined} wireframeLinecap={undefined} wireframeLinejoin={undefined} displacementMap={undefined} displacementScale={undefined} displacementBias={undefined} bumpMap={undefined} bumpScale={undefined} emissive={undefined} emissiveIntensity={undefined} emissiveMap={undefined} flatShading={undefined} normalMap={undefined} normalMapType={undefined} normalScale={undefined} specular={undefined} shininess={undefined} metal={undefined} clearcoatMap={undefined} clearcoatRoughness={undefined} clearcoatRoughnessMap={undefined} clearcoatNormalScale={undefined} clearcoatNormalMap={undefined} ior={undefined} iridescenceMap={undefined} iridescenceIOR={undefined} iridescenceThicknessRange={undefined} iridescenceThicknessMap={undefined} sheenColor={undefined} sheenColorMap={undefined} sheenRoughness={undefined} sheenRoughnessMap={undefined} transmissionMap={undefined} thickness={undefined} thicknessMap={undefined} attenuationDistance={undefined} attenuationColor={undefined} specularIntensity={undefined} specularIntensityMap={undefined} specularColor={undefined} specularColorMap={undefined} clearcoat={undefined} sheen={undefined} transmission={undefined} isMeshStandardMaterial={undefined} roughness={undefined} metalness={undefined} roughnessMap={undefined} metalnessMap={undefined} envMapIntensity={undefined} gradientMap={undefined}>
          <Color color="#444" alpha={1} mode="normal" />
          <Depth colorA="blue" colorB="black" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
        </LayerMaterial>
      </mesh>
    </>
  );
}