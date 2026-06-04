/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Layers, Sparkles, Phone, AlertCircle } from 'lucide-react';
import { CHAT_BOT_TREE } from '../data';
import { ChatMessage } from '../types';

interface LiveChatProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  initialTopic?: string;
}

export default function LiveChat({ isOpen, onClose, onOpen, initialTopic }: LiveChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentNode, setCurrentNode] = useState('inicio');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize with greeting message
  useEffect(() => {
    if (messages.length === 0) {
      const greeting = CHAT_BOT_TREE.inicio;
      setMessages([
        {
          id: 'g-1',
          text: greeting.text,
          sender: 'bot',
          timestamp: getFormattedTime(),
          quickReplies: greeting.replies.map(r => r.text)
        }
      ]);
    }
  }, []);

  // Handle triggered topics outer actions (eg. selection from other sections)
  useEffect(() => {
    if (initialTopic && isOpen) {
      handleExternalTopic(initialTopic);
    }
  }, [initialTopic, isOpen]);

  // Scroll to bottom helper
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const getFormattedTime = () => {
    const d = new Date();
    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`;
  };

  const handleExternalTopic = (topic: string) => {
    setIsTyping(true);
    let replyText = '';
    let quickReplies: string[] = [];

    // Map external codes to tree nodes
    if (topic.startsWith('disponibilidad_')) {
      const prodId = topic.replace('disponibilidad_', '');
      replyText = `¡Hola! Sí, poseemos disponibilidad del artículo seleccionado en nuestro inventario de Guanare. Escríbenos directamente o presiona abajo para chatear por WhatsApp para coordinar el pago, entrega física a domicilio en Portuguesa o facturación fiscal de inmediato.`;
      quickReplies = ['🟢 Coordinar por WhatsApp', '🔄 Regresar al menú'];
      setCurrentNode('whatsapp_redirect');
    } else if (topic.startsWith('falla_')) {
      replyText = `¡Gracias por elegir nuestro laboratorio especialista! Para agendar el chequeo electrónico avanzado de este equipo, traemos tu laptop/PC/componente a nuestra sede central o coordinemos una recogida técnica a domicilio. ¿Cómo prefieres coordinarlo?`;
      quickReplies = ['📅 Programar vía WhatsApp', '🔄 Regresar al menú'];
      setCurrentNode('electronica');
    } else if (topic.startsWith('presupuesto_banner_')) {
      replyText = `¡Excelente! Hemos recibido las medidas estimadas de tu aviso publicitario exterior. Nuestro equipo de diseñadores gráficos calibrará el archivo conceptual para impresión CMYK. Comencemos de inmediato:`;
      quickReplies = ['🟢 Enviar diseño por WhatsApp', '🔄 Regresar al menú'];
      setCurrentNode('diseno');
    } else if (topic === 'software_id') {
      replyText = `¡Estupendo! Conversemos sobre tu idea tecnológica. Desarrollamos apps web resguardadas, con base de datos, paneles interactivos estables, capacidades Offline y adecuaciones fiscales avanzadas. Agenda tu primera cita de diagnóstico gratuita:`;
      quickReplies = ['📅 Agendar consultoría', '🔄 Regresar al menú'];
      setCurrentNode('software');
    } else if (topic === 'equipos_disponibles') {
      replyText = `Claro, te enviaremos la disponibilidad más reciente y actualizada de PCs corporativas, discos sólidos SSD fast-rate y componentes. ¿Buscas cotizar marcas específicas como Lenovo, Corsair o Ryzen?`;
      quickReplies = ['🏷️ Cotizar PC a la medida', '🔄 Regresar al menú'];
      setCurrentNode('computacion');
    }

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `ext-${Date.now()}`,
          text: replyText,
          sender: 'bot',
          timestamp: getFormattedTime(),
          quickReplies
        }
      ]);
    }, 1000);
  };

  // Handle click on preprogrammed Quick Replies
  const handleQuickReplyClick = (replyText: string) => {
    // Add user message to log
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      text: replyText,
      sender: 'user',
      timestamp: getFormattedTime()
    };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);

    // Find next node in the conversation tree
    setTimeout(() => {
      setIsTyping(false);
      
      const currentConfig = CHAT_BOT_TREE[currentNode];
      let nextNodeKey = 'inicio';

      if (currentConfig) {
        const option = currentConfig.replies.find((r) => r.text === replyText);
        if (option) {
          nextNodeKey = option.next;
        } else {
          // General search
          for (const key of Object.keys(CHAT_BOT_TREE)) {
            const found = CHAT_BOT_TREE[key].replies.find((r) => r.text === replyText);
            if (found) {
              nextNodeKey = found.next;
              break;
            }
          }
        }
      }

      // Special action actions
      if (nextNodeKey === 'whatsapp_link_action') {
        window.open('https://wa.me/584124955404?text=Hola%20Biosystem%20quiero%20hacer%20una%20consulta%20tecnica', '_blank');
        nextNodeKey = 'inicio';
      }

      const nextNode = CHAT_BOT_TREE[nextNodeKey] || CHAT_BOT_TREE.inicio;
      setCurrentNode(nextNodeKey);

      setMessages((prev) => [
        ...prev,
        {
          id: `b-${Date.now()}`,
          text: nextNode.text,
          sender: 'bot',
          timestamp: getFormattedTime(),
          quickReplies: nextNode.replies.map(r => r.text)
        }
      ]);

    }, 800);
  };

  // Handle free text typing
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText;
    setInputText('');

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      text: userText,
      sender: 'user',
      timestamp: getFormattedTime()
    };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);

    // Automated smart answer selection search
    setTimeout(() => {
      setIsTyping(false);
      
      let botResponseText = 'Entiendo tu consulta. Para darte el soporte exacto de manera oportuna, ¿podrías indicarnos en qué área se enfoca tu solicitud técnica?';
      let quickReplies = ['💻 Computadoras', '🛠️ Electrónica', '⚙️ Software', '🎨 Publicidad', '📍 Ubicación'];

      const sanitized = userText.toLowerCase();

      if (sanitized.includes('precio') || sanitized.includes('cuanto cuesta') || sanitized.includes('costo') || sanitized.includes('comprar') || sanitized.includes('disco') || sanitized.includes('ssd') || sanitized.includes('computadora')) {
        botResponseText = 'Puedes consultar directamente las especificaciones de nuestros discos, SSDs, laptops ThinkPad y workstations en la sección "Catálogo de Productos y Componentes" en esta misma web, o bien cotizar directo con soporte:';
        quickReplies = ['🏷️ Cotizar PC a la medida', '🟢 Hablar por WhatsApp', '🔄 Menu de inicio'];
        setCurrentNode('computacion');
      } else if (sanitized.includes('reparar') || sanitized.includes('arreglo') || sanitized.includes('daño') || sanitized.includes('prende') || sanitized.includes('pantalla') || sanitized.includes('calienta')) {
        botResponseText = '¡Entendido! Nuestro laboratorio técnico realiza mediciones milimétricas lógicas. Indícanos el tipo de comportamiento de tu equipo mediante nuestro diagnóstico rápido de fallas:';
        quickReplies = ['🛠️ Ver pre-diagnósticos', '🔌 Soporte Técnico a domicilio', '🔄 Menu de inicio'];
        setCurrentNode('electronica');
      } else if (sanitized.includes('donde estan') || sanitized.includes('ubicacion') || sanitized.includes('direccion') || sanitized.includes('tienda') || sanitized.includes('guanare')) {
        botResponseText = '📍 Estamos ubicados en Guanare, Estado Portuguesa, Venezuela. Atendemos de Lunes a Sábado de 8:00 AM a 6:00 PM. ¿Te gustaría chatear con nuestro gestor móvil?';
        quickReplies = ['🟢 Hablar por WhatsApp', '📞 Llamar por teléfono', '🔄 Menu de inicio'];
        setCurrentNode('ubicacion');
      } else if (sanitized.includes('diseño') || sanitized.includes('pendon') || sanitized.includes('imprimir') || sanitized.includes('publicidad') || sanitized.includes('logo')) {
        botResponseText = 'Ofrecemos diagramación conceptual, diseño de identidad corporativa y plotteo en lona de alta resistencia. ¿Te gustaria calcular el presupuesto para tus pendones?';
        quickReplies = ['🎴 Pendones', '🎨 Rediseño de Logo', '🔄 Menu de inicio'];
        setCurrentNode('diseno');
      } else if (sanitized.includes('telefono') || sanitized.includes('numero') || sanitized.includes('whatsapp') || sanitized.includes('correo') || sanitized.includes('contacto')) {
        botResponseText = '¡Nuestros canales oficiales de contacto directo están disponibles para ti!\n📞 Teléfono Fijo: 0257-2539969\n📱 Celular: 0412-4955404\n✉️ Correo: biosystemtechnologies@gmail.com';
        quickReplies = ['🟢 Hablar por WhatsApp', '🔄 Menu de inicio'];
        setCurrentNode('ubicacion');
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bm-${Date.now()}`,
          text: botResponseText,
          sender: 'bot',
          timestamp: getFormattedTime(),
          quickReplies
        }
      ]);
    }, 900);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-400 to-emerald-500 rounded-full text-black shadow-[0_4px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_4px_35px_rgba(52,211,153,0.65)] hover:scale-[1.05] active:scale-95 transition-all cursor-pointer group"
          title="Abrir chat de soporte en vivo"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping绝对 inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] text-white font-mono font-bold items-center justify-center">1</span>
          </span>
          <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
        </button>
      )}

      {/* Actual Chat Dialog Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-[370px] h-[520px] rounded-3xl glass-panel border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden animate-in slide-in-from-bottom-6 fade-in duration-300">
          
          {/* Header row */}
          <div className="p-4 bg-black/50 border-b border-white/6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-9 h-9 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl">
                <Layers className="w-4 h-4 text-white" />
                {/* Active pulse */}
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border border-black rounded-full" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5 leading-tight">
                  BioBot Support 
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                </h4>
                <p className="text-[10px] text-emerald-400 font-mono">SOPORTE EN VIVO ACTIVO</p>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#a1a1aa] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages stream display area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/20">
            {messages.map((m) => {
              const isBot = m.sender === 'bot';
              return (
                <div key={m.id} className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} space-y-1`}>
                  {/* Sender title */}
                  <span className="font-mono text-[8px] text-[#52525b] px-1.5">
                    {isBot ? 'BIOBOT ASSISTANT' : 'CLIENTE'} • {m.timestamp}
                  </span>
                  
                  {/* Bubble body content */}
                  <div className={`p-3 max-w-[85%] text-left rounded-2xl text-xs leading-normal font-light ${
                    isBot 
                      ? 'bg-neutral-900/80 border border-white/5 text-white rounded-tl-sm' 
                      : 'bg-[#10b981]/15 border border-[#10b981]/25 text-emerald-300 rounded-tr-sm'
                  }`}>
                    {/* Preserve line breaks */}
                    {m.text.split('\n').map((line, lid) => (
                      <p key={lid} className={lid > 0 ? 'mt-1' : ''}>{line}</p>
                    ))}
                  </div>

                  {/* Bubble internal quick replies */}
                  {isBot && m.quickReplies && (
                    <div className="flex flex-wrap gap-1.5 pt-1.5 max-w-[95%]">
                      {m.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleQuickReplyClick(reply)}
                          className="px-2.5 py-1 rounded-full border border-white/5 bg-white/[0.03] text-[10px] text-emerald-400 hover:text-white hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all cursor-pointer active:scale-95"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}

                </div>
              );
            })}

            {isTyping && (
              <div className="flex flex-col items-start space-y-1">
                <span className="font-mono text-[8px] text-[#52525b] px-1.5">BIOBOT ASSISTANT</span>
                <div className="p-3 bg-neutral-900 border border-white/5 rounded-2xl rounded-tl-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Action Call text bar */}
          <form onSubmit={handleSendMessage} className="p-3 bg-black/40 border-t border-white/6 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe una pregunta rápida..."
              className="flex-1 bg-[#121214] border border-white/5 text-xs text-white placeholder-[#52525b] py-2 px-3.5 rounded-xl focus:outline-none focus:border-emerald-500/30 transition-colors"
            />
            <button
              type="submit"
              className="p-2 bg-emerald-500 text-black hover:bg-emerald-400 rounded-xl transition-all cursor-pointer active:scale-95 flex items-center justify-center shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Bottom security assurance alert */}
          <div className="bg-black py-1.5 px-3 border-t border-white/5 flex items-center justify-center gap-1 text-[8.5px] font-mono text-[#52525b]">
            <AlertCircle className="w-2.5 h-2.5 text-emerald-500/60" />
            <span>Encriptación de soporte seguro Sede Guanare</span>
          </div>

        </div>
      )}
    </>
  );
}
