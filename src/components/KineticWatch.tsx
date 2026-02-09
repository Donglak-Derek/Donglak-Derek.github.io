'use client';

import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';
const KEYWORDS = ['DESIGN', 'ENGINEER', 'CREATE', 'SHIP', 'VOID', 'LIGHT', 'TIME', 'SPACE', 'REACT', 'NEXTJS', 'THREEJS', 'GSAP'];

export default function KineticWatch() {
  const [time, setTime] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Clock Logic
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      setTime(`${h}:${m}:${s}`);
    };
    const timer = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(timer);
  }, []);

  // Animation Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameId: number;
    let angle = 0;
    
    // Particles representing "flying letters"
    const particles: { 
        x: number; 
        y: number; 
        char: string; 
        speed: number; 
        radius: number; 
        angleOffset: number 
        opacity: number;
    }[] = [];

    // Initialize particles
    for (let i = 0; i < 300; i++) {
        particles.push({
            x: 0,
            y: 0,
            char: KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)], 
            speed: 0.002 + Math.random() * 0.005,
            radius: 150 + Math.random() * 400, // Wider spread
            angleOffset: Math.random() * Math.PI * 2,
            opacity: Math.random()
        });
    }

    // Mouse tracking
    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear completely for crisp text

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        angle += 0.002; // Faster rotation

        particles.forEach(p => {
             // Orbital motion
            const currentAngle = angle * (p.radius > 300 ? -1 : 1) + p.angleOffset;
            const targetX = cx + Math.cos(currentAngle) * p.radius;
            const targetY = cy + Math.sin(currentAngle) * p.radius;

            p.x = targetX;
            p.y = targetY;

            // Interaction: Mouse Proximity
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const hoverRadius = 150;
            
            // Base size randomized per particle (stored or calculated)
            // Let's re-calculate cleanly or add a 'size' prop to particle type
            let baseSize = 12; 
            let scale = 1;

            if (dist < hoverRadius) {
                // Scale up based on proximity
                scale = 1 + (hoverRadius - dist) / hoverRadius * 2; // Up to 3x size
                
                // Repel effect (Optional: push particles away slightly)
                // p.x -= dx * 0.1;
                // p.y -= dy * 0.1;
            }

            // Random Scramble
            if (Math.random() < 0.05) {
                p.char = Math.random() > 0.9 
                    ? KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)] 
                    : CHARS[Math.floor(Math.random() * CHARS.length)];
            }

            // Flicker Opacity
            if (Math.random() < 0.1) p.opacity = Math.random();
            
            const finalSize = Math.floor(baseSize * scale + (Math.random() * 5));
            ctx.font = `${finalSize}px "Geist Mono", monospace`;

            ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
            ctx.fillText(p.char, p.x, p.y);
        });

        frameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Chaos Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Central Watch anchor */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="text-[12vw] font-bold tracking-tighter text-white font-sans tabular-nums leading-none mix-blend-difference">
            {time}
        </div>
      </div>
    </div>
  );
}
