"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen bg-[#050505] py-32 px-12 md:px-24 flex flex-col justify-center overflow-hidden border-t border-white/5">
      <div className="max-w-4xl relative z-10">
        <motion.p 
          className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Philosophy
        </motion.p>

        <motion.h2 
          className="text-4xl md:text-7xl font-light tracking-tight leading-[1.1] text-white/95 mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We believe in the quiet power of <span className="text-white font-bold italic underline decoration-white/20 underline-offset-[12px]">ritual</span>. Matcha is more than a drink; it is a moment of absolute clarity in a chaotic world.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             viewport={{ once: true }}
          >
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80 mb-6">The Science &mdash;</h3>
            <p className="text-lg text-white/40 leading-relaxed font-light">
              Grown in the shaded hills of Uji, our leaves develop a unique concentration of L-theanine. This amino acid promotes alpha-wave activity in the brain, inducing a state of "calm alertness" that no other caffeine source can replicate.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
             viewport={{ once: true }}
          >
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80 mb-6">The Ceremony &mdash;</h3>
            <p className="text-lg text-white/40 leading-relaxed font-light">
              Deconstructed for the modern era, but rooted in tradition. Every drop in our bottled series is cold-pressed to preserve the delicate chlorophyll and antioxidants that heat usually destroys.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute right-12 md:right-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/0 via-white/10 to-white/0" />
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
