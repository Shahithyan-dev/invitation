import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';

export default function IntroScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1500); // Give time for exit animation
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-wedding-dark text-wedding-gold"
        >
          {/* Subtle Golden Particles Background (Simulated with radial gradient for now) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-wedding-maroon/20 via-wedding-dark to-wedding-dark"></div>

          <div className="relative z-10 text-center px-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl font-sans tracking-widest text-wedding-gold-light mb-6 uppercase"
            >
              With the blessings of our families
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-wedding-gold-light via-wedding-gold to-wedding-gold-light mb-4"
            >
              {weddingData.groom.name} & {weddingData.bride.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="mt-6"
            >
              <p className="text-xl md:text-2xl font-serif text-wedding-ivory">
                80th Wedding Anniversary
              </p>
              <p className="text-sm mt-2 text-wedding-gold-light/70 uppercase tracking-widest">
                Sathabhishekam
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
