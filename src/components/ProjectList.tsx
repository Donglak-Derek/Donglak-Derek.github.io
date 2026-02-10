'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'jok-eng',
    title: 'Jok-Eng',
    category: 'AI Platform',
    year: '2026',
    description: 'The Storyteller\'s Toolkit. Transforming English learning through humor and social context.',
    image: '/jok-eng-dashboard.png',
    link: '/work/jok-eng',
    liveUrl: 'https://jok-eng.firebaseapp.com' // Placeholder
  },
  {
    id: 'isom',
    title: 'ISOM',
    category: 'Web Experience',
    year: '2024',
    description: 'Immersive audio-visual journey for an independent music label.',
    image: '/work/explorations/isom.jpg', 
    link: '/work/isom',
    liveUrl: 'https://isom.co' // Placeholder
  },
  {
    id: 'pattern-app',
    title: 'Pattern App',
    category: 'Mobile UI/UX',
    year: '2025',
    description: 'Interface design exploration for a modern pattern recognition tool.',
    image: '/pattern/Pattern-1.png', 
    link: '/work/pattern',
    // No live URL for this one typically, unless specified
  }
];

export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>('.project-item');
    
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full max-w-[1800px] mx-auto px-0 md:px-6 py-32 space-y-48">
      {projects.map((project, index) => (
        <div key={project.id} className="project-item group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Large Image (Takes up 7/12 columns) */}
          <Link href={project.link} className="lg:col-span-7 block relative aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>

          {/* Minimal Text (Takes up 5/12 columns) */}
          <div className="lg:col-span-5 space-y-6 px-6 lg:px-0">
            <div className="flex items-baseline justify-between border-b border-white pb-4">
              <h2 className="text-6xl font-bold tracking-tighter uppercase">{project.title}</h2>
              <span className="text-xl font-mono">{project.year}</span>
            </div>
            
            <div className="flex justify-between items-start">
                <span className="text-sm font-mono uppercase tracking-widest text-neutral-500">{project.category}</span>
                <p className="text-xl max-w-sm font-light text-neutral-300 leading-relaxed text-right">
                    {project.description}
                </p>
            </div>
            
            <div className="flex gap-8 mt-8">
                 <Link 
                    href={project.link}
                    className="text-lg font-bold border-b-2 border-transparent group-hover:border-white transition-colors"
                 >
                    VIEW CASE STUDY →
                 </Link>
                 
                 {project.liveUrl && (
                     <Link 
                        href={project.liveUrl}
                        target="_blank"
                        className="text-lg font-bold border-b-2 border-transparent hover:border-white transition-colors text-neutral-400 hover:text-white"
                     >
                        VISIT SITE ↗
                     </Link>
                 )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
