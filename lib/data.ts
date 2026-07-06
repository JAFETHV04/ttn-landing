// Static content for TTN Solar landing page

// Número de WhatsApp para cotizaciones (formato internacional, solo dígitos).
// TODO: reemplazar por el número real de TTN Centro.
export const WHATSAPP_NUMBER = "50499999999";

export function getWhatsAppQuoteUrl(productName: string, ref: string): string {
  const message = `Hola, me interesa el producto: ${productName} (Ref: ${ref}). ¿Me pueden brindar más información y una cotización?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "SOBRE NOSOTROS", href: "#" },
  {
    label: "PRODUCTOS",
    href: "/productos",
    dropdown: ["PANELES", "BATERIAS", "INVERSORES", "GENERADORES"],
  },
  { label: "PROYECTOS", href: "#" },
  { label: "SERVICIOS", href: "#" },
  { label: "BLOG", href: "#" },
];

export const categories = [
  { icon: "wb_sunny", label: "Paneles Solares" },
  { icon: "battery_charging_full", label: "Baterías" },
  { icon: "electrical_services", label: "Inversores" },
  { icon: "bolt", label: "Generadores" },
  { icon: "brightness_auto", label: "Almacenamiento" },
];

export const plans = [
  {
    id: "basico",
    name: "Básico",
    price: "$99",
    period: "/mes",
    image: "/images/plan-basico.png",
    capacity: "1.5 kWh/día",
    featured: false,
    features: [
      { icon: "light_mode", label: "Iluminación básica" },
      { icon: "devices", label: "2-3 dispositivos pequeños" },
      { icon: "ac_unit", label: "Ventilador" },
      { icon: "tv", label: "Televisor pequeño" },
      { icon: "router", label: "Router WiFi" },
    ],
  },
  {
    id: "estandar",
    name: "Estándar",
    price: "$199",
    period: "/mes",
    image: "/images/plan-estandar.png",
    capacity: "7.5 kWh/día",
    featured: true,
    features: [
      { icon: "light_mode", label: "Iluminación completa" },
      { icon: "kitchen", label: "Refrigeradora" },
      { icon: "ac_unit", label: "Aire acondicionado (1 unidad)" },
      { icon: "laptop", label: "Computadoras" },
      { icon: "tv", label: "Televisor" },
      { icon: "washing_machine", label: "Lavadora" },
      { icon: "router", label: "Router WiFi" },
    ],
  },
  {
    id: "avanzado",
    name: "Avanzado",
    price: "$329",
    period: "/mes",
    image: "/images/plan-avanzado.png",
    capacity: "15 kWh/día",
    featured: false,
    features: [
      { icon: "light_mode", label: "Iluminación completa" },
      { icon: "kitchen", label: "Refrigeradora" },
      { icon: "ac_unit", label: "Aire acondicionado (1 unidad)" },
      { icon: "laptop", label: "Computadoras" },
      { icon: "tv", label: "Televisor" },
      { icon: "washing_machine", label: "Lavadora" },
      { icon: "router", label: "Router WiFi" },
      { icon: "local_laundry_service", label: "Secadora" },
      { icon: "microwave", label: "Microondas" },
    ],
  },
];

export const planBenefits = [
  { icon: "verified", label: "Sin contratos" },
  { icon: "support_agent", label: "Soporte 24/7" },
  { icon: "build", label: "Instalación incluida" },
  { icon: "eco", label: "Garantía 25 años" },
];

export const stats = [
  { icon: "solar_power", number: "1,200+", label: "INSTALACIONES" },
  { icon: "workspace_premium", number: "15+", label: "AÑOS DE EXPERIENCIA" },
  { icon: "thumb_up", number: "98%", label: "CLIENTES SATISFECHOS" },
  { icon: "bolt", number: "50 MW", label: "CAPACIDAD INSTALADA" },
];

export const news = [
  {
    bgColor: "#dce8f5",
    title: "La energía solar bate récords en Centroamérica",
    excerpt:
      "Las instalaciones solares en la región crecieron un 45% en el último trimestre...",
    date: "15 Jun 2025",
  },
  {
    bgColor: "#d5f0e3",
    title: "Nuevas baterías de larga duración llegan al mercado",
    excerpt:
      "La última generación de baterías de almacenamiento promete hasta 20 años de vida útil...",
    date: "10 Jun 2025",
  },
  {
    bgColor: "#f5e6d5",
    title: "Honduras avanza en energías renovables",
    excerpt:
      "El gobierno anunció nuevos incentivos fiscales para la instalación de paneles solares...",
    date: "5 Jun 2025",
  },
];

export type ProductCategory =
  | "Paneles Solares"
  | "Inversores"
  | "Baterías"
  | "Electrodomésticos"
  | "Conexión y Protección"
  | "Conectores y Cableado";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  ref: string;
  category: ProductCategory;
  image: string;
  spec1: string;
  spec2: string;
  description: string;
  features: string[];
  specs: ProductSpec[];
  applications: string;
  benefits: string;
}

const IMG = "/images/products/catalog";

export const products: Product[] = [
  {
    id: 1,
    slug: "panel-solar-580w-bifacial",
    name: "Panel Solar 580W Bifacial",
    ref: "TTN-001",
    category: "Paneles Solares",
    image: `${IMG}/panel-solar-580w-bifacial.jpg`,
    spec1: "Bifacial · ≈ 22,5% eficiencia",
    spec2: "Monocristalino Tipo N",
    description:
      "Módulo fotovoltaico bifacial de 580 W fabricado con celdas monocristalinas tipo N, pensado para instalaciones residenciales, comerciales e industriales que buscan maximizar la generación de energía por metro cuadrado. Su tecnología bifacial le permite captar luz solar reflejada por su cara posterior, incrementando la producción total de energía respecto a un panel convencional.",
    features: [
      "Tecnología bifacial: genera energía por ambas caras del módulo",
      "Celdas monocristalinas tipo N, de alta eficiencia y baja degradación",
      "Doble vidrio (glass-glass) que aumenta la durabilidad y resistencia mecánica",
      "Bajo coeficiente de temperatura para un mejor rendimiento en climas cálidos",
      "Marco de aluminio anodizado resistente a la corrosión",
    ],
    specs: [
      { label: "Potencia nominal", value: "580 W" },
      { label: "Eficiencia del módulo", value: "≈ 22,5 %" },
      { label: "Tipo de célula", value: "Monocristalina Tipo N, Half-Cut" },
      { label: "Bifacialidad", value: "≈ 80 %" },
      { label: "Coeficiente de temperatura (Pmax)", value: "-0,30 %/°C" },
      { label: "Conectores", value: "MC4, certificación IP68" },
      { label: "Garantía de producto / potencia", value: "12 años / 30 años lineal*" },
    ],
    applications:
      "Sistemas de autoconsumo residencial, proyectos comerciales sobre techo y plantas solares de mediana escala donde se requiere alta densidad de potencia.",
    benefits:
      "Frente a un panel monofacial convencional, ofrece una mayor generación de energía en la misma área de techo, lo que se traduce en un menor costo nivelado de la energía (LCOE) y un retorno de inversión más rápido.",
  },
  {
    id: 2,
    slug: "panel-solar-620w-bifacial",
    name: "Panel Solar 620W Bifacial",
    ref: "TTN-002",
    category: "Paneles Solares",
    image: `${IMG}/panel-solar-620w-bifacial.jpg`,
    spec1: "Bifacial · ≈ 22,6% eficiencia",
    spec2: "Gran formato Tipo N",
    description:
      "Versión de mayor potencia de la línea bifacial, el panel de 620 W está orientado a proyectos que buscan reducir el número de módulos instalados sin sacrificar rendimiento, ideal para techos con espacio limitado o plantas de gran escala que requieren maximizar la potencia por posición de montaje.",
    features: [
      "Tecnología bifacial de alto rendimiento",
      "Celdas monocristalinas tipo N de gran formato",
      "Estructura de doble vidrio templado para mayor vida útil",
      "Compatible con estructuras de montaje estándar para grandes formatos",
      "Resistente a cargas de viento y nieve según normativa internacional",
    ],
    specs: [
      { label: "Potencia nominal", value: "620 W" },
      { label: "Eficiencia del módulo", value: "≈ 22,5 % - 22,6 %" },
      { label: "Tipo de célula", value: "Monocristalina Tipo N, Half-Cut" },
      { label: "Bifacialidad", value: "≈ 80 %" },
      { label: "Coeficiente de temperatura (Pmax)", value: "-0,30 %/°C" },
      { label: "Conectores", value: "MC4, certificación IP68" },
      { label: "Garantía de producto / potencia", value: "12 años / 30 años lineal*" },
    ],
    applications:
      "Plantas solares comerciales e industriales, granjas solares y proyectos de gran escala que buscan optimizar el espacio disponible.",
    benefits:
      "Mayor potencia por módulo reduce la cantidad de paneles, estructura y cableado necesarios, disminuyendo costos de instalación y mano de obra por kW instalado.",
  },
  {
    id: 3,
    slug: "panel-solar-630w-bifacial",
    name: "Panel Solar 630W Bifacial",
    ref: "TTN-003",
    category: "Paneles Solares",
    image: `${IMG}/panel-solar-630w-bifacial.jpg`,
    spec1: "Máxima potencia · ≈ 22,6%",
    spec2: "Apto hasta 1500 V DC",
    description:
      "El modelo de mayor potencia de la gama, pensado para proyectos a gran escala donde cada watt cuenta. Su diseño bifacial de alto desempeño está optimizado para condiciones de alta irradiancia, ofreciendo una excelente relación potencia/superficie.",
    features: [
      "Máxima potencia de la línea bifacial TTN Centro",
      "Celdas monocristalinas tipo N de última generación",
      "Doble vidrio con tratamiento antirreflectante",
      "Baja tasa de degradación anual (LID/LETID reducidos)",
      "Apto para sistemas de hasta 1500 V DC",
    ],
    specs: [
      { label: "Potencia nominal", value: "630 W" },
      { label: "Eficiencia del módulo", value: "≈ 22,6 %" },
      { label: "Tipo de célula", value: "Monocristalina Tipo N, Half-Cut" },
      { label: "Bifacialidad", value: "≈ 80 %" },
      { label: "Coeficiente de temperatura (Pmax)", value: "-0,30 %/°C" },
      { label: "Conectores", value: "MC4, certificación IP68" },
      { label: "Garantía de producto / potencia", value: "12 años / 30 años lineal*" },
    ],
    applications:
      "Plantas fotovoltaicas de gran escala, proyectos utility-scale y techos industriales con amplia disponibilidad de área.",
    benefits:
      "La mayor potencia unitaria del catálogo permite reducir significativamente la cantidad de estructuras, conexiones y horas de instalación por cada MW desarrollado.",
  },
  {
    id: 4,
    slug: "caja-combinadora-2e-1s",
    name: "Caja Combinadora Fotovoltaica 2 Entradas / 1 Salida",
    ref: "TTN-004",
    category: "Conexión y Protección",
    image: `${IMG}/caja-combinadora-2e-1s.png`,
    spec1: "2 entradas / 1 salida",
    spec2: "IP65 / IP66 · SPD Tipo II",
    description:
      "Caja combinadora fotovoltaica diseñada para centralizar dos cadenas (strings) de paneles solares en una sola línea de salida hacia el inversor, simplificando el cableado e incorporando protecciones eléctricas esenciales para la seguridad del sistema.",
    features: [
      "Configuración de 2 entradas y 1 salida, ideal para sistemas residenciales y pequeños comerciales",
      "Incluye protección contra sobrecorriente (fusibles o disyuntor de CC)",
      "Dispositivo de protección contra sobretensiones (SPD) Tipo II",
      "Gabinete con grado de protección IP65/IP66 para instalación en exteriores",
      "Bornes y prensaestopas para una conexión de cableado segura y ordenada",
    ],
    specs: [
      { label: "Configuración", value: "2 entradas / 1 salida" },
      { label: "Tensión nominal de trabajo", value: "600 V / 1000 V DC*" },
      { label: "Grado de protección", value: "IP65 / IP66" },
      { label: "Material del gabinete", value: "Policarbonato o metal resistente a la corrosión" },
      { label: "Protecciones incluidas", value: "Fusibles DC, SPD Tipo II" },
      { label: "Conexión", value: "Terminales compatibles con cable fotovoltaico y conectores MC4" },
    ],
    applications:
      "Sistemas fotovoltaicos residenciales y comerciales pequeños con dos cadenas de paneles solares que requieren centralizarse antes del inversor.",
    benefits:
      "Simplifica el cableado del sistema, reduce el riesgo de fallas por sobrecorriente o sobretensión y facilita las labores de mantenimiento al concentrar las protecciones en un único punto accesible.",
  },
  {
    id: 5,
    slug: "inversor-growatt-min-10000tl-x",
    name: "Inversor Growatt MIN 10000TL-X(E)-2P-US",
    ref: "TTN-005",
    category: "Inversores",
    image: `${IMG}/inversor-growatt-min-10000tl-x.jpg`,
    spec1: "On-Grid · 10 kW",
    spec2: "3 MPPT · 98,1% eficiencia",
    description:
      "Inversor de conexión a red (on-grid) de la reconocida marca Growatt, diseñado para sistemas residenciales y comerciales de pequeña escala. Su diseño compacto, alta eficiencia y triple seguidor MPPT lo convierten en una de las soluciones más confiables del mercado.",
    features: [
      "Tres seguidores MPPT independientes para optimizar la producción en techos con distintas orientaciones",
      "Pantalla OLED y tecla táctil para una operación sencilla",
      "Monitoreo remoto vía WiFi/App ShinePhone y plataforma ShineServer",
      "Protección contra sobretensión Tipo II en el lado de CC",
      "Topología sin transformador (alta eficiencia)",
    ],
    specs: [
      { label: "Potencia nominal de salida CA", value: "10 000 W" },
      { label: "Eficiencia máxima", value: "98,1 %" },
      { label: "Número de MPPT", value: "3" },
      { label: "Rango de tensión MPPT", value: "60 V – 550 V" },
      { label: "Tensión máxima de entrada CC", value: "600 V" },
      { label: "Conexión", value: "Bifásico / Monofásico 220 V CA" },
      { label: "Grado de protección", value: "IP65" },
      { label: "Certificaciones", value: "CE, IEC62109, UL1741, IEEE1547" },
      { label: "Garantía de fábrica", value: "5 años (ampliable)" },
    ],
    applications:
      "Sistemas de interconexión a la red eléctrica para viviendas, pequeños comercios y PYMES que buscan reducir su factura de electricidad.",
    benefits:
      "Su eficiencia de hasta 98,1% y sus tres MPPT independientes permiten un mejor aprovechamiento de la energía solar incluso en techos con sombras parciales o múltiples orientaciones.",
  },
  {
    id: 6,
    slug: "inversor-loft-2kva",
    name: "Inversor Solar LOFT 2.0KVA/1.6KW",
    ref: "TTN-006",
    category: "Inversores",
    image: `${IMG}/inversor-loft-2kva.jpg`,
    spec1: "Híbrido · 2.0 KVA / 1.6 kW",
    spec2: "MPPT · Onda senoidal pura",
    description:
      "Inversor híbrido compacto de 2.0 KVA, compatible con sistemas de 24V y 48V, equipado con controlador de carga MPPT integrado. Pensado para instalaciones residenciales pequeñas, cabañas o como respaldo de energía ante cortes del suministro eléctrico.",
    features: [
      "Controlador de carga solar MPPT incorporado",
      "Compatible con baterías de plomo-ácido y de litio (LiFePO4)",
      "Salida de onda senoidal pura para proteger equipos sensibles",
      "Operación en modo red (on-grid), aislado (off-grid) o como UPS",
      "Pantalla LCD con configuración de parámetros de carga",
    ],
    specs: [
      { label: "Potencia nominal", value: "2.0 KVA / 1.6 kW" },
      { label: "Tensión de batería", value: "24 V / 48 V" },
      { label: "Tensión de salida CA", value: "120 V, 50/60 Hz" },
      { label: "Tipo de controlador", value: "MPPT" },
      { label: "Forma de onda", value: "Senoidal pura" },
      { label: "Frecuencia", value: "50 – 60 Hz (autodetectable)" },
    ],
    applications:
      "Pequeños sistemas de respaldo, cabañas, vivienda rural sin acceso a red y soluciones de autoconsumo de baja potencia.",
    benefits:
      "Su tamaño compacto y su capacidad multifunción (red, batería y solar) lo hacen ideal para usuarios que inician su transición a energía solar con un presupuesto moderado.",
  },
  {
    id: 7,
    slug: "inversor-loft-3-8kva",
    name: "Inversor Solar LOFT 3.8KVA/3KW",
    ref: "TTN-007",
    category: "Inversores",
    image: `${IMG}/inversor-loft-3-8kva.jpg`,
    spec1: "Híbrido · 3.8 KVA / 3 kW",
    spec2: "Salida dual 120V/240V",
    description:
      "Inversor híbrido de gama media que combina cargador solar MPPT, inversor de onda pura y cargador de baterías en un solo equipo. Su rango de tensión 24V/48V y salida dual 120V/240V lo hace versátil para distintos tipos de carga residencial.",
    features: [
      "Salida dual de 120V/240V para mayor compatibilidad con electrodomésticos",
      "Controlador MPPT de amplio rango de voltaje",
      "Compatible con bancos de baterías de litio y plomo-ácido",
      "Protección contra sobrecarga, cortocircuito y descarga profunda",
      "Posibilidad de operación en paralelo con unidades adicionales",
    ],
    specs: [
      { label: "Potencia nominal", value: "3.8 KVA / 3 kW" },
      { label: "Tensión de batería", value: "24 V / 48 V" },
      { label: "Tensión de salida CA", value: "120 V / 240 V" },
      { label: "Tipo de controlador", value: "MPPT" },
      { label: "Forma de onda", value: "Senoidal pura" },
      { label: "Frecuencia", value: "50 – 60 Hz" },
    ],
    applications:
      "Viviendas medianas, pequeños comercios y sistemas híbridos que requieren respaldo de energía con cargas de 120V y 240V.",
    benefits:
      "Su salida dual de voltaje amplía la compatibilidad con electrodomésticos de mayor consumo, evitando la necesidad de transformadores adicionales.",
  },
  {
    id: 8,
    slug: "inversor-loft-6-3kva",
    name: "Inversor Solar LOFT 6.3KVA/5KW",
    ref: "TTN-08a",
    category: "Inversores",
    image: `${IMG}/inversor-loft-6-3kva.jpg`,
    spec1: "Híbrido · 6.3 KVA / 5 kW",
    spec2: "Gestión inteligente de energía",
    description:
      "Inversor híbrido de potencia media-alta, diseñado para hogares y pequeños negocios con un consumo energético considerable. Integra cargador solar MPPT de alto rendimiento y permite la gestión inteligente entre red, batería y paneles solares.",
    features: [
      "Mayor capacidad de carga MPPT para arreglos solares más grandes",
      "Gestión inteligente de prioridad de fuente de energía (solar/batería/red)",
      "Compatible con bancos de baterías de litio de alta capacidad",
      "Salida dual 120V/240V, onda senoidal pura",
      "Display LCD con parámetros de monitoreo en tiempo real",
    ],
    specs: [
      { label: "Potencia nominal", value: "6.3 KVA / 5 kW" },
      { label: "Tensión de batería", value: "24 V / 48 V" },
      { label: "Tensión de salida CA", value: "120 V / 240 V" },
      { label: "Tipo de controlador", value: "MPPT" },
      { label: "Forma de onda", value: "Senoidal pura" },
      { label: "Frecuencia", value: "50 – 60 Hz" },
    ],
    applications:
      "Viviendas con mayor consumo energético, pequeños comercios y sistemas de respaldo crítico.",
    benefits:
      "Permite alimentar simultáneamente más equipos del hogar o negocio, manteniendo la estabilidad de la red eléctrica interna incluso ante variaciones de carga.",
  },
  {
    id: 9,
    slug: "inversor-loft-8kva",
    name: "Inversor Solar LOFT 8.0KVA/6.4KW",
    ref: "TTN-08b",
    category: "Inversores",
    image: `${IMG}/inversor-loft-8kva.jpg`,
    spec1: "Híbrido · 8.0 KVA / 6.4 kW",
    spec2: "Soporta cargas inductivas",
    description:
      "Inversor híbrido de alta capacidad orientado a viviendas grandes o pequeños comercios con consumo energético elevado, capaz de soportar arranques de motores y cargas inductivas exigentes manteniendo una salida estable.",
    features: [
      "Alta capacidad de potencia continua y pico",
      "Controlador MPPT de amplio rango para grandes arreglos fotovoltaicos",
      "Compatible con bancos de baterías de litio LiFePO4",
      "Salida dual 120V/240V, onda senoidal pura",
      "Posibilidad de trabajo en paralelo para mayor potencia",
    ],
    specs: [
      { label: "Potencia nominal", value: "8.0 KVA / 6.4 kW" },
      { label: "Tensión de batería", value: "48 V" },
      { label: "Tensión de salida CA", value: "120 V / 240 V" },
      { label: "Tipo de controlador", value: "MPPT" },
      { label: "Forma de onda", value: "Senoidal pura" },
      { label: "Frecuencia", value: "50 – 60 Hz" },
    ],
    applications:
      "Viviendas grandes, pequeños comercios, talleres y sistemas de respaldo de energía para cargas exigentes.",
    benefits:
      "Su mayor capacidad de potencia pico permite el arranque seguro de equipos con motor (bombas, refrigeración, herramientas eléctricas) sin afectar la estabilidad del sistema.",
  },
  {
    id: 10,
    slug: "inversor-loft-12kva",
    name: "Inversor Solar LOFT 12.24KVA/10KW",
    ref: "TTN-009",
    category: "Inversores",
    image: `${IMG}/inversor-loft-12kva.jpg`,
    spec1: "Híbrido · 12.24 KVA / 10 kW",
    spec2: "Conexión en paralelo",
    description:
      "El inversor híbrido de mayor capacidad de la línea LOFT, diseñado para proyectos residenciales de alto consumo y pequeños comercios que requieren una solución robusta de autoconsumo con respaldo de baterías.",
    features: [
      "Máxima potencia de la serie LOFT (10 kW continuos)",
      "Controlador MPPT de alto rendimiento para grandes arreglos solares",
      "Compatible con bancos de baterías de litio de gran capacidad",
      "Salida dual 120V/240V, onda senoidal pura",
      "Posibilidad de conexión en paralelo para escalar la potencia del sistema",
    ],
    specs: [
      { label: "Potencia nominal", value: "12.24 KVA / 10 kW" },
      { label: "Tensión de batería", value: "48 V" },
      { label: "Tensión de salida CA", value: "120 V / 240 V" },
      { label: "Tipo de controlador", value: "MPPT" },
      { label: "Forma de onda", value: "Senoidal pura" },
      { label: "Frecuencia", value: "50 – 60 Hz" },
    ],
    applications:
      "Viviendas de alto consumo, pequeños comercios, oficinas y sistemas de respaldo de energía crítica.",
    benefits:
      "Su capacidad de 10 kW permite cubrir prácticamente la totalidad de la demanda de una vivienda grande, reduciendo de forma significativa la dependencia de la red eléctrica.",
  },
  {
    id: 11,
    slug: "inversor-growatt-125kw",
    name: "Inversor Growatt 125 kW 480V On-Grid Trifásico",
    ref: "TTN-010",
    category: "Inversores",
    image: `${IMG}/inversor-growatt-125kw.png`,
    spec1: "On-Grid Trifásico · 125 kW",
    spec2: "10 MPPT · ≈ 99,0% eficiencia",
    description:
      "Inversor de conexión a red de gran formato, diseñado para plantas solares comerciales e industriales de alta exigencia. Cuenta con múltiples MPPT independientes que permiten un diseño de instalación flexible y un rendimiento energético superior.",
    features: [
      "10 seguidores MPPT independientes para máxima flexibilidad de diseño",
      "Eficiencia máxima de hasta 99,0 %",
      "Grado de protección IP66 para instalación en exteriores",
      "Refrigeración inteligente por aire forzado",
      "Monitoreo remoto vía WiFi/LAN/RS485",
    ],
    specs: [
      { label: "Potencia nominal de salida", value: "125 kW" },
      { label: "Tensión de salida", value: "480 V / 277 V trifásico" },
      { label: "Número de MPPT", value: "10" },
      { label: "Eficiencia máxima", value: "≈ 99,0 %" },
      { label: "Frecuencia", value: "50 / 60 Hz" },
      { label: "Grado de protección", value: "IP66" },
      { label: "Certificaciones", value: "CE, IEC62116, UL1741, IEEE1547" },
      { label: "Garantía de fábrica", value: "5 años (ampliable)" },
    ],
    applications:
      "Plantas solares industriales, grandes techos comerciales y proyectos utility-scale conectados a la red eléctrica.",
    benefits:
      "Su diseño modular de 10 MPPT permite adaptar el sistema a techos complejos o terrenos irregulares sin perder rendimiento, maximizando el retorno de la inversión en grandes proyectos.",
  },
  {
    id: 12,
    slug: "inversor-growatt-75kw",
    name: "Inversor Growatt 75 kW 220V On-Grid Trifásico",
    ref: "TTN-011",
    category: "Inversores",
    image: `${IMG}/inversor-growatt-75kw.png`,
    spec1: "On-Grid Trifásico · 75 kW",
    spec2: "IP66 · Protección AFCI",
    description:
      "Inversor trifásico de conexión a red orientado a instalaciones comerciales e industriales de mediana-alta escala, que combina alta eficiencia de conversión con un diseño robusto pensado para operación continua.",
    features: [
      "Múltiples seguidores MPPT para optimizar distintas orientaciones de paneles",
      "Alta eficiencia de conversión de energía",
      "Protección AFCI contra fallos de arco eléctrico",
      "Diseño robusto apto para instalación en azoteas comerciales o sobre terreno",
      "Monitoreo remoto en tiempo real",
    ],
    specs: [
      { label: "Potencia nominal de salida", value: "75 kW" },
      { label: "Tensión de salida", value: "220 V trifásico" },
      { label: "Frecuencia", value: "50 / 60 Hz" },
      { label: "Grado de protección", value: "IP66" },
      { label: "Refrigeración", value: "Forzada por aire" },
      { label: "Certificaciones", value: "CE, IEC62116, UL1741" },
      { label: "Garantía de fábrica", value: "5 años (ampliable)" },
    ],
    applications:
      "Centros comerciales, naves industriales y proyectos solares de autoconsumo a gran escala.",
    benefits:
      "Su robustez y alta eficiencia lo convierten en una solución rentable para reducir significativamente los costos energéticos de operaciones comerciales e industriales de gran consumo.",
  },
  {
    id: 13,
    slug: "inversor-growatt-36kw",
    name: "Inversor Growatt 36 kW 220V On-Grid Trifásico",
    ref: "TTN-012",
    category: "Inversores",
    image: `${IMG}/inversor-growatt-36kw.png`,
    spec1: "On-Grid Trifásico · 36 kW",
    spec2: "Diseño compacto · IP66",
    description:
      "Inversor trifásico de potencia media-alta, pensado para instalaciones comerciales que buscan un equilibrio entre capacidad de generación, costo de inversión y facilidad de instalación.",
    features: [
      "Diseño compacto para instalaciones comerciales de mediana escala",
      "Múltiples MPPT para optimizar el rendimiento del arreglo solar",
      "Alta eficiencia de conversión",
      "Protecciones eléctricas integradas (sobretensión, cortocircuito, anti-isla)",
      "Comunicación remota vía WiFi/LAN",
    ],
    specs: [
      { label: "Potencia nominal de salida", value: "36 kW" },
      { label: "Tensión de salida", value: "220 V trifásico" },
      { label: "Frecuencia", value: "50 / 60 Hz" },
      { label: "Grado de protección", value: "IP66" },
      { label: "Certificaciones", value: "CE, IEC62116, UL1741" },
      { label: "Garantía de fábrica", value: "5 años (ampliable)" },
    ],
    applications:
      "Comercios medianos, edificios de oficinas y pequeñas plantas industriales.",
    benefits:
      "Ofrece una excelente relación costo-beneficio para proyectos comerciales medianos que buscan iniciar su transición energética sin sobredimensionar la inversión inicial.",
  },
  {
    id: 14,
    slug: "micro-inversor-ttn-1200w",
    name: "Micro Inversor TTN 1200W",
    ref: "TTN-014",
    category: "Inversores",
    image: `${IMG}/micro-inversor-ttn-1200w.png`,
    spec1: "Micro on-grid · 1200 W",
    spec2: "1-2 paneles por unidad",
    description:
      "Micro inversor de 1200 W de la marca TTN, diseñado para conectarse directamente a uno o dos paneles solares de forma independiente, optimizando la generación de energía panel por panel y simplificando el diseño de sistemas pequeños.",
    features: [
      "Optimización de potencia a nivel de panel individual",
      "Instalación simplificada, sin necesidad de inversor central",
      "Mayor seguridad al trabajar con bajas tensiones de CC",
      "Monitoreo de producción por panel a través de app móvil*",
      "Diseño compacto resistente a la intemperie",
    ],
    specs: [
      { label: "Potencia nominal de salida", value: "1200 W" },
      { label: "Tipo", value: "Micro inversor on-grid" },
      { label: "Conexión recomendada", value: "1 - 2 paneles solares por unidad" },
      { label: "Grado de protección", value: "IP65*" },
      { label: "Forma de onda", value: "Senoidal pura" },
    ],
    applications:
      "Sistemas de autoconsumo residencial de pequeña escala, balcones solares y proyectos donde se busca maximizar la generación ante sombras parciales.",
    benefits:
      "Al optimizar la energía panel por panel, minimiza las pérdidas por sombreado parcial o suciedad localizada, algo que un inversor central no puede corregir de forma individual.",
  },
  {
    id: 15,
    slug: "inversor-spike-ttn-12kw",
    name: "Inversor SPIKE TTN 12kW Híbrido Paralelo Split-Phase",
    ref: "TTN-015",
    category: "Inversores",
    image: `${IMG}/inversor-spike-ttn-12kw.png`,
    spec1: "Híbrido Split-Phase · 12 kW",
    spec2: "Operación en paralelo",
    description:
      "Inversor híbrido de 12 kW de la marca TTN, con capacidad de operación en paralelo y configuración split-phase (fase dividida), pensado para proyectos residenciales y comerciales de alta demanda que requieren máxima flexibilidad y respaldo de energía.",
    features: [
      "Configuración split-phase para alimentar cargas de 120V y 240V simultáneamente",
      "Capacidad de operación en paralelo con unidades adicionales para escalar potencia",
      "Controlador de carga solar MPPT de alto rendimiento",
      "Compatible con bancos de baterías de litio LiFePO4",
      "Gestión inteligente entre red eléctrica, batería y generación solar",
    ],
    specs: [
      { label: "Potencia nominal", value: "12 kW" },
      { label: "Configuración", value: "Híbrido, Split-Phase, operación en paralelo" },
      { label: "Tensión de batería", value: "48 V" },
      { label: "Tensión de salida CA", value: "120 V / 240 V" },
      { label: "Forma de onda", value: "Senoidal pura" },
      { label: "Frecuencia", value: "50 / 60 Hz" },
    ],
    applications:
      "Viviendas de alta demanda, pequeños comercios y proyectos que requieren ampliar su capacidad de potencia mediante la conexión de múltiples unidades en paralelo.",
    benefits:
      "Su capacidad de operar en paralelo permite escalar la potencia del sistema de forma modular a medida que crecen las necesidades energéticas del cliente, sin reemplazar el equipo original.",
  },
  {
    id: 16,
    slug: "bateria-litio-5-12kwh",
    name: "Batería Litio LiFePO4 5.12kW 51.2V 100AH",
    ref: "TTN-016",
    category: "Baterías",
    image: `${IMG}/bateria-litio-5-12kwh.jpg`,
    spec1: "LiFePO4 · 5.12 kWh",
    spec2: "51,2 V · ≈ 6 000 ciclos",
    description:
      "Batería de litio ferrofosfato (LiFePO4) de 51.2V y 100Ah, equivalente a 5.12 kWh de capacidad, diseñada para sistemas de almacenamiento solar residencial. Su química LiFePO4 ofrece una de las opciones más seguras y duraderas del mercado.",
    features: [
      "Sistema de gestión de batería (BMS) integrado con múltiples protecciones",
      "Hasta 6 000 ciclos de carga/descarga al 80% de profundidad de descarga (DOD)*",
      "Conexión en paralelo con múltiples unidades para ampliar capacidad",
      "Comunicación RS485/CAN compatible con la mayoría de inversores del mercado",
      "Sin riesgo de fuga de electrolito ni mantenimiento periódico",
    ],
    specs: [
      { label: "Capacidad de energía", value: "5.12 kWh" },
      { label: "Voltaje nominal", value: "51,2 V" },
      { label: "Capacidad nominal", value: "100 Ah" },
      { label: "Química", value: "LiFePO4 (litio ferrofosfato)" },
      { label: "Ciclo de vida", value: "≈ 6 000 ciclos @ 80% DOD*" },
      { label: "Comunicación BMS", value: "RS485 / CAN" },
      { label: "Garantía de fábrica", value: "10 años*" },
    ],
    applications:
      "Sistemas de almacenamiento solar residencial, respaldo de energía y autoconsumo con baterías.",
    benefits:
      "Frente a una batería de plomo-ácido o GEL, ofrece más del doble de ciclos de vida útil, mayor profundidad de descarga aprovechable y un peso considerablemente menor para la misma capacidad de energía.",
  },
  {
    id: 17,
    slug: "bateria-litio-10-24kwh",
    name: "Batería Litio LiFePO4 10.24kW 51.2V 200AH",
    ref: "TTN-017",
    category: "Baterías",
    image: `${IMG}/bateria-litio-10-24kwh.png`,
    spec1: "LiFePO4 · 10.24 kWh",
    spec2: "51,2 V · Monitoreo Bluetooth",
    description:
      "Batería de litio LiFePO4 de mayor capacidad, con 10.24 kWh de energía almacenable, ideal para hogares o pequeños comercios que buscan una autonomía energética prolongada o mayor respaldo ante cortes de suministro.",
    features: [
      "BMS integrado con protección contra sobrecarga, sobredescarga y cortocircuito",
      "Alta capacidad de corriente de carga y descarga continua",
      "Posibilidad de conexión en paralelo para sistemas de mayor escala",
      "Diseño compacto para instalación en pared o rack",
      "Monitoreo de estado de carga mediante Bluetooth/App*",
    ],
    specs: [
      { label: "Capacidad de energía", value: "10.24 kWh" },
      { label: "Voltaje nominal", value: "51,2 V" },
      { label: "Capacidad nominal", value: "200 Ah" },
      { label: "Química", value: "LiFePO4 (litio ferrofosfato)" },
      { label: "Ciclo de vida", value: "≈ 6 000 ciclos @ 80% DOD*" },
      { label: "Comunicación BMS", value: "RS485 / CAN" },
      { label: "Garantía de fábrica", value: "10 años*" },
    ],
    applications:
      "Sistemas de respaldo de energía para vivienda, pequeños comercios y proyectos de autoconsumo con almacenamiento ampliado.",
    benefits:
      "Su mayor capacidad permite cubrir picos de consumo elevados o periodos más largos sin sol, siendo una solución intermedia entre instalaciones residenciales pequeñas y proyectos comerciales.",
  },
  {
    id: 18,
    slug: "bateria-litio-16-07kwh",
    name: "Batería Litio LiFePO4 16.07kW 51.2V 314AH",
    ref: "TTN-018",
    category: "Baterías",
    image: `${IMG}/bateria-litio-16-07kwh.png`,
    spec1: "LiFePO4 · 16.07 kWh",
    spec2: "51,2 V · Balanceo activo",
    description:
      "La batería de mayor capacidad de la línea de litio, con 16.07 kWh de almacenamiento, diseñada para proyectos residenciales de alto consumo o pequeños sistemas comerciales que requieren una solución de almacenamiento robusta en una sola unidad.",
    features: [
      "Máxima capacidad de almacenamiento de la línea LiFePO4 del catálogo",
      "BMS de alto desempeño con balanceo activo de celdas",
      "Alta corriente de descarga continua para cargas exigentes",
      "Construcción robusta apta para uso residencial y comercial ligero",
      "Compatible con la mayoría de inversores híbridos del mercado",
    ],
    specs: [
      { label: "Capacidad de energía", value: "16.07 kWh" },
      { label: "Voltaje nominal", value: "51,2 V" },
      { label: "Capacidad nominal", value: "314 Ah" },
      { label: "Química", value: "LiFePO4 (litio ferrofosfato)" },
      { label: "Ciclo de vida", value: "≈ 6 000 ciclos @ 80% DOD*" },
      { label: "Comunicación BMS", value: "RS485 / CAN" },
      { label: "Garantía de fábrica", value: "10 años*" },
    ],
    applications:
      "Vivienda de alto consumo, pequeños comercios y sistemas de respaldo de energía crítica que requieren gran autonomía.",
    benefits:
      "Permite construir sistemas de almacenamiento de gran capacidad utilizando menos unidades, simplificando el cableado, el espacio requerido y la gestión del banco de baterías.",
  },
  {
    id: 19,
    slug: "bateria-gel-100ah",
    name: "Batería de GEL 12.8V 100Ah",
    ref: "TTN-019",
    category: "Baterías",
    image: `${IMG}/bateria-gel-100ah.png`,
    spec1: "VRLA-GEL · 12,8 V 100Ah",
    spec2: "Libre de mantenimiento",
    description:
      "Batería estacionaria de ciclo profundo con tecnología GEL, libre de mantenimiento, diseñada como una opción económica y confiable para sistemas solares de pequeña escala o como respaldo de energía.",
    features: [
      "Tecnología VRLA-GEL sellada, libre de mantenimiento",
      "Apta para instalación en cualquier posición sin riesgo de derrames",
      "Resistente a vibraciones y ciclos de descarga profundos",
      "No emite gases durante la operación normal",
      "Construcción robusta para uso en interiores con poca ventilación",
    ],
    specs: [
      { label: "Voltaje nominal", value: "12,8 V" },
      { label: "Capacidad nominal", value: "100 Ah" },
      { label: "Tecnología", value: "VRLA - GEL, ciclo profundo" },
      { label: "Vida útil estimada", value: "8 - 12 años*" },
      { label: "Autodescarga mensual", value: "< 3 % a 25 °C*" },
      { label: "Profundidad de descarga recomendada", value: "≤ 50 % para optimizar vida útil" },
    ],
    applications:
      "Sistemas solares off-grid pequeños, UPS, iluminación de respaldo y aplicaciones donde se requiere una batería libre de mantenimiento.",
    benefits:
      "En comparación con una batería de litio, representa una inversión inicial menor, siendo una alternativa adecuada para proyectos con presupuesto limitado o de baja exigencia de ciclos.",
  },
  {
    id: 20,
    slug: "bateria-gel-150ah",
    name: "Batería de GEL 12.8V 150Ah",
    ref: "TTN-020",
    category: "Baterías",
    image: `${IMG}/bateria-gel-150ah.png`,
    spec1: "VRLA-GEL · 12,8 V 150Ah",
    spec2: "Ciclo profundo",
    description:
      "Batería de GEL de ciclo profundo de capacidad intermedia, que ofrece un buen equilibrio entre autonomía energética y costo, adecuada para sistemas solares residenciales pequeños y medianos.",
    features: [
      "Tecnología VRLA-GEL sellada, libre de mantenimiento",
      "Mayor autonomía que el modelo de 100Ah para el mismo espacio de instalación",
      "Resistente a descargas profundas repetidas",
      "Sin riesgo de derrame de electrolito, instalable en cualquier posición",
      "Terminales robustos para conexiones de alta corriente",
    ],
    specs: [
      { label: "Voltaje nominal", value: "12,8 V" },
      { label: "Capacidad nominal", value: "150 Ah" },
      { label: "Tecnología", value: "VRLA - GEL, ciclo profundo" },
      { label: "Vida útil estimada", value: "8 - 12 años*" },
      { label: "Autodescarga mensual", value: "< 3 % a 25 °C*" },
      { label: "Profundidad de descarga recomendada", value: "≤ 50 % para optimizar vida útil" },
    ],
    applications:
      "Sistemas solares residenciales medianos, telecomunicaciones y respaldo de energía para cargas continuas moderadas.",
    benefits:
      "Su mayor capacidad permite extender la autonomía del sistema sin necesidad de agregar unidades adicionales, optimizando el espacio de instalación.",
  },
  {
    id: 21,
    slug: "bateria-gel-200ah",
    name: "Batería de GEL 12V 200Ah",
    ref: "TTN-021",
    category: "Baterías",
    image: `${IMG}/bateria-gel-200ah.png`,
    spec1: "VRLA-GEL · 12 V 200Ah",
    spec2: "Mayor capacidad de la línea",
    description:
      "Batería de GEL de ciclo profundo de mayor capacidad de la línea, ideal para sistemas solares exigentes, inversores de mayor potencia y aplicaciones industriales que requieren una fuente de respaldo robusta y de bajo mantenimiento.",
    features: [
      "Mayor capacidad de la línea GEL del catálogo",
      "Tecnología VRLA-GEL sellada, sin mantenimiento",
      "Alta resistencia a golpes, vibraciones y temperaturas extremas",
      "Apta para uso intensivo en sistemas solares, UPS e instalaciones industriales",
      "Terminales tipo M8 para conexiones seguras en bancos de baterías",
    ],
    specs: [
      { label: "Voltaje nominal", value: "12 V" },
      { label: "Capacidad nominal", value: "200 Ah" },
      { label: "Tecnología", value: "VRLA - GEL, ciclo profundo" },
      { label: "Vida útil estimada", value: "8 - 15 años*" },
      { label: "Autodescarga mensual", value: "< 3 % a 25 °C*" },
      { label: "Profundidad de descarga recomendada", value: "≤ 50 % para optimizar vida útil" },
    ],
    applications:
      "Sistemas solares exigentes, UPS industriales, telecomunicaciones e instalaciones que requieren una solución de almacenamiento robusta y de bajo mantenimiento.",
    benefits:
      "Su mayor capacidad la hace ideal para bancos de baterías de sistemas off-grid medianos, ofreciendo una opción de almacenamiento más económica que el litio para proyectos con espacio suficiente.",
  },
  {
    id: 22,
    slug: "cocina-induccion-2-quemadores",
    name: "Cocina de Inducción 2 Quemadores",
    ref: "TTN-022",
    category: "Electrodomésticos",
    image: `${IMG}/cocina-induccion-2-quemadores.png`,
    spec1: "2 zonas de cocción · 220 V",
    spec2: "Control táctil · ≈ 3500 W",
    description:
      "Cocina de inducción de dos zonas de cocción, con controles táctiles y múltiples niveles de potencia, diseñada para ofrecer una cocción rápida, eficiente y segura, ideal para complementar sistemas de energía solar residencial.",
    features: [
      "Dos zonas de cocción con control de potencia independiente",
      "Panel de control táctil con múltiples niveles de potencia",
      "Superficie de vidrio cerámico de fácil limpieza",
      "Función de bloqueo de seguridad para niños",
      "Apagado automático por seguridad y temporizador integrado",
    ],
    specs: [
      { label: "Potencia total", value: "≈ 3500 W (2 x 1500-2000 W)*" },
      { label: "Voltaje", value: "220 V" },
      { label: "Frecuencia", value: "50/60 Hz" },
      { label: "Tipo de superficie", value: "Vidrio cerámico" },
      { label: "Niveles de potencia", value: "9 niveles ajustables*" },
    ],
    applications:
      "Cocinas residenciales, especialmente en sistemas de autoconsumo solar donde se busca reemplazar el uso de gas o resistencias eléctricas tradicionales.",
    benefits:
      "La tecnología de inducción transfiere el calor directamente al recipiente con mínima pérdida de energía, logrando hasta un 90% de eficiencia energética frente al 40-55% de una cocina de gas convencional, lo que reduce el consumo del sistema solar.",
  },
  {
    id: 23,
    slug: "cocina-induccion-1-quemador",
    name: "Cocina de Inducción 1 Quemador",
    ref: "TTN-023",
    category: "Electrodomésticos",
    image: `${IMG}/cocina-induccion-1-quemador.png`,
    spec1: "Portátil · ≈ 1800-2000 W",
    spec2: "Control táctil",
    description:
      "Cocina de inducción de una sola zona de cocción, compacta y portátil, ideal para espacios reducidos, cocinas auxiliares o como complemento energéticamente eficiente en sistemas de autoconsumo solar.",
    features: [
      "Diseño compacto y portátil, fácil de transportar",
      "Control táctil con múltiples niveles de potencia",
      "Superficie de vidrio cerámico resistente a altas temperaturas",
      "Apagado automático y protección contra sobrecalentamiento",
      "Bajo consumo energético comparado con resistencias eléctricas",
    ],
    specs: [
      { label: "Potencia", value: "≈ 1800 - 2000 W*" },
      { label: "Voltaje", value: "120 V / 220 V*" },
      { label: "Frecuencia", value: "50/60 Hz" },
      { label: "Tipo de superficie", value: "Vidrio cerámico" },
      { label: "Niveles de potencia", value: "8 - 9 niveles ajustables*" },
    ],
    applications:
      "Espacios reducidos, cocinas auxiliares, viviendas pequeñas y sistemas de autoconsumo solar de baja potencia.",
    benefits:
      "Su bajo consumo y alta eficiencia la hacen ideal para sistemas solares de menor capacidad, permitiendo cocinar sin comprometer la energía disponible para otros equipos del hogar.",
  },
  {
    id: 24,
    slug: "conector-macho-mc4",
    name: "Conector Macho MC4",
    ref: "TTN-024",
    category: "Conectores y Cableado",
    image: `${IMG}/conector-macho-mc4.png`,
    spec1: "1000 V DC · 30 A",
    spec2: "IP67 · UL94-V0",
    description:
      "Conector solar tipo MC4 macho, el estándar de la industria fotovoltaica para realizar conexiones rápidas, seguras y herméticas entre paneles solares, cables y equipos del sistema.",
    features: [
      "Mecanismo de autobloqueo que evita desconexiones accidentales",
      "Grado de protección IP67 contra polvo y agua",
      "Material ignífugo UL94-V0 para mayor seguridad",
      "Contactos de cobre estañado de baja resistencia eléctrica",
      "Compatible con la mayoría de paneles e inversores del mercado",
    ],
    specs: [
      { label: "Tensión nominal", value: "1000 V DC" },
      { label: "Corriente nominal", value: "30 A" },
      { label: "Grado de protección", value: "IP67" },
      { label: "Rango de temperatura", value: "-40 °C a 85 °C" },
      { label: "Sección de cable compatible", value: "2,5 - 6,0 mm² (AWG 14-10)" },
    ],
    applications:
      "Conexión en serie y paralelo de paneles solares, así como conexión a cajas combinadoras e inversores.",
    benefits:
      "Su diseño estandarizado garantiza compatibilidad universal con equipos de distintas marcas, reduciendo el riesgo de fallas de conexión en el sistema.",
  },
  {
    id: 25,
    slug: "conector-hembra-mc4",
    name: "Conector Hembra MC4",
    ref: "TTN-025",
    category: "Conectores y Cableado",
    image: `${IMG}/conector-hembra-mc4.png`,
    spec1: "1000 V DC · 30 A",
    spec2: "IP67 · UL94-V0",
    description:
      "Conector solar tipo MC4 hembra, complemento del conector macho, diseñado para formar conexiones eléctricas estancas y seguras en instalaciones fotovoltaicas de cualquier escala.",
    features: [
      "Mecanismo de autobloqueo de alta resistencia mecánica",
      "Grado de protección IP67 contra polvo y agua",
      "Material ignífugo UL94-V0",
      "Contactos de cobre estañado de baja resistencia",
      "Fácil instalación con herramienta de crimpado estándar",
    ],
    specs: [
      { label: "Tensión nominal", value: "1000 V DC" },
      { label: "Corriente nominal", value: "30 A" },
      { label: "Grado de protección", value: "IP67" },
      { label: "Rango de temperatura", value: "-40 °C a 85 °C" },
      { label: "Sección de cable compatible", value: "2,5 - 6,0 mm² (AWG 14-10)" },
    ],
    applications:
      "Conexión en serie y paralelo de paneles solares, así como conexión a cajas combinadoras e inversores.",
    benefits:
      "Al combinarse con el conector macho MC4, forma una unión IP67 totalmente sellada que protege el sistema de humedad, polvo y desconexiones accidentales durante toda la vida útil del proyecto.",
  },
  {
    id: 26,
    slug: "cable-fotovoltaico-4mm",
    name: "Cable Fotovoltaico 4mm²",
    ref: "TTN-026",
    category: "Conectores y Cableado",
    image: `${IMG}/cable-fotovoltaico-4mm.png`,
    spec1: "4 mm² (12 AWG)",
    spec2: "Resistente a UV e intemperie",
    description:
      "Cable solar especializado de 4 mm² (12 AWG), diseñado específicamente para resistir las exigentes condiciones ambientales de las instalaciones fotovoltaicas a la intemperie, garantizando una conducción eléctrica segura durante décadas.",
    features: [
      "Conductor de cobre electrolítico estañado para óptima conductividad",
      "Doble aislamiento libre de halógenos, resistente al fuego",
      "Alta resistencia a la radiación UV y a la intemperie",
      "Flexible, de fácil manejo e instalación",
      "Compatible con conectores MC4 estándar",
    ],
    specs: [
      { label: "Sección", value: "4 mm² (12 AWG)" },
      { label: "Tensión nominal", value: "0,6/1 kV CA · 1,5(1,8) kV DC" },
      { label: "Rango de temperatura", value: "-40 °C a 120 °C / 125 °C" },
      { label: "Vida útil estimada", value: "25 - 30 años*" },
      { label: "Material aislante", value: "Goma reticulada libre de halógenos" },
    ],
    applications:
      "Conexión de paneles solares entre sí, hacia cajas combinadoras e inversores en instalaciones expuestas a la intemperie.",
    benefits:
      "Diseñado para soportar 25 a 30 años de exposición a rayos UV, calor y humedad sin deterioro del aislamiento, garantizando la seguridad eléctrica del sistema durante toda su vida útil.",
  },
  {
    id: 27,
    slug: "cable-ac-70mm",
    name: "Cable AC 70mm² (3+1) - XIANL-YJV-0.6/1kV",
    ref: "TTN-027",
    category: "Conectores y Cableado",
    image: `${IMG}/cable-ac-70mm.png`,
    spec1: "70 mm² · Configuración 3+1",
    spec2: "Aislamiento XLPE · 0,6/1 kV",
    description:
      "Cable de corriente alterna de 70 mm² con configuración 3+1 (tres fases más neutro/tierra), utilizado para la conexión de inversores de alta potencia a la red eléctrica o tablero de distribución en proyectos comerciales e industriales.",
    features: [
      "Configuración 3+1 para sistemas trifásicos",
      "Aislamiento XLPE (polietileno reticulado) de alta resistencia dieléctrica",
      "Apto para tensión de trabajo de 0,6/1 kV",
      "Resistente a la intemperie y a la abrasión",
      "Adecuado para instalaciones de alta exigencia de corriente",
    ],
    specs: [
      { label: "Sección", value: "70 mm² (conductores de fase)" },
      { label: "Configuración", value: "3+1 (3 fases + neutro/tierra de 35 mm²)" },
      { label: "Tensión nominal", value: "0,6/1 kV" },
      { label: "Aislamiento", value: "XLPE (YJV)" },
      { label: "Uso típico", value: "Conexión inversor – tablero / red eléctrica" },
    ],
    applications:
      "Conexión de salida CA de inversores de gran potencia (como los modelos de 75 kW y 125 kW) hacia el punto de interconexión o tablero de distribución.",
    benefits:
      "Su mayor sección permite transportar corrientes elevadas con mínima caída de tensión y pérdidas, esencial para mantener la eficiencia en sistemas fotovoltaicos de gran escala.",
  },
  {
    id: 28,
    slug: "cable-ac-50mm",
    name: "Cable AC 50mm² (3+1) - XIANL-YJV-0.6/1kV",
    ref: "TTN-028",
    category: "Conectores y Cableado",
    image: `${IMG}/cable-ac-50mm.png`,
    spec1: "50 mm² · Configuración 3+1",
    spec2: "Aislamiento XLPE · 0,6/1 kV",
    description:
      "Cable de corriente alterna de 50 mm² con configuración 3+1, utilizado en la conexión de inversores trifásicos de potencia media hacia el tablero de distribución eléctrica.",
    features: [
      "Configuración 3+1 para sistemas trifásicos",
      "Aislamiento XLPE de alta resistencia dieléctrica y térmica",
      "Apto para tensión de trabajo de 0,6/1 kV",
      "Buena resistencia mecánica y a la intemperie",
      "Adecuado para instalaciones comerciales de potencia media",
    ],
    specs: [
      { label: "Sección", value: "50 mm² (conductores de fase)" },
      { label: "Configuración", value: "3+1 (3 fases + neutro/tierra de 25 mm²)" },
      { label: "Tensión nominal", value: "0,6/1 kV" },
      { label: "Aislamiento", value: "XLPE (YJV)" },
      { label: "Uso típico", value: "Conexión inversor – tablero / red eléctrica" },
    ],
    applications:
      "Conexión de salida CA de inversores trifásicos de potencia media (como los modelos de 20 kW y 36 kW) hacia el tablero de distribución.",
    benefits:
      "Ofrece una sección adecuada para corrientes de media potencia, equilibrando el costo del cableado con la capacidad de transporte de corriente requerida por el sistema.",
  },
  {
    id: 29,
    slug: "cable-tierra-50mm",
    name: "Cable AC de Puesta a Tierra 50mm² - XIANL-BVR",
    ref: "TTN-029",
    category: "Conectores y Cableado",
    image: `${IMG}/cable-tierra-50mm.png`,
    spec1: "50 mm² · Cobre flexible",
    spec2: "Puesta a tierra · Aislamiento BVR",
    description:
      "Cable de cobre flexible de 50 mm², diseñado específicamente para sistemas de puesta a tierra, un componente esencial de seguridad en cualquier instalación fotovoltaica o eléctrica.",
    features: [
      "Conductor de cobre flexible de alta pureza",
      "Aislamiento BVR de alta resistencia dieléctrica",
      "Diseñado específicamente para sistemas de puesta a tierra",
      "Alta conductividad para una disipación eficaz de corrientes de falla",
      "Resistente a la corrosión y a la intemperie",
    ],
    specs: [
      { label: "Sección", value: "50 mm²" },
      { label: "Tipo", value: "Cable de puesta a tierra (grounding cable)" },
      { label: "Material", value: "Cobre flexible" },
      { label: "Aislamiento", value: "BVR" },
      { label: "Uso típico", value: "Conexión a sistema de puesta a tierra del proyecto" },
    ],
    applications:
      "Puesta a tierra de inversores, estructuras metálicas, cajas combinadoras y tableros eléctricos en instalaciones fotovoltaicas.",
    benefits:
      "Una puesta a tierra adecuada protege tanto a los equipos como a las personas frente a corrientes de falla y descargas atmosféricas, siendo un componente de seguridad indispensable en todo proyecto solar.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export const productCategories = [
  { icon: "apps", label: "Todos los productos" },
  { icon: "wb_sunny", label: "Paneles Solares" },
  { icon: "electrical_services", label: "Inversores" },
  { icon: "battery_charging_full", label: "Baterías" },
  { icon: "cooking", label: "Electrodomésticos" },
  { icon: "shield", label: "Conexión y Protección" },
  { icon: "cable", label: "Conectores y Cableado" },
];

export const trustBadges = [
  {
    icon: "local_shipping",
    title: "Envío gratis en pedidos +L.5,000",
    subtitle: "Enviamos a todo Honduras",
  },
  {
    icon: "verified_user",
    title: "Productos certificados",
    subtitle: "Garantía internacional",
  },
  {
    icon: "support_agent",
    title: "Soporte técnico",
    subtitle: "Lun-Vie 8am-5pm",
  },
  {
    icon: "autorenew",
    title: "Devoluciones",
    subtitle: "30 días sin preguntas",
  },
];

export const calcResults = [
  { icon: "payments", label: "Ahorro mensual estimado", value: "L. 2,850" },
  { icon: "calendar_month", label: "Tiempo de retorno", value: "4.1 años" },
  { icon: "trending_up", label: "Ahorro a 25 años", value: "L. 855,000" },
  { icon: "co2", label: "CO₂ evitado anual", value: "4.2 ton" },
];

export const calcProjection = [
  { icon: "bolt", label: "Energía producida", value: "7.5 kWh/día", unit: "al día" },
  { icon: "calendar_month", label: "Producción anual", value: "2,737 kWh", unit: "por año" },
  { icon: "savings", label: "Ahorro mensual", value: "L. 2,850", unit: "promedio" },
  { icon: "eco", label: "CO₂ evitado", value: "4.2 ton", unit: "al año" },
  { icon: "forest", label: "Árboles equivalentes", value: "191 árboles", unit: "plantados" },
];

export const footerNav = [
  "Inicio",
  "Sobre Nosotros",
  "Productos",
  "Proyectos",
  "Servicios",
  "Blog",
  "Contacto",
];

export const footerPlans = [
  "Plan Básico",
  "Plan Estándar",
  "Plan Avanzado",
  "Plan Industrial",
  "Personalizado",
];

export const footerServices = [
  { icon: "wb_sunny", label: "Instalación Solar" },
  { icon: "battery_charging_full", label: "Almacenamiento" },
  { icon: "electrical_services", label: "Mantenimiento" },
  { icon: "support_agent", label: "Asesoría Técnica" },
  { icon: "calculate", label: "Calculadora de Ahorro" },
];

export const footerInfo = [
  "Preguntas Frecuentes",
  "Política de Privacidad",
  "Términos y Condiciones",
  "Blog",
  "Noticias",
  "Certificaciones",
];

export const footerContact = [
  { icon: "call", text: "+504 0000 0000" },
  { icon: "mail", text: "info@ttnsolar.com" },
  { icon: "location_on", text: "San Pedro Sula, Honduras" },
  { icon: "schedule", text: "Lun-Vie 8am-5pm / Sáb 8am-12pm" },
];

export const footerBenefits = [
  { icon: "verified", title: "Instalación Profesional", subtitle: "Equipo certificado" },
  { icon: "support_agent", title: "Soporte 24/7", subtitle: "Siempre disponibles" },
  { icon: "workspace_premium", title: "Garantía Total", subtitle: "25 años en paneles" },
  { icon: "eco", title: "Energía Limpia", subtitle: "0 emisiones" },
];
