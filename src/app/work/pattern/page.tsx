import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ThreeBackground from "@/components/ThreeBackground";

export default function PatternCaseStudy() {
  return (
    <>
      <Navbar />
      <ThreeBackground />
      <main className="min-h-screen relative z-10 pb-32">
        
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-20 max-w-[1800px] mx-auto">
            <h1 className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-white uppercase mix-blend-difference mb-8">
                Pattern
            </h1>
            <p className="text-xl md:text-3xl text-white font-light max-w-4xl leading-tight">
                Interface design exploration for a <span className="text-[#888]">Modern Pattern Recognition Tool.</span>
            </p>
        </section>

        {/* Content Grid */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-48">

            {/* 1. The Challenge */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] sticky top-32">01 — The Challenge</h2>
                </div>
                <div className="col-span-12 md:col-span-8 space-y-8">
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                        Signal vs. <br/> <span className="text-[#444]">Noise.</span>
                    </h3>
                    <div className="space-y-6 text-xl md:text-2xl text-[#999] font-light leading-relaxed">
                        <p>
                            Pattern recognition tools are notoriously dense. They often bombard the user with raw data, making it impossible to spot the trends that actually matter.
                        </p>
                        <p>
                            The challenge was to design a mobile-first interface that could handle complex datasets without overwhelming the user. I needed to <strong className="text-white font-medium">reduce the cognitive load</strong> to near zero.
                        </p>
                    </div>
                </div>
            </section>

             {/* 2. The Logic */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] sticky top-32">02 — The Logic</h2>
                </div>
                <div className="col-span-12 md:col-span-8 space-y-12">
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                        Reductionist <br/> <span className="text-[#444]">Ergonomics.</span>
                    </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#111] p-8 border border-[#222]">
                            <h4 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">OLED Optimization</h4>
                            <p className="text-[#888] text-lg leading-relaxed">
                                I utilized a "True Black" color palette (#000000) not just for aesthetics, but for utility. On OLED screens, this saves battery and eliminates backlight bleed, sharpening the data points.
                            </p>
                        </div>
                         <div className="bg-[#111] p-8 border border-[#222]">
                            <h4 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">Thumb-Zone Navigation</h4>
                            <p className="text-[#888] text-lg leading-relaxed">
                                Mobile tools must be usable with one hand. I mapped the entire navigation architecture to the bottom 30% of the screen, ensuring critical actions are always within reach.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Full Gallery (Single Column) */}
            <section className="space-y-32">
                 <div className="flex flex-col gap-24">
                     {[
                        '/pattern/Pattern-1.png',
                        '/pattern/Pattern-2.png',
                        '/pattern/Pattern-3.png',
                        '/pattern/Pattern-5.png',
                        '/pattern/Pattern-6.png',
                        '/pattern/Pattern-7.png',
                        '/pattern/Pattern-8.png',
                        '/pattern/Pattern-9.png',
                        '/pattern/Pattern-10.png',
                        '/pattern/Pattern-11.png',
                        '/pattern/Pattern-12.png',
                        '/pattern/Pattern-13.png',
                        '/pattern/Pattern-14.png'
                     ].map((src, i) => (
                        <div key={i} className="relative w-full aspect-video bg-[#111] border border-[#222]">
                            <Image src={src} alt={`Pattern App Screen ${i + 1}`} fill className="object-contain" />
                        </div>
                     ))}
                 </div>
            </section>

             {/* 3. Reflection */}
             <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-32">
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] sticky top-32">03 — Reflection</h2>
                </div>
                <div className="col-span-12 md:col-span-8 space-y-8">
                    <p className="text-2xl md:text-4xl text-white font-medium leading-tight">
                        &quot;Complexity doesn't have to be complicated. By respecting the pixel grid, we turned raw data into <span className="text-[#555]">intuition.</span>&quot;
                    </p>
                </div>
             </section>

        </div>
      </main>
    </>
  );
}
