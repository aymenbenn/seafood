import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
export function Footer() {
  return <footer id="contact" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo_image.jpg" alt="Kraken Logo" className="h-12 w-12 rounded-full border border-slate-700" />
              <div className="flex flex-col">
                <span className="font-bold text-white text-lg tracking-wide uppercase">
                  Kraken
                </span>
                <span className="text-xs tracking-widest">Seafood Kitchen</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              A feast beyond the deep. Bringing the freshest local seafood to
              your plate with passion and culinary excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <span>
                  27/271 Amherst Road,
                  <br />
                  Canningvale, WA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span>08 9520 8646</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span>info@krakenseafoodkitchen.com.au</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">
              Opening Hours
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">
                    Mon - Fri
                  </span>
                  <span>4:00 PM - 9:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">
                    Sat - Sun
                  </span>
                  <span>11:30 AM - 9:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#menu" className="hover:text-amber-500 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-amber-500 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-500 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-16 pt-8 text-center text-xs text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Kraken Seafood Kitchen. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}