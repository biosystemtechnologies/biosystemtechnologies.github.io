/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string; // Markdown or rich text paragraphs
  category: 'Consejos Técnicos' | 'Desarrollo' | 'Electrónica' | 'Actualizaciones';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  category: 'Software' | 'Electrónica' | 'Diseño' | 'Infraestructura';
  image: string;
  client: string;
  year: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Computadores' | 'Accesorios' | 'Componentes' | 'Impresión y Diseño';
  price: string; // in USD (or reference)
  isAvailable: boolean;
  image: string;
  specs: string[];
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot' | 'system';
  timestamp: string;
  quickReplies?: string[];
}
