import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ThreeBackground from "@/components/ThreeBackground";

export default function IsomCaseStudy() {
  return (
    <>
      <Navbar />
      <ThreeBackground />
      <main className="min-h-screen relative z-10 pb-32">
        
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-20 max-w-[1800px] mx-auto">
            <h1 className="text-[15vw] leading-[0.8] font-bold tracking-tighter text-white uppercase mix-blend-difference mb-8">
                ISOM
            </h1>
            <p className="text-xl md:text-3xl text-white font-light max-w-4xl leading-tight">
                Immersive <span className="text-[#888]">Audio-Visual Journey</span> for an independent music label.
            </p>
        </section>

        {/* Content Grid */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 space-y-48">

            {/* 1. The Vision */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] sticky top-32">01 — The Vision</h2>
                </div>
                <div className="col-span-12 md:col-span-8 space-y-8">
                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                        Breaking the <br/> <span className="text-[#444]">Grid.</span>
                    </h3>
                    <div className="space-y-6 text-xl md:text-2xl text-[#999] font-light leading-relaxed">
                        <p>
                            ISOM is an avant-garde music label. A standard grid portfolio would have been a disservice to their chaotic, experimental sound. They needed a digital venue, not a list of links.
                        </p>
                        <p>
                            The goal was to build a <strong className="text-white font-medium">spatial web experience</strong> where users could "walk" through the catalog, discovering artifacts in a 3D float.
                        </p>
                    </div>
                </div>
            </section>

             {/* 2. The Engine */}
            <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="col-span-12 md:col-span-4">
                    <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] sticky top-32">02 — The Engine</h2>
                </div>
                <div className="col-span-12 md:col-span-8 space-y-12">
                     <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                        React Fiber <br/> <span className="text-[#444]">Shaders.</span>
                    </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#111] p-8 border border-[#222]">
                            <h4 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">WebGL Architecture</h4>
                            <p className="text-[#888] text-lg leading-relaxed">
                                I used React Three Fiber to bridge the gap between DOM state and the 3D canvas, allowing for seamless transitions between the "HTML world" and the "WebGL world."
                            </p>
                        </div>
                         <div className="bg-[#111] p-8 border border-[#222]">
                            <h4 className="text-white text-xl font-bold mb-2 uppercase tracking-wide">Audio Reactivity</h4>
                            <p className="text-[#888] text-lg leading-relaxed">
                                By hooking into the Web Audio API, I created GLSL shaders that distort geometry in real-time based on the track's frequency data. The site literally beats to the music.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Full Gallery (Single Column) */}
            <section className="space-y-32">
                 <div className="flex flex-col gap-24">
                     {[
                        '/ISOM/isom open-01.jpg',
                        '/ISOM/ISM Study 01.jpg',
                        '/ISOM/ISM Study 2.jpg',
                        '/ISOM/ISM Study 3.jpg',
                        '/ISOM/ISM Study 4.jpg',
                        '/ISOM/ISM Study 5.jpg',
                        '/ISOM/ISM Study 6.jpg',
                        '/ISOM/ISM Study 7.jpg',
                        '/ISOM/ISM Study 8.jpg'
                     ].map((src, i) => (
                        <div key={i} className="relative w-full aspect-video bg-[#111] border border-[#222]">
                            <Image src={src} alt={`ISOM Experience ${i + 1}`} fill className="object-contain" />
                        </div>
                     ))}
                 </div>
            </section>

             {/* 3. Reflection */}
             <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-32">
                 <div className="col-span-12 md:col-span-4">
                    <h2 className="text-sm font-mono text-[#555] uppercase tracking-[0.2em] sticky top-32">03 — Reflection</h2>
                </div>
                 <div className="col-span-12 md:col-span-8">
                     <p className="text-2xl md:text-3xl text-white font-medium leading-tight max-w-3xl">
                        "The web is a canvas, not just a document. ISOM proves that with the right technology, a website can be as expressive as the art it houses."
                     </p>
                 </div>
             </section>

        </div>
      </main>
    </>
  );
}
