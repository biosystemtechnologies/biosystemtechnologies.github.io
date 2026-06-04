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
    <footer className="bg-black border-t border-white/10 py-16 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 items-start text-left">
        
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-5">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white">
              <Layers className="w-4.5 h-4.5 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-medium text-base text-white tracking-tight">
                Biosystem
              </span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-gray-500 leading-none">
                Technologies
              </span>
            </div>
          </a>

          <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
            Investigación y Desarrollo de Tecnologías de Información. Suministro integral de ordenadores certificados, soporte técnico microelectrónico de precisión, branding comercial de marca e impresiones gran formato en el Estado Portuguesa.
          </p>

          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
            © {new Date().getFullYear()} Biosystem Technologies. Todos los derechos reservados.<br />
            Sede Técnica Guanare • Portuguesa, Venezuela.
          </p>
        </div>

        {/* Contacts Column */}
        <div className="space-y-4">
          <h4 className="font-mono text-[10px] text-white uppercase tracking-widest font-bold">Contactos Oficiales</h4>
          <ul className="space-y-3 font-light text-xs text-gray-400">
            <li className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-white shrink-0" />
              <span>0257-2539969 (Fijo)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-white shrink-0" />
              <span>0412-4955404 (Celular)</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="truncate">biosystemtechnologies@gmail.com</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Guanare, Portuguesa</span>
            </li>
          </ul>
        </div>

        {/* Useful Quick links */}
        <div className="space-y-4">
          <h4 className="font-mono text-[10px] text-white uppercase tracking-widest font-bold">Tecnologías</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li><span className="hover:text-white transition-colors cursor-default">Sistemas Offline-First</span></li>
            <li><span className="hover:text-white transition-colors cursor-default">Micro-soldadura SMD / BGA</span></li>
            <li><span className="hover:text-white transition-colors cursor-default">Impresión Calibrada CMYK</span></li>
            <li><span className="hover:text-white transition-colors cursor-default">I+D de TI Aplicada</span></li>
          </ul>
          
          <button
            onClick={handleScrollToTop}
            className="mt-4 flex items-center gap-2 text-[10px] font-mono text-gray-400 hover:text-white transition-colors uppercase font-bold cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Volver Arriba
          </button>
        </div>

      </div>
    </footer>
  );
}
