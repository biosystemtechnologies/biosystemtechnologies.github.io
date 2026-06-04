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
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5 border-b border-white/0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group transition-transform duration-300 active:scale-95">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white text-black font-bold tracking-tighter shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:bg-gray-200 transition-all">
            <Layers className="w-5 h-5 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-medium text-base tracking-tight text-white uppercase group-hover:text-gray-300 transition-colors">
              Biosystem
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-500 leading-none">
              Technologies
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-medium transition-all ${
                  isActive
                    ? 'text-white bg-white/15'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
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
            href="tel:04124955404"
            className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            title="Llamar hoy mismo"
          >
            <Phone className="w-3.5 h-3.5 text-gray-400" />
            0412-4955404
          </a>
          <button
            onClick={onOpenChat}
            className="flex items-center gap-2 px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold text-black bg-white rounded-full hover:bg-gray-100 transition-all transform hover:scale-[1.03] active:scale-95 cursor-pointer shadow-lg"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Soporte En Vivo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-[#a1a1aa] hover:text-white hover:bg-white/5 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 py-5 px-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-lg text-xs uppercase tracking-widest font-medium transition-all ${
                    isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <hr className="border-white/5" />
          <div className="flex flex-col gap-3 pt-2">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest px-4">Guanare, Portuguesa</span>
            <a
              href="mailto:biosystemtechnologies@gmail.com"
              className="text-xs text-gray-400 hover:text-white px-4 truncate transition-colors"
            >
              biosystemtechnologies@gmail.com
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenChat();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 text-xs uppercase tracking-widest font-bold text-black bg-white rounded-xl hover:bg-neutral-200 transition-all cursor-pointer"
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
