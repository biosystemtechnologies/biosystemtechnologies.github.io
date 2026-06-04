/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Layers, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black border-t border-neon-blue/30 py-16 relative overflow-hidden">
      {/* Decorative Scanline */}
      <div className="absolute inset-0 bg-scanline opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 items-start text-left relative z-10">
        
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-6">
          <a href="#inicio" className="flex items-center group transition-transform duration-300">
            <div className="flex items-center justify-center w-28 h-28 border-2 border-neon-blue bg-black shadow-[0_0_20px_rgba(0,242,255,0.4)] rounded-sm overflow-hidden group-hover:shadow-[0_0_35px_rgba(0,242,255,0.6)] transition-all">
              <img src="/logo.png" alt="Biosystem Logo" className="w-[85%] h-[85%] object-contain" />
            </div>
          </a>

          <p className="text-[11px] text-gray-400 font-medium leading-relaxed max-w-sm border-l-2 border-neon-blue/20 pl-6">
            Investigación y Desarrollo de Sistemas Digitales en la región de Portuguesa. Especialistas en microelectrónica de alta precisión, ingeniería de software resiliente y comunicación visual de impacto.
          </p>

          <p className="text-[9px] font-mono text-neon-blue/40 uppercase tracking-[0.2em] font-bold">
            © {new Date().getFullYear()} BIOSYSTEM_TECH // TODOS LOS DERECHOS RESERVADOS<br />
            ID_ESTACIÓN: GUANARE_PORT_VE
          </p>
        </div>

        {/* Contacts Column */}
        <div className="space-y-5">
          <h4 className="font-mono text-[10px] text-neon-blue uppercase tracking-[0.3em] font-bold border-b border-neon-blue/20 pb-2">
            ENLACE_MÓVIL
          </h4>
          <ul className="space-y-3 font-medium text-[11px] text-gray-400">
            <li className="flex items-center gap-2.5 group">
              <Phone className="w-4 h-4 text-neon-blue shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors">0257-2539969 [FIJO]</span>
            </li>
            <li className="flex items-center gap-2.5 group">
              <Phone className="w-4 h-4 text-neon-blue shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors">0426-4500865 [CEL]</span>
            </li>
            <li className="flex items-center gap-2.5 group">
              <Mail className="w-4 h-4 text-neon-blue shrink-0 group-hover:scale-110 transition-transform" />
              <span className="truncate group-hover:text-white transition-colors">biosystemtechnologies@gmail.com</span>
            </li>
            <li className="flex items-center gap-2.5 group">
              <MapPin className="w-4 h-4 text-neon-blue shrink-0 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-white transition-colors uppercase tracking-tight">Guanare, Portuguesa</span>
            </li>
          </ul>
        </div>

        {/* Useful Quick links */}
        <div className="space-y-5">
          <h4 className="font-mono text-[10px] text-neon-blue uppercase tracking-[0.3em] font-bold border-b border-neon-blue/20 pb-2">
            NÚCLEO_TI
          </h4>
          <ul className="space-y-2 text-[11px] text-gray-400 font-bold uppercase tracking-tight">
            <li className="hover:text-neon-blue transition-colors cursor-default flex items-center gap-2">
              <span className="w-1 h-1 bg-neon-blue rounded-full"></span>
              Sistemas Offline-First
            </li>
            <li className="hover:text-neon-blue transition-colors cursor-default flex items-center gap-2">
              <span className="w-1 h-1 bg-neon-blue rounded-full"></span>
              Micro-soldadura Precision
            </li>
            <li className="hover:text-neon-blue transition-colors cursor-default flex items-center gap-2">
              <span className="w-1 h-1 bg-neon-blue rounded-full"></span>
              Branding Vectorial
            </li>
            <li className="hover:text-neon-blue transition-colors cursor-default flex items-center gap-2">
              <span className="w-1 h-1 bg-neon-blue rounded-full"></span>
              Investigación I+D
            </li>
          </ul>
          
          <button
            onClick={handleScrollToTop}
            className="mt-6 flex items-center gap-2 text-[10px] font-mono text-neon-blue bg-neon-blue/5 border border-neon-blue/30 px-4 py-2 rounded-sm hover:bg-neon-blue hover:text-black transition-all uppercase font-bold cursor-pointer shadow-[0_0_10px_rgba(0,242,255,0.2)]"
          >
            <ArrowUp className="w-4 h-4" />
            RESET_OFFSET_0
          </button>
        </div>

      </div>
    </footer>
  );
}
