import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PARTY_INFO } from '../../data/initialData';
import logoDark from '../../assets/patria-libre-samana-logo-dark.png';
import './Footer.css';

export function Footer({ onOpenAffiliation }) {
  return (
    <footer id="contacto" className="patria-footer">
      {/* Top Banner: Idea Central */}
      <div className="footer-core-idea-banner">
        <div className="container">
          <div className="core-idea-header text-center">
            <span className="core-idea-badge">IDEA CENTRAL DE ESTA PÁGINA</span>
          </div>
          <div className="core-idea-statements-grid">
            {PARTY_INFO.ideaCentral.map((line, idx) => (
              <div key={idx} className="core-idea-line">
                <CheckCircle2 size={16} className="text-gold" />
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-container">
        {/* Main Column */}
        <div className="footer-col footer-brand-col">
          <div className="footer-brand-header">
            <img
              src={logoDark}
              alt="Patria Libre — Samaná"
              className="footer-official-logo"
            />
          </div>

          <p className="footer-official-summary">
            {PARTY_INFO.footerText}
          </p>

          <div className="footer-location-badge">
            <span>Provincia de Samaná • República Dominicana</span>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Navegación</h4>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/modelo-economico">Modelo Económico para Samaná</Link></li>
            <li><Link to="/agenda-samana">Agenda para Samaná (20 Ejes)</Link></li>
            <li><Link to="/programa-nacional">Base Programática Nacional</Link></li>
            <li><Link to="/organizacion">Organización y Equipo</Link></li>
            <li><Link to="/participacion">Afiliación y Militancia</Link></li>
            <li><Link to="/participacion#propuestas">Propuestas Ciudadanas</Link></li>
            <li><Link to="/transparencia">Documentos y FAQ</Link></li>
            <li><Link to="/noticias">Noticias y Actividades</Link></li>
          </ul>
        </div>

        {/* Portal Nacional Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Patria Libre Nacional</h4>
          <p className="footer-contact-desc">
            Enlaces a la plataforma del partido en República Dominicana:
          </p>
          <ul className="footer-links">
            <li>
              <a href="https://patrialibre.do/" target="_blank" rel="noopener noreferrer" className="footer-ext-link">
                <span>Web Oficial Nacional (patrialibre.do)</span>
                <ExternalLink size={13} />
              </a>
            </li>
            <li>
              <a href="https://patrialibre.do/firma" target="_blank" rel="noopener noreferrer" className="footer-ext-link">
                <span>Firma por el Reconocimiento</span>
                <ExternalLink size={13} />
              </a>
            </li>
          </ul>

          <div className="footer-motto-box">
            <span className="motto-tag">Lema Oficial:</span>
            <p className="motto-quote">«Por la Soberanía, Vida, Libertad y Prosperidad»</p>
          </div>
        </div>

        {/* Contacto Samaná Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Contacto en Samaná</h4>
          <p className="footer-contact-desc">
            Canales de comunicación directa con el equipo provincial de Samaná.
          </p>

          <div className="footer-contact-details">
            <div className="contact-detail-row">
              <Mail size={16} className="text-gold" />
              <span>{PARTY_INFO.contact.email}</span>
            </div>
            <div className="contact-detail-row">
              <Phone size={16} className="text-gold" />
              <span>{PARTY_INFO.contact.phone}</span>
            </div>
            <div className="contact-detail-row">
              <MessageCircle size={16} className="text-gold" />
              <span>WhatsApp: {PARTY_INFO.contact.whatsapp}</span>
            </div>
          </div>

          <div className="footer-social-icons">
            {/* Instagram */}
            <a href={`https://${PARTY_INFO.contact.instagram}`} target="_blank" rel="noreferrer" title="Instagram" className="social-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* Facebook */}
            <a href={`https://${PARTY_INFO.contact.facebook}`} target="_blank" rel="noreferrer" title="Facebook" className="social-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            {/* X / Twitter */}
            <a href={`https://x.com/${PARTY_INFO.contact.x}`} target="_blank" rel="noreferrer" title="X (Twitter)" className="social-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </a>

            {/* YouTube */}
            <a href={`https://${PARTY_INFO.contact.youtube}`} target="_blank" rel="noreferrer" title="YouTube" className="social-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>© {new Date().getFullYear()} PATRIA LIBRE — SAMANÁ. Equipo provincial. República Dominicana.</p>
          <p className="credit-text">
            Libertad • Responsabilidad • Instituciones • Prosperidad
          </p>
        </div>
      </div>
    </footer>
  );
}
