import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { ArrowUpRight, CheckCircle2, Instagram, Youtube, Layout, Smartphone } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-24 pb-12 overflow-x-hidden">
        {/* Hero */}
        <section className="text-center space-y-8 max-w-4xl mx-auto px-4 py-20 relative">
          <div className="fixed inset-0 z-[-1] pointer-events-none bg-grid-purple animate-glow" />
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-[#666]">
            Design.<br/>Develop.<br/>Ship.
          </h1>
          
          <p className="text-base md:text-xl text-[#888] max-w-2xl mx-auto font-mono">
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
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-6 py-3 border border-[#333] text-[#888] font-semibold rounded hover:text-white hover:border-white transition-all"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* Featured Project Case Study (Jok-Eng) */}
        <div id="work" className="border-t border-[#222]">
           {/* Case Study Integration */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="mb-20">
                     <span className="text-xs font-mono text-[#444] uppercase tracking-widest block mb-4">Featured Project</span>
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6">Jok-Eng</h2>
                    <p className="text-lg md:text-2xl text-[#888] max-w-3xl leading-relaxed">
                        The Storyteller's Toolkit. An AI-powered platform transforming how English learners master social context through humor and storytelling.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <a href="https://jok-eng.com" target="_blank" className="px-6 py-3 bg-white text-black font-semibold rounded flex items-center gap-2 hover:bg-[#ccc] transition-colors">
                            Visit Live Site <ArrowUpRight size={18} />
                        </a>
                    </div>

                    {/* Project Meta */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-[#222]">
                        <div>
                            <h3 className="text-xs font-mono text-[#666] uppercase mb-2">Role</h3>
                            <p className="font-medium">Product Designer & Founder</p>
                        </div>
                        <div>
                            <h3 className="text-xs font-mono text-[#666] uppercase mb-2">Responsibility</h3>
                            <p className="font-medium">UI/UX, Frontend, Branding</p>
                        </div>
                        <div>
                            <h3 className="text-xs font-mono text-[#666] uppercase mb-2">Timeline</h3>
                            <p className="font-medium">2026 - Present</p>
                        </div>
                        <div>
                            <h3 className="text-xs font-mono text-[#666] uppercase mb-2">Stack</h3>
                            <p className="font-medium">Next.js, AI Integration, SNS</p>
                        </div>
                    </div>
                </div>

                {/* Hero Image / Product Shot */}
                <div className="w-full bg-[#111] border border-[#222] rounded-xl py-20 mb-20 overflow-hidden relative shadow-2xl">
                     <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 pointer-events-none" />
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <div className="aspect-video bg-[#050505] border border-[#333] rounded-lg flex items-center justify-center relative shadow-inner mx-auto max-w-4xl">
                            <span className="text-[#333] font-mono text-sm tracking-widest">[ MAIN DASHBOARD SCREENSHOT ]</span>
                        </div>
                    </div>
                </div>

                {/* The Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-32">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center text-sm font-mono text-[#fff]">01</span>
                            The Problem
                        </h3>
                        <p className="text-[#888] leading-relaxed">
                            Traditional language learning apps focus on grammar and vocabulary drills. However, intermediate learners often struggle with <strong>social context</strong>—knowing <em>what</em> to say in an awkward silence, how to tell a joke, or how to sound natural, not robotic.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-sm font-mono">02</span>
                            The Solution
                        </h3>
                        <p className="text-[#888] leading-relaxed">
                            Jok-Eng uses AI to generate context-aware scripts for real life. From "The 'Small Talk' Shield" to "Turning Awkward into Gold," the platform provides learners with the <strong>narrative tools</strong> they need to survive and thrive in social situations.
                        </p>
                    </div>
                </div>

                {/* Design Process (Wireframes & Iterations) */}
                <div className="mb-32">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center text-sm font-mono text-[#fff]">03</span>
                      Design Process
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Wireframes Placeholder */}
                      <div className="bg-[#111] border border-[#222] rounded-xl p-8 aspect-video flex flex-col items-center justify-center text-center space-y-4">
                          <span className="text-[#444] font-mono text-sm">[ WIREFRAMES IMAGE ]</span>
                          <p className="text-[#666] text-sm max-w-xs">Initial sketches focusing on "Choice Architecture" to reduce cognitive load.</p>
                      </div>
                      {/* Before/After Placeholder */}
                      <div className="bg-[#111] border border-[#222] rounded-xl p-8 aspect-video flex flex-col items-center justify-center text-center space-y-4">
                          <span className="text-[#444] font-mono text-sm">[ BEFORE / AFTER IMAGE ]</span>
                          <p className="text-[#666] text-sm max-w-xs">Iterating on the "Scenario Card" layout based on user feedback.</p>
                      </div>
                  </div>
                </div>

                {/* Pillar 1: The Product UI */}
                <div className="mb-32">
                    <h3 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <Layout className="text-blue-500" /> The Product UI
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#050505] border border-[#222] rounded-xl p-8 aspect-[4/3] flex flex-col justify-end">
                            <span className="text-xs font-mono text-[#444] mb-2 uppercase">Scenario Selection</span>
                            <p className="text-lg font-medium text-white">Intuitive Card Grid</p>
                        </div>
                        <div className="bg-[#050505] border border-[#222] rounded-xl p-8 aspect-[4/3] flex flex-col justify-end">
                            <span className="text-xs font-mono text-[#444] mb-2 uppercase">Learning Mode</span>
                            <p className="text-lg font-medium text-white">Focus-First Typography</p>
                        </div>
                    </div>
                </div>

                {/* Pillar 2: Brand & Content Strategy (SNS) */}
                 <div className="bg-[#080808] border border-[#222] rounded-2xl p-6 md:p-12 mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <Smartphone className="text-pink-500" /> Content Strategy
                            </h3>
                            <p className="text-[#888] max-w-xl">
                                A product is nothing without users. I developed a unified visual identity for social media to break down complex English nuances into digestible, 15-second visual cards and videos.
                            </p>
                        </div>
                    </div>

                    {/* SNS Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Placeholder 1 */}
                        <div className="aspect-[9/16] bg-[#111] border border-[#333] rounded-lg flex items-center justify-center relative group overflow-hidden">
                            <Instagram className="text-[#333] group-hover:text-pink-500 transition-colors" size={32} />
                            <span className="absolute bottom-4 left-4 text-xs font-mono text-[#444]">IG Reel Cover</span>
                        </div>
                        {/* Placeholder 2 */}
                        <div className="aspect-[9/16] bg-[#111] border border-[#333] rounded-lg flex items-center justify-center relative group overflow-hidden">
                            <span className="text-[#333] font-mono text-xs text-center px-4">"How to be Sarcastic"</span>
                            <span className="absolute bottom-4 left-4 text-xs font-mono text-[#444]">TikTok Graphic</span>
                        </div>
                        {/* Placeholder 3 */}
                        <div className="aspect-[9/16] bg-[#111] border border-[#333] rounded-lg flex items-center justify-center relative group overflow-hidden">
                            <span className="text-[#333] font-mono text-xs text-center px-4">"Office Slang"</span>
                            <span className="absolute bottom-4 left-4 text-xs font-mono text-[#444]">Carousel Slide</span>
                        </div>
                        {/* Placeholder 4 */}
                        <div className="aspect-[9/16] bg-[#111] border border-[#333] rounded-lg flex items-center justify-center relative group overflow-hidden">
                            <Youtube className="text-[#333] group-hover:text-red-500 transition-colors" size={32} />
                            <span className="absolute bottom-4 left-4 text-xs font-mono text-[#444]">Shorts Template</span>
                        </div>
                    </div>
                </div>

                {/* Key Takeaways */}
                <div>
                    <h3 className="text-2xl font-bold mb-8">Role & Impact</h3>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <CheckCircle2 className="text-green-500 shrink-0" />
                            <p className="text-[#888]">Designed and shipped the MVP using Next.js, integrating OpenAI API for real-time script generation.</p>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="text-green-500 shrink-0" />
                            <p className="text-[#888]">Created a set of reusable design components to keep the app and social media looking consistent.</p>
                        </div>
                        <div className="flex gap-4">
                            <CheckCircle2 className="text-green-500 shrink-0" />
                            <p className="text-[#888]">Grew user engagement through consistent, high-quality visual content on SNS platforms.</p>
                        </div>
                    </div>
                </div>

                {/* What's Next */}
                <div className="mt-16 pt-8 border-t border-[#222]">
                    <h4 className="text-lg font-bold mb-4 text-white">What&apos;s Next?</h4>
                    <p className="text-[#888] leading-relaxed">
                        I am currently conducting user interviews with non-native speakers to refine the scenario-generation flow. My goal is to further reduce cognitive load and introduce "Community Remixing" features to spur organic growth.
                    </p>
                </div>

            </section>
        </div>

        {/* Other Design Explorations */}
        <section className="max-w-6xl mx-auto px-6 pb-32">
            <h2 className="text-3xl font-bold mb-2">Other Design Explorations</h2>
            <p className="text-[#888] mb-12 max-w-2xl">A collection of projects where I explore new platforms, branding, and user problems.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Project 1: Instagram Vision Pro */}
                <div className="group cursor-pointer">
                    <div className="aspect-[4/3] bg-[#111] border border-[#222] rounded-xl mb-4 overflow-hidden relative">
                         <div className="absolute inset-0 flex items-center justify-center text-[#333] font-mono text-xs">
                            [ VISION PRO UI ]
                         </div>
                    </div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">Instagram for Vision Pro</h3>
                    <p className="text-sm text-[#666] mb-2">Spatial Design • Concept</p>
                    <p className="text-sm text-[#888]">Redesigning a familiar social interface for an immersive 3D environment.</p>
                </div>

                {/* Project 2: Pattern App */}
                <div className="group cursor-pointer">
                    <div className="aspect-[4/3] bg-[#111] border border-[#222] rounded-xl mb-4 overflow-hidden relative">
                         <div className="absolute inset-0 flex items-center justify-center text-[#333] font-mono text-xs">
                            [ MOBILE APP UI ]
                         </div>
                    </div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">Pattern</h3>
                    <p className="text-sm text-[#666] mb-2">Mobile App • UI/UX</p>
                    <p className="text-sm text-[#888]">A clean, minimal mobile interface focused on rhythm and consistency.</p>
                </div>

                {/* Project 3: ISOM */}
                <div className="group cursor-pointer">
                    <div className="aspect-[4/3] bg-[#111] border border-[#222] rounded-xl mb-4 overflow-hidden relative">
                         <div className="absolute inset-0 flex items-center justify-center text-[#333] font-mono text-xs">
                            [ WEBSITE MOCKUP ]
                         </div>
                    </div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-green-400 transition-colors">ISOM School of Music</h3>
                    <p className="text-sm text-[#666] mb-2">Web Design • Client Work</p>
                    <p className="text-sm text-[#888]">Translating a physical business&apos;s vibe into a functional digital booking site.</p>
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
