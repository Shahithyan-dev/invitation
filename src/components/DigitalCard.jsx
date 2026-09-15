import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

export default function DigitalCard() {
  return (
    <section className="py-24 px-4 bg-wedding-dark relative overflow-hidden flex justify-center items-center">
      {/* Background with slight parallax */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/gold-scale.png')]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg bg-wedding-cream shadow-2xl rounded-sm p-8 md:p-14 text-center border-8 border-double border-wedding-gold/40 before:absolute before:inset-2 before:border before:border-wedding-gold/20"
      >
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-4 opacity-80">
            {/* Om / Ganesh or generic ornament placeholder */}
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-wedding-gold">
              <path d="M50 10C50 10 70 30 70 50C70 70 50 90 50 90C50 90 30 70 30 50C30 30 50 10 50 10Z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h3 className="text-xl tracking-widest text-wedding-gold uppercase font-sans mb-2">Invitation</h3>
          <p className="text-wedding-maroon font-serif italic">80th Wedding Anniversary</p>
        </div>

        <div className="space-y-6 mb-10">
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-burgundy leading-tight">
            {weddingData.groom.name} <br/>
            <span className="text-3xl text-wedding-gold my-2 inline-block">&</span> <br/>
            {weddingData.bride.name}
          </h2>
        </div>

        <div className="space-y-4 font-sans text-gray-700 border-t border-b border-wedding-gold/30 py-6 mb-8">
          <p className="tracking-widest uppercase text-sm font-bold">
            {new Date(weddingData.wedding.date).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <p className="text-sm">
            {weddingData.wedding.time} – {weddingData.wedding.endTime}
          </p>
          <p className="text-sm font-serif italic pt-2">
            {weddingData.wedding.venue}, <br/>
            {weddingData.wedding.address}
          </p>
        </div>

        <p className="text-wedding-maroon font-serif italic">
          Your presence is our most cherished gift.
        </p>
      </motion.div>
    </section>
  );
}
