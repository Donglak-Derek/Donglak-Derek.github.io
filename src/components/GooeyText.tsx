'use client';

import { useEffect, useRef } from 'react';

export default function GooeyText() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Particles array
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      // Clear with slight transparency for trails? No, for gooey we need clear frames usually
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // --- Draw Text ---
      ctx.fillStyle = 'white';
      ctx.font = 'italic 900 12vw "Instrument Serif", serif'; // Match the requested font style
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const text = "DESIGN. DEVELOP. SHIP.";
      
      // We can't easily distort individual letters of a single fillText string in standard Canvas 
      // without pixel manipulation or libraries. 
      // Instead, let's draw the text, and spawn particles around it.
      
      // To simulate "wave-like motion" of characters, we can draw each char individually
      const chars = text.split('');
      const charWidth = canvas.width / (chars.length + 2); // Approximate spacing
      let startX = cx - (chars.length * charWidth) / 2;

      chars.forEach((char, i) => {
        const wave = Math.sin(time * 2 + i * 0.5) * 20; // Y-axis wave
        ctx.fillText(char, startX + i * charWidth, cy + wave);
        
        // --- Spawn Particles ---
        // Occasionally spawn a particle from a character's position
        if (Math.random() < 0.05) {
            particles.push({
                x: startX + i * charWidth + (Math.random() - 0.5) * 50,
                y: cy + wave + (Math.random() - 0.5) * 50,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 15 + 5
            });
        }
      });

      // --- Update & Draw Particles ---
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.size *= 0.96; // Shrink

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.size < 0.5) {
            particles.splice(i, 1);
        }
      }

      time += 0.02;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none mix-blend-screen">
      {/* The Canvas */}
      <canvas ref={canvasRef} style={{ filter: 'url(#goo)' }} />

      {/* The SVG Filter definition */}
      <svg width="0" height="0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
