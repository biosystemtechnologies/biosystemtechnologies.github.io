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
    { label: 'Servicio de Electrónica', detail: 'Taller Especializado', icon: Cpu, color: 'text-neon-blue' },
    { label: 'Desarrollo de Software', detail: 'Estándar Cyber / Offline', icon: Code, color: 'text-neon-blue' },
    { label: 'Diseño Grafico e Impresión', detail: 'Garantía Vectorial', icon: Lightbulb, color: 'text-neon-blue' }
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
    <section id="inicio" className="relative min-h-screen pt-48 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute top-[15%] left-[10%] w-[350px] h-[350px] rounded-full glow-orb -z-10 filter blur-[90px]" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full glow-orb -z-10 filter blur-[110px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Creative Message */}
        <div className="lg:col-span-7 space-y-8 text-left animate-in fade-in duration-700">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black border border-neon-blue rounded-sm shadow-[0_0_10px_rgba(0,242,255,0.2)]">
            <span className="flex h-1.5 w-1.5 rounded-full bg-neon-blue animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neon-blue font-bold">
              PROTOCOLO ACTIVADO
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.9] max-w-2xl">
            Vanguardia en <br/>
            <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,242,255,0.6)]">
              Sistemas Digitales
            </span><br/>
            <span className="text-3xl lg:text-5xl opacity-80">
            A su medida.</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed max-w-lg border-l-2 border-neon-blue pl-6">
            Desarrollo de software, Electrónica, y Comunicación Visual de impacto. Transformamos el paisaje tecnológico llanero con estándares globales.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#servicios"
              onClick={(e) => handleExploreClick(e, '#servicios')}
              className="automan-button flex items-center gap-2.5 px-8 py-4 text-[10px] font-bold rounded-sm uppercase tracking-widest transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(0,242,255,0.3)]"
            >
              Explorando
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={onOpenChat}
              className="flex items-center gap-2 px-8 py-4 text-[10px] font-bold text-neon-blue bg-neon-blue/5 border border-neon-blue/30 rounded-sm hover:bg-neon-blue/10 uppercase tracking-widest transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              Enlace de Soporte
            </button>
          </div>

          <hr className="border-neon-blue/20 max-w-xl" />

          {/* Core highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1.5 p-4 rounded-sm bg-black border border-neon-blue/30 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(0,242,255,0.05)]">
                <div className="flex items-center gap-2">
                  <stat.icon className={`w-3.5 h-3.5 ${stat.color} drop-shadow-[0_0_5px_rgba(0,242,255,0.5)]`} />
                  <span className="font-mono text-[8px] uppercase tracking-widest text-neon-blue/60">
                    {stat.detail}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-white leading-tight uppercase tracking-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Virtual Display Style Dashboard */}
        <div className="lg:col-span-5 relative">
          <div className="relative bg-black border-2 border-neon-blue rounded-sm p-6 shadow-[0_0_40px_rgba(0,242,255,0.3)] overflow-hidden max-w-md mx-auto">
            {/* Grid Overlay inside the box */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(rgba(0, 242, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 255, 0.2) 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
            
            {/* Top Bar Decoration */}
            <div className="flex items-center justify-between border-b border-neon-blue/50 pb-4 mb-5 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-neon-blue shadow-[0_0_5px_rgba(0,242,255,0.8)]" />
                <span className="w-1.5 h-1.5 bg-neon-blue opacity-50" />
                <span className="w-1.5 h-1.5 bg-neon-blue opacity-20" />
              </div>
              <span className="font-mono text-[9px] text-neon-blue uppercase tracking-[0.2em] flex items-center gap-1 font-bold">
                <Settings2 className="w-3 h-3 animate-spin duration-[3000ms]" />
                NODE OS // v1.0.4
              </span>
            </div>

            {/* Simulated Server Info Dashboard */}
            <div className="space-y-4 relative z-10">
              {/* Module 1: Software Node status */}
              <div className="p-4 bg-neon-blue/5 rounded-sm border border-neon-blue/40 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-wider">
                  <span className="text-neon-blue flex items-center gap-1.5 font-bold">
                    <span className="w-1.5 h-1.5 bg-neon-blue animate-ping" />
                    CORE_SOFT
                  </span>
                  <span className="text-white font-bold opacity-90">EN LINEA</span>
                </div>
                <div className="h-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full overflow-hidden">
                  <div className="w-[88%] h-full bg-neon-blue shadow-[0_0_10px_rgba(0,242,255,1)]" />
                </div>
                <div className="flex justify-between text-[8px] font-mono text-neon-blue/60">
                  <span>ENABLED</span>
                  <span>SYNC_CAPACITY_88%</span>
                </div>
              </div>

              {/* Module 2: Tech repair status report */}
              <div className="p-4 bg-neon-blue/5 rounded-sm border border-neon-blue/40 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-wider">
                  <span className="text-neon-blue flex items-center gap-1.5 font-bold">
                    <span className="w-1.5 h-1.5 bg-neon-blue" />
                    DIAGNOSTICOS
                  </span>
                  <span className="text-white font-bold opacity-90">LISTOS</span>
                </div>
                <div className="h-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full overflow-hidden">
                  <div className="w-[94%] h-full bg-neon-blue/80 shadow-[0_0_5px_rgba(0,242,255,0.8)]" />
                </div>
                <div className="flex justify-between text-[8px] font-mono text-neon-blue/60">
                  <span>PRECISION_MILIMETRICA</span>
                  <span>94.002 ACCURACY</span>
                </div>
              </div>

              {/* Module 3: Vector Render Node */}
              <div className="p-4 bg-neon-blue/5 rounded-sm border border-neon-blue/40 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-wider">
                  <span className="text-neon-blue flex items-center gap-1.5 font-bold">
                    <span className="w-1.5 h-1.5 bg-neon-blue opacity-50" />
                    DISPLAY_ID
                  </span>
                  <span className="text-white font-bold opacity-90">IDLE</span>
                </div>
                <div className="h-1 bg-neon-blue/10 border border-neon-blue/20 rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-neon-blue/60" />
                </div>
                <div className="flex justify-between text-[8px] font-mono text-neon-blue/60">
                  <span>COLOR_PROFILE_CMYK</span>
                  <span>OPTIMIZED</span>
                </div>
              </div>
            </div>

            {/* Quick Live Contact Section inside the showcase */}
            <div className="mt-5 pt-4 border-t border-neon-blue/30 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-neon-blue/70">
              <span>EST_PORT_GUANARE</span>
              <span className="text-neon-blue font-bold">#58-257-2539969</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
