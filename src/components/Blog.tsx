/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { BookOpen, Search, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const categories = ['Todos', 'Consejos Técnicos', 'Desarrollo', 'Electrónica'];

  // Filter blog logic
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="py-24 bg-black relative border-t border-neon-blue/20">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-scanline opacity-[0.03] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {readingPost ? (
          /* FULL BLOG READING DRAWER / PANE VIEW */
          <div className="max-w-3xl mx-auto text-left space-y-8 animate-in fade-in duration-300">
            {/* Back button */}
            <button
              onClick={() => setReadingPost(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-neon-blue/30 bg-black text-[10px] uppercase font-bold tracking-widest text-neon-blue hover:text-black hover:bg-neon-blue transition-all active:scale-95 cursor-pointer shadow-[0_0_10px_rgba(0,242,255,0.1)]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              RETORNO_A_REGISTROS
            </button>

            {/* Post Metadata banner */}
            <div className="relative aspect-video rounded-sm overflow-hidden bg-black border-2 border-neon-blue shadow-[0_0_30px_rgba(0,242,255,0.2)]">
              <img
                src={readingPost.image}
                alt={readingPost.title}
                className="w-full h-full object-cover filter grayscale contrast-125 sepia-[.2] hue-rotate-[180deg] opacity-80 mix-blend-screen"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-[8px] tracking-[0.3em] text-black bg-neon-blue rounded-sm px-3 py-1 font-bold uppercase shadow-[0_0_15px_rgba(0,242,255,0.8)]">
                  MODULO_{readingPost.category}
                </span>
                <h1 className="font-display font-bold text-2xl sm:text-3xl text-white mt-4 tracking-tighter uppercase italic leading-[1]">
                  {readingPost.title}
                </h1>
              </div>
            </div>

            {/* Author and Date metrics Row */}
            <div className="flex items-center justify-between border-y border-neon-blue/20 py-4 bg-neon-blue/[0.02] px-4 rounded-sm">
              <div className="flex items-center gap-3">
                <img
                  src={readingPost.author.avatar}
                  alt={readingPost.author.name}
                  className="w-10 h-10 rounded-sm object-cover border border-neon-blue filter grayscale opacity-90 shadow-[0_0_8px_rgba(0,242,255,0.4)]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-[11px] font-bold text-white uppercase tracking-tight">{readingPost.author.name}</p>
                  <p className="text-[9px] text-neon-blue/70 font-mono font-bold tracking-widest">{readingPost.author.role}</p>
                </div>
              </div>
              <div className="flex flex-col items-end text-right font-mono text-[9px] text-neon-blue/60 font-bold uppercase tracking-widest">
                <span>TS: {readingPost.date}</span>
                <span className="flex items-center gap-1.5 mt-1 text-neon-blue shadow-[0_0_5px_rgba(0,242,255,0.1)]">
                  <Clock className="w-3 h-3 text-neon-blue" /> TIEMPO_EVAL: {readingPost.readTime}
                </span>
              </div>
            </div>

            {/* Read Content body with markup paragraphs */}
            <article className="prose prose-invert max-w-none text-[13px] leading-relaxed text-gray-300 space-y-6 font-medium">
              {readingPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="font-display text-lg font-bold text-white pt-6 border-t border-neon-blue/10 uppercase tracking-tighter flex items-center gap-2">
                       <span className="w-2 h-4 bg-neon-blue inline-block shadow-[0_0_5px_rgba(0,242,255,0.8)]"></span>
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ') || paragraph.match(/^\d+\. /)) {
                  // list formatting support
                  const isNumbered = paragraph.match(/^\d+\. /);
                  const items = paragraph.split('\n');
                  return (
                    <ul key={index} className={`space-y-3 list-inside ${isNumbered ? 'list-decimal' : 'list-none'} pl-2 text-gray-300 border-l border-neon-blue/20`}>
                      {items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-[12px] sm:text-[13px] flex items-start gap-2">
                          {!isNumbered && <span className="text-neon-blue mt-1 shrink-0">&gt;</span>}
                          <span>{item.replace(/^-\s+/, '').replace(/^\d+\.\s+/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-[12px] sm:text-[13px] text-gray-300 font-medium">
                    {paragraph}
                  </p>
                );
              })}
            </article>

            {/* Share / Consult dynamic call to action */}
            <div className="p-6 bg-black border border-neon-blue/40 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,242,255,0.05)]">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-neon-blue shadow-[0_0_15px_rgba(0,242,255,1)]"></div>
              <div className="space-y-2 text-left pl-2">
                <p className="text-[11px] font-bold text-white uppercase tracking-tight">¿ANÁLISIS DE DATOS COMPLETADO?</p>
                <p className="text-[9px] font-mono text-neon-blue/60 font-bold uppercase tracking-widest">Ejecutamos estos protocolos diariamente en base de operaciones.</p>
              </div>
              <button
                onClick={() => setReadingPost(null)}
                className="automan-button px-8 py-3 text-[10px] font-bold shrink-0"
              >
                SINCRONIZAR_FEED
              </button>
            </div>
          </div>
        ) : (
          /* BLOG DIRECTORY FILTERED LIST */
          <div className="space-y-12 text-left animate-in fade-in duration-300">
            {/* Header section with Filter row */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-neon-blue/30 pb-8">
              <div className="space-y-4 max-w-xl">
                <span className="font-mono text-[10px] text-neon-blue uppercase tracking-[0.4em] block font-bold">
                  [ DATA_LOGS // PROTOCOLOS_ACTUALIZADOS ]
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tighter uppercase italic leading-[0.9]">
                  REGISTRO <span className="text-neon-blue drop-shadow-[0_0_10px_rgba(0,242,255,0.6)]">TÉCNICO</span>
                </h2>
                <p className="text-gray-400 font-medium text-[13px] border-l-2 border-neon-blue/20 pl-4 uppercase">
                  Documentamos artículos detallados y trucos aplicados de hardware, software offline-first e identidad visual pensados para la realidad operativa.
                </p>
              </div>

              {/* Filtering + Search Box */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-neon-blue" />
                  <input
                    type="text"
                    placeholder="QUERY_DATABANKS..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-[250px] bg-black border border-neon-blue/40 focus:border-neon-blue rounded-sm py-2 pl-10 pr-4 text-[10px] font-bold text-white placeholder-neon-blue/30 focus:outline-none transition-all uppercase tracking-widest shadow-[inset_0_0_10px_rgba(0,242,255,0.05)]"
                  />
                </div>
              </div>
            </div>

            {/* Sub Filter Category Chips */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-sm text-[9px] uppercase tracking-[0.2em] font-bold transition-all border ${
                    selectedCategory === cat
                      ? 'bg-neon-blue border-neon-blue text-black shadow-[0_0_15px_rgba(0,242,255,0.4)]'
                      : 'border-neon-blue/30 bg-black text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue/60'
                  }`}
                >
                  {cat === 'Todos' ? 'ALL_NODES' : cat}
                </button>
              ))}
            </div>

            {/* List Row Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setReadingPost(post)}
                    className="group cursor-pointer rounded-sm overflow-hidden bg-black border border-neon-blue/30 p-4 hover:border-neon-blue hover:shadow-[0_0_30px_rgba(0,242,255,0.15)] transition-all flex flex-col justify-between relative"
                  >
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-blue/50 group-hover:border-neon-blue transition-colors rounded-tr-sm"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-blue/50 group-hover:border-neon-blue transition-colors rounded-bl-sm"></div>
                    
                    <div className="relative z-10">
                      {/* Thumbnail wrapper */}
                      <div className="relative aspect-video rounded-sm bg-black overflow-hidden mb-5 border border-neon-blue/20 group-hover:border-neon-blue/50 transition-colors">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-700 filter grayscale contrast-125 sepia-[.2] hue-rotate-[180deg] mix-blend-screen"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none"></div>
                        <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-3 py-1 bg-neon-blue text-black font-mono text-[8px] font-bold uppercase tracking-[0.3em] rounded-sm shadow-[0_0_10px_rgba(0,242,255,0.8)]">
                          {post.category}
                        </span>
                      </div>

                      {/* Header title */}
                      <p className="font-mono text-[9px] text-neon-blue/60 flex items-center gap-2 mb-2 font-bold tracking-widest uppercase">
                        <BookOpen className="w-3.5 h-3.5 text-neon-blue shadow-[0_0_5px_rgba(0,242,255,0.5)]" />
                        {post.date} // {post.readTime}
                      </p>
                      
                      <h3 className="font-display font-bold text-sm text-white group-hover:text-neon-blue transition-colors line-clamp-2 min-h-[44px] tracking-tight uppercase italic">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 text-[11px] font-medium leading-relaxed line-clamp-3 mt-3 border-l border-neon-blue/30 pl-2">
                        {post.summary}
                      </p>
                    </div>

                    {/* Author profile row / interactive trigger */}
                    <div className="mt-5 pt-4 border-t border-neon-blue/20 flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-7 h-7 rounded-sm object-cover border border-neon-blue/40 filter grayscale"
                          referrerPolicy="no-referrer"
                        />
                        <span className="text-[9px] font-bold text-neon-blue/70 uppercase tracking-widest">{post.author.name}</span>
                      </div>
                      <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.2em] text-neon-blue group-hover:text-white transition-colors cursor-pointer bg-neon-blue/10 px-2 py-1 rounded-sm border border-neon-blue/20 group-hover:border-neon-blue shadow-inner">
                        READ_LOG
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>

                  </div>
                ))
              ) : (
                <div className="col-span-full py-16 text-center border-2 border-dashed border-neon-blue/30 bg-neon-blue/5 rounded-sm">
                  <p className="font-mono text-[10px] text-neon-blue font-bold uppercase tracking-[0.2em] animate-pulse">404 // DATA_LOGS_NOT_FOUND</p>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
