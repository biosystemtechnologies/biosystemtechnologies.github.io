/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BlogPost, Project, ProductItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'biopos',
    title: 'BioPOS Cloud',
    description: 'Sistema integral de facturación e inventario optimizado para comercios de Portuguesa, con soporte offline y adaptación fiscal.',
    detailedDescription: 'BioPOS es la solución definitiva de punto de venta desarrollada específicamente para afrontar los retos locales de conectividad de los comercios venezolanos. Diseñado con una arquitectura offline-first, permite facturar de manera fluida y sincronizar instantáneamente al recuperar la conexión.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    client: 'Multitiendas Guanare C.A.',
    year: '2025',
    tags: ['React', 'Node.js', 'SQLite', 'Offline-First', 'Guanare'],
    challenge: 'La inestabilidad de la conexión de red en el centro de Guanare provocaba demoras en los cobros y pérdida de registros de ventas diarias en los comercios locales.',
    solution: 'Desarrollamos una aplicación web progresiva (PWA) con almacenamiento local robusto basado en IndexedDB y sincronización automática bidireccional contra servidores en la nube.',
    results: [
      'Disminución del 99% en las ventas perdidas por fallas de conexión.',
      'Facturación un 45% más rápida utilizando atajos de teclado y lectores de barras.',
      'Reporte consolidado de inventario en tiempo real apto para fiscalización regional.'
    ]
  },
  {
    id: 'agro-iot',
    title: 'GanadoIntel - Smart IoT',
    description: 'Monitoreo ambiental y telemetría de silos en tiempo real para el sector agroindustrial llanero.',
    detailedDescription: 'Plataforma IoT experimental para el monitoreo de temperatura, humedad y niveles de almacenamiento para silos agrícolas y establos de ordeño tecnificado en Guanare y Agua Blanca.',
    category: 'Electrónica',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    client: 'Fundo La Coromoto',
    year: '2026',
    tags: ['Hardware', 'ESP32', 'Firmware Custom', 'Next.js Dashboard', 'MQTT'],
    challenge: 'El deterioro accidental de las cosechas almacenadas en silos debido a picos imprevistos de humedad, lo que generaba grandes pérdidas financieras en la época lluviosa.',
    solution: 'Instalación de nodos sensores ultraestables alimentados por energía solar con transmisión de largo alcance (LoRa) y un dashboard interactivo de monitoreo en la oficina central.',
    results: [
      'Monitoreo ininterrumpido 24/7 sin dependencia directa de la red eléctrica comercial.',
      'Alertas críticas de temperatura enviadas directo al teléfono vía SMS y WhatsApp.',
      'Reducción de mermas agrícolas en un 22% durante la fase piloto.'
    ]
  },
  {
    id: 'imprenta-marca',
    title: 'Identidad Visual & Campaña 360',
    description: 'Campaña integral de relanzamiento y branding con impresión publicitaria física de alta densidad.',
    detailedDescription: 'Creación del branding corporativo completo, papelería fina, pendones gigantografías mate y uniformes bordados para una de las marcas de distribución de víveres más grandes de la región.',
    category: 'Diseño',
    image: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=800&q=80',
    client: 'Alimentos El Llano',
    year: '2025',
    tags: ['Diseño Gráfico', 'Branding', 'Impresión Gran Formato', 'Material POP'],
    challenge: 'La marca poseía una identidad desactualizada, poco legible para empaques modernos, y requería material publicitario de alta resistencia ante el calor de Portuguesa.',
    solution: 'Desarrollamos una identidad minimalista con tipografías de alto impacto visual e imprimimos el material en lona de alta densidad con filtro UV para garantizar su durabilidad en exteriores.',
    results: [
      'Presencia consolidada de marca en 15 puntos de comercialización clave.',
      'Incremento del 30% en reconocimiento visual medido en encuestas regionales.',
      'Material publicitario de larga duración inalterado por la fuerte exposición solar.'
    ]
  },
  {
    id: 'colegio-sys',
    title: 'Portal Educativo "EducaGuanare"',
    description: 'Sistema web administrativo y académico para la gestión de matrículas, notas interactiva y planeamiento escolar.',
    detailedDescription: 'Un software escolar multiusuario para el control académico que agiliza el reporte de notas para directores, docentes, estudiantes e instituciones reguladoras de la zona.',
    category: 'Software',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
    client: 'Colegio Privado Sucre',
    year: '2026',
    tags: ['React', 'PostgreSQL', 'Tailwind CSS', 'Generación de PDFs'],
    challenge: 'El procesamiento manual de las notas y las planillas de inscripción consumía semanas de trabajo administrativo y generaba errores de transcripción.',
    solution: 'Diseñamos una plataforma limpia en la nube con pasarela de consulta rápida para representantes y generación instantánea del formato oficial de notas.',
    results: [
      'Matrícula completada en tiempo récord durante el lapso de inscripción.',
      'Emisión automática de boletas y solvencias administrativas en menos de 5 segundos.',
      'Mejora de la comunicación interna escuela-familia en un 80%.'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'mantenimiento-preventivo-pc',
    title: 'Mantenimiento Preventivo: Cómo combatir el calor de Portuguesa en tus equipos',
    summary: 'La acumulación de polvo combinada con las altas temperaturas de Guanare puede destruir tu procesador. Te damos una guía paso a paso para evitarlo.',
    content: `El clima cálido de Guanare, Estado Portuguesa, es un factor ambiental determinante para la salud útil de nuestros equipos electrónicos. Las temperaturas promedio superan los 32°C en gran parte del año, haciendo que la refrigeración de ordenadores de escritorio y portátiles trabaje siempre al límite.

La acumulación natural de polvo actúa como una manta térmica aislante en disipadores y ventiladores. Si no se maneja periódicamente, esto produce un estrés térmico continuo, reduciendo drásticamente la vida del procesador o la tarjeta de video (Thermal Throttling).

### Consejos clave de Biosystem Technologies:

1. **Ubicación Estratégica**: Nunca operes tu CPU en compartimentos cerrados de madera. Asegúrate de tener al menos 15 cm de separación con las paredes para garantizar flujo de aire fresco constante.
2. **Ciclo de Limpieza (Cada 6 meses)**: Desarma con cuidado los paneles y utiliza aire comprimido de forma controlada. Sostén las aspas de los ventiladores para evitar que giren con fuerza excesiva, lo que podría dañar sus rodamientos.
3. **Renovación de Pasta Térmica**: La pasta térmica convencional se cristaliza y pierde efectividad a los 12-18 meses bajo este clima. Recomendamos aplicar pastas de alta conductividad química (como Artic MX-4 o MX-6) para garantizar una disipación óptima.
4. **Instalación de Filtros Anti-polvo**: Considera agregar mallas magnéticas a las tomas de aire para atrapar partículas de polvo antes de que ingresen al sistema.

¿Sientes que tu equipo hace demasiado ruido o se apaga de repente? En el taller de electrónica avanzada de **Biosystem Technologies** realizamos mantenimientos profundos con herramientas de medición premium y pastas de alta gama. Puedes agendar tu diagnóstico express en nuestro chat interactivo de soporte.`,
    category: 'Consejos Técnicos',
    author: {
      name: 'Ing. Carlos Mendoza',
      role: 'Director de Soporte Técnico',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    date: 'Mayo 28, 2026',
    readTime: '4 min lectura',
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
    tags: ['Hardware', 'Mantenimiento', 'Guanare Clima', 'PC Gaming']
  },
  {
    id: 'importancia-diseno-web-offline',
    title: 'Estrategias Web Offline-First para comercios en Venezuela',
    summary: '¿Es posible seguir vendiendo en línea cuando el Internet falla? Te explicamos el estándar técnico del diseño Web Offline-First.',
    content: `El desarrollo de aplicaciones Web en mercados en desarrollo requiere una mentalidad resiliente. En Venezuela, la latencia inestable y los cortes temporales de cobertura obligan a los desarrolladores a construir sistemas capaces de tolerar la desconexión total sin que el usuario experimente un crash o una interrupción frustrante.

La arquitectura **Offline-First** cambia el paradigma tradicional: en lugar de asumir que la red está disponible y fallar si no lo está, diseñamos asumiendo que la red no está activa y tomamos la conexión como una mejora oportuna.

### Los Pilares para una Web Resiliente:

- **Service Workers estructurados**: Filtros que actúan como proxy local e interceptan solicitudes de red para servir de inmediato componentes estáticos cacheados desde el almacenamiento local.
- **Bases de datos locales (IndexedDB)**: Almacenamiento rápido de datos complejos en el navegador que asume la lectura y escritura transaccional mientras la conexión está caída.
- **Protocolos de Sincronización Dinámica**: Algoritmos de ordenación que empaquetan las transacciones generadas offline y las transmiten en lotes ordenados con resolución automática de conflictos al reconectarse.

Implementar esto no solo garantiza que tu personal siga registrando comandas o ventas, sino que incrementa drásticamente la velocidad percibida del sitio pues toda la interfaz carga directo desde el disco duro local de manera instantánea.

En **Biosystem Technologies** diseñamos sistemas a la medida bajo este estándar técnico. Si buscas un portal corporativo, tienda e-commerce o sistema de inventario robusto, contáctanos hoy mismo para una consultoría de software.`,
    category: 'Desarrollo',
    author: {
      name: 'Ing. Juan Pérez',
      role: 'Líder de Desarrollo de Software',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    date: 'Abril 15, 2026',
    readTime: '5 min de lectura',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Offline-First', 'Web Dev', 'React', 'Optimización']
  },
  {
    id: 'diseno-que-vende-impresion',
    title: 'Publicidad de Alto Impacto: Del píxel digital a la lona impresa',
    summary: 'Cómo la correspondencia cromática y el uso de perfiles CMYK aseguran que el banner impreso luzca exactamente igual que en tu pantalla.',
    content: `A menudo, los emprendedores diseñan logos espectaculares en sus teléfonos pero, al llevarlos a la imprenta, los colores resultantes lucen opacos, oscuros o totalmente diferentes a lo esperado. 

El secreto detrás de una impresión publicitaria profesional radica en entender la separación entre el mundo de la luz digital (RGB) y el de los pigmentos reales (CMYK).

### Buenas prácticas esenciales para Diseñar e Imprimir:

1. **Configura el Perfil correcto desde el inicio**: Si vas a imprimir un pendón, valla o folleto, tu archivo de Adobe Illustrator, Photoshop o Canva debe estar configurado desde su creación en espacio de color **CMYK (perfil Coated FOGRA39 / US Web Coated)**. Cambiarlo de RGB a CMYK al final causará giros drásticos impredecibles en los tonos.
2. **Resolución de salida real**: Para impresiones a gran escala que se verán desde lejos (como pendones o pancartas), una resolución de **100 a 150 DPI (Puntos por pulgada)** a escala real es más que suficiente. Para folletos o tarjetas de presentación táctiles, exige siempre **300 DPI** para líneas nítidas.
3. **Márgenes de seguridad y sangrado**: Las cuchillas de corte en talleres de impresión física tienen una tolerancia milimétrica de error. Deja siempre de 3 a 5 mm de margen sin texto crítico cerca de los bordes para prevenir recortes accidentales de letras e información de contacto.

En **Biosystem Technologies** contamos con un equipo dedicado a la creación gráfica conceptual e impresión de gran formato en Guanare, garantizando calibración constante de nuestras maquinarias de inyección de tinta para lograr colores vivos y fieles a tu marca nacional.`,
    category: 'Electrónica',
    author: {
      name: 'Lcda. María Torres',
      role: 'Coordinadora de Medios Visuales',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
    },
    date: 'Marzo 10, 2026',
    readTime: '3 min de lectura',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    tags: ['Diseño Gráfico', 'CMYK', 'Impresión', 'Branding Guanare']
  }
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: 'pc-workstation-ryzen',
    name: 'Workstation Biosystem Pro-X',
    category: 'Computadores',
    price: '799.00',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=300&q=80',
    specs: ['Procesador AMD Ryzen 7 5700X', '32GB RAM DDR4 Kingston Fury', '1TB SSD NVMe PCIe 4.0', 'GPU NVIDIA RTX 3060 12GB', 'Ideal para Diseño 3D y Programación Avanzada']
  },
  {
    id: 'laptop-thinkpad-refurbished',
    name: 'Lenovo ThinkPad T14 (Enterprise)',
    category: 'Computadores',
    price: '460.00',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=300&q=80',
    specs: ['Intel Core i5 10ma Generación', '16GB RAM DDR4 expandible', '512GB SSD NVMe de alta velocidad', 'Pantalla 14" Full HD Antireflejo', 'Garantía Biosystem de 6 meses']
  },
  {
    id: 'router-tp-link-gigabit',
    name: 'Router TP-Link Archer AX23 Wi-Fi 6',
    category: 'Accesorios',
    price: '55.00',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=300&q=80',
    specs: ['Dual-Band Wi-Fi 6 (hasta 1.8 Gbps)', '4 Antenas externas de alta potencia', 'Puertos Gigabit (WAN/LAN) de alta velocidad', 'Soporta hasta 64 dispositivos simultáneos']
  },
  {
    id: 'disco-ssd-crucial-1tb',
    name: 'SSD Crucial P3 Plus 1TB M.2 NVMe',
    category: 'Componentes',
    price: '85.00',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=300&q=80',
    specs: ['Capacidad de 1 Terabyte', 'Velocidad de Lectura hasta 5000 MB/s', 'Perfecto para actualizar Laptops y Consolas', 'Consumo energético optimizado']
  },
  {
    id: 'monedas-ram-corsair-16gb',
    name: 'Corsair Vengeance LPX 16GB (2x8GB)',
    category: 'Componentes',
    price: '48.00',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80',
    specs: ['Kit de Memoria Dual Channel', 'Frecuencia de 3200 Mhz CL16', 'Disipador térmico de aluminio anodizado', 'Optimizado para placas madre Intel y AMD']
  },
  {
    id: 'tarjetas-presentacion-cuchilla',
    name: 'Diseño e Impresión: Pack 500 Tarjetas',
    category: 'Impresión y Diseño',
    price: '30.00',
    isAvailable: true,
    image: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=300&q=80',
    specs: ['Diseño gráfico conceptual incluido', 'Cartulina Bristol Mate de 300g premium', 'Corte de precisión y sangrados limpios', 'Acabados con filtro UV protector']
  }
];

export const CHAT_BOT_TREE: { [key: string]: { text: string; replies: { text: string; next: string }[] } } = {
  inicio: {
    text: '¡Hola! Bienvenido al soporte en vivo de Biosystem Technologies en Guanare. 🔬🤖 Soy BioBot, tu asistente inteligente regional. ¿En qué áreaj de tecnología te gustaría recibir asesoría hoy?',
    replies: [
      { text: '💻 Computadores/Componentes', next: 'computacion' },
      { text: '🛠️ Servicio Técnico Electrónico', next: 'electronica' },
      { text: '🎨 Diseño Gráfico e Impresos', next: 'diseno' },
      { text: '⚙️ Desarrollo de Software / I+D', next: 'software' },
      { text: '📍 Ubicación y Contactos', next: 'ubicacion' }
    ]
  },
  computacion: {
    text: 'Contamos con una amplia cartera de computadoras corporativas, partes, componentes (SSD, RAM, Procesadores) y accesorios de conectividad. Cuéntanos qué buscas:',
    replies: [
      { text: '🏷️ Ver Productos Físicos', next: 'ver_productos' },
      { text: '💬 Solicitar una Cotización de PC', next: 'cotizar_pc' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  electronica: {
    text: 'Nuestro taller especializado realiza reparaciones de sistemas lógicos de PCs, laptops, reinstalación de BIOS, reparación de cargadores, soldadura micro BGA y diagnóstico de fallas de encendido. ¿Cómo podemos ayudarte?',
    replies: [
      { text: '💼 Presupuesto para reparar Laptop', next: 'reparar_laptop' },
      { text: '🔌 Soporte Técnico a domicilio', next: 'soporte_domicilio' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  diseno: {
    text: 'Ofrecemos diseño de marca integral e impresiones de gran calidad: pendones gigantografías, vinilos decorativos, pancartas y material publicitario de alta resistencia ante el calor del llano. ¿Qué necesitas imprimir?',
    replies: [
      { text: '🎴 Pendones y Publicidad Física', next: 'pendones' },
      { text: '🎨 Diseño de Logotipo Corporativo', next: 'logo_corp' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  software: {
    text: 'Desarrollamos soluciones web escalables, PWAs con capacidades Offline-First idóneas para Portuguesa, automatizaciones, sistemas administrativos y consultoría IT avanzada. ¿Qué proyecto tienes en mente?',
    replies: [
      { text: '🚀 Agendar Consultoría Gratuita', next: 'consultoria' },
      { text: '📂 Ver Portafolio de Software', next: 'ver_portafolio' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  ubicacion: {
    text: '📍 Estamos ubicados en la vibrante ciudad de Guanare, Estado Portuguesa, Venezuela.\n📞 Teléfono Fijo: 0257-2539969\n📱 Celular/WhatsApp: 0426-4500865\n✉️ Correo: biosystemtechnologies@gmail.com\n⏰ Horario: Lunes a Sábado, de 8:00 AM a 6:00 PM.',
    replies: [
      { text: '🟢 Hablar Directo por WhatsApp', next: 'whatsapp_redirect' },
      { text: '📬 Dejar un Mensaje en Formulario', next: 'contact_form_ref' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  ver_productos: {
    text: '¡Excelente decisión! Te invitamos a navegar en nuestra sección "Productos y Catálogo" que verás en la página principal para visualizar las especificaciones e imágenes reales.',
    replies: [
      { text: '📞 Preguntar Disponibilidad inmediata', next: 'whatsapp_redirect' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  cotizar_pc: {
    text: 'Para cotizar una máquina a tu medida, por favor envíanos los detalles por WhatsApp (0426-4500865) o déjanos tu correo en el formulario de la parte inferior de la web.',
    replies: [
      { text: '🟢 Ir a WhatsApp para cotizar', next: 'whatsapp_redirect' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  reparar_laptop: {
    text: '¡Recibido! Para darte el presupuesto estimado necesitamos saber la marca, modelo y falla del equipo (ej. Thinkpad T14, no enciende/pantalla negra). Escríbenos directamente o trae tu PC a la tienda en Guanare.',
    replies: [
      { text: '🟢 Enviar datos por WhatsApp', next: 'whatsapp_redirect' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  soporte_domicilio: {
    text: 'Ofrecemos soporte a domicilio en Guanare para oficinas y empresas. Para programar una visita técnica presencial coordinemos fecha y hora.',
    replies: [
      { text: '📅 Programar Visita Técnica', next: 'whatsapp_redirect' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  pendones: {
    text: 'Hacemos impresiones en plotter con excelente calibración de color. Envía tu diseño a biosystemtechnologies@gmail.com o solicita que nuestro equipo de diseño gráfico lo elabore para ti.',
    replies: [
      { text: '🟢 Cotizar Impresiones por WhatsApp', next: 'whatsapp_redirect' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  logo_corp: {
    text: '¡Consolida tu presencia! Elaboramos el manual de marca completo, isotipos optimizados para digital e impresos, tipografías y paleta de colores.',
    replies: [
      { text: '🎨 Ver opciones de diseño corporativo', next: 'whatsapp_redirect' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  consultoria: {
    text: '¡Fantástico! Nuestros ingenieros examinarán tus necesidades de software e integraciones de base de datos. Estaremos encantados de agendar una videollamada de asesoramiento.',
    replies: [
      { text: '📅 Agendar vía WhatsApp', next: 'whatsapp_redirect' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  ver_portafolio: {
    text: 'Puedes revisar algunos de nuestros proyectos más relevantes en la sección de "Portafolio" de la página web. Desarrollamos bajo altos estándares de velocidad y diseño UX/UI.',
    replies: [
      { text: '💬 Iniciar un proyecto similar', next: 'whatsapp_redirect' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  whatsapp_redirect: {
    text: '🔐 Redirigiendo de forma segura... Puedes pulsar en este enlace o escribir directamente a nuestro gestor de soporte móvil de Portuguesa (+584264500865).',
    replies: [
      { text: '🔗 Presiona aquí para chatear', next: 'whatsapp_link_action' },
      { text: '🔄 Volver al Inicio', next: 'inicio' }
    ]
  },
  contact_form_ref: {
    text: 'Puedes deslizarte hacia abajo hasta la sección de "Contacto", rellenar nuestro formulario de correo y nos comunicaremos contigo de inmediato (en menos de 1 hora laboral).',
    replies: [
      { text: '🔄 Volver al o Inicio', next: 'inicio' }
    ]
  }
};
