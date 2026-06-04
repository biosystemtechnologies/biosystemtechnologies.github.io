/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { FolderGit, Calendar, User, Eye, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState<'All' | 'Software' | 'Electrónica' | 'Diseño'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portafolio" className="py-24 bg-black relative border-b border-neon-blue/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-[10px] text-neon-blue uppercase tracking-[0.3em] block font-bold">
              [ PROTOCOLOS_DE_ÉXITO // I+D_APLICADO ]
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tighter uppercase italic">
              NODO <span className="text-neon-blue drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]">PROYECTOS</span>
            </h2>
            <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed border-l border-neon-blue/40 pl-6">
              Sistemas desplegados en la región de Portuguesa. Ingeniería de alto rendimiento bajo estándares de diseño Automan.
            </p>
          </div>

          {/* Filters List */}
          <div className="flex flex-wrap gap-2.5 shrink-0">
            {['All', 'Software', 'Electrónica', 'Diseño'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2.5 rounded-sm text-[10px] uppercase tracking-widest font-bold border transition-all duration-300 transform active:scale-95 cursor-pointer ${
                  filter === cat
                    ? 'border-neon-blue bg-neon-blue text-black shadow-[0_0_15px_rgba(0,242,255,0.5)]'
                    : 'border-neon-blue/20 bg-transparent text-neon-blue/60 hover:text-neon-blue hover:border-neon-blue/50'
                }`}
              >
                {cat === 'All' ? 'Ver Todos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-sm overflow-hidden bg-black border border-neon-blue/30 p-5 hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all hover:scale-[1.01] flex flex-col justify-between relative"
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-scanline opacity-[0.03] pointer-events-none"></div>

              {/* Project Image Box */}
              <div>
                <div className="relative aspect-video rounded-sm bg-black overflow-hidden mb-5 border border-neon-blue/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                  
                  {/* Details absolute layout */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-neon-blue text-black rounded-sm font-mono text-[8px] font-bold tracking-[0.2em] uppercase shadow-[0_0_10px_rgba(0,242,255,1)]">
                    <FolderGit className="w-3 h-3" />
                    {project.category}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-neon-blue bg-black/60 border border-neon-blue/40 px-2.5 py-0.5 rounded-sm backdrop-blur-sm font-bold">
                      ID: {project.client.toUpperCase()}
                    </span>
                    <span className="p-2 rounded-sm bg-neon-blue text-black hover:scale-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(0,242,255,0.8)]">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Core Text content */}
                <div className="space-y-3 text-left relative z-10">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-neon-blue transition-colors flex items-center gap-2 uppercase tracking-tighter">
                    <span className="w-2 h-4 bg-neon-blue inline-block"></span>
                    {project.title}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed opacity-80">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags mapping */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-3 border-t border-neon-blue/20 relative z-10">
                {project.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 bg-neon-blue/5 border border-neon-blue/30 rounded-sm text-[9px] font-mono text-neon-blue/70 font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Expandable Fullscreen Modal View */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg animate-in fade-in duration-300">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm bg-black border-2 border-neon-blue p-6 md:p-10 shadow-[0_0_100px_rgba(0,242,255,0.3)] space-y-8 animate-in zoom-in-95 duration-300">
              
              {/* Close Button absolute positioning */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-sm bg-black border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all active:scale-95 cursor-pointer shadow-[0_0_10px_rgba(0,242,255,0.5)]"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Grid split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Visual Left pane */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="relative aspect-video rounded-sm overflow-hidden bg-black border border-neon-blue/50">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover grayscale opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-scanline opacity-[0.05]"></div>
                  </div>

                  {/* Fact Sheet Grid */}
                  <div className="grid grid-cols-2 gap-4 bg-neon-blue/5 border border-neon-blue/30 p-5 rounded-sm">
                    <div className="space-y-1 text-left">
                      <p className="font-mono text-[9px] text-neon-blue uppercase tracking-widest flex items-center gap-1.5 font-bold">
                        <User className="w-3.5 h-3.5" /> CLIENTE_ID:
                      </p>
                      <p className="text-xs font-bold text-white uppercase">{selectedProject.client}</p>
                    </div>
                    <div className="space-y-1 text-left">
                      <p className="font-mono text-[9px] text-neon-blue uppercase tracking-widest flex items-center gap-1.5 font-bold">
                        <Calendar className="w-3.5 h-3.5" /> CICLO_FISCAL:
                      </p>
                      <p className="text-xs font-bold text-white">{selectedProject.year}</p>
                    </div>
                    <div className="col-span-2 pt-3 border-t border-neon-blue/20 space-y-1 text-left">
                      <p className="font-mono text-[9px] text-neon-blue uppercase tracking-[0.2em] font-bold">TECNOLOGÍAS_DEP:</p>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {selectedProject.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 bg-black border border-neon-blue/30 rounded-sm text-[9px] font-mono text-neon-blue/70 font-bold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Textual Right pane */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div>
                    <span className="font-mono text-[10px] text-black uppercase tracking-[0.3em] bg-neon-blue px-3 py-1 rounded-sm font-bold inline-block shadow-[0_0_10px_rgba(0,242,255,0.8)]">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-4xl font-bold text-white mt-4 leading-tight tracking-tighter uppercase italic">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm font-medium leading-relaxed border-l-2 border-neon-blue/50 pl-4">
                    {selectedProject.detailedDescription}
                  </p>

                  {/* Challenge and Solution */}
                  <div className="space-y-4">
                    <div className="p-5 bg-black border border-red-500/30 rounded-sm">
                      <h4 className="font-mono text-[9px] text-red-500 font-bold uppercase tracking-widest mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 animate-pulse"></span>
                        DETECCIÓN_DE_DESAFÍO:
                      </h4>
                      <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className="p-5 bg-black border border-neon-blue/50 rounded-sm shadow-[inset_0_0_20px_rgba(0,242,255,0.1)]">
                      <h4 className="font-mono text-[9px] text-neon-blue font-bold uppercase tracking-widest mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-neon-blue shadow-[0_0_5px_rgba(0,242,255,1)]"></span>
                        SOLUCIÓN_BIOSYSTEM:
                      </h4>
                      <p className="text-[11px] text-white font-bold leading-relaxed opacity-90">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results Bullet points */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] text-neon-blue uppercase tracking-widest font-bold">
                      SALIDA_DE_DATOS_OK:
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.results.map((r, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-gray-400 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-neon-blue shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer row inside modal */}
              <div className="pt-6 border-t border-neon-blue/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                <span className="font-mono text-[9px] text-neon-blue/40 uppercase tracking-[0.2em] font-bold">
                  BIONODE_REPORTS // GUANARE VENEZUELA
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="automan-button px-8 py-3 text-[10px] font-bold rounded-sm transition-all shadow-[0_0_15px_rgba(0,242,255,0.3)]"
                >
                  Regresar al Nodo
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
