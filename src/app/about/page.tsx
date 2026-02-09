import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ThreeBackground from "@/components/ThreeBackground";
import { Github, Linkedin, Mail } from 'lucide-react';

export default function About() {
  return (
    <>
      <Navbar />
      <ThreeBackground />
      <main className="max-w-5xl mx-auto px-6 py-32 relative z-10 min-h-screen flex flex-col justify-center">
        
        {/* Header / Intro */}
        <div className="mb-32 space-y-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-[#111] rounded-full overflow-hidden border border-[#333] relative shrink-0">
                   <Image 
                     src="/profile/profile.png" 
                     alt="Derek Han" 
                     fill 
                     className="object-cover"
                     priority
                   />
                </div>
                <div className="flex gap-6 mt-4 md:mt-0">
                  <a href="https://github.com/Donglak-Derek" target="_blank" className="text-[#666] hover:text-white transition-colors"><Github size={32} /></a>
                  <a href="https://linkedin.com/in/hiderek/" target="_blank" className="text-[#666] hover:text-white transition-colors"><Linkedin size={32} /></a>
                  <a href="mailto:donglak.han@gmail.com" className="text-[#666] hover:text-white transition-colors"><Mail size={32} /></a>
                </div>
            </div>

            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-white">
                DESIGNING <br/> 
                WITH <span className="text-[#444]">DEPTH.</span>
            </h1>
            
            <p className="text-3xl md:text-5xl font-medium text-white leading-tight max-w-4xl">
                I build high-performance interfaces fueled by <span className="text-[#888]">Full-Stack logic</span> and <span className="text-[#888]">AI efficiency.</span>
            </p>
        </div>

        {/* The Manifesto - Single Column, Bold */}
        <div className="space-y-32">
            
            <div className="space-y-6 border-l-2 border-[#333] pl-8 md:pl-12">
                <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] mb-2">01 — The Advantage</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Full-Stack Engineering.</h3>
                <p className="text-xl md:text-2xl text-[#888] font-medium leading-relaxed max-w-3xl">
                    I don't just design the "vibe"; I engineer it. With a background in <span className="text-white">MERN & Azure</span>, I ensure every interaction is performant, scalable, and shippable. No fake mockups—just code that works.
                </p>
            </div>

            <div className="space-y-6 border-l-2 border-[#333] pl-8 md:pl-12">
                <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] mb-2">02 — The Mindset</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">AI-Driven Speed.</h3>
                <p className="text-xl md:text-2xl text-[#888] font-medium leading-relaxed max-w-3xl">
                    AI is my co-pilot. I leverage generative tools to skip the mundane and focus on high-level problem solving. I push real products to market <span className="text-white">faster and smarter.</span>
                </p>
            </div>

            <div className="space-y-6 border-l-2 border-[#333] pl-8 md:pl-12">
                <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] mb-2">03 — The Solution</h2>
                <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Human Empathy.</h3>
                <p className="text-xl md:text-2xl text-[#888] font-medium leading-relaxed max-w-3xl">
                    <span className="text-white">Jok-Eng</span> was born from frustration and built with empathy. I saw a gap in language learning and used my full-stack roots to fix it. A real solution for real people.
                </p>
            </div>

        </div>

        {/* Tech Stack - Huge */}
        <div className="mt-32 pt-12 border-t border-[#222]">
           <h3 className="text-sm font-mono text-[#444] mb-8 uppercase tracking-widest">Technical Stack</h3>
           <div className="flex flex-wrap gap-x-8 gap-y-4">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind', 'Figma', 'Git', 'Azure', 'Python', 'AI/LLM'].map((skill) => (
                <span key={skill} className="text-2xl md:text-4xl font-bold text-[#333] hover:text-white transition-colors cursor-default">
                {skill}
                </span>
            ))}
           </div>
        </div>

      </main>
    </>
  );
}
