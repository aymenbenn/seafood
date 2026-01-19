import React from 'react';
import { motion } from 'framer-motion';
import { Utensils } from 'lucide-react';
type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};
const signatureDishes: MenuItem[] = [{
  name: 'Seafood Platter Grill',
  description: 'A generous feast of crab, scallops, tiger prawns, calamari, mussels & choice of fish fillet.',
  price: '$99.90',
  tag: 'Signature'
}, {
  name: 'Asian Chili Crab',
  description: 'Whole crab wok-tossed in our signature Asian chili sauce, served with fried mantou buns.',
  price: '$49.90',
  tag: 'Spicy'
}, {
  name: 'Seafood Basket',
  description: 'Premium mix of scallops, prawns, calamari and your choice of fish fillet.',
  price: '$37.90',
  tag: 'Popular'
}, {
  name: 'Lobster Mornay Roll',
  description: 'Succulent lobster meat in creamy béchamel with melted mozzarella in a toasted brioche bun.',
  price: '$25.00'
}, {
  name: 'Grilled Octopus',
  description: 'Tender grilled octopus served with crispy leeks, chips and fresh garden salad.',
  price: '$31.90'
}, {
  name: 'Fresh Oysters (1/2 Doz)',
  description: 'Freshly shucked daily. Choose from Natural, Mornay, or Kilpatrick styles.',
  price: '$21.90'
}];
export function MenuPreview() {
  return <section id="menu" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">
              Taste the Ocean
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Signature Selections
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
              From our famous seafood platters to delicate fresh oysters, every
              dish celebrates the natural flavors of the sea.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish, index) => <motion.div key={dish.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="flex justify-between items-start mb-4">
                {dish.tag && <span className="px-2 py-1 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                    {dish.tag}
                  </span>}
                <div className="flex-1"></div>
                <span className="text-xl font-bold text-amber-600 font-serif italic">
                  {dish.price}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                {dish.name}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {dish.description}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center text-sm text-slate-400 font-medium uppercase tracking-wider group-hover:text-slate-900 transition-colors">
                <Utensils size={14} className="mr-2" />
                View Details
              </div>
            </motion.div>)}
        </div>

        <div className="mt-16 text-center">
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-900 text-slate-900 font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors rounded-sm">
            View Full Menu
          </motion.button>
        </div>
      </div>
    </section>;
}