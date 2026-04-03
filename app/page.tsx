"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import ScrollCanvas from "@/components/ScrollCanvas";
import Header from "@/components/Header";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import AuthSections from "@/components/AuthSections";
import Footer from "@/components/Footer";
import { ArrowDown } from "lucide-react";

/**
 * Premium Scrollytelling Landing Page (Expanded)
 * Features deep black (#050505) theme and scroll-linked canvas animation.
 */
export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scroll to explore indicator opacity - fades out early
  const exploreOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  // Scrollytelling transitions logic: [start, start + 0.1, end - 0.1, end] -> [0, 1, 1, 0]
  
  const beatAOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const beatAY = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [30, 0, 0, 40]);

  // Beat B: 25-45% (Left Aligned)
  const beatBOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
  const beatBY = useTransform(scrollYProgress, [0.25, 0.3, 0.4, 0.45], [30, 0, 0, 40]);

  // Beat C: 50-70% (Right Aligned)
  const beatCOpacity = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
  const beatCY = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [30, 0, 0, 40]);

  // Beat D: 75-95% (Centered CTA)
  const beatDOpacity = useTransform(scrollYProgress, [0.75, 0.8, 0.96, 1], [0, 1, 1, 0]);
  const beatDY = useTransform(scrollYProgress, [0.75, 0.8, 0.95, 1], [30, 0, 0, 0]);

  return (
    <main className="relative bg-[#050505]">
      {/* Permanent Header */}
      <Header />
      
      {/* 1. Scrollytelling Experience */}
      <div ref={containerRef} className="relative h-[400vh]">
        
        {/* Sticky Container for Canvas and Overlays */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Sticky Background Rendering Layer */}
          <ScrollCanvas frameCount={145} />

          {/* Narrative Overlays - increased z-index to stay above header, added top padding for safety */}
          <div className="pointer-events-none absolute inset-0 z-[110] p-12 md:p-24 pt-32 md:pt-40 flex flex-col items-center justify-center overflow-hidden">
            
            {/* Scroll to Explore Indicator */}
            <motion.div 
              style={{ opacity: exploreOpacity }}
              className="absolute bottom-16 flex flex-col items-center gap-6 text-white/30"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.3em]">Scroll to Explore</p>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={14} strokeWidth={1} />
              </motion.div>
            </motion.div>

            {/* --- STORY BEATS --- */}

            {/* Beat A: Hero */}
            <motion.div 
              style={{ opacity: beatAOpacity, y: beatAY }}
              className="text-center"
            >
              <h1 className="text-balance text-6xl md:text-[9.5rem] font-black tracking-tighter leading-[0.8] text-white/95 uppercase">
                PURE<br/>ORIGIN.
              </h1>
              <p className="mt-10 text-lg md:text-2xl font-light text-white/50 tracking-tight">
                A ceremonial masterpiece, deconstructed.
              </p>
            </motion.div>

            {/* Beat B: Left Reveal */}
            <motion.div 
              style={{ opacity: beatBOpacity, y: beatBY }}
              className="absolute left-10 md:left-24 top-1/2 -translate-y-1/2 max-w-xl"
            >
               <p className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 text-white/30">01 &mdash; PROCESS</p>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-white/95 uppercase">
                Meticulous<br/>Extraction.
              </h2>
              <p className="mt-8 text-lg text-white/50 leading-relaxed tracking-tight max-w-md">
                Synchronized at the molecular level. Every frame reveals the silent power of cold-pressed craft.
              </p>
            </motion.div>

            {/* Beat C: Right Reveal */}
            <motion.div 
              style={{ opacity: beatCOpacity, y: beatCY }}
              className="absolute right-10 md:right-24 top-1/2 -translate-y-1/2 max-w-xl text-right"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 text-white/30">02 &mdash; HARMONY</p>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none text-white/95 uppercase">
                Fluid<br/>Precision.
              </h2>
              <p className="mt-8 text-lg text-white/50 leading-relaxed tracking-tight max-w-md ml-auto">
                Where luxury meets velocity. Watch the transformation as the silhouette evolves through the scroll.
              </p>
            </motion.div>

            {/* Beat D: Hero Outro / CTA */}
            <motion.div 
              style={{ opacity: beatDOpacity, y: beatDY }}
              className="text-center"
            >
              <h2 className="text-6xl md:text-[8.5rem] font-black tracking-tighter leading-[0.9] text-white/95 uppercase mb-12">
                UNVEIL THE<br/>EXPERIENCE.
              </h2>
              <motion.button 
                className="pointer-events-auto group relative overflow-hidden bg-white text-black px-16 py-6 rounded-full font-bold tracking-widest text-[11px] hover:shadow-[0_0_60px_rgba(255,255,255,0.1)] transition-all duration-700 active:scale-95"
                whileHover={{ scale: 1.02 }}
              >
                <span className="relative z-10 uppercase">Order the collection</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>
      
      {/* 2. Brand Expansion Content */}
      <About />
      <Pricing />
      <Reviews />
      <AuthSections />
      
      {/* 3. Global Footer */}
      <Footer />
    </main>
  );
}
