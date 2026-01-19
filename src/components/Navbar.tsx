import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Menu',
    href: '#menu'
  }, {
    name: 'Our Story',
    href: '#story'
  }, {
    name: 'Gallery',
    href: '#gallery'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out', isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <img src="/logo_image.jpg" alt="Kraken Seafood Kitchen" className="h-12 w-12 rounded-full border-2 border-white/20" />
            <div className={cn('flex flex-col', isScrolled ? 'text-white' : 'text-white')}>
              <span className="font-bold text-lg tracking-wide uppercase">
                Kraken
              </span>
              <span className="text-xs tracking-widest opacity-80">
                Seafood Kitchen
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm font-medium text-white/90 hover:text-white hover:underline decoration-amber-400 decoration-2 underline-offset-8 transition-all uppercase tracking-wider">
                {link.name}
              </a>)}
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-sm font-semibold transition-colors uppercase tracking-wide text-sm">
              Reserve Table
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 md:hidden shadow-xl">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white/90 text-lg font-medium py-2 border-b border-slate-800">
                  {link.name}
                </a>)}
              <button className="bg-amber-500 text-white py-3 rounded-sm font-bold uppercase tracking-wide mt-4">
                Reserve a Table
              </button>

              <div className="flex flex-col gap-3 mt-4 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>08 9520 8646</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>27/271 Amherst Road, Canningvale</span>
                </div>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}