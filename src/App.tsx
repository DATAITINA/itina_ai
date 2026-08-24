import React, { useState, useEffect } from 'react';
import { BackgroundNeuralCanvas } from './components/BackgroundNeuralCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FirstPrinciples } from './components/FirstPrinciples';
import { Systems } from './components/Systems';
import { Dokusure } from './components/Dokusure';
import { Engineering } from './components/Engineering';
import { Frontier } from './components/Frontier';
import { Philosophy } from './components/Philosophy';
import { Future } from './components/Future';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll for minimalist navbar state
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute('id') || '';

        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] font-sans selection:bg-white/20 selection:text-white">
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Subtle Generative Computational Background Canvas */}
      <BackgroundNeuralCanvas />

      {/* Persistent Minimalist Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenContact={() => scrollToSection('contact')}
      />

      {/* Main Cinematic Journey Layout */}
      <main className="relative z-10 flex flex-col w-full">
        {/* 00 / Hero Screen */}
        <Hero
          onExploreClick={() => scrollToSection('systems')}
          onSeeBuildingClick={() => scrollToSection('principles')}
        />

        {/* 01 / First Principles */}
        <FirstPrinciples />

        {/* 02 / Systems */}
        <Systems />

        {/* 03 / First Deployment: Dokusure */}
        <Dokusure onOpenContact={() => scrollToSection('contact')} />

        {/* 04 / Engineering Architecture */}
        <Engineering />

        {/* 05 / Frontier Exploration */}
        <Frontier />

        {/* 06 / Philosophy */}
        <Philosophy />

        {/* 07 / Future Horizon */}
        <Future />

        {/* 08 / About */}
        <About />

        {/* 09 / Contact & Collaboration */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
