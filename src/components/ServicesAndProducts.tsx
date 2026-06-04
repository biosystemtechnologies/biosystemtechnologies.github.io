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
    <section id="servicios" className="py-24 bg-black relative border-y border-neon-blue/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-[10px] text-neon-blue uppercase tracking-[0.3em] block font-bold">
            [ PROTOCOLOS_DE_SERVICIO // COMPETENCIAS_I+D ]
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tighter uppercase italic">
            SOLUCIONES DE <span className="text-neon-blue drop-shadow-[0_0_10px_rgba(0,242,255,0.6)]">VANGUARDIA</span> DIGITAL
          </h2>
          <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed opacity-80">
            Ingeniería de datos, recuperación de hardware crítico y comunicación visual bajo el estándar Automan. Potenciando el núcleo tecnológico de la región.
          </p>
        </div>
 
        {/* Tab List */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-3 px-5 py-4 rounded-sm border text-left transition-all duration-300 transform active:scale-95 cursor-pointer max-w-[260px] w-full ${
                  isActive
                    ? 'border-neon-blue bg-neon-blue text-black shadow-[0_0_20px_rgba(0,242,255,0.4)]'
                    : 'border-neon-blue/20 bg-black text-neon-blue/40 hover:text-neon-blue hover:border-neon-blue/50'
                }`}
              >
                <div className={`p-2 rounded-sm flex items-center justify-center transition-colors ${
                  isActive ? 'bg-black text-neon-blue shadow-[0_0_5px_rgba(0,242,255,0.5)]' : 'bg-neon-blue/10 text-neon-blue/40'
                }`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold leading-normal uppercase tracking-tighter">{tab.label}</p>
                  <p className={`text-[8px] font-mono mt-0.5 tracking-widest ${isActive ? 'text-black/70' : 'text-neon-blue/30'}`}>{tab.desc.toUpperCase()}</p>
                </div>
              </button>
            );
          })}
        </div>
 
        {/* Tab Content Display */}
        <div className="bg-black backdrop-blur-lg rounded-sm p-6 md:p-10 shadow-[0_0_50px_rgba(0,242,255,0.1)] relative overflow-hidden border-2 border-neon-blue min-h-[500px]">
          {/* Scanline Effect */}
          <div className="absolute inset-0 bg-scanline opacity-[0.03] pointer-events-none"></div>

          {/* TAB 1: SALE OF EQUIPMENT AND ACCESSORIES */}
          {activeTab === 'ventas' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300 relative z-10">
              <div className="lg:col-span-4 space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black bg-neon-blue px-3 py-1 rounded-sm font-bold inline-block shadow-[0_0_10px_rgba(0,242,255,0.5)]">
                  CATÁLOGO_NODO_CERT
                </span>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tighter italic">
                  EQUIPOS DE CÓMPUTO Y <span className="text-neon-blue">SISTEMAS_HW</span>
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed border-l-2 border-neon-blue/30 pl-4">
                  Suministro de estaciones de trabajo, laptops enterprise y componentes de alto rendimiento testeados bajo protocolos de microelectrónica.
                </p>
                <div className="space-y-3.5 bg-neon-blue/5 p-5 rounded-sm border border-neon-blue/30 shadow-[inset_0_0_15px_rgba(0,242,255,0.05)]">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon-blue/60 font-bold block mb-1">VENTAJAS_SISTEMA:</span>
                  <div className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-neon-blue shrink-0 mt-0.5 shadow-[0_0_5px_rgba(0,242,255,1)]" />
                    <span className="font-medium">Equipos testeados a nivel de microcircuitos.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-neon-blue shrink-0 mt-0.5" />
                    <span className="font-medium">Garantías de hardware integradas (1 año).</span>
                  </div>
                </div>
                <button
                  onClick={() => onOpenChatWithTopic('equipos_disponibles')}
                  className="automan-button w-full flex items-center justify-center gap-2 py-3 rounded-sm text-xs font-bold transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  DESCARGAR_INVENTARIO.PDF
                </button>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {PRODUCTS_CATALOG.slice(0, 6).map((product) => (
                    <div
                      key={product.id}
                      className="group relative rounded-sm overflow-hidden bg-black border border-neon-blue/30 p-4 flex flex-col justify-between hover:border-neon-blue transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(0,242,255,0.05)]"
                    >
                      <div>
                        {/* Imagelink fallback display */}
                        <div className="relative aspect-video rounded-sm bg-black overflow-hidden mb-3 border border-neon-blue/10">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-2 right-2 px-2.5 py-1 bg-neon-blue text-black rounded-sm font-mono text-[8px] font-bold tracking-[0.2em] shadow-[0_0_10px_rgba(0,242,255,0.8)]">
                            STOCK_OK
                          </div>
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-neon-blue/50 font-bold">
                          {product.category}
                        </span>
                        <h4 className="font-bold text-xs text-white min-h-[32px] mt-1 line-clamp-2 uppercase tracking-tighter group-hover:text-neon-blue transition-colors">
                          {product.name}
                        </h4>
                        <div className="mt-2 space-y-1">
                          {product.specs.slice(0, 2).map((s, idx) => (
                            <p key={idx} className="font-mono text-[9px] text-neon-blue/40 truncate italic">
                              &gt; {s}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-neon-blue/20 flex items-center justify-between">
                        <span className="font-display font-bold text-sm text-neon-blue drop-shadow-[0_0_5px_rgba(0,242,255,0.4)]">
                          ${product.price}
                        </span>
                        <button
                          onClick={() => onOpenChatWithTopic(`disponibilidad_${product.id}`)}
                          className="px-2.5 py-1.5 text-[9px] uppercase tracking-widest font-bold bg-neon-blue text-black rounded-sm hover:bg-white active:scale-95 transition-all shadow-[0_0_10px_rgba(0,242,255,0.5)] cursor-pointer"
                        >
                          CONSULTAR
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300 relative z-10">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black bg-neon-blue px-3 py-1 rounded-sm font-bold inline-block shadow-[0_0_10px_rgba(0,242,255,0.5)]">
                  NODO_IDENTIDAD_VISUAL
                </span>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tighter italic">
                  COMUNICACIÓN <span className="text-neon-blue">VECTORIAL</span> & BRANDING
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed border-l-2 border-neon-blue/30 pl-4">
                  Construcción de marcas con precisión geométrica. Impresión de gran formato con calibración Delta-E optimizada.
                </p>

                {/* Print Calculator UI Box */}
                <div className="bg-black p-5 rounded-sm border border-neon-blue/50 space-y-4 shadow-[0_0_20px_rgba(0,242,255,0.1)]">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-neon-blue" />
                    <span className="font-mono text-xs font-bold text-neon-blue uppercase tracking-widest">
                      CALCULADOR_COSTO_RENDER
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[10px] font-mono text-neon-blue/50 uppercase mb-1 font-bold">
                        ANCHO_MTRS
                      </label>
                      <input
                        type="number"
                        min="0.5"
                        max="10"
                        step="0.1"
                        value={panelWidth}
                        onChange={(e) => setPanelWidth(parseFloat(e.target.value) || 1)}
                        className="w-full bg-neon-blue/5 border border-neon-blue/40 rounded-sm py-2 px-3 text-xs text-white font-bold focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,242,255,0.3)]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-neon-blue/50 uppercase mb-1 font-bold">
                        ALTO_MTRS
                      </label>
                      <input
                        type="number"
                        min="0.5"
                        max="10"
                        step="0.1"
                        value={panelHeight}
                        onChange={(e) => setPanelHeight(parseFloat(e.target.value) || 1.5)}
                        className="w-full bg-neon-blue/5 border border-neon-blue/40 rounded-sm py-2 px-3 text-xs text-white font-bold focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,242,255,0.3)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-mono text-neon-blue/50 uppercase font-bold">TIPO_SUSTRATO</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'pendon', name: 'PENDÓN_V' },
                        { id: 'vinilo', name: 'VINILO_M' },
                        { id: 'microperforado', name: 'MICRO_P' }
                      ].map((m) => (
                        <button
                          key={m.id}
                          onClick={() => setMaterialType(m.id as any)}
                          className={`py-2 px-2 rounded-sm text-[9px] font-bold border transition-all ${
                            materialType === m.id
                              ? 'border-neon-blue bg-neon-blue text-black shadow-[0_0_10px_rgba(0,242,255,0.5)]'
                              : 'border-neon-blue/20 bg-transparent text-neon-blue/40 hover:text-neon-blue'
                          }`}
                        >
                          {m.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2 bg-neon-blue/10 px-3 rounded-sm border border-neon-blue/20">
                    <span className="text-[10px] text-neon-blue/70 font-bold uppercase tracking-tight">DIAGRAMACIÓN_BIOSYTEM:</span>
                    <input
                      type="checkbox"
                      checked={designIncluded}
                      onChange={(e) => setDesignIncluded(e.target.checked)}
                      className="w-4 h-4 border-neon-blue/50 bg-black accent-neon-blue"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-neon-blue/30">
                    <div>
                      <p className="text-[10px] font-mono text-neon-blue/50 font-bold tracking-widest">ESTIMACIÓN_USD:</p>
                      <p className="text-2xl font-bold font-display text-white italic drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">${getEstimatedPrintCost()}</p>
                    </div>
                    <button
                      onClick={() => onOpenChatWithTopic(`presupuesto_banner_${materialType}_${panelWidth}x${panelHeight}`)}
                      className="automan-button px-6 py-3 text-[10px] font-bold rounded-sm shadow-[0_0_15px_rgba(0,242,255,0.5)]"
                    >
                      ENCARGAR_RUN
                    </button>
                  </div>
                </div>
              </div>

              {/* Graphic/Brand Showcase */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="relative rounded-sm overflow-hidden border border-neon-blue/30 group bg-black aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80"
                    alt="Diseño de Vallas"
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-70 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <p className="font-mono text-[9px] text-neon-blue font-bold uppercase tracking-widest">CONCEPT_BRANDING</p>
                    <p className="text-xs font-bold text-white uppercase tracking-tighter">Sistemas de Identidad Visual</p>
                  </div>
                  <div className="absolute inset-0 border border-neon-blue opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"></div>
                </div>

                <div className="relative rounded-sm overflow-hidden border border-neon-blue/30 group bg-black aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=400&q=80"
                    alt="Pruebas de Imprenta"
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-70 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <p className="font-mono text-[9px] text-neon-blue font-bold uppercase tracking-widest">HIGH_DENSITY_PRINT</p>
                    <p className="text-xs font-bold text-white uppercase tracking-tighter">Impresión de Alta Fidelidad</p>
                  </div>
                  <div className="absolute inset-0 border border-neon-blue opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"></div>
                </div>

                <div className="col-span-2 p-5 bg-black border border-neon-blue/40 rounded-sm flex items-center gap-4 shadow-[inset_0_0_20px_rgba(0,242,255,0.05)]">
                  <div className="p-3.5 bg-neon-blue/10 text-neon-blue rounded-sm border border-neon-blue/30 shadow-[0_0_10px_rgba(0,242,255,0.2)]">
                    <Info className="w-5 h-5 shrink-0" />
                  </div>
                  <div>
                    <h5 className="text-[11px] font-bold text-white uppercase tracking-widest">GARANTÍA_CROMÁTICA_BIOSYSTEM:</h5>
                    <p className="text-[10px] text-gray-400 font-medium leading-relaxed mt-1">
                      Aseguramos una correspondencia exacta entre el diseño digital y el material impreso. Calibración Delta-E por debajo de 1.2 para una fidelidad de color absoluta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ELECTRONICS AND REPAIR REPAIR WIZARD */}
          {activeTab === 'electronica' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300 relative z-10">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black bg-neon-blue px-3 py-1 rounded-sm font-bold inline-block shadow-[0_0_10px_rgba(0,242,255,0.5)]">
                  RECUPERACIÓN_LÓGICA_NODO
                </span>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tighter italic">
                  LABORATORIO DE <span className="text-neon-blue">MICROELECTRÓNICA</span>
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed border-l-2 border-neon-blue/30 pl-4">
                  Diagnosis profunda de circuitos complejos. Reparación a nivel de componente mediante micro-soldadura láser y estaciones IR.
                </p>

                {/* Symptom Diagnostician Wizard */}
                <div className="bg-black p-5 rounded-sm border border-neon-blue/50 space-y-4 shadow-[0_0_20px_rgba(0,242,255,0.1)]">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-neon-blue animate-spin" style={{ animationDuration: '4s' }} />
                    <span className="font-mono text-xs font-bold text-neon-blue uppercase tracking-widest">
                      WIZARD_DIAG_EXPRESS
                    </span>
                  </div>

                  <p className="text-[10px] text-neon-blue/60 leading-relaxed font-bold italic">
                    &gt; INGRESE SÍNTOMA DETECTADO EN EL HARDWARE:
                  </p>

                  <div className="space-y-2">
                    {symptomsList.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSymptom(s.id)}
                        className={`w-full text-left p-3 rounded-sm border text-[10px] transition-all flex items-center justify-between font-bold uppercase tracking-tighter ${
                          selectedSymptom === s.id
                            ? 'border-neon-blue bg-neon-blue text-black shadow-[0_0_10px_rgba(0,242,255,0.5)]'
                            : 'border-neon-blue/20 bg-transparent text-neon-blue/50 hover:border-neon-blue/50'
                        }`}
                      >
                        <span>{s.name}</span>
                        <span className="text-[9px] font-mono underline ml-2">SELECT</span>
                      </button>
                    ))}
                  </div>

                  {selectedSymptom && (
                    <div className="p-4 bg-neon-blue/5 rounded-sm border border-neon-blue/40 text-[10px] text-gray-300 animate-in fade-in duration-200 space-y-3 shadow-[inset_0_0_15px_rgba(0,242,255,0.1)]">
                      <p className="font-bold text-neon-blue flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-neon-blue shadow-[0_0_5px_rgba(0,242,255,1)]"></span>
                        REPORTE_AUTOMAN_DIAG:
                      </p>
                      <p className="font-medium leading-relaxed italic border-l border-neon-blue/30 pl-3">
                        {symptomsList.find((s) => s.id === selectedSymptom)?.diag.toUpperCase()}
                      </p>
                      <div className="flex justify-between items-center pt-2 text-[10px] font-mono border-t border-neon-blue/20">
                        <span className="font-bold opacity-60">COSTO_ESTIMADO:</span>
                        <span className="text-neon-blue font-bold text-sm drop-shadow-[0_0_5px_rgba(0,242,255,0.5)]">
                          {symptomsList.find((s) => s.id === selectedSymptom)?.cost}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          const sym = symptomsList.find((s) => s.id === selectedSymptom);
                          onOpenChatWithTopic(`falla_${sym?.id}`);
                        }}
                        className="automan-button w-full mt-2 py-3 rounded-sm shadow-[0_0_15px_rgba(0,242,255,0.4)]"
                      >
                        INICIAR_ORDEN_DE_REPARACIÓN
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="relative rounded-sm overflow-hidden border border-neon-blue/50 aspect-video bg-black flex items-center justify-center group shadow-[0_0_30px_rgba(0,242,255,0.1)]">
                  <img
                    src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80"
                    alt="Trabajo de microelectrónica"
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-black border-2 border-neon-blue rounded-sm font-mono text-[9px] text-neon-blue font-bold shadow-[0_0_15px_rgba(0,242,255,0.5)]">
                    <span className="w-1.5 h-1.5 bg-neon-blue rounded-full animate-ping shadow-[0_0_5px_rgba(0,242,255,1)]" />
                    HW_PROBE_ACTIVE
                  </div>
                  <div className="absolute inset-0 bg-scanline opacity-[0.05] pointer-events-none"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-[10px]">
                  <div className="p-4 bg-black border border-neon-blue/30 rounded-sm space-y-2 shadow-[inset_0_0_15px_rgba(0,242,255,0.05)]">
                    <p className="font-bold text-neon-blue uppercase tracking-widest border-b border-neon-blue/20 pb-1">RE_PROTOCOLO_BIOS</p>
                    <p className="text-gray-400 leading-relaxed font-medium italic">
                      Reprogramación integral de EEPROMs corrompidas mediante estaciones de aire caliente y programadores lógicos seriales de alta velocidad.
                    </p>
                  </div>
                  <div className="p-4 bg-black border border-neon-blue/30 rounded-sm space-y-2 shadow-[inset_0_0_15px_rgba(0,242,255,0.05)]">
                    <p className="font-bold text-neon-blue uppercase tracking-widest border-b border-neon-blue/20 pb-1">REWORK_CHIPSETS</p>
                    <p className="text-gray-400 leading-relaxed font-medium italic">
                      Reballing de PGAs y BGAs. Restauración estructural de nodos de soldadura bajo infrarrojo y precalentadores de precisión térmica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SOFTWARE DEVELOMPENT AND R&D */}
          {activeTab === 'software' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300 relative z-10">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black bg-neon-blue px-3 py-1 rounded-sm font-bold inline-block shadow-[0_0_10px_rgba(0,242,255,0.5)]">
                  NODO_DESARROLLO_ID
                </span>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-tighter italic">
                  INGENIERÍA DE SOFTWARE <span className="text-neon-blue">RESILIENTE</span>
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed border-l-2 border-neon-blue/30 pl-4">
                  Sistemas construidos para la supervivencia digital. Arquitecturas Offline-First de alta disponibilidad adaptadas a Portuguesa.
                </p>

                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] text-neon-blue/60 uppercase tracking-[0.3em] font-bold">STACK_TECNOLÓGICO:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React + Next.js', 'Node.js Express', 'TypeScript', 'IndexedDB Core', 'MQTT Protocol', 'PostgreSQL', 'Automan CSS'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-black border border-neon-blue/30 rounded-sm font-mono text-[10px] text-neon-blue font-bold shadow-[inset_0_0_5px_rgba(0,242,255,0.1)]"
                      >
                        {tech.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-black border-2 border-neon-blue/40 rounded-sm space-y-3 shadow-[0_0_20px_rgba(0,242,255,0.1)]">
                  <p className="font-bold text-[11px] text-white flex items-center gap-2 uppercase tracking-widest">
                    <span className="w-2 h-2 bg-neon-blue shadow-[0_0_5px_rgba(0,242,255,1)]"></span>
                    SISTEMAS_CORPORATIVOS_LOC:
                  </p>
                  <p className="text-[10px] text-gray-400 leading-relaxed font-medium italic border-l border-neon-blue/20 pl-3">
                    Desarrollo de motores de facturación resilientes, sistemas de inventario con sincronización asíncrona y dashboards IoT para el sector agroindustrial.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div className="relative rounded-sm overflow-hidden border-2 border-neon-blue aspect-video bg-black shadow-[0_0_30px_rgba(0,242,255,0.2)]">
                  <div className="absolute inset-0 bg-black p-5 font-mono text-[10px] text-neon-blue overflow-y-auto space-y-2">
                    <p className="text-neon-blue font-bold flex items-center gap-2 border-b border-neon-blue/40 pb-2 mb-3">
                      <span className="w-2 h-2 bg-neon-blue shadow-[0_0_8px_rgba(0,242,255,1)] block" />
                      &gt; BIOSYSTEM_OFFLINE_KERNEL.TS
                    </p>
                    <p className="text-neon-blue/40 italic">// PROCESO DE SINCRONIZACIÓN ASÍNCRONA REGIONAL</p>
                    <p><span className="text-white">const</span> runtime_env = <span className="text-white/80">"GUANARE_PROD"</span>;</p>
                    <p><span className="text-white">export async function</span> <span className="text-white/90">pushLocalDataToServer</span>(payload) &#123;</p>
                    <p className="border-l-2 border-neon-blue/40 pl-4 text-neon-blue/70">await <span className="font-bold">SyncHub</span>.queue(&apos;data_queue&apos;, payload);</p>
                    <p className="border-l-2 border-neon-blue/40 pl-4 text-neon-blue/30 italic">// Monitoreo activo de enlace satelital/celular</p>
                    <p className="border-l-2 border-neon-blue/40 pl-4">System.<span className="italic">notifyUser</span>(&apos;CACHE_MODE_ACTIVE&apos;);</p>
                    <p className="border-l-2 border-neon-blue/40 pl-4 text-neon-blue/30 italic">// Reconexión inteligente en curso...</p>
                    <p className="border-l-2 border-neon-blue/40 pl-4"><span className="text-white">if</span> (Node.isOnline()) &#123; await hotSwapSync(); &#125;</p>
                    <p>&#125;</p>
                  </div>
                  <div className="absolute inset-0 bg-scanline opacity-[0.05] pointer-events-none"></div>
                </div>

                <div className="p-5 bg-black border border-neon-blue/50 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_20px_rgba(0,242,255,0.1)]">
                  <div className="text-left">
                    <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Petición_de_Asesoría_ID:</h4>
                    <p className="text-[9px] text-neon-blue/60 font-bold uppercase tracking-tight mt-1 opacity-80 italic">Análisis exhaustivo de requerimientos corporativos y escalabilidad de red.</p>
                  </div>
                  <button
                    onClick={() => onOpenChatWithTopic('software_id')}
                    className="automan-button px-8 py-3 text-[10px] font-bold rounded-sm shadow-[0_0_15px_rgba(0,242,255,0.5)] shrink-0"
                  >
                    AGENDAR_NODO
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
