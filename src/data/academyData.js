export const academyData = {
  general: {
    name: "Academia KW – Killer Whale",
    shortName: "KW Killer Whale",
    tagline: "Academia de Natación",
    slogan: "Domina el agua, supera tus límites",
    location: "Loja, Ecuador",
    address: "Av. Salvador Bustamante Celi (Sector Jipiro), Loja, Ecuador",
    phone: "099 123 4567",
    phoneInternational: "+593 99 123 4567",
    phoneRaw: "593991234567",
    email: "info@kwacademia.com",
    whatsappUrl: "https://wa.me/593991234567?text=Hola%20Academia%20KW,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20inscripciones%20y%20horarios.",
    socials: [
      { name: "Facebook", url: "https://facebook.com", handle: "@kwacademia" },
      { name: "Instagram", url: "https://instagram.com", handle: "@kw_killerwhale" },
      { name: "TikTok", url: "https://tiktok.com", handle: "@kw.natacion" },
      { name: "YouTube", url: "https://youtube.com", handle: "Academia KW" },
    ]
  },

  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Programas", href: "#programas" },
    { label: "Horarios", href: "#horarios" },
    { label: "Inscripciones", href: "#inscripciones" },
    { label: "Contacto", href: "#contacto" },
  ],

  hero: {
    badge: "ACADEMIA KW – KILLER WHALE",
    titlePart1: "Domina el agua,",
    titlePart2: "supera tus límites",
    description: "Formamos nadadores con disciplina, técnica de élite y pasión en Loja, Ecuador. Desde tus primeras brazadas hasta el alto rendimiento competitivo.",
    primaryCta: {
      text: "Conoce más",
      href: "#nosotros"
    },
    secondaryCta: {
      text: "Inscríbete",
      href: "#inscripciones"
    },
    // High-impact butterfly swimmer image with dramatic water splashes and dark tones
    backgroundImage: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1920&q=85",
  },

  benefits: [
    {
      id: 1,
      title: "Entrenadores profesionales",
      description: "Instructores certificados con amplia trayectoria técnica y deportiva.",
      icon: "Award"
    },
    {
      id: 2,
      title: "Clases para todas las edades",
      description: "Metodología adaptada desde niños pequeños hasta adultos mayores.",
      icon: "Users"
    },
    {
      id: 3,
      title: "Mejora tu rendimiento",
      description: "Programas diseñados para resistencia, velocidad y perfeccionamiento técnico.",
      icon: "TrendingUp"
    },
    {
      id: 4,
      title: "Aprende con seguridad",
      description: "Piscina temperada con monitoreo constante y protocolos certificados.",
      icon: "ShieldCheck"
    }
  ],

  programs: [
    {
      id: "ninos",
      title: "Niños",
      subtitle: "Aprendizaje desde temprana edad",
      description: "Estimulación acuática, confianza y fundamentos técnicos en un entorno lúdico, seguro y motivador.",
      age: "De 3 a 11 años",
      icon: "Smile",
      // Photo of child learning swimming
      image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=800&q=80",
      highlights: ["Adaptación y flotación", "Confianza en el agua", "Iniciación de estilos", "Grupos reducidos"]
    },
    {
      id: "jovenes",
      title: "Jóvenes",
      subtitle: "Mejora tus habilidades",
      description: "Perfeccionamiento técnico de los cuatro estilos (crol, espalda, pecho y mariposa) y desarrollo aeróbico.",
      age: "De 12 a 17 años",
      icon: "Waves",
      // Photo of youth swimmer training
      image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=800&q=80",
      highlights: ["Perfeccionamiento técnico", "Resistencia aeróbica", "Virajes y salidas", "Salud y postura"]
    },
    {
      id: "adultos",
      title: "Adultos",
      subtitle: "Nada sin límites",
      description: "Aprende desde cero o mantén una condición física óptima sin impacto en articulaciones ni lesiones.",
      age: "18 años en adelante",
      icon: "HeartPulse",
      // Photo of adult swimmer in lap pool
      image: "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?auto=format&fit=crop&w=800&q=80",
      highlights: ["Desde nivel básico a avanzado", "Cero impacto articular", "Bienestar y antiestrés", "Horarios flexibles matutinos y nocturnos"]
    },
    {
      id: "entrenamiento",
      title: "Entrenamiento",
      subtitle: "Rendimiento y competencia",
      description: "Preparación física intensiva, análisis de tiempos, salidas y resistencia para competencias locales y nacionales.",
      age: "Nivel avanzado y atletas",
      icon: "Trophy",
      // Photo of competitive butterfly swimmer
      image: "https://images.unsplash.com/photo-1560090995-01632a28895b?auto=format&fit=crop&w=800&q=80",
      highlights: ["Alto rendimiento", "Cronometraje y estrategia", "Preparación física específica", "Equipo representativo KW"]
    }
  ],

  schedules: [
    {
      category: "Niños (Iniciación y Formación)",
      days: "Lunes a Jueves",
      hours: ["15:00 - 16:00", "16:00 - 17:00"],
      weekend: "Sábados intensivos: 09:00 - 11:00",
      badge: "Popular",
      slots: "Últimos 4 cupos disponibles",
      highlight: true
    },
    {
      category: "Jóvenes (Intermedio y Técnica)",
      days: "Lunes a Jueves",
      hours: ["17:00 - 18:00", "18:00 - 19:00"],
      weekend: "Sábados: 10:00 - 12:00",
      badge: "Popular",
      slots: "3 cupos disponibles",
      highlight: true
    },
    {
      category: "Adultos (Salud y Formación)",
      days: "Lunes a Viernes",
      hours: ["06:00 - 07:00", "07:00 - 08:00", "19:00 - 20:00"],
      weekend: "Sábados libres: 08:00 - 10:00",
      badge: "Ejecutivo",
      slots: "Horarios matutinos y nocturnos",
      highlight: false
    },
    {
      category: "Equipo de Rendimiento Killer Whale",
      days: "Lunes a Viernes",
      hours: ["18:00 - 20:00"],
      weekend: "Sábados técnicos: 08:00 - 10:30",
      badge: "Competencia",
      slots: "Evaluación técnica previa",
      highlight: false
    }
  ],

  enrollment: {
    title: "¿Listo para sumergirte en el agua?",
    badge: "INSCRIPCIONES ABIERTAS",
    description: "Únete a la familia Killer Whale en Loja. Matrículas abiertas para todos los niveles con atención personalizada y evaluación inicial gratuita.",
    whatsappButtonText: "Inscríbete por WhatsApp",
    whatsappUrl: "https://wa.me/593991234567?text=Hola%20Academia%20KW,%20deseo%20inscribirme%20y%20conocer%20los%20cupos%20disponibles%20en%20Loja.",
    features: [
      "Evaluación técnica inicial sin costo",
      "Piscina temperada a temperatura constante",
      "Descuentos especiales para hermanos y grupos familiares",
      "Seguimiento mensual de progreso"
    ]
  },

  about: {
    badge: "SOBRE ACADEMIA KW",
    title: "Inspirados en la fuerza, elegancia e inteligencia de la Orca",
    text: "Somos una academia de natación comprometida con la enseñanza, el deporte y el desarrollo personal. En KW te ayudamos a aprender, mejorar y disfrutar del agua en un ambiente seguro y profesional.",
    stats: [
      { label: "Años formando campeones", value: "8+" },
      { label: "Alumnos graduados", value: "1,200+" },
      { label: "Instructores calificados", value: "100%" },
      { label: "Seguridad y satisfacción", value: "5★" },
    ],
    buttonText: "Conoce más",
    buttonHref: "#programas",
    // Majestic killer whale / orca swimming underwater
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
  },

  contact: {
    titlePrefix: "Contác",
    titleCyan: "tanos",
    subtitle: "Estamos ubicados en Loja, Ecuador. Ven a visitarnos o escríbenos directamente para agendar tu clase de prueba.",
    locationName: "Loja, Ecuador",
    address: "Av. Salvador Bustamante Celi (Sector Jipiro)",
    phone: "099 123 4567",
    email: "info@kwacademia.com",
    hours: "Lunes a Viernes: 06:00 – 20:30 | Sábados: 08:00 – 13:00",
  }
};

