import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isEventDay, setIsEventDay] = useState(false);

  useEffect(() => {
    // We combine date and time for the target
    const targetDate = new Date(`${weddingData.wedding.date}T${weddingData.wedding.time.replace(' AM', ':00').replace(' PM', ':00')}`);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsEventDay(true);
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <section className="py-24 px-4 bg-wedding-maroon text-wedding-ivory relative overflow-hidden">
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-wedding-gold-light mb-12">
            Counting Down to Forever
          </h2>

          {isEventDay ? (
            <motion.h3 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl md:text-6xl font-serif text-wedding-gold"
            >
              Today is the day!
            </motion.h3>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              {timeBlocks.map((block, index) => (
                <motion.div
                  key={block.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center border border-wedding-gold/40 rounded-full mb-4 bg-black/10 backdrop-blur-sm shadow-lg shadow-black/20">
                    <span className="text-3xl md:text-5xl font-serif text-white">
                      {block.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-wedding-gold-light tracking-widest text-xs md:text-sm uppercase font-sans">
                    {block.label}
                  </span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
