'use client';

import { useState } from 'react';
import Loader from '../components/Loader'; 
import Navbar from '../components/navbar'; 
import HeroSection from '../components/hero'; 
import AboutSection from '../components/about';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-[#050000]">
      {isLoading && (
        <Loader onComplete={() => setIsLoading(false)} />
      )}

      {/* 
        The Navbar is added here. It has a built-in animation delay 
        so it drops down exactly as the Loader finishes exiting.
      */}
      {!isLoading && (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
        </>
      )}
    </main>
  );
}