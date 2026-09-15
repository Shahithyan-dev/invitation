import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

export default function CoupleStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 px-4 bg-wedding-ivory relative overflow-hidden">
      {/* Decorative Background Patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 pointer-events-none rotate-180" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-serif text-wedding-maroon mb-4"
          >
            A Beautiful Beginning
          </motion.h2>
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-wedding-gold"></span>
            <span className="text-wedding-gold text-2xl">✤</span>
            <span className="w-16 h-px bg-wedding-gold"></span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Groom */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center group">
            <div className="relative w-64 h-80 md:w-80 md:h-96 mb-8 overflow-hidden rounded-t-full shadow-2xl p-2 bg-white">
              <div className="absolute inset-2 border border-wedding-gold/30 rounded-t-full z-10 pointer-events-none transition-transform duration-700 group-hover:scale-95" />
              <img 
                src={weddingData.groom.photo} 
                alt={weddingData.groom.name}
                className="w-full h-full object-cover rounded-t-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="text-3xl font-serif text-wedding-burgundy mb-2">{weddingData.groom.name}</h3>
            <p className="text-wedding-gold tracking-[0.2em] uppercase text-sm mb-4">The Groom</p>
            <p className="text-gray-600 max-w-sm leading-relaxed">{weddingData.groom.description}</p>
          </motion.div>

          {/* Bride */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center group md:mt-24">
            <div className="relative w-64 h-80 md:w-80 md:h-96 mb-8 overflow-hidden rounded-t-full shadow-2xl p-2 bg-white">
              <div className="absolute inset-2 border border-wedding-gold/30 rounded-t-full z-10 pointer-events-none transition-transform duration-700 group-hover:scale-95" />
              <img 
                src={weddingData.bride.photo} 
                alt={weddingData.bride.name}
                className="w-full h-full object-cover rounded-t-full transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <h3 className="text-3xl font-serif text-wedding-burgundy mb-2">{weddingData.bride.name}</h3>
            <p className="text-wedding-gold tracking-[0.2em] uppercase text-sm mb-4">The Bride</p>
            <p className="text-gray-600 max-w-sm leading-relaxed">{weddingData.bride.description}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
