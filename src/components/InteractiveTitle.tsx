'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface InteractiveTitleProps {
  text: string;
  className?: string;
}

export default function InteractiveTitle({ text, className = '' }: InteractiveTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const chars = charsRef.current;
    if (!chars.length) return;

    const handleMouseMove = (e: MouseEvent) => {
      chars.forEach((char) => {
        if (!char) return;

        const rect = char.getBoundingClientRect();
        const charCenterX = rect.left + rect.width / 2;
        const charCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - charCenterX;
        const dy = e.clientY - charCenterY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Interaction Radius: 200px
        // Max Scale: 2x
        const hoverRadius = 200;
        let scale = 1;

        if (dist < hoverRadius) {
          scale = 1 + ((hoverRadius - dist) / hoverRadius) * 1; // Maps 0 dist -> +1 scale (total 2x)
        }

        gsap.to(char, {
          scale: scale,
          duration: 0.1,
          overwrite: 'auto', // Ensure snappy response
          ease: 'power1.out'
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          ref={(el) => { if (el) charsRef.current[i] = el; }} // No return value needed
          className="inline-block origin-center will-change-transform"
        >
          {char}
        </span>
      ))}
    </div>
  );
}
