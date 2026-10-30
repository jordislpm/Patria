import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Compass, BookOpen, Users, ArrowRight,
  ShieldCheck, CheckCircle2, ChevronRight, MessageSquare,
  FileText
} from 'lucide-react';
import { HeroSection } from '../components/sections/HeroSection';
import { NewsAndEventsSection } from '../components/sections/NewsAndEventsSection';
import { ScrollReveal } from '../components/common/ScrollReveal';
import './HomePage.css';

export function HomePage({ activeTheme, stats, onOpenLookup }) {
  const PLATFORM_PORTALS = [
    {
      id: 'modelo-economico',
      badge: 'MODELO DE DESARROLLO',
      title: 'Modelo Económico para Samaná',
      desc: 'Libertad económica, conservación del capital natural como activo productivo, Zona Económica Especial (ZEE), Hub Digital en Las Terrenas y turismo abierto.',
      icon: TrendingUp,
      path: '/modelo-economico',
      btnText: 'Explorar Modelo Económico',
      highlights: ['Capital Natural Productivo', 'Evidencia Internacional ZEE', '15 Nichos de Turismo Abierto', 'Descentralización Real']
    },
    {
      id: 'agenda-samana',
      badge: 'AGENDA PROVINCIAL',
      title: 'Agenda para Samaná (20 Ejes)',
      desc: 'El pliego exhaustivo de prioridades territoriales, económicas y sociales para Santa Bárbara, Sánchez, Las Terrenas, El Limón y Las Galeras.',
      icon: Compass,
      path: '/agenda-samana',
      btnText: 'Consultar los 20 Ejes',
      highlights: ['Infraestructura y Agua Potable', 'Ordenamiento Territorial', 'Costos de Vida y Vivienda', 'Juventud y Capacidades']
    },
    {
      id: 'programa-nacional',
      badge: 'DOCTRINA NACIONAL',
      title: 'Base Programática Nacional',
      desc: 'Los 13 pilares fundamentales de reformas estructurales de Patria Libre para la República Dominicana: libertad de mercado, disciplina fiscal y Estado limitado.',
      icon: BookOpen,
      path: '/programa-nacional',
      btnText: 'Ver Programa Nacional (13 Pilares)',
      highlights: ['Reducción de Impuestos', 'Desregulación Inteligente', 'Seguridad Jurídica Firme', 'Moneda Sana y Ahorro']
    },
    {
      id: 'organizacion',
      badge: 'EQUIPO Y FORMACIÓN',
      title: 'Organización, Equipo y Método',
      desc: 'Nuestra estructura territorial en Samaná, comisiones temáticas, los 3 niveles de análisis provincial y los 13 temas de formación cívica y política.',
      icon: Users,
      path: '/organizacion',
      btnText: 'Conocer Organización y Equipo',
      highlights: ['Método de los 3 Niveles', 'Comisiones Provinciales Activas', '13 Áreas de Formación', 'Cuentas Claras y Auditoría']
    }
  ];

  return (
    <div className="home-page-view">
      {/* 1. Hero Section (Inicio, Lemas, 3 Objetivos, Aclaración, Estadísticas) */}
      <HeroSection
        activeTheme={activeTheme}
        stats={stats}
        onOpenAffiliation={() => {}}
        onOpenLookup={onOpenLookup}
        affiliationPath="/participacion"
      />

      {/* 2. Platform Navigation Hub (Guía Temática para Evitar Sobrecarga) */}
      <section className="section-padding platform-hub-section">
        <div className="container">
          <ScrollReveal variant="slideUp" durationMs={700} className="section-header text-center">
            <span className="hub-eyebrow">PLIEGO PROGRAMÁTICO ORGANIZADO</span>
            <h2 className="section-title">
              Nuestra Propuesta <span className="text-gradient-gold">Organizada por Ejes</span>
            </h2>
            <p className="section-subtitle">
              Para ofrecerte una lectura clara y sin abrumarte con desplazamientos infinitos, hemos organizado todo nuestro contenido en páginas especializadas que puedes explorar a tu ritmo:
            </p>
          </ScrollReveal>

          <div className="platform-cards-grid">
            {PLATFORM_PORTALS.map((portal, idx) => {
              const Icon = portal.icon;
              return (
                <ScrollReveal
                  key={portal.id}
                  variant="slideUp"
                  delayMs={idx * 80}
                  className="platform-portal-card"
                >
                  <div className="portal-card-top">
                    <div className="portal-icon-wrap">
                      <Icon size={26} className="portal-icon" />
                    </div>
                    <span className="portal-badge">{portal.badge}</span>
                  </div>

                  <h3 className="portal-title">{portal.title}</h3>
                  <p className="portal-desc">{portal.desc}</p>

                  <div className="portal-highlights">
                    {portal.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="portal-highlight-item">
                        <CheckCircle2 size={13} className="text-gold flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="portal-card-footer">
                    <Link to={portal.path} className="portal-cta-btn">
                      <span>{portal.btnText}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Quick Access Badges to Transparencia & Participación */}
          <div className="platform-secondary-links-row">
            <Link to="/transparencia" className="secondary-hub-pill">
              <FileText size={16} className="text-gold" />
              <span>Documentos Oficiales & FAQ</span>
              <ChevronRight size={14} />
            </Link>
            <Link to="/participacion" className="secondary-hub-pill">
              <ShieldCheck size={16} className="text-gold" />
              <span>Afiliación y Militancia</span>
              <ChevronRight size={14} />
            </Link>
            <Link to="/participacion#propuestas" className="secondary-hub-pill">
              <MessageSquare size={16} className="text-gold" />
              <span>Buzón de Propuestas Ciudadanas</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Noticias y Actividades Destacadas */}
      <NewsAndEventsSection />

      {/* 4. Banner de Afiliación & Participación */}
      <section className="section-padding home-cta-banner-section">
        <div className="container">
          <div className="home-cta-banner">
            <div className="cta-banner-content">
              <span className="cta-banner-badge">SÚMATE AL EQUIPO DE SAMANÁ</span>
              <h3 className="cta-banner-title">
                Construyamos Juntos el Futuro de Nuestra Provincia
              </h3>
              <p className="cta-banner-desc">
                Patria Libre no busca clientes políticos ni votantes pasivos. Buscamos ciudadanos activos, conscientes y comprometidos con el estudio riguroso, la libertad y el desarrollo real de Samaná.
              </p>
              <div className="cta-banner-buttons">
                <Link to="/participacion" className="btn-pro-yellow cta-btn-link">
                  <ShieldCheck size={18} />
                  <span>Acredítate como Militante</span>
                </Link>
                <Link to="/participacion#propuestas" className="btn-pro-outline cta-btn-link">
                  <MessageSquare size={18} />
                  <span>Enviar una Propuesta</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
