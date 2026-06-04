/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingCart, Palette, ShieldAlert, Laptop, CheckCircle2, Calculator, Info, ExternalLink, RefreshCw } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data';
import { ProductItem } from '../types';

interface ServicesProps {
  onOpenChatWithTopic: (topic: string) => void;
}

export default function ServicesAndProducts({ onOpenChatWithTopic }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'ventas' | 'diseno' | 'electronica' | 'software'>('ventas');

  // Print Calculator state
  const [panelWidth, setPanelWidth] = useState<number>(1); // meters
  const [panelHeight, setPanelHeight] = useState<number>(1.5); // meters
  const [materialType, setMaterialType] = useState<'pendon' | 'vinilo' | 'microperforado'>('pendon');
  const [designIncluded, setDesignIncluded] = useState<boolean>(true);

  // Electronics Wizard state
  const [selectedSymptom, setSelectedSymptom] = useState<string>('');

  const symptomsList = [
    {
      id: 'thermal',
      name: 'La laptop se calienta demasiado y se apaga sola',
      diag: 'Posible resequedad extrema de pasta térmica y obstrucción de ventilación por polvo típico de la zona llanera. Requiere mantenimiento profundo y cambio de almohadillas disipadoras.',
      cost: 'Est. $15 - $25'
    },
    {
      id: 'novideo',
      name: 'La PC enciende pero no da video (Pantalla Negra)',
      diag: 'La humedad relativa o estática en memorias RAM es común. También fallas de BIOS corrompidas o daño en reguladores de voltaje principales.',
      cost: 'Est. $10 - $35'
    },
    {
      id: 'charger',
      name: 'Fallas del puerto de carga o cargador de Laptop',
      diag: 'Daño físico por tirones accidentales. Hacemos restauración a nivel de placa mediante micro-soldadura electrónica avanzada.',
      cost: 'Est. $15 - $30'
    },
    {
      id: 'reinstalacion',
      name: 'Pantallazo azul en la carga de Windows o lentitud crítica',
      diag: 'Suele asociarse a sectores defectuosos en Discos Mecánicos antiguos. Recomendamos migración rápida a SSD de estado sólido de alta velocidad.',
      cost: 'Est. $10'
    }
  ];

  // Print cost estimation formula
  const getEstimatedPrintCost = () => {
    const area = panelWidth * panelHeight;
    let basePricePerSqm = 12; // $12 per square meter for standard printed banners
    if (materialType === 'vinilo') basePricePerSqm = 15;
    if (materialType === 'microperforado') basePricePerSqm = 18;

    let total = area * basePricePerSqm;
    if (designIncluded) {
      total += 10; // Flat fee for corporate graphic layout setup
    }
    return total.toFixed(2);
  };

  const tabs = [
    { id: 'ventas', label: 'Compra y Venta', icon: ShoppingCart, desc: 'Hardware y Accesorios' },
    { id: 'diseno', label: 'Diseño e Impresión', icon: Palette, desc: 'Publicidad de Alto Impacto' },
    { id: 'electronica', label: 'Servicio de Electrónica', icon: ShieldAlert, desc: 'Microelectrónica de Precisión' },
    { id: 'software', label: 'Desarrollo de Software', icon: Laptop, desc: 'Sistemas a la Medida' }
  ];

  return (
    <section id="servicios" className="py-24 bg-black relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em] block font-bold">
            Nuestras Competencias & Servicios
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-white tracking-tight">
            Soluciones Tecnológicas de <span className="italic font-medium text-gray-400">Vanguardia en Portuguesa</span>
          </h2>
          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            Combinamos productos informáticos certificados de marcas líderes, ingeniería de hardware electrónico detallada, y desarrollo de software robusto para potenciar el crecimiento de nuestros clientes.
          </p>
        </div>
 
        {/* Tab List */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border text-left transition-all duration-300 transform active:scale-95 cursor-pointer max-w-[260px] w-full ${
                  isActive
                    ? 'border-white/20 bg-white/10 text-white shadow-[0_8px_32px_rgba(255,255,255,0.05)]'
                    : 'border-white/5 bg-white/[0.01] text-gray-400 hover:text-white hover:border-white/10 hover:bg-white/[0.03]'
                }`}
              >
                <div className={`p-2 rounded-xl flex items-center justify-center transition-colors ${
                  isActive ? 'bg-white text-black' : 'bg-white/5 text-gray-400'
                }`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-normal">{tab.label}</p>
                  <p className="text-[10px] font-mono text-gray-500 mt-0.5">{tab.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
 
        {/* Tab Content Display */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative overflow-hidden border border-white/10 min-h-[500px]">
          
          {/* TAB 1: SALE OF EQUIPMENT AND ACCESSORIES */}
          {activeTab === 'ventas' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
              <div className="lg:col-span-4 space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white bg-white/10 px-3 py-1 rounded-full font-bold inline-block">
                  Catálogo Certificado
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  Equipos de Cómputo y Accesorios Originales
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  Ofrecemos estaciones de trabajo completas para el sector corporativo, laptops reacondicionadas con certificado de garantía directa, unidades de almacenamiento rápido SSD, y componentes clave para mantener tus tecnologías al 100%.
                </p>
                <div className="space-y-3.5 bg-white/5 p-5 rounded-2xl border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold block mb-1">VENTAJAS CLAVE:</span>
                  <div className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>Equipos testeados a nivel de microcircuitos antes de su entrega.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>Garantías firmadas por escrito extendidas hasta 1 año.</span>
                  </div>
                </div>
                <button
                  onClick={() => onOpenChatWithTopic('equipos_disponibles')}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                  Descargar Inventario PDF Completo
                </button>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {PRODUCTS_CATALOG.slice(0, 6).map((product) => (
                    <div
                      key={product.id}
                      className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-4 flex flex-col justify-between hover:border-white/20 transition-all hover:scale-[1.02]"
                    >
                      <div>
                        {/* Imagelink fallback display */}
                        <div className="relative aspect-video rounded-xl bg-neutral-900/60 overflow-hidden mb-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-2 right-2 px-2.5 py-1 bg-white text-black rounded-full font-mono text-[8px] font-bold tracking-widest">
                            EN STOCK
                          </div>
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-gray-500">
                          {product.category}
                        </span>
                        <h4 className="font-medium text-xs text-white min-h-[32px] mt-1 line-clamp-2">
                          {product.name}
                        </h4>
                        <div className="mt-2 space-y-1">
                          {product.specs.slice(0, 2).map((s, idx) => (
                            <p key={idx} className="font-mono text-[9px] text-gray-500 truncate">
                              • {s}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="font-display font-semibold text-sm text-white">
                          ${product.price}
                        </span>
                        <button
                          onClick={() => onOpenChatWithTopic(`disponibilidad_${product.id}`)}
                          className="px-2.5 py-1.5 text-[9px] uppercase tracking-widest font-bold bg-white text-black rounded-lg hover:bg-neutral-200 active:scale-95 transition-all cursor-pointer"
                        >
                          ¿Disponible?
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GRAPHIC DESIGN AND OUTDOOR ADVERTISING PRINTING */}
          {activeTab === 'diseno' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white bg-white/10 px-3 py-1 rounded-full font-bold inline-block">
                  Aura de Marca & Gran Formato
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  Diseño Gráfico Conceptual e Imprenta Digital
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  Creamos logotipos modernos que identifican fielmente el propósito de tu marca. Contamos con tecnología de impresión UV de gran formato para pendones corporativos, vinilos autoadhesivos e identificadores de alta densidad para exteriores resistentes al clima templado venezolano.
                </p>

                {/* Print Calculator UI Box */}
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-white" />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      Calculador de Presupuesto para Banners
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[10px] font-mono text-gray-500 uppercase mb-1">
                        Ancho (Metros)
                      </label>
                      <input
                        type="number"
                        min="0.5"
                        max="10"
                        step="0.1"
                        value={panelWidth}
                        onChange={(e) => setPanelWidth(parseFloat(e.target.value) || 1)}
                        className="w-full bg-black/40 border border-white/10 rounded-lg py-1.5 px-3 text-xs text-white focus:outline-none focus:border-white/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-gray-500 uppercase mb-1">
                        Alto (Metros)
                      </label>
                      <input
                        type="number"
                        min="0.5"
                        max="10"
                        step="0.1"
                        value={panelHeight}
                        onChange={(e) => setPanelHeight(parseFloat(e.target.value) || 1.5)}
                        className="w-full bg-black/40 border border-white/10 rounded-lg py-1.5 px-3 text-xs text-white focus:outline-none focus:border-white/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono text-gray-500 uppercase">Material de Salida</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'pendon', name: 'Pendón Lona' },
                        { id: 'vinilo', name: 'Vinilo Matte' },
                        { id: 'microperforado', name: 'Microperforado' }
                      ].map((m) => (
                        <button
                          key={m.id}
                          onClick={() => setMaterialType(m.id as any)}
                          className={`py-1.5 px-2 rounded-lg text-[10px] font-medium border transition-all ${
                            materialType === m.id
                              ? 'border-white/20 bg-white/15 text-white font-semibold'
                              : 'border-white/5 bg-transparent text-gray-400 hover:text-white'
                          }`}
                        >
                          {m.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-1 bg-white/5 px-2 rounded-lg">
                    <span className="text-[10px] text-gray-400">¿Incluir diagramación y diseño conceptual?</span>
                    <input
                      type="checkbox"
                      checked={designIncluded}
                      onChange={(e) => setDesignIncluded(e.target.checked)}
                      className="w-4 h-4 rounded border-white/10 bg-black accent-white"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-white/10">
                    <div>
                      <p className="text-[10px] font-mono text-gray-500">COSTO ESTIMADO USD (Sujeto de oferta):</p>
                      <p className="text-xl font-bold font-display text-white">${getEstimatedPrintCost()}</p>
                    </div>
                    <button
                      onClick={() => onOpenChatWithTopic(`presupuesto_banner_${materialType}_${panelWidth}x${panelHeight}`)}
                      className="px-4 py-2 bg-white text-black text-[10px] font-bold tracking-widest uppercase rounded-lg hover:bg-neutral-200 transition-all transform active:scale-95 cursor-pointer"
                    >
                      Encargar diseño
                    </button>
                  </div>
                </div>
              </div>

              {/* Graphic/Brand Showcase */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 group bg-black/50 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80"
                    alt="Diseño de Vallas y Logotipos"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
                    <p className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-wider">CONCEPT BRANDING</p>
                    <p className="text-xs font-semibold text-white">Manuales de Identidad Visual Corporativa</p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-white/10 group bg-black/50 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=400&q=80"
                    alt="Pruebas de Imprenta Digital"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
                    <p className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-wider">FINA CALIBRACIÓN</p>
                    <p className="text-xs font-semibold text-white">Pendones Gigantografías y Avisos Externos</p>
                  </div>
                </div>

                <div className="col-span-2 p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                  <div className="p-3.5 bg-white/10 text-white rounded-xl">
                    <Info className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-white">¿Maquinarias deterioradas por otros proveedores?</h5>
                    <p className="text-[11px] text-gray-400 leading-relaxed mt-0.5">
                      Garantizamos colores vivos sin rayones de inyección de tinta ni descalibración cromática. Te entregamos la prueba física de cortesía antes de arrancar con producciones masivas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ELECTRONICS AND REPAIR REPAIR WIZARD */}
          {activeTab === 'electronica' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white bg-white/10 px-3 py-1 rounded-full font-bold inline-block">
                  Micro-soldadura & Medición
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  Laboratorio Avanzado de Electrónica
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  No nos limitamos a cambiar piezas completas. Diagnosticamos de manera lógica la placa madre mediante multímetros y osciloscopios calibrados para identificar componentes dañados (resistencias, condensadores en corto, integrados de regulación de energía e IC de carga).
                </p>

                {/* Symptom Diagnostician Wizard */}
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '6s' }} />
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      Asistente Express de Fallas Comunes
                    </span>
                  </div>

                  <p className="text-[10px] text-gray-400 leading-relaxed">
                    Selecciona el comportamiento de tu equipo electrónico para ver el pre-diagnóstico técnico recomendado por Biosystem Technologies:
                  </p>

                  <div className="space-y-2">
                    {symptomsList.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSymptom(s.id)}
                        className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${
                          selectedSymptom === s.id
                            ? 'border-white/20 bg-white/15 text-white'
                            : 'border-white/5 bg-transparent text-gray-400 hover:border-white/10'
                        }`}
                      >
                        <span>{s.name}</span>
                        <span className="text-[10px] font-mono text-white font-bold ml-1">Sel.</span>
                      </button>
                    ))}
                  </div>

                  {selectedSymptom && (
                    <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs text-gray-300 animate-in fade-in duration-200 space-y-2">
                      <p className="font-semibold text-white">💡 PRE-DIAGNÓSTICO EXPERTO:</p>
                      <p className="text-[11px] leading-relaxed text-gray-400">
                        {symptomsList.find((s) => s.id === selectedSymptom)?.diag}
                      </p>
                      <div className="flex justify-between items-center pt-2 text-[10px] font-mono border-t border-white/10">
                        <span className="mt-1">Inversión aproximada:</span>
                        <span className="text-white font-bold text-sm">
                          {symptomsList.find((s) => s.id === selectedSymptom)?.cost}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          const sym = symptomsList.find((s) => s.id === selectedSymptom);
                          onOpenChatWithTopic(`falla_${sym?.id}`);
                        }}
                        className="w-full mt-2 py-2.5 bg-white text-black hover:bg-neutral-200 font-bold uppercase text-[9px] tracking-widest text-center block cursor-pointer rounded-lg transition-colors"
                      >
                        Traer mi equipo a Guanare
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-neutral-900 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80"
                    alt="Trabajo de microelectrónica"
                    className="w-full h-full object-cover opacity-70"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full font-mono text-[9px] text-white backdrop-blur-md">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    MICRO-STATIONS BENCH-1
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-1.5">
                    <p className="font-mono text-white font-bold uppercase text-[10px]">REPROGRAMACIÓN BIOS</p>
                    <p className="text-gray-400 leading-relaxed text-[11px]">
                      ¿Falla de BIOS corrupto luego de una caída de luz? Volvemos a flashear la EEPROM mediante soldador de aire caliente y programadores de chips dedicados Eprom.
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-1.5">
                    <p className="font-mono text-white font-bold uppercase text-[10px]">REWORK DE CHIPSETS</p>
                    <p className="text-gray-400 leading-relaxed text-[11px]">
                      Restauración de esferas de estaño soldadoras debajo del procesador principal (reballing) utilizando precalentadores ópticos infrarrojos de última generación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SOFTWARE DEVELOMPENT AND R&D */}
          {activeTab === 'software' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white bg-white/10 px-3 py-1 rounded-full font-bold inline-block">
                  Investigación y Desarrollo (I+D)
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  Ingeniería de Software de Clase Mundial
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  No creamos simples webs informativas estáticas que fallan al primer corte de conexión celular. Diseñamos **PWAs robustas con arquitectura offline-first** capaces de resguardar transacciones comerciales enteras y reportes de inventario localmente, sincronizándose de forma transparente al conectarse.
                </p>

                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest font-bold">TECNOLOGÍAS QUE IMPLEMENTAMOS:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React.js & Next.js', 'Node.js Express', 'TypeScript', 'Offline databases', 'MQTT / IoT Protocols', 'PostgreSQL / SQL', 'Tailwind Grid'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg font-mono text-[10px] text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                  <p className="font-semibold text-xs text-white flex items-center gap-1.5">
                    ⚡ Sistemas Corporativos Locales venezolanos:
                  </p>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Soporte e integraciones fiscales para la facturación tradicional (SENIAT), sistemas ERP para almacén y aplicaciones móviles de toma de pedidos de ruta rural en Portuguesa.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-neutral-900">
                  <div className="absolute inset-0 bg-[#060606]/95 p-5 font-mono text-[10px] text-gray-300 overflow-y-auto space-y-2">
                    <p className="text-white font-semibold flex items-center gap-1.5 border-b border-white/10 pb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-white block" />
                      // biosystem-pos-offline-engine.ts
                    </p>
                    <p className="text-[#52525b]">// Inicialización de BD IndexedDB local integrada en Guanare</p>
                    <p><span className="text-blue-400">const</span> dbName = <span className="text-amber-300">"BiosystemLocalPOS"</span>;</p>
                    <p><span className="text-blue-400">export async function</span> <span className="text-purple-400">saveTransactionOffline</span>(ticket) &#123;</p>
                    <p className="border-l-2 border-white/20 pl-4 text-neutral-400">await <span className="text-purple-400">indexedDB</span>.save(&apos;ventas_pendientes&apos;, ticket);</p>
                    <p className="border-l-2 border-white/20 pl-4 text-[#52525b]">// Alerta visual suave de cambio de estado</p>
                    <p className="border-l-2 border-white/20 pl-4">System.<span className="text-purple-400">dispatchLocalNotification</span>(&apos;Venta exitosa sin red&apos;);</p>
                    <p className="border-l-2 border-white/20 pl-4 text-[#52525b]">// Inicia sincronización en lotes de fondo en Portuguesa</p>
                    <p className="border-l-2 border-white/20 pl-4"><span className="text-blue-400">if</span> (navigator.onLine) &#123; await syncWithGuanareServer(); &#125;</p>
                    <p>&#125;</p>
                  </div>
                </div>

                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-white">¿Tienes requerimientos de software especiales?</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">Analizamos de forma exhaustiva tu flujo de negocio para darte la cotización justa.</p>
                  </div>
                  <button
                    onClick={() => onOpenChatWithTopic('software_id')}
                    className="px-4 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-all cursor-pointer shrink-0"
                  >
                    Agendar reunión
                  </button>
                </div>
              </div>
            </div>
          )}
          
        </div>

      </div>
    </section>
  );
}
