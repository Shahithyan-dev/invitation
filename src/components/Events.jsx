import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: "SATHABHISHEKAM CEREMONY",
      date: new Date(weddingData.wedding.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
      time: `${weddingData.wedding.time} – ${weddingData.wedding.endTime}`,
      venue: weddingData.wedding.venue
    }
    // You can add more events like Reception here
  ];

  return (
    <section className="py-24 px-4 bg-wedding-cream relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-burgundy mb-4">
            The Celebration
          </h2>
          <div className="w-24 h-px bg-wedding-gold mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line for Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wedding-gold/30 -translate-x-1/2"></div>

          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-wedding-cream border-2 border-wedding-gold items-center justify-center z-10 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-wedding-maroon"></div>
              </div>

              <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'} mb-8 md:mb-0`}>
                <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border border-wedding-gold/10 w-full max-w-md transform transition-transform hover:-translate-y-1">
                  <h3 className="text-2xl font-serif text-wedding-maroon mb-6 text-center md:text-left">{event.title}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 text-wedding-gold mr-4 flex-shrink-0" />
                      <span className="font-sans">{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <Clock className="w-5 h-5 text-wedding-gold mr-4 flex-shrink-0" />
                      <span className="font-sans">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 text-wedding-gold mr-4 flex-shrink-0" />
                      <span className="font-sans">{event.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
