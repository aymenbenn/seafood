import React from 'react';
import { motion } from 'framer-motion';
export function OurStory() {
  return <section id="story" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] w-full relative rounded-sm overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=1000&auto=format&fit=crop" alt="Fisherman on boat" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-900/20"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-[12px] border-slate-100 -z-10 rounded-sm"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-50 -z-10 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="w-full lg:w-1/2">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Sourced with Care, <br />
              <span className="text-slate-400 font-serif italic">
                Served with Passion
              </span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                At Kraken Seafood Kitchen, we believe the best meals start long
                before they reach the kitchen. They begin on the boats of local
                fishermen who share our commitment to sustainability and
                quality.
              </p>
              <p>
                Our "Ocean to Plate" philosophy ensures that every piece of
                fish, every oyster, and every prawn is as fresh as the moment it
                was caught. We don't just serve seafood; we serve the story of
                our local waters.
              </p>
              <p>
                Whether you're enjoying our signature Chili Crab or a classic
                Fish & Chips, you're tasting the dedication of a team that loves
                what they do.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-amber-500"></div>
              <span className="font-serif italic text-slate-900 text-xl">
                The Kraken Team
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}