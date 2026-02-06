import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="aspect-square bg-[#111] rounded-full overflow-hidden border border-[#333] relative">
               {/* Placeholder for Profile Image */}
               <div className="absolute inset-0 flex items-center justify-center text-[#444] text-xs font-mono">
                 [PROFILE PHOTO]
               </div>
               {/* <img src="/profile.jpg" alt="Derek Han" className="w-full h-full object-cover" /> */}
            </div>
            
            <div className="flex gap-4 justify-center">
              <a href="https://github.com/Donglak-Derek" target="_blank" className="p-2 border border-[#333] rounded-lg text-[#888] hover:text-white hover:border-white transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/hiderek/" target="_blank" className="p-2 border border-[#333] rounded-lg text-[#888] hover:text-white hover:border-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:donglak.han@gmail.com" className="p-2 border border-[#333] rounded-lg text-[#888] hover:text-white hover:border-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Building Logic,<br/>Designing for Humans</h1>
            
            <div className="space-y-8 text-[#999] leading-relaxed">
              <p className="text-lg md:text-xl text-white font-medium">
                I build products by listening to users and solving their technical frustrations. From Microsoft Azure support to Product Recovery at IKEA, I have spent my career fixing things for people—now, I design them so they don't break.
              </p>

              <div className="space-y-2">
                <h3 className="text-white font-bold">The Engineer&apos;s Brain</h3>
                <p>
                  I understand how the cloud works (Azure) and how systems are built. This technical foundation ensures that every pixel I push is backed by a feasible, scalable architecture. I don&apos;t just design screens; I design systems.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-white font-bold">The Designer&apos;s Eye</h3>
                <p>
                  I use that technical backbone to build designs that actually work in the real world. My goal is simple: Create interfaces that feel invisible, solving user problems without creating new technical debt.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-white font-bold">The Human Connection</h3>
                <p>
                  Living in a diverse community in Texas, I saw a real problem with English learning. That&apos;s why I built <strong className="text-white">Jok-Eng</strong>—not just as a coding project, but to solve a real human struggle I observed in my daily life.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-[#222]">
              <h3 className="text-sm font-mono text-[#666] mb-4 uppercase tracking-wider">Technical Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind', 'Figma', 'Git', 'Azure'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-[#111] border border-[#222] rounded-full text-xs text-[#888] font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
