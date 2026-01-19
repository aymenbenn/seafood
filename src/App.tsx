import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuPreview } from './components/MenuPreview';
import { OurStory } from './components/OurStory';
import { Gallery } from './components/Gallery';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <MenuPreview />
        <OurStory />
        <Gallery />
        <CTASection />
      </main>
      <Footer />
    </div>;
}