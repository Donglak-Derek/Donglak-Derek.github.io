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
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">The Intersection of<br/>Logic & Creativity</h1>
            
            <div className="space-y-6 text-[#999] leading-relaxed">
              <p>
                I am a <strong className="text-white">UI/UX Designer</strong> and <strong className="text-white">Front-end Developer</strong> specialized in creating intuitive digital experiences. Currently, I'm pivoting from a background in Microsoft Azure engineering to focus entirely on user-centered design and interface development.
              </p>
              <p>
                My journey in tech began with cloud infrastructure, where I learned the importance of scalability and performance. However, I quickly realized my passion lay in the visual and interactive layers of technology, the parts that people actually touch and feel.
              </p>
              <p>
                I believe that good design is invisible. It should solve problems without creating new ones. When I'm not pushing pixels in Figma or writing clean CSS, I'm exploring new web technologies and adhering to the "Ship fast, learn fast" philosophy.
              </p>
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
