import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    attendance: 'attending',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const attendanceText = formData.attendance === 'attending' 
      ? 'I would like to confirm my attendance' 
      : 'I regretfully cannot attend';
      
    const text = `Hello, I am ${formData.name}. ${attendanceText} for the Sathabhishekam celebration. Number of guests: ${formData.guests}. ${formData.message ? `Message: ${formData.message}` : ''}`;
    
    const whatsappUrl = `https://wa.me/${weddingData.contact.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-wedding-ivory relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-wedding-burgundy mb-4">We Would Love to Celebrate With You</h2>
          <p className="text-gray-600 font-sans">Kindly confirm your presence</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 rounded-lg shadow-2xl border border-wedding-gold/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-sans text-gray-700 mb-2 uppercase tracking-wider">Name</label>
              <input 
                type="text" 
                required
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-wedding-gold bg-transparent transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-sans text-gray-700 mb-2 uppercase tracking-wider">Number of Guests</label>
                <select 
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-wedding-gold bg-transparent text-gray-700"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-sans text-gray-700 mb-2 uppercase tracking-wider">Attendance</label>
                <select 
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-wedding-gold bg-transparent text-gray-700"
                  value={formData.attendance}
                  onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                >
                  <option value="attending">Joyfully Attending</option>
                  <option value="not_attending">Regretfully Unable to Attend</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-sans text-gray-700 mb-2 uppercase tracking-wider">Message (Optional)</label>
              <textarea 
                rows="3"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-wedding-gold bg-transparent transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <div className="pt-6 text-center">
              <button 
                type="submit"
                className="inline-block px-12 py-4 bg-wedding-maroon text-wedding-gold-light font-sans font-bold tracking-[0.2em] uppercase text-sm hover:bg-wedding-burgundy transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
              >
                Send RSVP
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
