import Navbar from '@/components/Navbar';
import ThreeBackground from "@/components/ThreeBackground";
import ProjectList from "@/components/ProjectList";
import ParticleTitle from "@/components/ParticleTitle";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent relative">
        <ThreeBackground />
        
        {/* Sabum Hero - Particle Interaction */}
        <section className="h-screen w-full flex flex-col items-center justify-center relative z-10 overflow-hidden">
          <p className="text-sm font-mono text-neutral-500 uppercase tracking-[0.5em] mb-8 animate-fade-in-up">
            Derek Han — 2026
          </p>
          
          <div className="flex flex-col items-center justify-center w-full mix-blend-difference animate-slide-up">
            <ParticleTitle text="ENGINEER" className="h-[35vh]" />
            <span className="text-[#FF5F1F] text-[8vw] font-bold leading-none my-[-2vh] animate-pulse">+</span>
            <ParticleTitle text="DESIGNER" className="h-[35vh]" />
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
             <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest">Scroll to Explore</span>
          </div>
        </section>

        {/* Selected Works - Sabum Grid */}
        <section id="work" className="relative z-10 w-full bg-black">
           <div className="w-full h-px bg-white/20 mb-20"></div> {/* Divider */}
           <div className="max-w-[1800px] mx-auto px-0 md:px-6 mb-32">
              <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-12 px-6 md:px-0">Selected Works (03)</h2>
              <ProjectList />
           </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-12 border-t border-white/10 text-center">
            <p className="text-xs font-mono text-neutral-600 uppercase tracking-widest">© 2026 Derek Han. All Rights Reserved.</p>
        </footer>
      </main>
    </>
  );
}
