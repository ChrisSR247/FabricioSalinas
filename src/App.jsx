import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Programs from './components/Programs';
import Schedule from './components/Schedule';
import Enrollment from './components/Enrollment';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-kw-dark text-white font-sans selection:bg-kw-cyan selection:text-kw-dark relative overflow-x-hidden">
      {/* 1. Navbar fija y translúcida */}
      <Navbar />

      <main>
        {/* 2. Hero con nadador de mariposa y títulos */}
        <Hero />

        {/* 3. Barra de beneficios (4 columnas con ícono y separadores) */}
        <Benefits />

        {/* 4. Nuestros Programas (4 tarjetas con foto, ícono circular y texto) */}
        <Programs />

        {/* 5. Horarios por categoría */}
        <Schedule />

        {/* 6. Inscripciones (CTA con WhatsApp prellenado) */}
        <Enrollment />

        {/* 7. Sobre KW (historia, valores y foto de orca nadando) */}
        <About />

        {/* 8. Contáctanos (Loja, Ecuador + redes + logo en caligrafía itálica) */}
        <Contact />
      </main>

      {/* 9. Footer mínimo con copyright */}
      <Footer />
    </div>
  );
}
