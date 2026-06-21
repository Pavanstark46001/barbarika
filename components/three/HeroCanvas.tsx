'use client'
import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField({ count = 1200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3.5 + Math.random() * 5.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [count])

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.025,
        color: '#6366f1',
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    []
  )

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.045
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.08
  })

  return <points ref={ref} geometry={geometry} material={material} />
}

function SecondaryParticles({ count = 450 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 1.5 + Math.random() * 2.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [count])

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.018,
        color: '#22d3ee',
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    []
  )

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = -state.clock.elapsedTime * 0.07
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.04) * 0.06
  })

  return <points ref={ref} geometry={geometry} material={material} />
}

function WireframeOrbs() {
  const outerRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()

  const outerGeo = useMemo(() => new THREE.IcosahedronGeometry(2.2, 1), [])
  const innerGeo = useMemo(() => new THREE.OctahedronGeometry(1.1, 0), [])

  const outerMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#4f46e5',
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      }),
    []
  )

  const innerMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#7c3aed',
        wireframe: true,
        transparent: true,
        opacity: 0.32,
      }),
    []
  )

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (outerRef.current) {
      outerRef.current.rotation.y = t * 0.07
      outerRef.current.rotation.x = Math.sin(t * 0.13) * 0.18
      outerRef.current.rotation.y += mouse.x * 0.008
      outerRef.current.rotation.x -= mouse.y * 0.008
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.14
      innerRef.current.rotation.z = t * 0.09
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.4}>
      <group>
        <mesh ref={outerRef} geometry={outerGeo} material={outerMat} />
        <mesh ref={innerRef} geometry={innerGeo} material={innerMat} />
      </group>
    </Float>
  )
}

function OrbitalRing({
  radius,
  color,
  rotX = 0,
  speed = 1,
}: {
  radius: number
  color: string
  rotX?: number
  speed?: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  const geo = useMemo(() => new THREE.TorusGeometry(radius, 0.005, 16, 100), [radius])
  const mat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.28 }),
    [color]
  )

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z += speed * 0.003
    ref.current.rotation.x = rotX + Math.sin(state.clock.elapsedTime * 0.18) * 0.09
  })

  return <mesh ref={ref} geometry={geo} material={mat} />
}

function Scene() {
  return (
    <>
      <ParticleField count={1200} />
      <SecondaryParticles count={400} />
      <WireframeOrbs />
      <OrbitalRing radius={3.2}  color="#6366f1" rotX={Math.PI / 4}  speed={1} />
      <OrbitalRing radius={4.1}  color="#22d3ee" rotX={-Math.PI / 6} speed={-0.65} />
      <OrbitalRing radius={2.6}  color="#a78bfa" rotX={Math.PI / 3}  speed={1.25} />
    </>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{ background: 'transparent', pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
