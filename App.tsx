
import React, { useState, useEffect } from 'react';
import { QUOTES } from './constants';
import { Quote } from './types';

const App: React.FC = () => {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Pick a random quote on mount
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setRandomQuote(QUOTES[randomIndex]);
    
    // Fade in effect
    const timer = setTimeout(() => setOpacity(1), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!randomQuote) return null;

  return (
    <main className="relative w-full h-screen overflow-hidden animate-fiery flex items-center justify-center p-8 md:p-12 lg:p-24">
      {/* Background Overlay to deepen the black tones */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      {/* Content Container */}
      <div 
        className="relative z-10 max-w-4xl text-center transition-opacity duration-1000 ease-out"
        style={{ opacity }}
      >
        {/* Editorial Accent */}
        <div className="mb-8 flex justify-center items-center">
          <div className="h-px w-8 bg-white/20"></div>
          <div className="mx-4 text-white/40 uppercase tracking-[0.4em] text-[10px] body-font font-bold">
            Ignite Insight
          </div>
          <div className="h-px w-8 bg-white/20"></div>
        </div>

        {/* The Quote */}
        <h1 className="editorial-font text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-10 drop-shadow-[0_15px_25px_rgba(0,0,0,1)] italic">
          &ldquo;{randomQuote.text}&rdquo;
        </h1>

        {/* The Author and Role */}
        <div className="flex flex-col items-center">
          <span className="editorial-font text-white text-xl md:text-2xl mb-2 tracking-wide drop-shadow-lg">
            {randomQuote.author}
          </span>
          <span className="body-font text-white/40 text-xs md:text-sm uppercase tracking-[0.2em] font-light">
            {randomQuote.role}
          </span>
        </div>

        {/* Minimalist Decoration */}
        <div className="mt-16 opacity-20">
          <div className="w-1 h-1 bg-white rounded-full mx-auto mb-2"></div>
          <div className="w-1 h-1 bg-white rounded-full mx-auto mb-2 opacity-50"></div>
          <div className="w-1 h-1 bg-white rounded-full mx-auto opacity-20"></div>
        </div>
      </div>

      {/* Heavy Noise Overlay for textured, fiery look */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </main>
  );
};

export default App;
