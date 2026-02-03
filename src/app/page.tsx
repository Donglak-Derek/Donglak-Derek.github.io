import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-12">
        {/* Hero */}
        <section className="text-center space-y-8 max-w-4xl px-4 py-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-[#666]">
            Design.<br/>Develop.<br/>Ship.
          </h1>
          
          <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto font-mono">
            I craft intuitive digital experiences with clean code and pixel-perfect design. 
            Merging UI/UX principles with modern frontend engineering.
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <Link 
              href="#work" 
              className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-[#ccc] transition-colors flex items-center gap-2"
            >
              View Work <ArrowUpRight size={18} />
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 border border-[#333] text-[#888] font-semibold rounded hover:text-white hover:border-white transition-all"
            >
              About Me
            </Link>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="w-full max-w-6xl px-6 py-20 border-t border-[#222]">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
            <span className="text-sm font-mono text-[#444]">01 — 03</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="group border border-[#222] bg-[#0a0a0a] rounded-xl overflow-hidden hover:border-[#444] transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-[#111] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 group-hover:opacity-100 opacity-50 transition-opacity" />
                {/* Image Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-[#333] font-mono text-xs">
                    PROJECT IMAGE
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                    <span className="text-[10px] font-mono border border-[#333] px-2 py-1 rounded text-[#888]">UI DESIGN</span>
                    <span className="text-[10px] font-mono border border-[#333] px-2 py-1 rounded text-[#888]">MOBILE</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Fintech Dashboard</h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  A complete redesign of a banking application focusing on accessibility and data visualization.
                </p>
              </div>
            </div>

            {/* Project Card 2 */}
             <div className="group border border-[#222] bg-[#0a0a0a] rounded-xl overflow-hidden hover:border-[#444] transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-[#111] relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-teal-500/20 group-hover:opacity-100 opacity-50 transition-opacity" />
                 <div className="w-full h-full flex items-center justify-center text-[#333] font-mono text-xs">
                    PROJECT IMAGE
                </div>
              </div>
              <div className="p-6">
                 <div className="flex gap-2 mb-4">
                    <span className="text-[10px] font-mono border border-[#333] px-2 py-1 rounded text-[#888]">UX RESEARCH</span>
                    <span className="text-[10px] font-mono border border-[#333] px-2 py-1 rounded text-[#888]">WEB APP</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Analytics Platform</h3>
                <p className="text-[#666] text-sm leading-relaxed">
                   Simplifying complex data workflows for enterprise users through intuitive interface design.
                </p>
              </div>
            </div>

            {/* Project Card 3 */}
             <div className="group border border-[#222] bg-[#0a0a0a] rounded-xl overflow-hidden hover:border-[#444] transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-[#111] relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-orange-500/20 group-hover:opacity-100 opacity-50 transition-opacity" />
                  <div className="w-full h-full flex items-center justify-center text-[#333] font-mono text-xs">
                    PROJECT IMAGE
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                    <span className="text-[10px] font-mono border border-[#333] px-2 py-1 rounded text-[#888]">PRODUCT</span>
                    <span className="text-[10px] font-mono border border-[#333] px-2 py-1 rounded text-[#888]">FRONTEND</span>
                </div>
                <h3 className="text-xl font-bold mb-2">E-commerce Experience</h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  Increasing conversion rates through a streamlined checkout flow and modern aesthetic.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-[#222] py-12 text-center text-[#444] text-sm font-mono">
        <p>&copy; 2024 Derek Han. Built with Next.js, Tailwind & Vercel.</p>
      </footer>
    </>
  );
}
