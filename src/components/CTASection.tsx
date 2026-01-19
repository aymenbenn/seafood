import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShoppingBag, Phone } from 'lucide-react';
export function CTASection() {
  return <section className="py-24 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1467003909585-2f8a7270028d?q=80&w=1000&auto=format&fit=crop" alt="Ocean texture" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Dive In?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light">
            Join us for an unforgettable dining experience or enjoy our fresh
            flavors from the comfort of your home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.button whileHover={{
            y: -5
          }} className="flex flex-col items-center justify-center p-8 bg-amber-500 rounded-sm shadow-lg hover:bg-amber-600 transition-colors group">
              <Calendar size={32} className="text-white mb-4" />
              <span className="text-white font-bold text-lg uppercase tracking-wider mb-2">
                Reserve a Table
              </span>
              <span className="text-amber-100 text-sm">
                Book your spot today
              </span>
            </motion.button>

            <motion.button whileHover={{
            y: -5
          }} className="flex flex-col items-center justify-center p-8 bg-white rounded-sm shadow-lg hover:bg-slate-50 transition-colors group">
              <ShoppingBag size={32} className="text-slate-900 mb-4" />
              <span className="text-slate-900 font-bold text-lg uppercase tracking-wider mb-2">
                Order Online
              </span>
              <span className="text-slate-500 text-sm">
                Pickup & Delivery available
              </span>
            </motion.button>

            <motion.button whileHover={{
            y: -5
          }} className="flex flex-col items-center justify-center p-8 bg-slate-800 border border-slate-700 rounded-sm shadow-lg hover:bg-slate-700 transition-colors group">
              <Phone size={32} className="text-amber-400 mb-4" />
              <span className="text-white font-bold text-lg uppercase tracking-wider mb-2">
                Contact Us
              </span>
              <span className="text-slate-400 text-sm">08 9520 8646</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>;
}