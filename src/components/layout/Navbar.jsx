import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Sun, Moon, ShieldCheck, UserPlus, Menu, X, ChevronRight,
  ExternalLink, Compass, FileText, Info, Home
} from 'lucide-react';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

export function Navbar({ activeTheme, onToggleTheme, onOpenAffiliation, onOpenLookup }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  const navStructure = [
    {
      id: 'inicio',
      label: 'Inicio',
      path: '/'
    },
    {
      id: 'propuestas',
      label: 'Propuestas',
      children: [
        { label: 'Modelo Económico para Samaná', path: '/modelo-economico', desc: 'Libertad, capital natural y Hub Digital' },
        { label: 'Agenda para Samaná (20 Ejes)', path: '/agenda-samana', desc: 'Prioridades locales de desarrollo e inversión' },
        { label: 'Base Programática Nacional', path: '/programa-nacional', desc: '13 pilares fundamentales de libertad y reformas' },
        { label: 'Buzón de Propuestas Ciudadanas', path: '/participacion#propuestas', desc: 'Canal directo para reportar problemáticas' }
      ]
    },
    {
      id: 'samana',
      label: 'Samaná',
      children: [
        { label: 'Organización y Equipo', path: '/organizacion', desc: 'Estructura territorial y comisiones' },
        { label: 'Método de Trabajo', path: '/organizacion#metodo', desc: '3 niveles y 10 criterios de evaluación local' },
        { label: 'Afiliación y Militancia', path: '/participacion', desc: 'Súmate formalmente a Patria Libre' },
        { label: 'Noticias y Actividades', path: '/noticias', desc: 'Encuentros comunitarios y comunicados' },
        { label: 'Consultar Acreditación', action: onOpenLookup, desc: 'Verifica tu registro de militante por cédula' }
      ]
    },
    {
      id: 'transparencia',
      label: 'Transparencia',
      children: [
        { label: 'Documentos Oficiales', path: '/transparencia', desc: 'Repositorio público y programas' },
        { label: 'Preguntas Frecuentes (FAQ)', path: '/transparencia#faq', desc: 'Respuestas directas y honestas' },
        { label: 'Web Nacional (patrialibre.do)', href: 'https://patrialibre.do/', external: true, desc: 'Plataforma oficial del partido a nivel nacional' },
        { label: 'Firma por Patria Libre', href: 'https://patrialibre.do/firma', external: true, desc: 'Apoya el reconocimiento oficial con tu firma' },
        { label: 'Contacto Provincial', href: '#contacto', desc: 'Canales oficiales en Samaná y RD' }
      ]
    }
  ];

  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleNavigate = (e, target) => {
    if (!target) return;
    
    // External link
    if (target.startsWith('http')) {
      setMobileMenuOpen(false);
      setOpenDropdown(null);
      return;
    }

    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setOpenDropdown(null);
    setMobileMenuOpen(false);

    // Hash anchor navigation
    if (target.startsWith('#')) {
      const targetId = target.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const headerOffset = 68;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // Fallback for anchors outside current page
        if (targetId === 'contacto') {
          const footerEl = document.getElementById('contacto');
          if (footerEl) {
            footerEl.scrollIntoView({ behavior: 'smooth' });
          } else {
            navigate('/#contacto');
          }
        }
      }
      return;
    }

    // Path navigation (e.g. /participacion#propuestas or /modelo-economico)
    if (target.includes('#')) {
      const [, hashPart] = target.split('#');
      navigate(target);
      setTimeout(() => {
        const el = document.getElementById(hashPart);
        if (el) {
          const headerOffset = 68;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 150);
      return;
    }

    navigate(target);
  };

  const handleAffiliationClick = () => {
    navigate('/participacion');
    if (onOpenAffiliation) {
      onOpenAffiliation();
    }
  };

  return (
    <>
      <header className={`patria-nav-pro ${scrolled ? 'is-scrolled' : ''}`} ref={navRef}>
        <div className="container nav-pro-container">
          {/* Left: Official Brand Logo */}
          <Link
            to="/"
            className="nav-pro-brand"
            title="Patria Libre — Samaná"
            onClick={() => {
              setOpenDropdown(null);
              setMobileMenuOpen(false);
            }}
          >
            <img
              src={activeTheme === 'dark' ? '/patria-libre-samana-nav-dark.png' : '/patria-libre-samana-nav-light.png'}
              alt="Patria Libre Samaná"
              className="nav-pro-brand-logo-img"
            />
          </Link>

          {/* Center: Desktop Nav with Submenus (Hidden on Mobile) */}
          <nav className="desktop-pro-nav">
            {navStructure.map((item) => {
              if (item.children) {
                const isOpen = openDropdown === item.id;
                return (
                  <div
                    key={item.id}
                    className={`nav-dropdown-item ${isOpen ? 'is-open' : ''}`}
                    onMouseEnter={() => setOpenDropdown(item.id)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="nav-pro-link nav-dropdown-btn"
                      onClick={() => handleDropdownToggle(item.id)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.label}</span>
                      <span className="dropdown-caret">▾</span>
                    </button>

                    {/* Submenu Dropdown Panel */}
                    {isOpen && (
                      <div className="nav-submenu-panel animate-fade-in">
                        {item.children.map((sub, sIdx) => {
                          if (sub.action) {
                            return (
                              <button
                                key={sIdx}
                                className="nav-submenu-link text-left"
                                onClick={() => {
                                  setOpenDropdown(null);
                                  sub.action();
                                }}
                              >
                                <div className="submenu-title-row">
                                  <span className="submenu-title">{sub.label}</span>
                                  <ShieldCheck size={14} className="text-gold" />
                                </div>
                                <span className="submenu-desc">{sub.desc}</span>
                              </button>
                            );
                          }

                          if (sub.external) {
                            return (
                              <a
                                key={sIdx}
                                href={sub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-submenu-link external"
                                onClick={() => setOpenDropdown(null)}
                              >
                                <div className="submenu-title-row">
                                  <span className="submenu-title">{sub.label}</span>
                                  <ExternalLink size={13} className="text-gold" />
                                </div>
                                <span className="submenu-desc">{sub.desc}</span>
                              </a>
                            );
                          }

                          const targetDestination = sub.path || sub.href;
                          return (
                            <Link
                              key={sIdx}
                              to={targetDestination}
                              className="nav-submenu-link"
                              onClick={(e) => handleNavigate(e, targetDestination)}
                            >
                              <span className="submenu-title">{sub.label}</span>
                              <span className="submenu-desc">{sub.desc}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`nav-pro-link ${location.pathname === item.path ? 'active-nav-link' : ''}`}
                  onClick={(e) => handleNavigate(e, item.path)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions Bar */}
          <div className="nav-pro-actions">
            {/* Desktop Only: Language Switcher */}
            <div className="desktop-only-action">
              <LanguageSwitcher />
            </div>

            {/* Desktop Only: Dark/Light Theme Button */}
            <button
              onClick={onToggleTheme}
              className="pro-icon-btn desktop-only-action"
              title={`Cambiar a modo ${activeTheme === 'dark' ? 'claro' : 'oscuro'}`}
              aria-label="Alternar tema"
            >
              {activeTheme === 'dark' ? <Sun size={15} className="icon-gold" /> : <Moon size={15} className="icon-dark" />}
            </button>

            {/* Join / Unirse Button (Always visible on mobile & desktop!) */}
            <button
              onClick={handleAffiliationClick}
              className="btn-pro-yellow pro-nav-join-btn"
              title="Formulario de Afiliación a Patria Libre"
            >
              <UserPlus size={15} />
              <span className="join-btn-label">{t.nav.join}</span>
            </button>

            {/* Mobile Hamburger / Close Button */}
            <button
              className={`pro-mobile-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir opciones del menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer & Overlay Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Clickable Backdrop to close */}
          <div
            className="pro-mobile-backdrop animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Sheet Menu */}
          <div className="pro-mobile-drawer animate-slide-down">
            {/* 1. Direct Home Link */}
            <Link
              to="/"
              className="mobile-single-btn"
              onClick={(e) => handleNavigate(e, '/')}
            >
              <div className="mobile-link-left">
                <Home size={20} className="text-gold" />
                <span className="mobile-link-title">Inicio / Portada Principal</span>
              </div>
              <ChevronRight size={18} className="text-muted" />
            </Link>

            {/* 2. Propuestas y Programa */}
            <div className="mobile-section-card">
              <div className="mobile-section-header">
                <Compass size={18} className="text-gold" />
                <span>Propuestas y Programa</span>
              </div>
              <div className="mobile-section-links">
                <Link
                  to="/modelo-economico"
                  className="mobile-item-link"
                  onClick={(e) => handleNavigate(e, '/modelo-economico')}
                >
                  <div className="item-content">
                    <span className="item-title">Modelo Económico para Samaná</span>
                    <span className="item-desc">Libertad, capital natural y Hub Digital</span>
                  </div>
                  <ChevronRight size={16} className="text-muted" />
                </Link>
                <Link
                  to="/agenda-samana"
                  className="mobile-item-link"
                  onClick={(e) => handleNavigate(e, '/agenda-samana')}
                >
                  <div className="item-content">
                    <span className="item-title">Agenda para Samaná (20 Ejes)</span>
                    <span className="item-desc">Prioridades locales de desarrollo e inversión</span>
                  </div>
                  <ChevronRight size={16} className="text-muted" />
                </Link>
                <Link
                  to="/programa-nacional"
                  className="mobile-item-link"
                  onClick={(e) => handleNavigate(e, '/programa-nacional')}
                >
                  <div className="item-content">
                    <span className="item-title">Base Programática Nacional</span>
                    <span className="item-desc">13 pilares fundamentales de libertad</span>
                  </div>
                  <ChevronRight size={16} className="text-muted" />
                </Link>
                <Link
                  to="/participacion#propuestas"
                  className="mobile-item-link"
                  onClick={(e) => handleNavigate(e, '/participacion#propuestas')}
                >
                  <div className="item-content">
                    <span className="item-title">Buzón de Propuestas Ciudadanas</span>
                    <span className="item-desc">Canal directo para reportar problemáticas</span>
                  </div>
                  <ChevronRight size={16} className="text-muted" />
                </Link>
              </div>
            </div>

            {/* 3. Samaná y Equipo */}
            <div className="mobile-section-card">
              <div className="mobile-section-header">
                <Info size={18} className="text-gold" />
                <span>Samaná y Equipo Provincial</span>
              </div>
              <div className="mobile-section-links">
                <Link
                  to="/organizacion"
                  className="mobile-item-link"
                  onClick={(e) => handleNavigate(e, '/organizacion')}
                >
                  <div className="item-content">
                    <span className="item-title">Organización y Equipo</span>
                    <span className="item-desc">Estructura y comisiones territoriales</span>
                  </div>
                  <ChevronRight size={16} className="text-muted" />
                </Link>
                <Link
                  to="/organizacion#metodo"
                  className="mobile-item-link"
                  onClick={(e) => handleNavigate(e, '/organizacion#metodo')}
                >
                  <div className="item-content">
                    <span className="item-title">Método de Trabajo</span>
                    <span className="item-desc">3 niveles y 10 criterios de evaluación</span>
                  </div>
                  <ChevronRight size={16} className="text-muted" />
                </Link>
                <Link
                  to="/participacion"
                  className="mobile-item-link"
                  onClick={(e) => handleNavigate(e, '/participacion')}
                >
                  <div className="item-content">
                    <span className="item-title">Afiliación y Militancia</span>
                    <span className="item-desc">Súmate como miembro de Patria Libre</span>
                  </div>
                  <ChevronRight size={16} className="text-muted" />
                </Link>
                <Link
                  to="/noticias"
                  className="mobile-item-link"
                  onClick={(e) => handleNavigate(e, '/noticias')}
                >
                  <div className="item-content">
                    <span className="item-title">Noticias y Actividades</span>
                    <span className="item-desc">Encuentros comunitarios y eventos</span>
                  </div>
                  <ChevronRight size={16} className="text-muted" />
                </Link>
              </div>
            </div>

            {/* 4. Transparencia e Institucionalidad */}
            <div className="mobile-section-card">
              <div className="mobile-section-header">
                <FileText size={18} className="text-gold" />
                <span>Transparencia e Institucionalidad</span>
              </div>
              <div className="mobile-section-links">
                <Link
                  to="/transparencia"
                  className="mobile-item-link"
                  onClick={(e) => handleNavigate(e, '/transparencia')}
                >
                  <div className="item-content">
                    <span className="item-title">Documentos Oficiales</span>
                    <span className="item-desc">Descarga de estatutos y programas</span>
                  </div>
                  <ChevronRight size={16} className="text-muted" />
                </Link>
                <Link
                  to="/transparencia#faq"
                  className="mobile-item-link"
                  onClick={(e) => handleNavigate(e, '/transparencia#faq')}
                >
                  <div className="item-content">
                    <span className="item-title">Preguntas Frecuentes (FAQ)</span>
                    <span className="item-desc">Respuestas directas y honestas</span>
                  </div>
                  <ChevronRight size={16} className="text-muted" />
                </Link>
                <a
                  href="https://patrialibre.do/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-item-link external"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="item-content">
                    <div className="sublink-row-between">
                      <span className="item-title">Portal Nacional Oficial</span>
                      <ExternalLink size={14} className="text-gold" />
                    </div>
                    <span className="item-desc">patrialibre.do ↗</span>
                  </div>
                </a>
                <a
                  href="https://patrialibre.do/firma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-item-link external"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="item-content">
                    <div className="sublink-row-between">
                      <span className="item-title">Firma por el Reconocimiento</span>
                      <ExternalLink size={14} className="text-gold" />
                    </div>
                    <span className="item-desc">Apoya con tu firma digital</span>
                  </div>
                </a>
                <a
                  href="#contacto"
                  className="mobile-item-link"
                  onClick={(e) => handleNavigate(e, '#contacto')}
                >
                  <div className="item-content">
                    <span className="item-title">Contacto Provincial</span>
                    <span className="item-desc">Email, WhatsApp y canales oficiales</span>
                  </div>
                  <ChevronRight size={16} className="text-muted" />
                </a>
              </div>
            </div>

            {/* Mobile Preferences & Utilities (Language & Theme at the bottom) */}
            <div className="mobile-preferences-card">
              <div className="mobile-pref-title">Preferencias y Apariencia</div>
              <div className="mobile-pref-row">
                <div className="mobile-pref-item">
                  <span className="mobile-pref-label">Idioma:</span>
                  <LanguageSwitcher />
                </div>

                <div className="mobile-pref-item">
                  <span className="mobile-pref-label">Tema:</span>
                  <button
                    onClick={onToggleTheme}
                    className="mobile-theme-toggle-btn"
                    title="Alternar modo claro / oscuro"
                  >
                    {activeTheme === 'dark' ? (
                      <>
                        <Sun size={15} className="icon-gold" />
                        <span>Modo Claro</span>
                      </>
                    ) : (
                      <>
                        <Moon size={15} className="icon-dark" />
                        <span>Modo Oscuro</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Actions Sticky Container */}
            <div className="mobile-drawer-bottom-actions">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLookup();
                }}
                className="mobile-lookup-cta"
              >
                <ShieldCheck size={18} className="text-gold" />
                <span>Consultar Acreditación por Cédula</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleAffiliationClick();
                }}
                className="btn-pro-yellow mobile-join-cta"
              >
                <UserPlus size={18} />
                <span>{t.nav.join} a PATRIA LIBRE</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
