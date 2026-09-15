import React from 'react';
import { weddingData } from '../data/weddingData';

export default function Footer() {
  return (
    <footer className="py-12 bg-wedding-dark border-t border-wedding-gold/20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl font-serif text-wedding-gold mb-2">
          {weddingData.groom.name} <span className="text-wedding-maroon mx-2">♥</span> {weddingData.bride.name}
        </h3>
        <p className="text-gray-400 font-serif italic mb-4">Forever begins here.</p>
        <p className="text-wedding-gold-light/50 text-xs font-sans tracking-[0.2em] uppercase mb-8">
          {new Date(weddingData.wedding.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
        <div className="text-gray-500 text-xs font-sans flex items-center justify-center gap-2">
          <span>Made with love</span>
        </div>
      </div>
    </footer>
  );
}
