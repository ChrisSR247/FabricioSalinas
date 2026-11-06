import React from 'react';

const featuresData = [
  {
    icon: '⚡',
    title: 'Vite Ultra Rápido',
    description: 'Hot Module Replacement (HMR) instantáneo en desarrollo y empaquetado optimizado con Rollup para producción.'
  },
  {
    icon: '📦',
    title: '100% Estático',
    description: 'Genera una carpeta dist/ con HTML, CSS y JS puro. Cero configuración de servidor o base de datos requerida.'
  },
  {
    icon: '🚀',
    title: 'Deploy en 1 Click',
    description: 'Listo para subir a GitHub Pages, Vercel, Netlify, Render o Firebase Hosting sin costos.'
  },
  {
    icon: '🎨',
    title: 'CSS Moderno',
    description: 'Variables CSS, diseño responsivo, temas oscuros y transiciones fluidas sin dependencias pesadas.'
  },
  {
    icon: '🧩',
    title: 'Componentes Modulares',
    description: 'Estructura organizada en componentes limpios y fáciles de extender para cualquier necesidad.'
  },
  {
    icon: '🔒',
    title: 'Seguro y Autónomo',
    description: 'Al no depender de APIs externas obligatorias, tu sitio siempre estará en línea sin caídas de servidor.'
  }
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="section-header">
        <h2 className="section-title">¿Por qué un Frontend Estático?</h2>
        <p className="section-subtitle">Ventajas clave de una arquitectura Single Page Application (SPA)</p>
      </div>

      <div className="features-grid">
        {featuresData.map((feat, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feat.icon}</div>
            <h3 className="feature-title">{feat.title}</h3>
            <p className="feature-description">{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

