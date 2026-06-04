/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, Phone, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onOpenChat: () => void;
  activeSection: string;
}

export default function Header({ onOpenChat, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Portafolio', href: '#portafolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-neon-blue py-3 shadow-[0_0_20px_rgba(0,242,255,0.2)]'
          : 'bg-transparent py-5 border-b border-white/0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center group transition-transform duration-300 active:scale-95 relative z-10">
          <img 
            src="/logo.png" 
            alt="Biosystem Logo" 
            className={`object-contain transition-all duration-500 drop-shadow-[0_0_15px_rgba(0,242,255,0.4)] group-hover:drop-shadow-[0_0_30px_rgba(0,242,255,0.7)] ${
              isScrolled ? 'w-24 h-24' : 'w-48 h-48 sm:w-56 sm:h-56'
            }`} 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-black/40 border border-neon-blue/30 px-2 py-1.5 rounded-sm backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 rounded-sm text-[10px] uppercase tracking-widest font-bold transition-all ${
                  isActive
                    ? 'text-black bg-neon-blue shadow-[0_0_15px_rgba(0,242,255,0.5)]'
                    : 'text-neon-blue/60 hover:text-neon-blue hover:bg-neon-blue/10'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Live Support Quick Call */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:04264500865"
            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neon-blue/70 hover:text-neon-blue transition-colors"
            title="Llamar hoy mismo"
          >
            <Phone className="w-3.5 h-3.5" />
            0426-4500865
          </a>
          <button
            onClick={onOpenChat}
            className="automan-button flex items-center gap-2 px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold rounded-sm transition-all transform hover:scale-[1.03] active:scale-95 cursor-pointer shadow-lg"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Soporte En Vivo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-sm border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-neon-blue/50 py-5 px-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-sm text-xs uppercase tracking-widest font-bold transition-all border border-transparent ${
                    isActive ? 'text-black bg-neon-blue shadow-[0_0_15px_rgba(0,242,255,0.4)]' : 'text-neon-blue/60 hover:text-neon-blue hover:border-neon-blue/30'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <hr className="border-neon-blue/20" />
          <div className="flex flex-col gap-3 pt-2">
            <span className="text-[10px] font-mono text-neon-blue/50 uppercase tracking-widest px-4">Guanare, Portuguesa</span>
            <a
              href="mailto:biosystemtechnologies@gmail.com"
              className="text-xs text-neon-blue/80 hover:text-neon-blue px-4 truncate transition-colors"
            >
              biosystemtechnologies@gmail.com
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenChat();
              }}
              className="automan-button flex items-center justify-center gap-2 w-full py-3 text-xs uppercase tracking-widest font-bold rounded-sm transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              Soporte En Vivo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
