import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function MusicControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(weddingData.music.src);
    audioRef.current.loop = true;

    // Handle user first interaction to allow autoplay
    const handleFirstInteraction = () => {
      if (!hasInteracted && weddingData.music.enabled) {
        setHasInteracted(true);
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => console.log("Audio autoplay blocked:", err));
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });
    document.addEventListener('scroll', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!weddingData.music.enabled) return null;

  return (
    <button 
      onClick={togglePlay}
      className={`fixed top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${isPlaying ? 'bg-wedding-gold text-wedding-dark' : 'bg-wedding-dark/50 text-wedding-gold backdrop-blur-md border border-wedding-gold/30'}`}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 animate-pulse" />
      ) : (
        <VolumeX className="w-6 h-6" />
      )}
    </button>
  );
}
