'use client';

import { useState } from 'react';
import Loader from '../components/Loader'; 
import Navbar from '@/components/navbar'; 
import HeroSection from '@/components/hero'; 
import IndustriesSection from '@/components/industries';
import AboutSection from '../components/about';
import ServicesSection from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/blogs';
import ContactSection from '@/components/contact';
import ContactSection1 from '@/components/contact2';
import Footer from '@/components/Footer';



import HeroSection1 from '../components/hero1';




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
          <HeroSection1 />
          <IndustriesSection />
          <AboutSection />
          <ServicesSection />
          <Portfolio />
          <Testimonials />
          <BlogSection />
          <ContactSection />
          <ContactSection1 />
          <Footer />
        </>
      )}
    </main>
  );
}