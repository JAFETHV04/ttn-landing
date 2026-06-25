// Static content for TTN Solar landing page

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

export const products = [
  {
    id: 1,
    name: "Panel Solar 400W",
    spec1: "Monocristalino · 21% eficiencia",
    spec2: "Garantía 25 años",
    price: "L. 8,500",
    icon: "wb_sunny",
    iconColor: "#f59e0b",
    bgColor: "#fffbeb",
  },
  {
    id: 2,
    name: "Panel Solar 550W",
    spec1: "Half-cell · 22% eficiencia",
    spec2: "Garantía 25 años",
    price: "L. 12,000",
    icon: "wb_sunny",
    iconColor: "#f59e0b",
    bgColor: "#fffbeb",
  },
  {
    id: 3,
    name: "Batería LiFePO4 100Ah",
    spec1: "Voltaje: 48V",
    spec2: "Ciclos: 6,000+",
    price: "L. 24,000",
    icon: "battery_charging_full",
    iconColor: "#3f63e0",
    bgColor: "#eef1fb",
  },
  {
    id: 4,
    name: "Batería AGM 200Ah",
    spec1: "Voltaje: 12V",
    spec2: "Deep cycle",
    price: "L. 8,900",
    icon: "battery_charging_full",
    iconColor: "#3f63e0",
    bgColor: "#eef1fb",
  },
  {
    id: 5,
    name: "Inversor Híbrido 3kW",
    spec1: "Trifásico · MPPT",
    spec2: "WiFi incluido",
    price: "L. 18,500",
    icon: "electrical_services",
    iconColor: "#8b5cf6",
    bgColor: "#f5f3ff",
  },
  {
    id: 6,
    name: "Inversor Off-Grid 5kW",
    spec1: "Monofásico",
    spec2: "Batería + Red",
    price: "L. 22,000",
    icon: "electrical_services",
    iconColor: "#8b5cf6",
    bgColor: "#f5f3ff",
  },
  {
    id: 7,
    name: "Generador 5kVA",
    spec1: "Silencioso · ATS",
    spec2: "Autonomía 8h",
    price: "L. 35,000",
    icon: "bolt",
    iconColor: "#e8542a",
    bgColor: "#fff3ef",
  },
  {
    id: 8,
    name: "Controlador MPPT 60A",
    spec1: "12/24/48V",
    spec2: "Pantalla LCD",
    price: "L. 4,200",
    icon: "solar_power",
    iconColor: "#10b981",
    bgColor: "#ecfdf5",
  },
];

export const productCategories = [
  { icon: "apps", label: "Todos los productos" },
  { icon: "wb_sunny", label: "Paneles Solares" },
  { icon: "battery_charging_full", label: "Baterías" },
  { icon: "electrical_services", label: "Inversores" },
  { icon: "bolt", label: "Generadores" },
  { icon: "home_storage", label: "Almacenamiento" },
  { icon: "cable", label: "Accesorios" },
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
