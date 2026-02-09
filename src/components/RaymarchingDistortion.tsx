'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Vector2 } from 'three';

// Vertex Shader: Standard full-screen quad
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment Shader: Raymarching & Lighting
const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  
  varying vec2 vUv;

  // --- SDF Primitives ---
  float sdSphere(vec3 p, float s) {
    return length(p) - s;
  }

  float sdTorus(vec3 p, vec2 t) {
    vec2 q = vec2(length(p.xz) - t.x, p.y);
    return length(q) - t.y;
  }

  float sdOctahedron(vec3 p, float s) {
    p = abs(p);
    return (p.x + p.y + p.z - s) * 0.57735027;
  }

  // --- Smooth Min / Morphing ---
  float smin(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
  }

  // Rotation Matrix
  mat2 rot(float a) {
    float s = sin(a);
    float c = cos(a);
    return mat2(c, -s, s, c);
  }

  // --- Scene Map ---
  float map(vec3 p) {
    vec3 p1 = p;
    
    // Rotate the entire scene slowly
    p1.xz *= rot(uTime * 0.2);
    p1.xy *= rot(uTime * 0.15);

    // Mouse interaction: distort space
    vec2 mouse = (uMouse * 2.0 - 1.0);
    p1.xy += mouse * 0.5 * sin(p1.z * 0.5 + uTime);

    // Morphing shapes
    // 0-10s cycle
    float cycle = mod(uTime * 0.5, 3.0);
    float shape1 = sdSphere(p1, 1.2);
    float shape2 = sdTorus(p1, vec2(1.0, 0.4));
    float shape3 = sdOctahedron(p1, 1.3);

    float d = shape1;
    
    // Smooth morph using mix
    float t = smoothstep(0.0, 1.0, fract(cycle));
    
    if (cycle < 1.0) {
      d = mix(shape1, shape2, t);
    } else if (cycle < 2.0) {
      d = mix(shape2, shape3, t);
    } else {
      d = mix(shape3, shape1, t);
    }
    
    return d;
  }

  // --- Raymarching Loop ---
  float raymarch(vec3 ro, vec3 rd) {
    float dO = 0.0;
    for(int i=0; i<128; i++) {
        vec3 p = ro + rd * dO;
        float dS = map(p);
        dO += dS;
        if(dO > 100.0 || abs(dS) < 0.001) break;
    }
    return dO;
  }

  // --- Normal Calculation ---
  vec3 getNormal(vec3 p) {
    float d = map(p);
    vec2 e = vec2(0.001, 0.0);
    vec3 n = d - vec3(
        map(p - e.xyy),
        map(p - e.yxy),
        map(p - e.yyx)
    );
    return normalize(n);
  }

  // --- Color & Lighting ---
  vec3 getLight(vec3 p, vec3 rd) {
    vec3 n = getNormal(p);
    vec3 lightPos = vec3(2.0, 5.0, -3.0);
    vec3 l = normalize(lightPos - p);
    
    // Diffuse
    float diff = clamp(dot(n, l), 0.0, 1.0);
    
    // Fresnel
    float fresnel = pow(1.0 + dot(rd, n), 3.0);
    
    // Iridescense (Gradient based on normal)
    vec3 colA = vec3(0.5, 0.0, 1.0); // Purple
    vec3 colB = vec3(0.0, 1.0, 1.0); // Cyan
    vec3 colC = vec3(1.0, 0.0, 0.5); // Pink
    
    vec3 baseBase = mix(colA, colB, n.y * 0.5 + 0.5);
    vec3 iridescent = mix(baseBase, colC, fresnel);
    
    // Specular
    vec3 r = reflect(-l, n);
    float spec = pow(max(dot(r, -rd), 0.0), 32.0);
    
    // Combine
    vec3 finalCol = iridescent * (diff * 0.5 + 0.5) + vec3(1.0) * spec * 0.8 + fresnel * 0.5;
    
    return finalCol;
  }

  void main() {
    // UV centered [-1, 1], corrected for aspect ratio
    vec2 uv = (vUv - 0.5) * 2.0;
    // Fix aspect ratio in shader using resolution uniform
    uv.x *= uResolution.x / uResolution.y;

    vec3 ro = vec3(0.0, 0.0, -4.0); // Camera origin
    vec3 rd = normalize(vec3(uv, 1.5)); // Ray direction

    float d = raymarch(ro, rd);
    
    // Background color (Deep Void with subtle gradient)
    vec3 col = vec3(0.01, 0.01, 0.02) + 0.1 * rd.y; 

    if(d < 100.0) {
        vec3 p = ro + rd * d;
        col = getLight(p, rd);
    }
    
    // Gamma correction
    col = pow(col, vec3(0.4545));

    gl_FragColor = vec4(col, 1.0);
  }
`;

const ShaderPlane = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const { size, mouse } = useThree();

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new Vector2(0, 0) },
            uResolution: { value: new Vector2(size.width, size.height) }
        }),
        []
    );

    useFrame((state) => {
        if (meshRef.current) {
            const material = meshRef.current.material as THREE.ShaderMaterial;
            material.uniforms.uTime.value = state.clock.elapsedTime;
            
            // Mouse smoothing
            material.uniforms.uMouse.value.lerp(mouse, 0.1);
            
            // Update resolution if resized
            material.uniforms.uResolution.value.set(size.width, size.height);
        }
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[10, 10]} /> {/* Full coverage */}
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

export default function RaymarchingDistortion() {
    return (
        <div className="fixed inset-0 z-[-1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ShaderPlane />
            </Canvas>
        </div>
    );
}
