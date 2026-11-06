import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import SocialIcons from '../components/SocialIcons';
import PhotoCredit from '../components/PhotoCredit';
import { content } from '../data/content';

export default function Contact() {
  const { contact } = content;

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-kw-dark">
      
      {/* Background Image with Dark Bluish Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={contact.backgroundImage}
          alt="Sede Academia KW en Loja, Ecuador"
          className="w-full h-full object-cover object-center scale-105 filter brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B1A]/95 via-[#050B1A]/85 to-[#0A1F3D]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B1A] via-transparent to-[#050B1A]/70" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-36 pb-16 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* Subtitle */}
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-kw-cyan" />
              <span className="font-heading uppercase tracking-[0.3em] text-xs font-bold text-kw-cyan">
                ATENCIÓN PERSONALIZADA EN LOJA
              </span>
            </div>

            {/* Title with "tanos" in cyan */}
            <h1 className="font-heading italic font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight mb-6">
              {contact.titlePrefix}
              <span className="text-kw-cyan drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                {contact.titleCyan}
              </span>
            </h1>

            <p className="text-kw-muted text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
              {contact.subtitle}
            </p>

            {/* Contact Details List */}
            <div className="space-y-6 mb-10">
              
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B2545]/80 border border-kw-cyan/40 flex items-center justify-center text-kw-cyan flex-shrink-0 shadow-glow-cyan-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-kw-cyan">Ubicación</h4>
                  <p className="text-base font-semibold text-white">{contact.location}</p>
                  <p className="text-xs text-kw-muted">{contact.address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B2545]/80 border border-kw-cyan/40 flex items-center justify-center text-kw-cyan flex-shrink-0 shadow-glow-cyan-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-kw-cyan">Teléfono</h4>
                  <a 
                    href={contact.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-base font-semibold text-white hover:text-kw-cyan transition-colors"
                  >
                    {contact.phone}
                  </a>
                  <p className="text-xs text-kw-muted">Atención inmediata por WhatsApp</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B2545]/80 border border-kw-cyan/40 flex items-center justify-center text-kw-cyan flex-shrink-0 shadow-glow-cyan-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-kw-cyan">Correo Electrónico</h4>
                  <a 
                    href={`mailto:${contact.email}`} 
                    className="text-base font-semibold text-white hover:text-kw-cyan transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B2545]/80 border border-kw-cyan/40 flex items-center justify-center text-kw-cyan flex-shrink-0 shadow-glow-cyan-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-kw-cyan">Horarios de Atención</h4>
                  <p className="text-xs text-kw-muted">{contact.hours}</p>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Button */}
            <div className="mb-6">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-heading font-bold text-sm uppercase tracking-wider text-kw-dark bg-gradient-to-r from-kw-cyan via-kw-sky to-kw-blue hover:shadow-glow-cyan hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
              >
                <MessageCircle className="w-5 h-5 fill-kw-dark" />
                <span>Chatear por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: "KW Killer Whale" in Calligraphy Italics & Official Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-8 sm:p-12 rounded-3xl bg-[#050B1A]/85 backdrop-blur-xl border border-kw-cyan/40 shadow-glow-cyan text-center flex flex-col items-center justify-center group">
              
              {/* Official Logo Image */}
              <div className="mb-6 relative">
                <div className="absolute -inset-4 bg-kw-cyan/20 rounded-full blur-xl group-hover:bg-kw-cyan/40 transition duration-500" />
                <img
                  src="/images/logo.png"
                  alt="Academia KW Killer Whale"
                  className="relative h-24 sm:h-28 w-auto object-contain drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                />
              </div>

              {/* Calligraphy Italic Typography */}
              <div className="mb-6">
                <h3 className="font-heading font-black italic text-4xl sm:text-5xl text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                  KW
                </h3>
                <h4 className="font-heading italic font-bold tracking-[0.25em] text-xl sm:text-2xl text-kw-cyan uppercase mt-1">
                  Killer Whale
                </h4>
                <p className="text-xs uppercase tracking-[0.35em] text-kw-muted font-medium mt-2">
                  Academia de Natación · Loja, Ecuador
                </p>
              </div>

              <div className="pt-6 border-t border-kw-cyan/20 w-full">
                <p className="text-xs text-kw-muted mb-4">
                  Síguenos en nuestras redes oficiales:
                </p>
                <div className="flex justify-center">
                  <SocialIcons />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Bottom Socials & Photo Credit */}
      <div className="relative z-10 px-6 sm:px-12 py-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-kw-muted">
          Piscina Temperada · Sector Jipiro, Loja
        </span>
        <PhotoCredit text={contact.photoCredit} />
      </div>

    </div>
  );
}
