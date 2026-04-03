"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 py-6 flex items-center justify-between ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300" />
        <span className="font-bold tracking-[0.3em] text-[10px] uppercase text-white/95">MATCHA.</span>
      </div>

      <nav className="hidden md:flex items-center gap-12">
        {["Process", "Harmony", "Experience", "About", "Pricing"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-white/90 transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <button 
          onClick={() => document.getElementById('auth')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-[10px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300"
        >
          Login
        </button>
        <button 
          onClick={() => document.getElementById('auth')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-full hover:bg-white/90 transition-all duration-300 transform active:scale-95"
        >
          Get Started
        </button>
      </div>
    </motion.header>
  );
}
