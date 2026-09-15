import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { weddingData } from '../data/weddingData';

export default function FinalSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.8, 1], [100, 0]);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-wedding-dark flex items-center justify-center text-center px-4">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src={weddingData.wedding.finalPhoto} 
          alt="Couple final" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="relative z-20 max-w-3xl mx-auto text-wedding-ivory">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl font-serif italic mb-8"
        >
          Your presence will make our celebration complete.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-wedding-gold-light tracking-widest text-sm uppercase mb-4">With Love</p>
          <h2 className="text-4xl md:text-6xl font-serif font-bold">
            {weddingData.groom.name} & {weddingData.bride.name}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-wedding-gold-light/80 font-sans tracking-[0.2em] uppercase text-sm mb-12"
        >
          {new Date(weddingData.wedding.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg font-serif"
        >
          Thank you for being a part of our journey.
        </motion.p>
      </div>
    </section>
  );
}
