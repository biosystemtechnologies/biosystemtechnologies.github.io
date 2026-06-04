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
    <section id="contacto" className="py-24 bg-black relative border-t border-white/10 overflow-hidden">
      
      {/* Absolute decorative glowing vector point */}
      <div className="absolute top-[40%] right-[-10%] w-[300px] h-[300px] rounded-full glow-orb-1 -z-10 filter blur-[90px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Corporate Info and custom vector Map */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] block font-bold">
                Contáctanos Directo
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-white tracking-tight">
                Impulsando Ideas <span className="italic font-medium text-gray-400">desde Portuguesa</span>
              </h2>
              <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                ¿Planeas un nuevo sistema administrativo offline, requieres reparar equipos clave o buscas calibrar tu identidad de marca? Escríbenos para agendar un diagnóstico.
              </p>
            </div>

            {/* Quick Card List info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-3 bg-white/10 text-white rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-gray-500 uppercase font-bold">Teléfonos Guanare:</p>
                  <p className="text-sm font-semibold text-white">0257-2539969 // 0412-4955404</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-3 bg-white/10 text-white rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-gray-500 uppercase font-bold">Correo de contacto:</p>
                  <p className="text-sm font-semibold text-white hover:text-gray-300 transition-colors">
                    biosystemtechnologies@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-3 bg-white/10 text-white rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-gray-500 uppercase font-bold">Sede Física:</p>
                  <p className="text-sm font-semibold text-white">Guanare, Estado Portuguesa, Venezuela</p>
                </div>
              </div>
            </div>

            {/* Premium, High Precision Vector Mock Map of Guanare Portuguesa */}
            <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-black/45 p-4 flex flex-col justify-between h-[230px]">
              {/* Radar grids decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(#1c1c1e_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
              
              <div className="relative flex justify-between items-center border-b border-white/10 pb-2">
                <span className="font-mono text-[9.5px] uppercase tracking-widest text-gray-500 flex items-center gap-1.5 font-bold">
                  <Navigation className="w-3 h-3 text-white animate-pulse" />
                  MAPAS DE REFERENCIA BIOSYSTEM
                </span>
                <span className="text-[8px] font-mono text-white font-semibold">COORDS: 9.043° N, 69.749° W</span>
              </div>

              {/* Vector Representation representing major Portuguesa highways */}
              <div className="relative flex-1 flex items-center justify-center">
                {/* Horizontal route representing Troncal 5 */}
                <div className="absolute left-0 right-0 h-[1.5px] bg-white/5 transform -rotate-12" />
                <span className="absolute left-4 top-1/3 font-mono text-[8px] text-gray-600 uppercase">Vía Barinas (Troncal 5)</span>
                <span className="absolute right-4 bottom-1/3 font-mono text-[8px] text-gray-600 uppercase">Hacia Ospino / Acarigua</span>

                {/* Vertical route representing Avenida Sucre / Monseñor */}
                <div className="absolute top-0 bottom-0 w-[1.5px] bg-white/5 transform rotate-45" />

                {/* Guanare Core glowing pulse box representation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  {/* Glowing core representing center */}
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-6 h-6 bg-white/10 rounded-full animate-ping" />
                    <span className="absolute w-3 h-3 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                    <span className="w-2 h-2 bg-white rounded-full border border-black shadow-[0_0_8px_#ffffff]" />
                  </div>
                  <span className="mt-2 font-display text-[9px] font-bold text-white uppercase tracking-widest bg-black px-2 py-0.5 rounded border border-white/10 shadow-lg">
                    Guanare Centro
                  </span>
                </div>
              </div>

              <div className="relative border-t border-white/10 pt-2 flex justify-between text-[9px] font-mono text-gray-600">
                <span>Portuguesa, Venezuela</span>
                <span className="hover:text-white transition-colors cursor-pointer">Ver coordenadas satelitales</span>
              </div>
            </div>
          </div>

          {/* Right Block: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-white/10 shadow-[0_12px_45px_rgba(0,0,0,0.5)] relative">
              {submitSuccess ? (
                <div className="py-12 px-4 text-center space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-white/10 text-white border border-white/20 rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-3">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">¡Su solicitud ha sido enviada!</h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
                    Gracias por comunicarte con **Biosystem Technologies**. Uno de nuestros ingenieros examinará tu solicitud y se pondrá en contacto contigo en menos de 1 hora mediante WhatsApp o llamada directa.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-neutral-200 active:scale-95 transition-all cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="font-display text-lg font-bold text-white">Formulario de Requerimientos</h3>
                    <p className="text-xs text-gray-400 mt-1 font-light">Escríbenos detalladamente tu necesidad técnica para una atención inmediata.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-gray-500 uppercase font-bold">
                        Tu Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Ej. Carlos Mendoza"
                        className="w-full bg-black/40 border border-white/10 focus:border-white/30 rounded-xl py-2 px-3.5 text-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-gray-500 uppercase font-bold">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="carlos@gmail.com"
                        className="w-full bg-black/40 border border-white/10 focus:border-white/30 rounded-xl py-2 px-3.5 text-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-gray-500 uppercase font-bold">
                        Teléfono Móvil (WhatsApp)
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Ej. 0412-4955404"
                        className="w-full bg-black/40 border border-white/10 focus:border-white/30 rounded-xl py-2 px-3.5 text-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono text-gray-500 uppercase font-bold">
                        Área de Interés
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-black border border-white/10 focus:border-white/30 rounded-xl py-2 px-3.5 text-xs text-gray-400 focus:outline-none transition-colors"
                      >
                        <option value="software">Desarrollo de Software / PWA</option>
                        <option value="electronica">Tercerización / Servicio Electrónico</option>
                        <option value="catalog">Compra y Venta de Computación</option>
                        <option value="graphic">Diseño Gráfico e Impresiones</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono text-gray-500 uppercase font-bold">
                      Descripción Detallada del Requerimiento *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Cuéntanos sobre las especificaciones del equipo que buscas o el software offline que necesitas desarrollar..."
                      rows={4}
                      className="w-full bg-black/40 border border-white/10 focus:border-white/30 rounded-xl py-2 px-3.5 text-xs text-white placeholder-gray-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submission Row */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-mono text-[9px] text-gray-600">
                      * Campos obligatorios requeridos para procesamiento fiscal.
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-all transform active:scale-95 disabled:opacity-55 cursor-pointer shrink-0"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          PROCESANDO...
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          ENVIAR REQUERIMIENTO
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
