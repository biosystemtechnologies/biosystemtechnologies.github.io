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
    <section id="portafolio" className="py-24 bg-black relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] block font-bold">
              Casos de Éxito & I+D Aplicado
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-white tracking-tight">
              Proyectos <span className="italic font-medium text-gray-400">Destacados en la Región</span>
            </h2>
            <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
              Explora una selección de nuestras implementaciones que demuestran nuestra capacidad de resolución técnica en software, microelectrónica y branding funcional para empresas de Guanare y Portuguesa.
            </p>
          </div>

          {/* Filters List */}
          <div className="flex flex-wrap gap-2.5 shrink-0">
            {['All', 'Software', 'Electrónica', 'Diseño'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-4.5 py-2 rounded-xl text-[10px] uppercase tracking-widest font-bold border transition-all duration-300 transform active:scale-95 cursor-pointer ${
                  filter === cat
                    ? 'border-white/20 bg-white/10 text-white'
                    : 'border-white/5 bg-transparent text-gray-400 hover:text-white hover:border-white/10'
                }`}
              >
                {cat === 'All' ? 'Todos' : cat}
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
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-5 hover:border-white/20 transition-all hover:scale-[1.01] flex flex-col justify-between"
            >
              {/* Project Image Box */}
              <div>
                <div className="relative aspect-video rounded-xl bg-neutral-900 overflow-hidden mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity" />
                  
                  {/* Details absolute layout */}
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white text-black rounded-full font-mono text-[8px] font-bold tracking-widest uppercase">
                    <FolderGit className="w-3 h-3 text-black" />
                    {project.category}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-300 bg-white/10 px-2.5 py-0.5 rounded backdrop-blur-sm">
                      {project.client}
                    </span>
                    <span className="p-2 rounded-full bg-white text-black hover:scale-115 active:scale-95 transition-all shadow-lg">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Core Text content */}
                <div className="space-y-3 text-left">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-gray-300 transition-colors flex items-center gap-1.5">
                    {project.title}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-white" />
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags mapping */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-3 border-t border-white/5">
                {project.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-gray-400"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-black border border-white/10 p-6 md:p-10 shadow-[0_20px_50px_rgba(255,255,255,0.05)] space-y-8 animate-in zoom-in-95 duration-300">
              
              {/* Close Button absolute positioning */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors active:scale-95 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Grid split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Visual Left pane */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Fact Sheet Grid */}
                  <div className="grid grid-cols-2 gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl">
                    <div className="space-y-1 text-left">
                      <p className="font-mono text-[9px] text-gray-500 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                        <User className="w-3.5 h-3.5 text-white" /> CLIENTE:
                      </p>
                      <p className="text-xs font-semibold text-white">{selectedProject.client}</p>
                    </div>
                    <div className="space-y-1 text-left">
                      <p className="font-mono text-[9px] text-gray-500 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                        <Calendar className="w-3.5 h-3.5 text-white" /> AÑO FISCAL:
                      </p>
                      <p className="text-xs font-semibold text-white">{selectedProject.year}</p>
                    </div>
                    <div className="col-span-2 pt-3 border-t border-white/10 space-y-1 text-left">
                      <p className="font-mono text-[9px] text-gray-500 uppercase tracking-wider font-bold">TECNOLOGÍAS / MÉTODOS:</p>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {selectedProject.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-mono text-gray-400"
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
                    <span className="font-mono text-[10px] text-white uppercase tracking-[0.2em] bg-white/10 px-3 py-1 rounded-full font-bold inline-block">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-light text-white mt-3 leading-tight tracking-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>

                  {/* Challenge and Solution */}
                  <div className="space-y-4">
                    <div className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl">
                      <h4 className="font-mono text-[9px] text-[#ef4444] font-bold uppercase tracking-widest mb-1.5">
                        🚨 EL DESAFÍO COMERCIAL / TÉCNICO:
                      </h4>
                      <p className="text-[11px] text-gray-300 font-light leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 border border-white/15 rounded-2xl">
                      <h4 className="font-mono text-[9px] text-white font-bold uppercase tracking-widest mb-1.5">
                        💡 NUESTRA SOLUCIÓN I+D:
                      </h4>
                      <p className="text-[11px] text-white font-light leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results Bullet points */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                      📈 RESULTADOS CONCRETOS MEDIBLES:
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.results.map((r, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer row inside modal */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">
                  Sede Técnica Guanare • Biosystem Technologies
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-neutral-200 active:scale-95 transition-all cursor-pointer"
                >
                  Regresar al Portafolio
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
