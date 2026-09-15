import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { MapPin } from 'lucide-react';

export default function Venue() {
  return (
    <section className="py-24 px-4 bg-wedding-dark text-wedding-ivory relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-floral.png')]" />
      
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-gold mb-6">The Celebration Awaits</h2>
          <p className="text-gray-300 font-sans max-w-2xl mx-auto">
            Join us at our beautiful venue to celebrate this momentous milestone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full glass-panel rounded-2xl p-8 md:p-12 mb-10 max-w-3xl"
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-wedding-gold/20 flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-wedding-gold" />
            </div>
            
            <h3 className="text-3xl font-serif mb-4 text-white">{weddingData.wedding.venue}</h3>
            <p className="text-gray-300 text-lg mb-8">{weddingData.wedding.address}</p>
            
            <p className="font-sans text-wedding-gold-light mb-8">
              {new Date(weddingData.wedding.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })} <br/>
              {weddingData.wedding.time} – {weddingData.wedding.endTime}
            </p>

            <a 
              href={weddingData.wedding.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-wedding-gold text-wedding-dark font-sans font-bold tracking-wider uppercase text-sm hover:bg-wedding-gold-light transition-colors duration-300"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
