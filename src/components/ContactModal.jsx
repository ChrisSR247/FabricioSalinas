import React, { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Contacto Rápido</h3>
          <button className="btn-close" onClick={onClose}>✕</button>
        </div>

        {sent ? (
          <div className="sent-success">
            <span className="success-icon">✅</span>
            <h4>¡Mensaje recibido!</h4>
            <p>Al ser un sitio estático, puedes integrar servicios como Formspree, EmailJS o Netlify Forms fácilmente.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-group">
              <label>Nombre</label>
              <input 
                type="text" 
                required 
                placeholder="Tu nombre" 
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                required 
                placeholder="tu@email.com" 
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea 
                rows="3" 
                required 
                placeholder="¿En qué podemos ayudarte?" 
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn-submit">Enviar Mensaje</button>
          </form>
        )}
      </div>
    </div>
  );
}

