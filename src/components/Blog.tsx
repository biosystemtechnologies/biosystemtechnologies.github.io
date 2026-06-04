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
    <section id="blog" className="py-24 bg-black relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {readingPost ? (
          /* FULL BLOG READING DRAWER / PANE VIEW */
          <div className="max-w-3xl mx-auto text-left space-y-8 animate-in fade-in duration-300">
            {/* Back button */}
            <button
              onClick={() => setReadingPost(null)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-mono text-gray-400 hover:text-white hover:bg-white/10 transition-all active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-white" />
              Regresar al Listado de Artículos
            </button>

            {/* Post Metadata banner */}
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-neutral-900 border border-white/10">
              <img
                src={readingPost.image}
                alt={readingPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-[8px] tracking-widest text-black bg-white rounded-full px-3 py-1 font-bold uppercase">
                  {readingPost.category}
                </span>
                <h1 className="font-display font-light text-2xl sm:text-3xl text-white mt-4 tracking-tight leading-tight">
                  {readingPost.title}
                </h1>
              </div>
            </div>

            {/* Author and Date metrics Row */}
            <div className="flex items-center justify-between border-y border-white/10 py-4">
              <div className="flex items-center gap-3">
                <img
                  src={readingPost.author.avatar}
                  alt={readingPost.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xs font-semibold text-white">{readingPost.author.name}</p>
                  <p className="text-[10px] text-gray-500 font-mono">{readingPost.author.role}</p>
                </div>
              </div>
              <div className="flex flex-col items-end text-right font-mono text-[10px] text-gray-500">
                <span>Publicado: {readingPost.date}</span>
                <span className="flex items-center gap-1 mt-1 text-white font-medium">
                  <Clock className="w-3 h-3 text-white" /> {readingPost.readTime}
                </span>
              </div>
            </div>

            {/* Read Content body with markup paragraphs */}
            <article className="prose prose-invert max-w-none text-sm leading-relaxed text-gray-300 space-y-6">
              {readingPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="font-display text-lg font-bold text-white pt-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ') || paragraph.match(/^\d+\. /)) {
                  // list formatting support
                  const isNumbered = paragraph.match(/^\d+\. /);
                  const items = paragraph.split('\n');
                  return (
                    <ul key={index} className={`space-y-2 list-inside ${isNumbered ? 'list-decimal' : 'list-disc'} pl-2 text-gray-400`}>
                      {items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs sm:text-sm">
                          {item.replace(/^-\s+/, '').replace(/^\d+\.\s+/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-xs sm:text-sm text-[#bcbcbf] font-light">
                    {paragraph}
                  </p>
                );
              })}
            </article>

            {/* Share / Consult dynamic call to action */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-left">
                <p className="text-xs font-semibold text-white">¿Te pareció interesante este artículo técnico?</p>
                <p className="text-[11px] text-gray-500">Ponemos estos principios teóricos en práctica directa todos los días en nuestro taller.</p>
              </div>
              <button
                onClick={() => setReadingPost(null)}
                className="px-5 py-2.5 bg-white hover:bg-neutral-200 text-black text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all cursor-pointer"
              >
                Suscribirse al Blog
              </button>
            </div>
          </div>
        ) : (
          /* BLOG DIRECTORY FILTERED LIST */
          <div className="space-y-12 text-left animate-in fade-in duration-300">
            {/* Header section with Filter row */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div className="space-y-4 max-w-xl">
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] block font-bold">
                  Consejos Técnicos & Actualizaciones
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-light text-white tracking-tight">
                  Blog de <span className="italic font-medium text-gray-400">Biosystem Technologies</span>
                </h2>
                <p className="text-gray-400 font-light text-sm">
                  Documentamos artículos detallados y trucos aplicados de hardware, software offline-first e identidad visual pensados para la realidad venezolana de Portuguesa.
                </p>
              </div>

              {/* Filtering + Search Box */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Buscar trucos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-[200px] bg-white/5 border border-white/10 rounded-xl py-1.5 pl-9 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Sub Filter Category Chips */}
            <div className="flex flex-wrap gap-2 pt-1 border-b border-white/10 pb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all border ${
                    selectedCategory === cat
                      ? 'bg-white/10 border-white/20 text-white'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* List Row Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setReadingPost(post)}
                    className="group cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-4 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Thumbnail wrapper */}
                      <div className="relative aspect-video rounded-xl bg-neutral-900 overflow-hidden mb-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover opacity-85 group-hover:scale-[1.02] transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-2.5 py-0.5 bg-white text-black rounded-full font-mono text-[8px] font-bold uppercase tracking-widest border border-white/10 shadow-lg">
                          {post.category}
                        </span>
                      </div>

                      {/* Header title */}
                      <p className="font-mono text-[9px] text-gray-500 flex items-center gap-1.5 mb-1.5">
                        <BookOpen className="w-3 h-3 text-gray-500" />
                        {post.date} • {post.readTime}
                      </p>
                      
                      <h3 className="font-display font-semibold text-base text-white group-hover:text-gray-300 transition-colors line-clamp-2 min-h-[48px] tracking-tight">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 text-[11px] font-light leading-relaxed line-clamp-3 mt-2">
                        {post.summary}
                      </p>
                    </div>

                    {/* Author profile row / interactive trigger */}
                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-6 h-6 rounded-full object-cover border border-white/10"
                          referrerPolicy="no-referrer"
                        />
                        <span className="text-[10px] text-gray-500">{post.author.name}</span>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#eeeeee] group-hover:underline">
                        Leer artículo
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>

                  </div>
                ))
              ) : (
                <div className="col-span-full py-16 text-center border border-dashed border-white/10 rounded-2xl">
                  <p className="font-mono text-xs text-gray-500">No se encontraron artículos técnicos que coincidan con la búsqueda.</p>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
