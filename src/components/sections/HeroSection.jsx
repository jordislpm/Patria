import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Send, FileText, ShieldCheck, Compass, BookOpen,
  MessageSquare, Info, AlertTriangle, CheckCircle2, ChevronRight, ArrowDown, ExternalLink, Quote
} from 'lucide-react';
import { PatriaLibreEmblem } from '../common/PatriaLibreLogo';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
import { ScrollReveal } from '../common/ScrollReveal';
import { PARTY_INFO } from '../../data/initialData';
import liderazgoImg from '../../assets/liderazgo-principios.jpg';
import juventudImg from '../../assets/juventud-prosperidad.jpg';
import logoOriginalSamana from '../../assets/patria-libre-samana-logo.png';
import logoDarkSamana from '../../assets/patria-libre-samana-logo-dark.png';
import './HeroSection.css';

export function HeroSection({ activeTheme, stats, onOpenAffiliation, onOpenLookup }) {
  const [clarificationOpen, setClarificationOpen] = useState(false);

  return (
    <>
      {/* =====================================================
          1. HERO PRINCIPAL SUPERIOR (Estilo 2 Columnas con 3 Fotos)
          ===================================================== */}
      <section id="hero" className="hero-lp-section">
        {/* Top right stripe accent line */}
        <div className="lp-hazard-stripe" />

        <div className="container hero-lp-container">
          {/* Left Column: Emblem Badge, Title, Subtitle, Actions */}
          <ScrollReveal variant="slideRight" durationMs={800} className="hero-lp-text-col">
            {/* Official Party Logo */}
            <div className="hero-official-logo-box">
              <img
                src={logoOriginalSamana}
                alt="Patria Libre — Samaná"
                className="hero-lp-official-logo logo-light"
              />
              <img
                src={logoDarkSamana}
                alt="Patria Libre — Samaná"
                className="hero-lp-official-logo logo-dark"
              />
            </div>

            <div className="hero-badge-tagline">
              <span className="hero-mini-pill">REPÚBLICA DOMINICANA</span>
              <span className="hero-mini-sub">EQUIPO PROVINCIAL EN SAMANÁ</span>
            </div>

            <h1 className="hero-lp-title">
              Bienvenidos a <span className="text-yellow-lp">PATRIA LIBRE</span>
            </h1>

            <div className="hero-official-slogan-bar">
              Por la Soberanía, Vida, Libertad y Prosperidad
            </div>

            <div className="hero-lp-slogan">
              <span>Libertad</span> • <span>Responsabilidad</span> • <span>Instituciones</span> • <span>Prosperidad</span>
            </div>

            <p className="hero-lp-subtitle">
              Construyendo una nación con instituciones sólidas, cuentas claras y oportunidades reales. Desde la provincia de Samaná acercamos las propuestas nacionales e impulsamos soluciones locales con rigor y transparencia.
            </p>

            <div className="hero-lp-actions">
              <Button
                variant="gold"
                size="lg"
                icon={Send}
                iconPosition="right"
                onClick={onOpenAffiliation}
                className="btn-lp-yellow"
              >
                Sumarse a PATRIA LIBRE ↗
              </Button>
              
              <a href="#inicio-samana" className="btn-anchor">
                <Button variant="outline" size="lg" icon={ArrowDown} className="btn-lp-outline">
                  Conocer Nuestro Espacio
                </Button>
              </a>

              <a
                href={PARTY_INFO.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-anchor"
                title="Ir a la web nacional oficial patrialibre.do"
              >
                <Button variant="ghost" size="lg" icon={ExternalLink} className="btn-national-portal">
                  Web Nacional (patrialibre.do) ↗
                </Button>
              </a>
            </div>

            <div className="hero-lp-trust" onClick={onOpenLookup} title="Consultar mi acreditación de militante">
              <ShieldCheck size={20} className="text-yellow-lp" />
              <span>Consultar Acreditación de Militante por Cédula</span>
            </div>
          </ScrollReveal>

          {/* Right Column: 3 Vertical Photo Gallery Cards */}
          <ScrollReveal variant="slideLeft" delayMs={200} durationMs={800} className="hero-lp-gallery-col">
            <div className="lp-gallery-grid">
              {/* Card 1: Samaná y Costas */}
              <div className="lp-gallery-card card-1">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                  alt="Samaná y Costas Dominicanas"
                  className="lp-gallery-img"
                />
                <div className="gallery-card-tag">Samaná y Soberanía</div>
              </div>

              {/* Card 2: Liderazgo y Principios */}
              <div className="lp-gallery-card card-2">
                <img
                  src={liderazgoImg}
                  alt="Liderazgo y Principios"
                  className="lp-gallery-img"
                />
                <div className="gallery-card-tag">Liderazgo y Principios</div>
              </div>

              {/* Card 3: Juventud y Progreso */}
              <div className="lp-gallery-card card-3">
                <img
                  src={juventudImg}
                  alt="Juventud Dominicana y Prosperidad"
                  className="lp-gallery-img"
                />
                <div className="gallery-card-tag">Juventud y Prosperidad</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =====================================================
          2. MANIFIESTO Y OBJETIVOS EN SAMANÁ (Aparece al hacer scroll)
          ===================================================== */}
      <section id="inicio-samana" className="samana-manifesto-section">
        <div className="container hero-samana-container">
          {/* Header Box */}
          <ScrollReveal variant="slideUp" durationMs={700} className="hero-header-box text-center">
            <div className="hero-manifesto-logo-wrap">
              <img
                src={logoOriginalSamana}
                alt="Patria Libre — Samaná"
                className="hero-manifesto-official-logo logo-light"
              />
              <img
                src={logoDarkSamana}
                alt="Patria Libre — Samaná"
                className="hero-manifesto-official-logo logo-dark"
              />
            </div>

            <div className="hero-top-badge">
              <span className="hero-provincial-tag">EQUIPO PROVINCIAL DE PATRIA LIBRE EN SAMANÁ</span>
              <span className="hero-country-tag">REPÚBLICA DOMINICANA</span>
            </div>

            <h2 className="hero-manifesto-title">
              PATRIA LIBRE <span className="text-yellow-accent">— SAMANÁ</span>
            </h2>

            {/* 4 Pillars */}
            <div className="hero-pillars-bar">
              <span className="pillar-item">Libertad.</span>
              <span className="pillar-item">Responsabilidad.</span>
              <span className="pillar-item">Instituciones.</span>
              <span className="pillar-item">Prosperidad.</span>
            </div>

            <p className="hero-intro-text">
              Este es el espacio del equipo de <strong>Patria Libre</strong> en la provincia de Samaná. Patria Libre es un proyecto político de alcance nacional. Desde Samaná trabajamos para acercar a los ciudadanos las ideas, propuestas y documentos del proyecto nacional y, al mismo tiempo, estudiar los problemas particulares de nuestra provincia para construir propuestas locales compatibles con esos principios.
            </p>

            {/* Quick Action Navigation */}
            <div className="hero-actions-group">
              <Link to="/agenda-samana" className="btn-anchor">
                <Button variant="gold" size="lg" icon={Compass} iconPosition="right" className="btn-hero-primary">
                  Agenda para Samaná (20 Ejes)
                </Button>
              </Link>
              <Link to="/programa-nacional" className="btn-anchor">
                <Button variant="outline" size="lg" icon={BookOpen} className="btn-hero-secondary">
                  Base Programática Nacional
                </Button>
              </Link>
              <Link to="/participacion#propuestas" className="btn-anchor">
                <Button variant="ghost" size="lg" icon={MessageSquare} className="btn-hero-proposal">
                  Enviar Propuesta Local
                </Button>
              </Link>
            </div>

            <div className="hero-aux-links">
              <button
                onClick={() => setClarificationOpen(true)}
                className="clarification-trigger-btn"
                title="Leer aclaración sobre el programa histórico 2020-2024"
              >
                <Info size={16} />
                <span>Aclaración importante: Distinción entre programa histórico y propuestas vigentes</span>
                <ChevronRight size={14} />
              </button>

              <button onClick={onOpenLookup} className="hero-lookup-badge" title="Consultar carnet por cédula">
                <ShieldCheck size={16} className="text-gold" />
                <span>Consultar acreditación de militante</span>
              </button>
            </div>
          </ScrollReveal>

          {/* 3 Core Objectives Cards */}
          <div className="hero-objectives-grid">
            {PARTY_INFO.objectives.map((obj, i) => (
              <ScrollReveal key={obj.number} variant="slideUp" delayMs={i * 120} className="objective-card glass-card">
                <div className="obj-number-badge">{obj.number}</div>
                <h3 className="obj-title">{obj.title}</h3>
                <p className="obj-desc">{obj.description}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Central Quote & Doctrinal Principle */}
          <div className="hero-declaration-banner">
            <blockquote className="hero-central-quote">
              <Quote size={24} className="quote-mark text-yellow-lp" />
              <p className="hero-quote-text">
                «{PARTY_INFO.centralQuote || PARTY_INFO.centralPhilosophy}»
              </p>
              <cite className="hero-quote-author">— Principio rector del Equipo Provincial de Patria Libre en Samaná</cite>
            </blockquote>
          </div>

          {/* Demografía Oficial y Realidad Territorial (ONE) */}
          <div className="provincial-stats-strip">
            <div className="stat-pill">
              <span className="stat-num">{PARTY_INFO.provincialStats?.population || '114,490'}</span>
              <span className="stat-label">Habitantes (Censo ONE)</span>
            </div>
            <div className="stat-pill">
              <span className="stat-num">{PARTY_INFO.provincialStats?.territoryKm2 || '853.6'} km²</span>
              <span className="stat-label">Extensión Territorial</span>
            </div>
            <div className="stat-pill">
              <span className="stat-num">{PARTY_INFO.provincialStats?.municipalities || 3}</span>
              <span className="stat-label">Municipios</span>
            </div>
            <div className="stat-pill">
              <span className="stat-num">{PARTY_INFO.provincialStats?.districts || 3}</span>
              <span className="stat-label">Distritos Municipales</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modal: Una Aclaración Importante */}
      {clarificationOpen && (
        <Modal
          isOpen={clarificationOpen}
          onClose={() => setClarificationOpen(false)}
          title="Una Aclaración Importante"
        >
          <div className="clarification-modal-body">
            <div className="clarification-alert-box">
              <AlertTriangle size={24} className="text-gold" />
              <p>
                La fuente doctrinal nacional primordial es el <strong>Ideario actual de Patria Libre (Nueva Derecha)</strong>. El <strong>Plan ÚnicaVía (2020-2024)</strong> constituye un valioso antecedente programático e histórico. Por esa razón, distinguimos rigurosamente entre los principios doctrinales vigentes, las propuestas locales desarrolladas para Samaná y los antecedentes programáticos históricos.
              </p>
            </div>

            <h4 className="clarification-levels-title">Patria Libre — Samaná distingue con total rigor entre:</h4>

            <div className="clarification-levels-list">
              {PARTY_INFO.clarification.levels.map((lvl) => (
                <div key={lvl.key} className="clarification-lvl-item">
                  <div className="lvl-key-badge">{lvl.key}</div>
                  <div>
                    <h5 className="lvl-title">{lvl.label}</h5>
                    <p className="lvl-desc">{lvl.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="clarification-commitment">
              <CheckCircle2 size={18} className="text-gold" />
              <p>
                <strong>Compromiso editorial:</strong> Cuando una propuesta histórica sea presentada en esta página, se identificará como tal. No se presentarán cifras de 2020 como si automáticamente fueran las cifras adecuadas para la realidad actual.
              </p>
            </div>

            <div className="modal-actions-end">
              <Button variant="gold" fullWidth onClick={() => setClarificationOpen(false)}>
                Entendido
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
