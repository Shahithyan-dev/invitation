import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-wedding-dark">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-wedding-dark via-transparent to-transparent z-10" />
        <img 
          src={weddingData.wedding.heroPhoto} 
          alt="Couple" 
          className="w-full h-full object-cover object-center scale-105"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-wedding-gold-light font-sans tracking-[0.2em] uppercase text-sm md:text-base mb-6"
        >
          Together with their families
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-wedding-ivory font-bold leading-tight text-shadow"
        >
          <h1>{weddingData.groom.name}</h1>
          <span className="text-wedding-gold text-4xl md:text-6xl my-2 block">&</span>
          <h1>{weddingData.bride.name}</h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 text-xl md:text-2xl text-wedding-ivory font-serif italic"
        >
          Invite you to celebrate their Sathabhishekam
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-6 px-6 py-2 border-t border-b border-wedding-gold/50"
        >
          <p className="text-wedding-gold-light tracking-widest uppercase font-sans">
            {new Date(weddingData.wedding.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-wedding-gold-light/70 text-xs tracking-[0.3em] uppercase mb-2">Scroll to begin</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-wedding-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
