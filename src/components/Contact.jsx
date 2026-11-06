import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import KwLogo from './KwLogo';
import SparkleStar from './SparkleStar';
import BlinkingDot from './BlinkingDot';
import { academyData } from '../data/academyData';

// Sleek Brand SVG Icons
function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.5 6.3 6.3 0 0 0 1.95-4.5V8.01a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.95-.44z"/>
    </svg>
  );
}

function YouTubeIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function Contact() {
  const { contact, general } = academyData;

  const socialIconList = [
    { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com' },
    { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com' },
    { name: 'TikTok', icon: TikTokIcon, href: 'https://tiktok.com' },
    { name: 'YouTube', icon: YouTubeIcon, href: 'https://youtube.com' },
  ];

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-kw-cyan/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Ambient Blinking Point */}
      <div className="absolute top-16 left-1/3 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-kw-cyan block animate-blink-dot-1 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* OUTER BOX: Main Contact Container (Glassmorphism) */}
        <div className="bg-kw-card/75 backdrop-blur-xl border border-kw-cyan/40 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-glow-cyan-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-7">
              {/* Badge with Sparkle */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06152B]/90 border border-kw-cyan/40 text-xs font-bold uppercase tracking-widest text-kw-cyan mb-4 shadow-glow-cyan-sm">
                <BlinkingDot variant="live" color="cyan" />
                <span>ATENCIÓN EN LOJA</span>
                <SparkleStar className="w-3.5 h-3.5" glow={false} />
              </div>

              {/* Title with "tanos" in cyan */}
              <h2 className="font-heading italic font-extrabold text-3xl sm:text-5xl text-white mb-4">
                {contact.titlePrefix}
                <span className="text-kw-cyan drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  {contact.titleCyan}
                </span>
              </h2>

              <p className="text-kw-muted text-sm sm:text-base mb-8 max-w-lg leading-relaxed">
                {contact.subtitle}
              </p>

              {/* NESTED BOXES: Contact List (Box dentro de otro box) */}
              <div className="space-y-4 mb-9">
                
                {/* Location Box */}
                <div className="bg-[#050E1D]/80 rounded-2xl p-4 border border-kw-cyan/20 hover:border-kw-cyan/40 transition-all flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-kw-card/90 border border-kw-cyan/30 flex items-center justify-center text-kw-cyan group-hover:bg-kw-cyan group-hover:text-kw-dark group-hover:scale-105 transition-all flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-kw-cyan">Ubicación</h4>
                    <p className="text-sm font-semibold text-white">{contact.locationName}</p>
                    <p className="text-xs text-kw-muted">{contact.address}</p>
                  </div>
                </div>

                {/* Phone / WhatsApp Box */}
                <div className="bg-[#050E1D]/80 rounded-2xl p-4 border border-kw-cyan/20 hover:border-kw-cyan/40 transition-all flex items-start justify-between gap-4 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-kw-card/90 border border-kw-cyan/30 flex items-center justify-center text-kw-cyan group-hover:bg-kw-cyan group-hover:text-kw-dark group-hover:scale-105 transition-all flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-kw-cyan">Teléfono / WhatsApp</h4>
                        <BlinkingDot variant="live" color="green" />
                      </div>
                      <a 
                        href={general.whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-kw-cyan transition-colors"
                      >
                        {contact.phone}
                      </a>
                      <p className="text-xs text-kw-muted">Atención inmediata a consultas y cupos</p>
                    </div>
                  </div>
                </div>

                {/* Email Box */}
                <div className="bg-[#050E1D]/80 rounded-2xl p-4 border border-kw-cyan/20 hover:border-kw-cyan/40 transition-all flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-kw-card/90 border border-kw-cyan/30 flex items-center justify-center text-kw-cyan group-hover:bg-kw-cyan group-hover:text-kw-dark group-hover:scale-105 transition-all flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-kw-cyan">Correo Electrónico</h4>
                    <a 
                      href={`mailto:${contact.email}`} 
                      className="text-sm font-semibold text-white hover:text-kw-cyan transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Hours Box */}
                <div className="bg-[#050E1D]/80 rounded-2xl p-4 border border-kw-cyan/20 hover:border-kw-cyan/40 transition-all flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-kw-card/90 border border-kw-cyan/30 flex items-center justify-center text-kw-cyan group-hover:bg-kw-cyan group-hover:text-kw-dark group-hover:scale-105 transition-all flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-kw-cyan">Horario de Atención</h4>
                    <p className="text-xs text-kw-muted">{contact.hours}</p>
                  </div>
                </div>

              </div>

              {/* Social Media: Icons in circles with cyan border */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-kw-muted mb-3 flex items-center gap-2">
                  <span>Síguenos en Redes Sociales</span>
                  <SparkleStar className="w-3.5 h-3.5 text-kw-cyan" glow={false} />
                </h4>
                <div className="flex items-center gap-3">
                  {socialIconList.map((soc) => {
                    const Icon = soc.icon;
                    return (
                      <a
                        key={soc.name}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visitar nuestro perfil de ${soc.name}`}
                        className="w-11 h-11 rounded-full border border-kw-cyan/40 bg-kw-dark/80 flex items-center justify-center text-kw-cyan hover:bg-kw-cyan hover:text-kw-dark hover:shadow-glow-cyan hover:scale-110 active:scale-95 transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: INNER BOX (Logotipo KW Killer Whale en caligrafía itálica + box dentro de otro box) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 sm:p-10 rounded-3xl bg-[#050E1D]/90 border-2 border-kw-cyan/40 shadow-inner relative overflow-hidden">
              
              {/* Corner Sparkle Symbols */}
              <div className="absolute top-4 right-4">
                <SparkleStar className="w-5 h-5 text-kw-cyan" glow={true} />
              </div>
              <div className="absolute bottom-4 left-4">
                <SparkleStar className="w-4 h-4 text-kw-cyan/70" glow={false} />
              </div>

              <KwLogo variant="calligraphy" />
              
              <div className="mt-8 pt-6 border-t border-kw-cyan/20 w-full text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <BlinkingDot variant="live" color="green" />
                  <p className="text-xs text-white font-semibold">
                    ¿Quieres agendar una clase de prueba gratuita?
                  </p>
                </div>

                <a
                  href={general.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-kw-dark bg-gradient-to-r from-kw-cyan via-kw-sky to-kw-blue hover:shadow-glow-cyan hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Chatear por WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
