'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface KineticTypographyProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export default function KineticTypography({ text, className, as = 'h1' }: KineticTypographyProps) {
  const ref = useRef<HTMLElement>(null);
  
  // Track scroll progress relative to this element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Map scroll progress (0 to 1) to font weight (100 to 900)
  // Starts thin (100), gets thick (900) in the middle of viewport, then thin again
  const fontWeight = useTransform(scrollYProgress, [0, 0.5, 1], [100, 900, 100]);

  const Component = motion[as] as any; // Cast to any to avoid complex framer-motion typing issues with dynamic tags

  return (
    <Component
      ref={ref}
      className={className}
      style={{ fontWeight }}
    >
      {text}
    </Component>
  );
}
