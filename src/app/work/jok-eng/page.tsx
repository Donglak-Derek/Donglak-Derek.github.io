import Navbar from '@/components/Navbar';
import { ArrowUpRight, CheckCircle2, UserSearch, PencilRuler, Cpu, Layout, Smartphone, TrendingUp, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import KineticTypography from "@/components/KineticTypography";
import MagneticButton from "@/components/MagneticButton";

export default function JokEngCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/40 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob" />
        <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/40 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-2000" />
        
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-grid-pattern opacity-30" />
        
        {/* Project Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
            <div className="mb-8">
                <MagneticButton className="inline-block">
                    <Link href="/#work" className="glass-button rounded-full px-4 py-2 text-white/80 hover:text-white transition-colors text-sm font-mono inline-flex items-center gap-2">
                        ← Back to Work
                    </Link>
                </MagneticButton>
            </div>
            
            <KineticTypography 
                text="Jok-Eng" 
                className="text-7xl md:text-9xl font-serif italic tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 leading-[1.1]" 
                as="h1"
            />
            <p className="text-xl md:text-3xl text-white/80 font-light max-w-4xl leading-tight border-l-2 border-cyan-400 pl-6">
                The Storyteller's Toolkit. An AI-powered platform transforming how English learners master social context through humor and storytelling.
            </p>

            <div className="flex gap-4 mt-12">
                <MagneticButton>
                    <a href="https://jok-eng.com" target="_blank" className="glass-button rounded-full px-8 py-4 font-medium flex items-center gap-2 text-lg text-white group">
                        Visit Live Site <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                    </a>
                </MagneticButton>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-8 border-t border-white/10">
                <div>
                    <h3 className="text-xs font-mono text-cyan-400 uppercase mb-2 tracking-widest">Role</h3>
                    <p className="font-serif text-xl text-white">Founder & Designer</p>
                </div>
                <div>
                    <h3 className="text-xs font-mono text-purple-400 uppercase mb-2 tracking-widest">Responsibility</h3>
                    <p className="font-serif text-xl text-white">Product, UI/UX, Dev</p>
                </div>
                <div>
                    <h3 className="text-xs font-mono text-pink-400 uppercase mb-2 tracking-widest">Timeline</h3>
                    <p className="font-serif text-xl text-white">2026 - Present</p>
                </div>
                <div>
                    <h3 className="text-xs font-mono text-cyan-400 uppercase mb-2 tracking-widest">Stack</h3>
                    <p className="font-serif text-xl text-white">Next.js, Firebase, AI</p>
                </div>
            </div>
        </section>

        {/* Hero Image / Product Shot */}
        <section className="w-full py-10 mb-20 relative z-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="aspect-video glass-panel rounded-2xl p-2 relative overflow-hidden group shadow-2xl shadow-purple-900/20">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <Image 
                            src="/jok-eng-dashboard.png" 
                            alt="Jok-Eng Dashboard Hero" 
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* 1. The Insight (Research) */}
        <section className="max-w-5xl mx-auto px-6 mb-32 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-8 flex items-center gap-4 text-white">
                <span className="text-cyan-400 font-mono text-lg not-italic">01</span> The Insight
            </h2>
            <div className="glass-panel p-8 md:p-12 rounded-3xl">
                <p className="text-2xl text-white/90 font-light leading-relaxed mb-8">
                    During 15 user interviews with intermediate English learners, I noticed a pattern: Users knew the vocabulary but froze when the topic shifted to 'Small Talk'. They didn't lack words; they lacked <strong>scripts</strong>.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400"></div>
                    <p className="text-white/80 font-serif italic text-xl">"I know grammar, but I don't know how to be funny or sarcastic in English. I feel like a robot."</p>
                    <span className="text-cyan-400 font-mono text-xs mt-4 block tracking-widest">— USER INTERVIEW #4</span>
                </div>
            </div>
        </section>

        {/* 2. The Struggle (Design Process) */}
        <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
             <h2 className="text-4xl md:text-5xl font-serif italic mb-12 flex items-center gap-4 text-white">
                <span className="text-purple-400 font-mono text-lg not-italic">02</span> The Struggle
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-3xl font-serif text-white">From List to Card</h3>
                    <p className="text-lg text-white/70 leading-relaxed font-light">
                        Initially, I designed a standard list view for scenarios. User testing revealed that users felt overwhelmed by choices ("Choice Paralysis"). 
                    </p>
                    <p className="text-lg text-white/70 leading-relaxed border-l-2 border-white/20 pl-4 font-light">
                         I switched to a <strong className="text-white">"Tinder-style" card interface</strong>. This constrained the user's focus to one scenario at a time, increasing selection rates by 40%.
                    </p>
                </div>
                <div className="glass-panel p-8 aspect-video flex flex-col items-center justify-center text-center rounded-2xl relative">
                     <span className="text-white/40 font-mono text-sm tracking-widest">[ WIREFRAMES / SKETCHES ]</span>
                     <p className="text-white/40 text-sm mt-2 max-w-xs">Messy sketches showing the evolution from List View to Card View.</p>
                </div>
            </div>
        </section>

        {/* 3. The Engineer's Edge (Feasibility) */}
        <section className="max-w-5xl mx-auto px-6 mb-32 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-8 flex items-center gap-4 text-white">
                <span className="text-pink-400 font-mono text-lg not-italic">03</span> Engineer's Edge
            </h2>
            <div className="glass-panel p-8 bg-black/40 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-mono text-cyan-400 mb-4">HANDLING_AI_LATENCY</h3>
                <p className="text-white/70 text-lg mb-8 max-w-2xl font-light">
                    As a developer, I knew real-time AI generation would take 3-5 seconds—enough time for a user to bounce. 
                    I couldn't make the API faster, so I designed a <strong className="text-white">Skeleton Loader</strong> that "teaches" the user while they wait.
                </p>
                <div className="flex flex-col md:flex-row gap-4 items-center font-mono text-sm">
                    <div className="flex-1 bg-black/50 p-4 border border-white/10 rounded-lg w-full text-green-400 shadow-inner">
                        &gt; Generating Scenario...<br/>
                        &gt; Analyzing Context...<br/>
                        &gt; Applying Humor...
                    </div>
                    <div className="text-white/40 transform rotate-90 md:rotate-0">→</div>
                    <div className="flex-1 bg-white/10 text-white p-4 border border-white/20 rounded-lg w-full font-bold">
                        CONTENT READY.
                    </div>
                </div>
            </div>
        </section>

        {/* 4. The Solution (Product UI) */}
        <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-12 flex items-center gap-4 text-white">
                <span className="text-cyan-400 font-mono text-lg not-italic">04</span> The Interface
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-panel glass-panel-hover p-8 aspect-[4/3] flex flex-col justify-end rounded-2xl cursor-pointer">
                     <span className="text-xs font-mono text-cyan-400 mb-2 uppercase tracking-widest">Scenario Selection</span>
                     <p className="text-2xl font-serif text-white">Intuitive Card Grid</p>
                </div>
                 <div className="glass-panel glass-panel-hover p-8 aspect-[4/3] flex flex-col justify-end rounded-2xl cursor-pointer">
                     <span className="text-xs font-mono text-purple-400 mb-2 uppercase tracking-widest">Learning Mode</span>
                     <p className="text-2xl font-serif text-white">Focus-First Typography</p>
                </div>
            </div>
        </section>

        {/* 5. Content Strategy */}
        <section className="w-full py-24 mb-20 relative z-10 bg-white/5 backdrop-blur-sm border-y border-white/5">
             <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-white">
                             Content Strategy
                        </h2>
                        <p className="text-xl text-white/70 font-light max-w-xl">
                            A product is nothing without users. I developed a unified visual identity for social media to break down complex English nuances into digestible visual cards.
                        </p>
                    </div>
                </div>

                {/* SNS Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Placeholder 1 */}
                    <div className="aspect-[9/16] glass-panel rounded-xl flex items-center justify-center relative group overflow-hidden hover:border-white/30 transition-colors">
                        <Instagram className="text-white/60 group-hover:text-pink-400 transition-colors" size={48} />
                        <span className="absolute bottom-4 left-4 text-xs font-mono text-white/60">IG REEL</span>
                    </div>
                     {/* Placeholder 2 */}
                    <div className="aspect-[9/16] glass-panel rounded-xl flex items-center justify-center relative group overflow-hidden hover:border-white/30 transition-colors">
                         <span className="text-white font-serif italic text-xl text-center px-4">"Sarcastic"</span>
                    </div>
                     {/* Placeholder 3 */}
                    <div className="aspect-[9/16] glass-panel rounded-xl flex items-center justify-center relative group overflow-hidden hover:border-white/30 transition-colors">
                        <span className="text-white font-serif italic text-xl text-center px-4">"Office Slang"</span>
                    </div>
                     {/* Placeholder 4 */}
                    <div className="aspect-[9/16] glass-panel rounded-xl flex items-center justify-center relative group overflow-hidden hover:border-white/30 transition-colors">
                        <Youtube className="text-white/60 group-hover:text-red-500 transition-colors" size={48} />
                         <span className="absolute bottom-4 left-4 text-xs font-mono text-white/60">SHORTS</span>
                    </div>
                </div>
            </div>
        </section>

        {/* 6. Impact & What's Next */}
         <section className="max-w-4xl mx-auto px-6 mb-24 relative z-10">
            <h2 className="text-4xl font-serif italic mb-8 flex items-center gap-3 text-white">
                 Role & Impact
            </h2>
            <div className="space-y-6">
                <div className="glass-panel p-6 rounded-xl flex gap-4 items-start">
                    <CheckCircle2 className="text-cyan-400 shrink-0 mt-1" />
                    <p className="text-lg text-white/80 font-light"><strong className="text-white font-medium">Shipped MVP:</strong> Built and deployed the full stack application using Next.js and OpenAI API.</p>
                </div>
                 <div className="glass-panel p-6 rounded-xl flex gap-4 items-start">
                    <CheckCircle2 className="text-purple-400 shrink-0 mt-1" />
                    <p className="text-lg text-white/80 font-light"><strong className="text-white font-medium">Scalable System:</strong> Created a reusable component library that sped up feature development by 30%.</p>
                </div>
                 <div className="glass-panel p-6 rounded-xl flex gap-4 items-start">
                    <CheckCircle2 className="text-pink-400 shrink-0 mt-1" />
                    <p className="text-lg text-white/80 font-light"><strong className="text-white font-medium">User Growth:</strong> Consistent design language across SNS led to a steady increase in organic traffic.</p>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
                <h3 className="text-2xl font-serif italic mb-4 text-white">What's Next?</h3>
                <p className="text-lg text-white/70 leading-relaxed font-light">
                    I am currently conducting user interviews with non-native speakers to refine the scenario-generation flow. My goal is to further reduce cognitive load and introduce "Community Remixing" features to spur organic growth.
                </p>
            </div>
         </section>
      </main>
    </>
  );
}
