import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import Hero from './components/Hero';
import CoupleStory from './components/CoupleStory';
import Countdown from './components/Countdown';
import Events from './components/Events';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import Family from './components/Family';
import RSVP from './components/RSVP';
import DigitalCard from './components/DigitalCard';
import FinalSection from './components/FinalSection';
import Footer from './components/Footer';
import MusicControl from './components/MusicControl';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="font-sans text-wedding-dark bg-wedding-ivory selection:bg-wedding-gold selection:text-white overflow-x-hidden">
      {!introComplete && <IntroScreen onComplete={() => setIntroComplete(true)} />}
      
      <div className={`transition-opacity duration-1000 ${introComplete ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <MusicControl />
        <WhatsAppButton />
        
        <main>
          <Hero />
          <CoupleStory />
          <Countdown />
          <Events />
          <Venue />
          <Gallery />
          <DigitalCard />
          <Family />
          <RSVP />
          <FinalSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
