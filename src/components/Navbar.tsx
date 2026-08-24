import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SYSTEMS', href: '#systems' },
    { label: 'DOKUSURE', href: '#dokusure', badge: 'DEPLOYING' },
    { label: 'ENGINEERING', href: '#engineering' },
    { label: 'FRONTIER', href: '#frontier' },
    { label: 'PHILOSOPHY', href: '#philosophy' },
    { label: 'ABOUT', href: '#about' },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6 sm:py-8 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-brand-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 focus:outline-none py-1"
        >
          <Logo size={22} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                data-interactive="true"
                data-cursor-label="VIEW"
                className={`text-[11px] font-mono-tech tracking-[0.2em] transition-colors py-1 flex items-center gap-2 ${
                  isActive ? 'text-white font-medium' : 'text-white/50 hover:text-white'
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="text-[8px] font-mono-tech px-1.5 py-0.5 rounded-xs bg-white/10 text-white/80 border border-white/20">
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Contact */}
        <div className="hidden sm:flex items-center gap-6">
          <button
            id="nav-contact-btn"
            onClick={onOpenContact}
            data-interactive="true"
            data-cursor-label="CONNECT"
            className="text-[10.5px] font-mono-tech tracking-[0.2em] font-medium border border-white/20 px-5 py-1.5 rounded uppercase hover:bg-white hover:text-black transition-all text-white/90"
          >
            CONTACT
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white/70 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#050505]/98 border-b border-white/10 backdrop-blur-xl px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between text-xs font-mono-tech text-white/40 pb-2 border-b border-white/10">
            <span>INDEX // NAVIGATION</span>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ONLINE</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-display font-medium text-white/80 hover:text-white tracking-wide flex items-center justify-between py-1"
              >
                <span>{link.label}</span>
                {link.badge ? (
                  <span className="text-[9px] font-mono-tech px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/20">
                    {link.badge}
                  </span>
                ) : (
                  <span className="text-xs font-mono-tech text-white/30">→</span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-full bg-white text-black font-mono-tech text-xs tracking-wider font-semibold text-center hover:bg-neutral-200 transition-colors"
            >
              START A CONVERSATION →
            </button>
            <div className="text-[10px] font-mono-tech text-white/40 text-center">
              LAGOS, NIGERIA • GLOBAL DEPLOYMENT
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
