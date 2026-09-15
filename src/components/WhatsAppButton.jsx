import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function WhatsAppButton() {
  const handleClick = () => {
    const text = "Hello! I'm excited to join you for your Sathabhishekam celebration.";
    const whatsappUrl = `https://wa.me/${weddingData.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-green-500/30 before:absolute before:inset-0 before:rounded-full before:animate-ping before:bg-green-500/40"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 relative z-10" />
    </motion.button>
  );
}
