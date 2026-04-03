"use client";

import { motion } from "framer-motion";

export default function AuthSections() {
  return (
    <section id="auth" className="bg-[#050505] py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Login Section */}
        <motion.div 
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6">Welcome Back</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white/95 uppercase mb-12">Login to Ritual.</h2>
          <form className="space-y-8 max-w-md" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/10 py-4 text-[10px] tracking-widest text-white focus:border-white/40 transition-all outline-none placeholder:text-white/20 uppercase font-bold"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
            </div>
            <div className="relative group">
              <input 
                type="password" 
                placeholder="PASSWORD" 
                className="w-full bg-transparent border-b border-white/10 py-4 text-[10px] tracking-widest text-white focus:border-white/40 transition-all outline-none placeholder:text-white/20 uppercase font-bold"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
            </div>
            <button className="w-full py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest mt-8 hover:bg-white/90 transition-all active:scale-[0.98] duration-300">
              Continue
            </button>
          </form>
        </motion.div>

        {/* Signup Section */}
        <motion.div 
          className="flex flex-col justify-center bg-white/[0.02] p-12 md:p-20 border border-white/[0.05]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6">Join The Circle</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white/95 uppercase mb-8 leading-tight">Start Your<br/>Journey.</h2>
          <p className="text-white/40 text-[13px] leading-relaxed mb-12 font-light max-w-sm">
            Gain early access to limited harvests, brewing techniques from Uji masters, and exclusive pricing on the vault collection.
          </p>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group">
              <input 
                  type="text" 
                  placeholder="FULL NAME" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-[10px] tracking-widest text-white focus:border-white/40 transition-all outline-none placeholder:text-white/20 uppercase font-bold"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
            </div>
            <div className="relative group">
              <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-b border-white/10 py-4 text-[10px] tracking-widest text-white focus:border-white/40 transition-all outline-none placeholder:text-white/20 uppercase font-bold"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-focus-within:w-full" />
            </div>
            <button className="w-full py-4 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest mt-8 hover:bg-white/5 transition-all active:scale-[0.98] duration-300">
              Create Account
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
