import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
const galleryImages = [{
  id: 1,
  src: '/plat.jpeg',
  alt: 'Fresh Seafood Platter',
  category: 'Food'
}, {
  id: 2,
  src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop',
  alt: 'Elegant Dining Atmosphere',
  category: 'Interior'
}, {
  id: 3,
  src: '/grilled.jpg',
  alt: 'Grilled Fish Dish',
  category: 'Food'
}, {
  id: 4,
  src:  '/Kitchen.jpeg',
  alt: 'Chef Plating',
  category: 'Kitchen'
}, {
  id: 5,
  src: '/ice.jpg',
  alt: 'Oysters on Ice',
  category: 'Food'
}, {
  id: 6,
  src:'/res.jpg',
  alt: 'Restaurant Interior',
  category: 'Interior'
}];
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };
  return <section id="gallery" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-2 block">
            Visual Feast
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Glimpse Inside
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => <motion.div key={image.id} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group relative aspect-square overflow-hidden cursor-pointer rounded-sm bg-slate-800" onClick={() => setSelectedImage(index)}>
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="mx-auto text-white mb-2" size={32} />
                  <p className="text-white font-medium tracking-wide uppercase text-sm">
                    {image.category}
                  </p>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" onClick={() => setSelectedImage(null)}>
              <X size={40} />
            </button>

            <button className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2" onClick={handlePrev}>
              <ChevronLeft size={40} />
            </button>

            <div className="relative max-w-5xl max-h-[80vh] w-full" onClick={e => e.stopPropagation()}>
              <motion.img key={selectedImage} initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].alt} className="w-full h-full object-contain max-h-[80vh] rounded-sm shadow-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-lg font-medium">
                  {galleryImages[selectedImage].alt}
                </p>
              </div>
            </div>

            <button className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2" onClick={handleNext}>
              <ChevronRight size={40} />
            </button>
          </motion.div>}
      </AnimatePresence>
    </section>;
}