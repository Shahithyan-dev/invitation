import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

export default function Family() {
  return (
    <section className="py-24 px-4 bg-wedding-cream text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-maroon mb-6">With the Blessings of Our Families</h2>
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-wedding-gold"></span>
            <span className="text-wedding-gold">✧</span>
            <span className="w-12 h-px bg-wedding-gold"></span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif text-wedding-burgundy mb-6">Bride's Family</h3>
            <ul className="space-y-4 font-sans text-gray-700">
              {weddingData.family.brideFamily.map((member, index) => (
                <li key={index} className="text-lg">{member}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif text-wedding-burgundy mb-6">Groom's Family</h3>
            <ul className="space-y-4 font-sans text-gray-700">
              {weddingData.family.groomFamily.map((member, index) => (
                <li key={index} className="text-lg">{member}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
