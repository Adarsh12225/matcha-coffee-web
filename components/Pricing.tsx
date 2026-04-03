"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "The Solo Cup",
    price: "$7",
    description: "A single, master-prepared ritual.",
    features: ["1 Fresh Serving", "Master-Prepared", "Zero Wait-time", "Studio Pickup Only"],
    highlight: false
  },
  {
    name: "Ceremonial Starter",
    price: "$29",
    description: "Perfect for your daily ritual.",
    features: ["15 Servings", "Eco-friendly Packaging", "Bamboo Whisk included", "Personal Consultation"],
    highlight: false
  },
  {
    name: "Enlightened Daily",
    price: "$59",
    description: "Our most popular membership.",
    features: ["45 Servings", "Priority Sourcing", "Subscription Discount", "Freshness Guarantee", "Exclusive Workshops"],
    highlight: true
  },
  {
    name: "Masters Collection",
    price: "$149",
    description: "The ultimate vault for connoisseurs.",
    features: ["100 Servings", "Hand-crafted Chawan", "Limited Batch access", "Personal Tea Sommelier", "Lifetime Membership"],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#050505] py-32 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.p 
            className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Collection
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white/95 uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Curated For Clarity.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative overflow-hidden p-10 flex flex-col border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20 group ${
                plan.highlight ? "scale-105 z-10 shadow-[0_0_80px_rgba(255,255,255,0.03)]" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-white text-black text-[9px] font-bold uppercase tracking-widest">
                  Best Value
                </div>
              )}
              
              <h3 className="text-xl font-bold tracking-tight text-white/90 mb-2 uppercase">{plan.name}</h3>
              <p className="text-sm text-white/40 mb-8 leading-relaxed">{plan.description}</p>
              
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-4xl font-black text-white/95">{plan.price}</span>
                <span className="text-white/30 font-mono text-[10px] uppercase">/ Monthly</span>
              </div>

              <div className="flex-grow space-y-4 mb-12">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={12} className="text-white/60" />
                    <span className="text-[13px] text-white/50 tracking-tight font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button 
                className={`w-full py-4 font-bold tracking-[0.2em] text-[10px] uppercase transition-all duration-300 ${
                  plan.highlight ? "bg-white text-black hover:bg-white/90" : "bg-transparent border border-white/20 text-white hover:bg-white/5"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
