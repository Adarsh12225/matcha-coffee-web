"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Elena Rossi",
    role: "Wellness Consultant",
    text: "The texture is unlike anything I've tried. Silky, vibrant, and incredibly grounding. It's transformed my mornings.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Creative Director",
    text: "Design meets ritual. The cold-pressed series is a game-changer for long studio sessions where I need focus without the jitters.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Yoga Instructor",
    text: "Pure, ceremonial grade excellence. You can taste the origin in every sip. It's become a staple in my practice.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Tech Founder",
    text: "The delivery is always on time, and the quality is consistent. The Masters vault is worth every penny for the exclusive batches.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="experience" className="bg-[#050505] py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
           <div className="max-w-2xl">
             <motion.p 
              className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Voices of Clarity
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white/95 uppercase leading-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Trust in<br/>The Ceremony.
            </motion.h2>
           </div>
           
           <motion.div 
            className="flex items-center gap-4 border border-white/10 px-8 py-4 bg-white/[0.02]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
           >
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="white" className="text-white" />)}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">4.9/5 Average Rating</span>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 flex flex-col justify-between group h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex gap-1 mb-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={10} fill="white" className="text-white/60" />
                  ))}
                </div>
                <p className="text-white/50 text-[13px] leading-relaxed mb-10 italic font-light">
                  "{review.text}"
                </p>
              </div>
              
              <div>
                <h4 className="text-white/90 text-[11px] font-bold uppercase tracking-widest mb-1 tracking-[0.2em]">{review.name}</h4>
                <p className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-mono">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
