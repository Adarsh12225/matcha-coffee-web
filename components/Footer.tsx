"use client";

import { motion } from "framer-motion";
import { X, Mail, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "COLLECTION",
      items: ["Ceremonial", "Daily Blend", "Limited Release", "Accessories"]
    },
    {
      title: "CEREMONY",
      items: ["The Process", "Origin", "Masters", "Sustainability"]
    },
    {
      title: "STUDIO",
      items: ["About Us", "Contact", "Careers", "Press"]
    },
    {
      title: "SUPPORT",
      items: ["Shipping", "Returns", "Terms", "Privacy"]
    }
  ];

  return (
    <footer className="relative bg-[#050505] pt-32 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">

          {/* Logo Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-150 transition-transform duration-300" />
              <span className="font-bold tracking-[0.3em] text-[10px] uppercase text-white/95">MATCHA.</span>
            </div>
            <p className="text-white/30 text-[11px] leading-relaxed max-w-[200px] mb-8 font-light">
              Redefining the rhythm of the modern morning through the science of ritual.
            </p>
            <div className="flex items-center gap-5">
              {[X, Mail, Globe].map((Icon, idx) => (
                <a key={idx} href="#" className="text-white/20 hover:text-white transition-colors duration-300">
                  <Icon size={14} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {links.map((group) => (
            <div key={group.title}>
              <h4 className="text-white/90 text-[10px] font-bold uppercase tracking-[0.3em] mb-10">{group.title}</h4>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/30 text-[11px] hover:text-white transition-colors duration-300 font-light tracking-tight pb-1 border-b border-transparent hover:border-white/10">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-mono">
            &copy; {currentYear} MATCHA STUDIO &middot; ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-12">
            <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-mono hidden md:block">UTC-5 &middot; 40.7128° N</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-4 text-white/40 text-[9px] uppercase tracking-[0.4em] font-mono hover:text-white transition-colors"
            >
              Back to top
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="block"
              >
                ^
              </motion.span>
            </button>
          </div>
        </div>
      </div>

      {/* Massive Background Text Decoration */}
      <div className="absolute -bottom-24 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.015] flex justify-center">
        <h2 className="text-[25vw] leading-none font-black text-white whitespace-nowrap tracking-tighter">
          MATCHA SILENCE CEREMONY
        </h2>
      </div>
    </footer>
  );
}
