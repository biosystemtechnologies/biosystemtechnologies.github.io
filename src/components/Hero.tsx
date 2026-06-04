/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Cpu, Code, Lightbulb, ArrowRight, Settings2 } from 'lucide-react';

interface HeroProps {
  onOpenChat: () => void;
}

export default function Hero({ onOpenChat }: HeroProps) {
  const stats = [
    { label: 'Servicio de Microelectrónica', detail: 'Taller Especializado', icon: Cpu, color: 'text-white' },
    { label: 'Desarrollo de Software', detail: 'Estándar Premium / Offline', icon: Code, color: 'text-gray-300' },
    { label: 'Diseño e Impresión', detail: 'Garantía CMYK Color', icon: Lightbulb, color: 'text-gray-400' }
  ];

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute top-[15%] left-[10%] w-[350px] h-[350px] rounded-full glow-orb-1 -z-10 filter blur-[90px]" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full glow-orb-2 -z-10 filter blur-[110px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Creative Message */}
        <div className="lg:col-span-7 space-y-8 text-left animate-in fade-in duration-700">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="flex h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-400 font-medium">
              Sede Central Guanare • Portuguesa • Venezuela
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light tracking-tighter text-white leading-[1.0] max-w-2xl">
            Innovación en <br/>
            <span className="font-medium italic text-gray-400 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Tecnologías de Información
            </span><br/>
            para Portuguesa.
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed max-w-lg">
            Ofrecemos ingeniería avanzada en software, soporte técnico microelectrónico de primer nivel, diseño comercial e impresiones de gran escala. Elevamos el estándar tecnológico del Centro-Occidente venezolano.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#servicios"
              onClick={(e) => handleExploreClick(e, '#servicios')}
              className="group flex items-center gap-2.5 px-6 py-3.5 text-[10px] font-bold text-black bg-white rounded-full hover:bg-neutral-200 uppercase tracking-widest transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
            >
              Nuestra Oferta
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={onOpenChat}
              className="flex items-center gap-2 px-6 py-3.5 text-[10px] font-bold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 uppercase tracking-widest transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              Consultar Soporte Móvil
            </button>
          </div>

          <hr className="border-white/10 max-w-xl" />

          {/* Core highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1.5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <stat.icon className={`w-3.5 h-3.5 ${stat.color}`} />
                  <span className="font-mono text-[8px] uppercase tracking-widest text-gray-500">
                    {stat.detail}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-white leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: High Fidelity interactive Apple style element */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden max-w-md mx-auto">
            {/* Top Bar Decoration */}
            <div className="flex items-between justify-between border-b border-white/10 pb-4 mb-5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/10" />
              </div>
              <span className="font-mono text-[9px] text-gray-500 uppercase tracking-[0.15em] flex items-center gap-1">
                <Settings2 className="w-3 h-3 animate-spin duration-300" />
                BIOSYSTEM R&D NODE
              </span>
            </div>

            {/* Simulated Server Info Dashboard */}
            <div className="space-y-4">
              {/* Module 1: Software Node status */}
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-wider">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    DESARROLLO DE SOFTWARE
                  </span>
                  <span className="text-white font-semibold">ACTIVE // PWA</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[88%] h-full bg-white rounded-full transition-all duration-1000" />
                </div>
                <div className="flex justify-between text-[8px] font-mono text-gray-500">
                  <span>Offline Sync Status</span>
                  <span>100% Operational</span>
                </div>
              </div>

              {/* Module 2: Tech repair status report */}
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-wider">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    DIAGNÓSTICO MICROELECTRÓNICO
                  </span>
                  <span className="text-gray-300 font-semibold">BENCH TESTS</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[94%] h-full bg-gray-300 rounded-full" />
                </div>
                <div className="flex justify-between text-[8px] font-mono text-gray-500">
                  <span>Component Precision Calibration</span>
                  <span>94% Accuracy rate</span>
                </div>
              </div>

              {/* Module 3: Vector Render Node */}
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-wider">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                    IMPRESIÓN PUBLICITARIA CMYK
                  </span>
                  <span className="text-gray-400 font-semibold">PLOTTER IDLE</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-gray-400 rounded-full" />
                </div>
                <div className="flex justify-between text-[8px] font-mono text-gray-500">
                  <span>Color Profiling Matcher</span>
                  <span>Delta E &lt; 1.2</span>
                </div>
              </div>
            </div>

            {/* Quick Live Contact Section inside the showcase */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono tracking-widest text-gray-500">
              <span>Guanare Teléfonos:</span>
              <span className="text-white hover:text-gray-300 transition-colors">0257-2539969</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
