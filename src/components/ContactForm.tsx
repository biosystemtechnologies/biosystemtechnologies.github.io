/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Navigation, RefreshCw } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'software',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor complete los campos obligatorios (Nombre, Correo y Mensaje)');
      return;
    }

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Save to localStorage so it behaves as dynamic persistence in the browser
      const savedMessages = JSON.parse(localStorage.getItem('biosystem_messages') || '[]');
      savedMessages.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('biosystem_messages', JSON.stringify(savedMessages));

      // Reset
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'software',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-black relative border-t border-neon-blue/20 overflow-hidden">
      
      {/* Absolute decorative glowing vector point */}
      <div className="absolute top-[40%] right-[-10%] w-[300px] h-[300px] rounded-full glow-orb -z-10 filter blur-[90px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Corporate Info and custom vector Map */}
          <div className="lg:col-span-5 space-y-8 text-left relative z-10">
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-neon-blue uppercase tracking-[0.3em] block font-bold">
                [ ESTABLECER_ENLACE // CANALES_OFICIALES ]
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tighter uppercase italic leading-[0.9]">
                CENTRAL DE <span className="text-neon-blue drop-shadow-[0_0_10px_rgba(0,242,255,0.6)]">OPERACIONES</span>
              </h2>
              <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed border-l-2 border-neon-blue/30 pl-6">
                Envíe sus requerimientos de software, microelectrónica o diseño. Protocolo de atención inmediata vía enlace digital.
              </p>
            </div>

            {/* Quick Card List info */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 rounded-sm bg-black border border-neon-blue/30 shadow-[inset_0_0_15px_rgba(0,242,255,0.05)]">
                <div className="p-3 bg-neon-blue/10 text-neon-blue rounded-sm border border-neon-blue/20">
                  <Phone className="w-5 h-5 shadow-[0_0_8px_rgba(0,242,255,0.5)]" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-neon-blue/50 uppercase font-bold tracking-widest">TELÉFONOS_GUANARE:</p>
                  <p className="text-sm font-bold text-white">0257-2539969 // 0426-4500865</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-sm bg-black border border-neon-blue/30 shadow-[inset_0_0_15px_rgba(0,242,255,0.05)]">
                <div className="p-3 bg-neon-blue/10 text-neon-blue rounded-sm border border-neon-blue/20">
                  <Mail className="w-5 h-5 shadow-[0_0_8px_rgba(0,242,255,0.5)]" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-neon-blue/50 uppercase font-bold tracking-widest">EMAIL_HOST:</p>
                  <p className="text-sm font-bold text-white hover:text-neon-blue transition-colors cursor-pointer">
                    BIOSYSTEMTECHNOLOGIES@GMAIL.COM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-sm bg-black border border-neon-blue/30 shadow-[inset_0_0_15px_rgba(0,242,255,0.05)]">
                <div className="p-3 bg-neon-blue/10 text-neon-blue rounded-sm border border-neon-blue/20">
                  <MapPin className="w-5 h-5 shadow-[0_0_8px_rgba(0,242,255,0.5)]" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-neon-blue/50 uppercase font-bold tracking-widest">LOC_COORDS:</p>
                  <p className="text-sm font-bold text-white uppercase italic">Guanare, Portuguesa, VE</p>
                </div>
              </div>
            </div>

            {/* Premium, High Precision Vector Tactical Map */}
            <div className="relative rounded-sm border-2 border-neon-blue overflow-hidden bg-black p-4 flex flex-col justify-between h-[250px] shadow-[0_0_30px_rgba(0,242,255,0.15)]">
              {/* Tactical Grids */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="absolute inset-0 bg-scanline opacity-[0.05]" />
              
              <div className="relative flex justify-between items-center border-b border-neon-blue/40 pb-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neon-blue flex items-center gap-2 font-bold">
                  <Navigation className="w-3 h-3 animate-pulse shadow-[0_0_5px_rgba(0,242,255,1)]" />
                  TACTICAL_MAP_BIONODE
                </span>
                <span className="text-[8px] font-mono text-neon-blue/60 font-bold tracking-tighter">POS: 9.043° N / 69.749° W</span>
              </div>

              {/* Vector Representation representing major Portuguesa highways */}
              <div className="relative flex-1 flex items-center justify-center overflow-hidden">
                {/* Tactical grid background lines */}
                <div className="absolute inset-0 border-[0.5px] border-neon-blue/10 rounded-full scale-[2] pointer-events-none"></div>
                <div className="absolute inset-0 border-[0.5px] border-neon-blue/10 rounded-full scale-[1.5] pointer-events-none"></div>
                <div className="absolute inset-0 border-[0.5px] border-neon-blue/10 rounded-full scale-[1.2] pointer-events-none"></div>

                {/* Horizontal route representing Troncal 5 */}
                <div className="absolute left-[-20%] right-[-20%] h-[1px] bg-neon-blue/20 transform -rotate-12 shadow-[0_0_8px_rgba(0,242,255,0.3)]" />
                <span className="absolute left-2 top-1/4 font-mono text-[7px] text-neon-blue/40 uppercase font-bold tracking-widest italic">ROUTE_T5_BARINAS</span>
                <span className="absolute right-2 bottom-1/4 font-mono text-[7px] text-neon-blue/40 uppercase font-bold tracking-widest italic">ROUTE_T5_ACARIGUA</span>

                {/* Vertical route representing Avenida Sucre */}
                <div className="absolute top-[-20%] bottom-[-20%] w-[1px] bg-neon-blue/20 transform rotate-45 shadow-[0_0_8px_rgba(0,242,255,0.3)]" />

                {/* Guanare Core glowing pulse box representation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  {/* Glowing core representing center */}
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-10 h-10 bg-neon-blue/10 rounded-full animate-ping" />
                    <span className="absolute w-6 h-6 bg-neon-blue/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                    <span className="w-2.5 h-2.5 bg-neon-blue rounded-full shadow-[0_0_15px_rgba(0,242,255,1)]" />
                  </div>
                  <span className="mt-3 font-mono text-[8px] font-bold text-black uppercase tracking-[0.4em] bg-neon-blue px-3 py-1 rounded-sm shadow-[0_0_20px_rgba(0,242,255,0.6)]">
                    CORE_NODE_GUANARE
                  </span>
                </div>
              </div>

              <div className="relative border-t border-neon-blue/30 pt-2 flex justify-between text-[8px] font-mono text-neon-blue/40 font-bold uppercase tracking-widest">
                <span>ESTACIÓN_CENTRAL</span>
                <span className="text-neon-blue hover:underline cursor-pointer">VER_VECTOR_EXPANDIDO</span>
              </div>
            </div>
          </div>

          {/* Right Block: Automan Form */}
          <div className="lg:col-span-7 relative z-10">
            <div className="bg-black p-6 md:p-10 rounded-sm border-2 border-neon-blue shadow-[0_0_50px_rgba(0,242,255,0.15)] relative">
              <div className="absolute inset-0 bg-scanline opacity-[0.03] pointer-events-none"></div>
              
              {submitSuccess ? (
                <div className="py-12 px-4 text-center space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-neon-blue text-black border-2 border-neon-blue rounded-sm flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,242,255,1)] mb-3">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white uppercase italic tracking-tighter">DATA_ENFILADA_OK</h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed max-w-sm mx-auto italic border-l-2 border-neon-blue/30 pl-4">
                    Su solicitud ha sido inyectada con éxito en el núcleo de Biosystem. Recibirá una respuesta técnica mediante enlace directo en breve.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="automan-button px-8 py-3 text-[10px] font-bold rounded-sm shadow-[0_0_15px_rgba(0,242,255,0.5)]"
                  >
                    NUEVA_ENTRADA_DATOS
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 text-left relative z-10">
                  <div className="border-b border-neon-blue/30 pb-4">
                    <h3 className="font-display text-lg font-bold text-white uppercase italic tracking-tighter flex items-center gap-2">
                      <span className="w-2 h-4 bg-neon-blue inline-block"></span>
                      INYECTAR_REQUERIMIENTO
                    </h3>
                    <p className="text-[10px] text-neon-blue/50 mt-1 font-bold tracking-widest uppercase">Protocolo de enlace para atención técnica prioritaria.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-mono text-neon-blue/70 uppercase font-bold tracking-widest pl-1">
                        &gt; IDENTIDAD_USUARIO
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="NOMBRE COMPLETO"
                        className="w-full bg-neon-blue/5 border border-neon-blue/40 focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,242,255,0.2)] rounded-sm py-3 px-4 text-xs text-white font-bold placeholder-neon-blue/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-mono text-neon-blue/70 uppercase font-bold tracking-widest pl-1">
                        &gt; ENLACE_CORREO
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="HOST@EXAMPLE.COM"
                        className="w-full bg-neon-blue/5 border border-neon-blue/40 focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,242,255,0.2)] rounded-sm py-3 px-4 text-xs text-white font-bold placeholder-neon-blue/20 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-mono text-neon-blue/70 uppercase font-bold tracking-widest pl-1">
                        &gt; WHATSAPP_COMMS
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+58-000-0000000"
                        className="w-full bg-neon-blue/5 border border-neon-blue/40 focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,242,255,0.2)] rounded-sm py-3 px-4 text-xs text-white font-bold placeholder-neon-blue/20 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-mono text-neon-blue/70 uppercase font-bold tracking-widest pl-1">
                        &gt; ÁREA_DEL_REQUERIMIENTO
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-black border border-neon-blue/40 focus:border-neon-blue rounded-sm py-3 px-4 text-[10px] text-neon-blue font-bold focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="software">DESARROLLO // SOFTWARE PWA</option>
                        <option value="electronica">MICROELECTRONICA // REWORK</option>
                        <option value="catalog">ADQUISICIÓN // HARDWARE CERT</option>
                        <option value="graphic">IMAGEN // BRANDING VECTORIAL</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[9px] font-mono text-neon-blue/70 uppercase font-bold tracking-widest pl-1">
                      &gt; DETALLE_DE_LA_OPERACIÓN
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="DESCRIBA LOS PARÁMETROS DE SU SOLICITUD..."
                      rows={4}
                      className="w-full bg-neon-blue/5 border border-neon-blue/40 focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,242,255,0.2)] rounded-sm py-3 px-4 text-xs text-white font-bold placeholder-neon-blue/20 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submission Row */}
                  <div className="pt-6 border-t border-neon-blue/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <span className="font-mono text-[9px] text-neon-blue/40 font-bold uppercase tracking-widest bg-neon-blue/5 px-3 py-1 rounded-sm border border-neon-blue/10 italic">
                      * DATOS REQUERIDOS PARA PROTOCOLO DE RESPUESTA
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="automan-button w-full sm:w-auto px-10 py-4 text-[10px] font-bold rounded-sm shadow-[0_0_15px_rgba(0,242,255,0.4)] disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                    >
                      {isSubmitting ? (
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex items-center gap-2">
                             <RefreshCw className="w-4 h-4 animate-spin" />
                             <span>INJECTING_DATA...</span>
                          </div>
                          <div className="w-full min-w-[120px] h-1 bg-neon-blue/20 rounded-full overflow-hidden">
                            <div className="h-full bg-neon-blue animate-[progress_1.5s_ease-in-out_infinite]" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          ENVIAR_PROTOCOLO
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
