
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Bio from '@/components/Bio';
import Works from '@/components/Works';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Flutter Developer Portfolio';
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Works />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
