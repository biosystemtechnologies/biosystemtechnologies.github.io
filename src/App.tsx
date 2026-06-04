/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesAndProducts from './components/ServicesAndProducts';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import LiveChat from './components/LiveChat';
import Footer from './components/Footer';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatTopic, setChatTopic] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState('inicio');

  // Track scroll position to update active section link in Header
  useEffect(() => {
    const sections = ['inicio', 'servicios', 'catalogo', 'portafolio', 'blog', 'contacto'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenChatWithTopic = (topic: string) => {
    setChatTopic(topic);
    setIsChatOpen(true);
  };

  const handleOpenGeneralChat = () => {
    setChatTopic(undefined);
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-white/25 selection:text-white">
      
      {/* Background Decorative Ambient Grid Line decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0e_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20 opacity-70" />

      {/* Header Sticky Navigation bar */}
      <Header
        onOpenChat={handleOpenGeneralChat}
        activeSection={activeSection}
      />

      {/* Hero Display section */}
      <Hero
        onOpenChat={handleOpenGeneralChat}
      />

      {/* Services and Catalog section with inner price calculation tool and diagnostic Wizard */}
      <div id="catalogo">
        <ServicesAndProducts
          onOpenChatWithTopic={handleOpenChatWithTopic}
        />
      </div>

      {/* Portfolio highlights showcase section */}
      <Portfolio />

      {/* Technical Blog Advice & constant updates section */}
      <Blog />

      {/* Contact Form, Company phone, Email information and vector Guanare map */}
      <ContactForm />

      {/* Live Support interaction chat simulator floating widget */}
      <LiveChat
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpen={handleOpenGeneralChat}
        initialTopic={chatTopic}
      />

      {/* Global Brand footer */}
      <Footer />

    </div>
  );
}

