import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ThreeBackground from "@/components/ThreeBackground";

export default function JokEngCaseStudy() {
  return (
    <>
      <Navbar />
      <ThreeBackground />
      <main className="min-h-screen relative z-10 pb-32">
        
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-20 max-w-[1800px] mx-auto">
            <h1 className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-white uppercase mix-blend-difference mb-8">
                Jok-Eng
            </h1>
            <p className="text-xl md:text-3xl text-white font-light max-w-4xl leading-tight">
                Engineering an AI-Powered Language Learning Experience through <span className="text-[#888]">High-Fidelity Prototyping.</span>
            </p>
        </section>

        {/* Content Grid */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-48">

            {/* 1. The Challenge */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] sticky top-32">01 — The Challenge</h2>
                </div>
                <div className="col-span-12 md:col-span-8 space-y-8">
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                        Textbooks lack <br/> <span className="text-[#444]">human context.</span>
                    </h3>
                    <div className="space-y-6 text-xl md:text-2xl text-[#999] font-light leading-relaxed">
                        <p>
                            I observed non-native speakers in my community struggling with &quot;Textbook English&quot;—it lacked the humor and real-life nuances needed for true connection.
                        </p>
                        <p>
                            As a Design Technologist, I saw an opportunity to use <strong className="text-white font-medium">Generative AI</strong> to create a personalized, scenario-based learning system.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. The Tech Stack */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] sticky top-32">02 — The Logic</h2>
                </div>
                <div className="col-span-12 md:col-span-8 space-y-16">
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                        Showing the <br/> <span className="text-[#444]">Plumbing.</span>
                    </h3>
                    
                    <div className="grid grid-cols-1 gap-12">
                        <div className="border-t border-[#222] pt-8">
                            <h4 className="text-white text-2xl font-bold mb-4">The Problem Solver</h4>
                            <p className="text-[#888] text-lg leading-relaxed">
                                I leveraged my <span className="text-white">MERN stack background</span> to ensure the UI wasn&apos;t just a static mockup, but a functional prototype capable of handling real-time AI data.
                            </p>
                        </div>
                        <div className="border-t border-[#222] pt-8">
                            <h4 className="text-white text-2xl font-bold mb-4">Design-to-Code Pipeline</h4>
                            <p className="text-[#888] text-lg leading-relaxed">
                                I built a custom component library in React that mirrors my Figma design system. This reduced friction between the design phase and the development phase, allowing for <span className="text-white">rapid iteration.</span>
                            </p>
                        </div>
                        <div className="border-t border-[#222] pt-8">
                            <h4 className="text-white text-2xl font-bold mb-4">Vibe Coding</h4>
                            <p className="text-[#888] text-lg leading-relaxed">
                                I implemented <span className="text-white">GSAP and Framer Motion</span> to create micro-interactions that provide instant feedback to the user, mimicking the rhythm of natural conversation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

             {/* 3. The Bridge */}
             <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] sticky top-32">03 — The Bridge</h2>
                </div>
                <div className="col-span-12 md:col-span-8 space-y-12">
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                        The Design <br/> <span className="text-[#444]">Technologist.</span>
                    </h3>
                     <div className="space-y-12">
                        <div className="bg-[#111] p-8 border border-[#222]">
                            <h4 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">Technical Feasibility</h4>
                            <p className="text-[#888] text-lg leading-relaxed">
                                I audited my own designs for performance. For the &apos;Scenario Cards,&apos; I optimized the SVG rendering and state management to ensure the app felt fluid even on lower-end mobile devices.
                            </p>
                        </div>
                         <div className="bg-[#111] p-8 border border-[#222]">
                            <h4 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">AI Integration</h4>
                            <p className="text-[#888] text-lg leading-relaxed">
                                I designed the prompt architecture for the backend to ensure the AI-generated stories maintained a consistent &quot;friendly yet professional&quot; tone, bridging the gap between LLM output and User Experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Before & After */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] sticky top-32">04 — The Audit</h2>
                </div>
                <div className="col-span-12 md:col-span-8 space-y-12">
                     <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                        Performance <br/> <span className="text-[#444]">Impact.</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         {/* Row 1 */}
                        <div className="p-6 border border-[#222] bg-[#050505]">
                            <span className="text-[#444] font-mono text-sm uppercase block mb-4">Before (Textbook)</span>
                            <p className="text-[#888]">Static list of vocabulary words.</p>
                        </div>
                        <div className="p-6 border border-white/20 bg-[#111]">
                             <span className="text-white font-mono text-sm uppercase block mb-4">After (Jok-Eng)</span>
                            <p className="text-white font-medium">Dynamic, AI-generated scenarios using the user&apos;s name.</p>
                        </div>

                         {/* Row 2 */}
                         <div className="p-6 border border-[#222] bg-[#050505]">
                            <span className="text-[#444] font-mono text-sm uppercase block mb-4">Before (Latency)</span>
                            <p className="text-[#888]">High latency between screen transitions.</p>
                        </div>
                        <div className="p-6 border border-white/20 bg-[#111]">
                             <span className="text-white font-mono text-sm uppercase block mb-4">After (Optimized)</span>
                            <p className="text-white font-medium">Optimized motion paths and pre-loaded assets (Skeletal Loading).</p>
                        </div>
                    </div>
                    
                    <div className="p-8 border-l-4 border-[#fff]">
                        <p className="text-2xl text-white font-light">
                            <span className="block text-sm font-mono text-[#555] uppercase tracking-wider mb-2">Result</span>
                            Reduced perceived load time and increased engagement by <strong className="font-bold">40%</strong> through emotional resonance.
                        </p>
                    </div>
                </div>
            </section>
             
             {/* 5. Reflection */}
             <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-32">
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] sticky top-32">05 — Reflection</h2>
                </div>
                <div className="col-span-12 md:col-span-8 space-y-8">
                    <p className="text-2xl md:text-4xl text-white font-medium leading-tight">
                        &quot;Jok-Eng isn&apos;t just an app; it’s a study in <span className="text-[#555]">Efficient Handoff.</span>&quot;
                    </p>
                    <p className="text-xl md:text-2xl text-[#888] font-light leading-relaxed">
                        By acting as both the Engineer and the Designer, I eliminated the typical &quot;lost in translation&quot; phase of product development. The result is a high-performance, AI-driven tool that solves a real human problem.
                    </p>
                </div>
            </section>

        </div>
      </main>
    </>
  );
}
