import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Anchor } from 'lucide-react';
export function Hero() {
  return <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Image with Parallax-like fixed positioning */}
      <div className="absolute inset-0 z-0">
        <img src="/Gemini_Generated_Image_wc6pwtwc6pwtwc6p.png" alt="Fresh catch from the ocean" className="h-full w-full object-cover opacity-60" />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="space-y-6">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium tracking-widest uppercase">
              <Anchor size={12} className="text-amber-400" />
              Est. Canningvale
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80">
              Fresh From
            </span>
            <span className="block font-serif italic text-amber-400 mt-2">
              Ocean to Plate
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Experience the finest local seafood, sourced daily from trusted
            fishermen and prepared with passion. A feast beyond the deep awaits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-sm uppercase tracking-wider transition-colors shadow-lg shadow-amber-900/20">
              Reserve a Table
            </motion.button>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold rounded-sm uppercase tracking-wider transition-colors backdrop-blur-sm">
              View Menu
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 1
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>;
}