import React, { useState } from 'react';
import {
  TrendingUp, Trees, ShieldCheck, Cpu, Building2, Scale,
  ChevronRight, CheckCircle2, BookOpen, Sparkles,
  Wifi, Zap, Users, GraduationCap, FileCheck, Globe,
  Compass, AlertCircle, MapPin, Landmark, Waves, Fish,
  Footprints, Mountain, Layers, Award, SunMedium, ExternalLink,
  Shield, Check, AlertTriangle, FileText, Anchor
} from 'lucide-react';
import { SAMANA_ECONOMIC_MODEL } from '../../data/initialData';
import { Modal } from '../common/Modal';
import { ScrollReveal } from '../common/ScrollReveal';
import './EconomicModelSection.css';

const PILLAR_ICONS = {
  'capital-natural': Trees,
  'libertad-instituciones': Scale,
  'responsabilidad-costos': ShieldCheck,
  'infraestructura-verde': Building2,
  'hub-digital': Cpu,
  'desarrollo-descentralizado': TrendingUp,
};

const ECO_ICONS = [
  Wifi, Zap, Building2, FileCheck, Scale, GraduationCap, Users, Globe
];

const TOURISM_ICONS = {
  't-eco': Trees,
  't-nat': Mountain,
  't-adv': Compass,
  't-trk': Footprints,
  't-whl': Waves,
  't-nau': Waves,
  't-div': Fish,
  't-gas': Sparkles,
  't-cul': Landmark,
  't-com': Users,
  't-wel': SunMedium,
  't-nom': Cpu,
  't-evn': Award,
  't-agr': Trees,
  't-sci': BookOpen
};

const TABS = [
  { id: 'general', label: '1. Modelo y Capital Natural', icon: Trees },
  { id: 'regimen', label: '2. Régimen Especial & Evidencia', icon: Globe },
  { id: 'mercados', label: '3. Mercados Abiertos & Competencia', icon: Scale },
  { id: 'cultura', label: '4. Cultura & Turismo Abierto', icon: Landmark },
  { id: 'descentralizacion', label: '5. Descentralización & Subsidiariedad', icon: Shield },
];

export function EconomicModelSection() {
  const [activeTab, setActiveTab] = useState('general');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDocTab, setModalDocTab] = useState('doc-general');

  const openDocModal = (docTab = 'doc-general') => {
    setModalDocTab(docTab);
    setModalOpen(true);
  };

  return (
    <section id="modelo-economico" className="section-padding economic-model-section">
      <div className="container">
        {/* Main Section Header */}
        <ScrollReveal variant="slideUp" durationMs={700} className="economic-header text-center">
          <div className="economic-badge-row">
            <span className="economic-mini-badge">PROGRAMA PROVINCIAL</span>
            <span className="economic-mini-sub">PATRIA LIBRE — SAMANÁ</span>
          </div>

          <h2 className="economic-title">
            Modelo de Desarrollo <span className="text-yellow-accent">para Samaná</span>
          </h2>

          <p className="economic-subtitle">
            {SAMANA_ECONOMIC_MODEL.tagline}
          </p>

          {/* Central Philosophy Callout */}
          <div className="economic-central-quote-box">
            <div className="quote-mark">“</div>
            <p className="quote-text">
              {SAMANA_ECONOMIC_MODEL.centralQuote}
            </p>
            <div className="quote-formula">
              {SAMANA_ECONOMIC_MODEL.formula}
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation Tabs Bar */}
        <div className="economic-nav-tabs">
          {TABS.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`economic-tab-btn ${isActive ? 'active' : ''}`}
                aria-pressed={isActive}
              >
                <TabIcon size={17} className="tab-btn-icon" />
                <span className="tab-btn-text">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            TAB 1: MODELO ECONÓMICO Y CAPITAL NATURAL
           ========================================================================= */}
        {activeTab === 'general' && (
          <div className="tab-pane active-pane">
            {/* Core Question Callout Card */}
            <ScrollReveal variant="slideUp" durationMs={600} className="economic-question-card">
              <div className="question-left">
                <div className="question-badge">LA PREGUNTA FUNDAMENTAL</div>
                <h3 className="question-title">{SAMANA_ECONOMIC_MODEL.coreQuestion}</h3>
              </div>
              <div className="question-right">
                <p className="question-desc">
                  Nuestro modelo no parte de elegir falsamente entre desarrollo o medio ambiente. Destruir los activos naturales de Samaná es destruir el capital sobre el cual opera su turismo y economía. Crecimiento con reglas claras, criterios técnicos objetivos y responsabilidad civil es el camino de la verdadera prosperidad.
                </p>
                <button
                  onClick={() => openDocModal('doc-general')}
                  className="btn-read-manifesto"
                >
                  <BookOpen size={16} />
                  <span>Leer Documento Completo</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </ScrollReveal>

            {/* 6 Strategic Pillars Grid */}
            <div className="economic-pillars-grid">
              {SAMANA_ECONOMIC_MODEL.pillars.map((pillar, idx) => {
                const Icon = PILLAR_ICONS[pillar.id] || Compass;
                return (
                  <ScrollReveal
                    key={pillar.id}
                    variant="slideUp"
                    delayMs={idx * 70}
                    className="economic-pillar-card"
                  >
                    <div className="pillar-card-top">
                      <div className="pillar-icon-box">
                        <Icon size={24} className="pillar-icon" />
                      </div>
                      <span className="pillar-badge">{pillar.badge}</span>
                    </div>

                    <h3 className="pillar-title">{pillar.title}</h3>
                    <h4 className="pillar-subtitle">{pillar.subtitle}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>

                    <div className="pillar-highlights-box">
                      <div className="highlights-label">Puntos Clave:</div>
                      <ul className="pillar-highlights-list">
                        {pillar.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="pillar-highlight-item">
                            <CheckCircle2 size={14} className="highlight-icon" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Regulación Basada en Riesgo Showcase */}
            <ScrollReveal variant="slideUp" durationMs={700} className="risk-regulation-showcase">
              <div className="risk-showcase-header">
                <div className="risk-badge-wrap">
                  <ShieldCheck size={16} className="text-gold" />
                  <span className="risk-badge-text">EFICIENCIA Y PROTECCIÓN TÉCNICA</span>
                </div>
                <h3 className="risk-showcase-title">
                  {SAMANA_ECONOMIC_MODEL.riskBasedRegulation.title}
                </h3>
                <p className="risk-showcase-desc">
                  {SAMANA_ECONOMIC_MODEL.riskBasedRegulation.desc}
                </p>
              </div>

              <div className="risk-levels-grid">
                {SAMANA_ECONOMIC_MODEL.riskBasedRegulation.levels.map((lvl, idx) => (
                  <div key={idx} className="risk-level-card">
                    <div className="risk-level-top">
                      <span className="risk-level-num">Nivel 0{idx + 1}</span>
                      <span className="risk-level-badge">{lvl.badge}</span>
                    </div>
                    <h4 className="risk-level-title">{lvl.level}</h4>
                    <div className="risk-level-field">
                      <span className="field-lbl">Aplica a:</span>
                      <p className="field-txt">{lvl.appliesTo}</p>
                    </div>
                    <div className="risk-level-field">
                      <span className="field-lbl">Procedimiento:</span>
                      <p className="field-txt highlight">{lvl.mechanism}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Las Terrenas Hub Digital Showcase */}
            <ScrollReveal variant="slideUp" durationMs={700} className="hub-digital-showcase mt-4">
              <div className="hub-showcase-header">
                <div className="hub-badge-wrap">
                  <span className="hub-badge-pill">ESTRATEGIA TECNOLÓGICA</span>
                  <span className="hub-badge-location">LAS TERRENAS, SAMANÁ</span>
                </div>
                <h3 className="hub-showcase-title">
                  Las Terrenas: <span className="text-yellow-accent">Hub Digital del Caribe</span>
                </h3>
                <p className="hub-showcase-subtitle">
                  Atracción de nómadas digitales, ingenieros de software, fundadores de startups y creadores del mundo, sin subsidios burocráticos y conectando directamente con los jóvenes y emprendedores de Samaná.
                </p>
              </div>

              <div className="hub-ecosystem-grid">
                {SAMANA_ECONOMIC_MODEL.ecosystemNeeds.map((need, idx) => {
                  const EcoIcon = ECO_ICONS[idx] || Sparkles;
                  return (
                    <div key={need.num} className="hub-eco-card">
                      <div className="eco-card-header">
                        <span className="eco-num">0{need.num}</span>
                        <EcoIcon size={20} className="eco-icon" />
                      </div>
                      <h4 className="eco-title">{need.title}</h4>
                      <p className="eco-desc">{need.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="hub-philosophy-banner">
                <AlertCircle size={20} className="text-gold flex-shrink-0" />
                <p>
                  <strong>Iniciativa privada y reglas generales:</strong> Coworkings, incubadoras, empresas y eventos deben surgir mediante iniciativa privada. El rol público es simplificar trámites, digitalizar registros, garantizar reglas transparentes y proteger derechos de propiedad.
                </p>
              </div>
            </ScrollReveal>
          </div>
        )}

        {/* =========================================================================
            TAB 2: RÉGIMEN ECONÓMICO ESPECIAL & EVIDENCIA INTERNACIONAL
           ========================================================================= */}
        {activeTab === 'regimen' && (
          <div className="tab-pane active-pane">
            {/* Header Card */}
            <ScrollReveal variant="slideUp" durationMs={600} className="regimen-header-card">
              <div className="regimen-banner-badge">
                <Globe size={15} />
                <span>{SAMANA_ECONOMIC_MODEL.specialRegime.badge}</span>
              </div>
              <h3 className="regimen-banner-title">
                {SAMANA_ECONOMIC_MODEL.specialRegime.title}
              </h3>
              <p className="regimen-banner-subtitle">
                {SAMANA_ECONOMIC_MODEL.specialRegime.subtitle}
              </p>
              <div className="regimen-action-row">
                <div className="regimen-summary-text">
                  {SAMANA_ECONOMIC_MODEL.specialRegime.summary}
                </div>
                <button
                  onClick={() => openDocModal('doc-regimen')}
                  className="btn-read-manifesto"
                >
                  <BookOpen size={16} />
                  <span>Leer Estudio Empírico Completo</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </ScrollReveal>

            {/* Regla de No Discriminación a Empresas Existentes */}
            <div className="equality-rule-banner">
              <div className="equality-rule-header">
                <AlertTriangle size={24} className="text-gold flex-shrink-0" />
                <div>
                  <h4 className="equality-rule-title">
                    {SAMANA_ECONOMIC_MODEL.specialRegime.equalityRule.title}
                  </h4>
                  <p className="equality-rule-stmt">
                    {SAMANA_ECONOMIC_MODEL.specialRegime.equalityRule.statement}
                  </p>
                  <p className="equality-rule-warn">
                    {SAMANA_ECONOMIC_MODEL.specialRegime.equalityRule.warning}
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Salvaguardas Institucionales contra el Rent-Seeking */}
            <div className="section-subheading-block mt-4">
              <div className="subheading-badge">SALVAGUARDAS CONTRA EL CLIENTELISMO</div>
              <h4 className="subheading-title">Transparencia y Evaluación Periódica de la ZEE</h4>
              <p className="subheading-desc">
                Para evitar que el régimen se convierta en un sistema de rentas fiscales o privilegios corporativos cerrados, incorporamos cuatro salvaguardas obligatorias por ley:
              </p>
            </div>

            <div className="safeguards-grid">
              {SAMANA_ECONOMIC_MODEL.specialRegime.safeguards.map((sfg, idx) => (
                <div key={idx} className="safeguard-card">
                  <div className="safeguard-num">0{idx + 1}</div>
                  <h5 className="safeguard-title">{sfg.title}</h5>
                  <p className="safeguard-desc">{sfg.desc}</p>
                </div>
              ))}
            </div>

            {/* 6 Institutional Pillars */}
            <div className="section-subheading-block mt-4">
              <div className="subheading-badge">EL PAQUETE INSTITUCIONAL COMPLETO</div>
              <h4 className="subheading-title">Institucionalidad de Acero: Reglas Previsibles</h4>
              <p className="subheading-desc">
                Una Zona Económica Especial exige certidumbre jurídica total en 6 dimensiones indispensables:
              </p>
            </div>

            <div className="institutional-package-grid">
              {SAMANA_ECONOMIC_MODEL.specialRegime.principles.map((p, idx) => (
                <ScrollReveal
                  key={p.id}
                  variant="slideUp"
                  delayMs={idx * 60}
                  className="institutional-card"
                >
                  <div className="inst-num-box">
                    <span>0{idx + 1}</span>
                  </div>
                  <h4 className="inst-title">{p.title}</h4>
                  <p className="inst-desc">{p.desc}</p>
                </ScrollReveal>
              ))}
            </div>

            {/* International Empirical Cases Analysis with Sources */}
            <div className="section-subheading-block mt-4">
              <div className="subheading-badge">EVIDENCIA COMPARADA MUNDIAL CON FUENTES</div>
              <h4 className="subheading-title">Lecciones Empíricas Internacionales para Samaná</h4>
              <p className="subheading-desc">
                Analizamos la evidencia real de regímenes especiales para no repetir errores y adoptar únicamente prácticas validadas con fuentes institucionales verificables:
              </p>
            </div>

            <div className="cases-grid">
              {SAMANA_ECONOMIC_MODEL.specialRegime.caseStudies.map((c, idx) => (
                <ScrollReveal
                  key={c.id}
                  variant="slideUp"
                  delayMs={idx * 80}
                  className={`case-card ${c.id === 'case-peru' ? 'case-warning' : ''}`}
                >
                  <div className="case-card-header">
                    <div className="case-flag-wrap">
                      <span className="case-flag">{c.flag}</span>
                      <div>
                        <h4 className="case-country">{c.country}</h4>
                        <span className="case-badge">{c.badge}</span>
                      </div>
                    </div>
                  </div>

                  <h5 className="case-title">{c.title}</h5>
                  <p className="case-summary">{c.summary}</p>

                  <div className="case-lesson-box">
                    <div className="case-lesson-label">Hallazgo Empírico:</div>
                    <p className="case-lesson-text">{c.lesson}</p>
                  </div>

                  <div className="case-takeaway-box">
                    <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                    <span>{c.takeaway}</span>
                  </div>

                  {c.sources && (
                    <div className="case-sources-box">
                      <span className="case-sources-label">Fuentes Consultadas:</span>
                      {c.sources.map((src, sIdx) => (
                        <div key={sIdx} className="case-source-line">
                          <span>{src.title} — {src.institution} ({src.year})</span>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: MERCADOS ABIERTOS Y LIBRE COMPETENCIA (NUEVO BLOQUE)
           ========================================================================= */}
        {activeTab === 'mercados' && (
          <div className="tab-pane active-pane">
            <ScrollReveal variant="slideUp" durationMs={600} className="open-markets-header-card">
              <div className="open-markets-badge">
                <Scale size={15} />
                <span>{SAMANA_ECONOMIC_MODEL.openMarketsModel.badge}</span>
              </div>
              <h3 className="open-markets-title">
                {SAMANA_ECONOMIC_MODEL.openMarketsModel.title}
              </h3>
              <p className="open-markets-subtitle">
                {SAMANA_ECONOMIC_MODEL.openMarketsModel.subtitle}
              </p>
              <div className="open-markets-statement-box">
                <p className="open-markets-statement">
                  “{SAMANA_ECONOMIC_MODEL.openMarketsModel.coreStatement}”
                </p>
              </div>
            </ScrollReveal>

            {/* 4 Principios de Mercados Abiertos */}
            <div className="section-subheading-block">
              <div className="subheading-badge">PILARES DE COMPETENCIA</div>
              <h4 className="subheading-title">4 Principios para la Apertura Económica de Samaná</h4>
              <p className="subheading-desc">
                Cualquier persona que cumpla las normativas generales debe poder competir sin ser excluida por acuerdos gremiales o trabas administrativas:
              </p>
            </div>

            <div className="open-markets-grid">
              {SAMANA_ECONOMIC_MODEL.openMarketsModel.principles.map((pr, idx) => (
                <ScrollReveal
                  key={pr.id}
                  variant="slideUp"
                  delayMs={idx * 70}
                  className="open-market-card"
                >
                  <div className="open-market-num">PRINCIPIO 0{idx + 1}</div>
                  <h4 className="open-market-card-title">{pr.title}</h4>
                  <p className="open-market-card-desc">{pr.desc}</p>
                </ScrollReveal>
              ))}
            </div>

            {/* Base Constitucional: Art. 47 */}
            <div className="constitutional-card-banner">
              <div className="constitutional-icon">
                <Shield size={28} className="text-gold" />
              </div>
              <div className="constitutional-content">
                <span className="constitutional-tag">
                  {SAMANA_ECONOMIC_MODEL.openMarketsModel.constitutionalBasis.article}
                </span>
                <p className="constitutional-text">
                  {SAMANA_ECONOMIC_MODEL.openMarketsModel.constitutionalBasis.content}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: CULTURA, IDENTIDAD Y TURISMO ABIERTO
           ========================================================================= */}
        {activeTab === 'cultura' && (
          <div className="tab-pane active-pane">
            <ScrollReveal variant="slideUp" durationMs={600} className="cultura-header-card">
              <div className="cultura-banner-badge">
                <Landmark size={15} />
                <span>{SAMANA_ECONOMIC_MODEL.cultureModel.badge}</span>
              </div>
              <h3 className="cultura-banner-title">
                {SAMANA_ECONOMIC_MODEL.cultureModel.title}
              </h3>
              <p className="cultura-banner-subtitle">
                {SAMANA_ECONOMIC_MODEL.cultureModel.subtitle}
              </p>
              <div className="regimen-action-row">
                <div className="cultura-summary-text">
                  {SAMANA_ECONOMIC_MODEL.cultureModel.summary}
                </div>
                <button
                  onClick={() => openDocModal('doc-cultura')}
                  className="btn-read-manifesto"
                >
                  <BookOpen size={16} />
                  <span>Leer Documento Cultural Completo</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </ScrollReveal>

            {/* Principio de Neutralidad Turística (No Prohibir) */}
            <div className="tourism-neutrality-card">
              <h4 className="neutrality-title">
                {SAMANA_ECONOMIC_MODEL.cultureModel.tourismPhilosophy.title}
              </h4>
              <p className="neutrality-stmt">
                “{SAMANA_ECONOMIC_MODEL.cultureModel.tourismPhilosophy.statement}”
              </p>
              <p className="neutrality-rationale">
                {SAMANA_ECONOMIC_MODEL.cultureModel.tourismPhilosophy.rationale}
              </p>
            </div>

            {/* 3 Pillars of Culture */}
            <div className="cultura-pillars-grid">
              {SAMANA_ECONOMIC_MODEL.cultureModel.pillars.map((cp, idx) => (
                <ScrollReveal
                  key={cp.id}
                  variant="slideUp"
                  delayMs={idx * 80}
                  className="cultura-pillar-card"
                >
                  <div className="cultura-pillar-num">0{idx + 1}</div>
                  <h4 className="cultura-pillar-title">{cp.title}</h4>
                  <p className="cultura-pillar-desc">{cp.desc}</p>
                </ScrollReveal>
              ))}
            </div>

            {/* Facilitar Encadenamientos sin Cuotas Forzosas */}
            <div className="linkages-showcase-box">
              <div className="linkages-header">
                <h4 className="linkages-title">
                  {SAMANA_ECONOMIC_MODEL.cultureModel.localLinkages.title}
                </h4>
                <p className="linkages-desc">
                  {SAMANA_ECONOMIC_MODEL.cultureModel.localLinkages.desc}
                </p>
              </div>
              <div className="linkages-mechanisms-grid">
                {SAMANA_ECONOMIC_MODEL.cultureModel.localLinkages.mechanisms.map((mech, mIdx) => (
                  <div key={mIdx} className="linkage-item">
                    <CheckCircle2 size={16} className="text-gold flex-shrink-0" />
                    <span>{mech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feria Etno Mix */}
            <ScrollReveal variant="slideUp" durationMs={700} className="etnomix-banner mt-4">
              <div className="etnomix-header">
                <div className="etnomix-badge">EJEMPLO VIVO DE CONVIVENCIA</div>
                <h4 className="etnomix-title">
                  {SAMANA_ECONOMIC_MODEL.cultureModel.etnoMixFeature.title}
                </h4>
                <div className="etnomix-location">
                  <MapPin size={15} />
                  <span>{SAMANA_ECONOMIC_MODEL.cultureModel.etnoMixFeature.location}</span>
                </div>
              </div>
              <p className="etnomix-desc">
                {SAMANA_ECONOMIC_MODEL.cultureModel.etnoMixFeature.desc}
              </p>
            </ScrollReveal>

            {/* 15 Types of Tourism */}
            <div className="section-subheading-block mt-4">
              <div className="subheading-badge">DIVERSIFICACIÓN REAL</div>
              <h4 className="subheading-title">Los 15 Nichos de Turismo Abierto en Samaná</h4>
              <p className="subheading-desc">
                Samaná cuenta con la geografía más diversa del país. Cada nicho genera empleo directo e ingresos para guías, transportistas, artesanos y restaurantes locales:
              </p>
            </div>

            <div className="tourism-grid">
              {SAMANA_ECONOMIC_MODEL.cultureModel.tourismTypes.map((tour, idx) => {
                const TourIcon = TOURISM_ICONS[tour.id] || Compass;
                return (
                  <ScrollReveal
                    key={tour.id}
                    variant="slideUp"
                    delayMs={(idx % 5) * 50}
                    className="tourism-card"
                  >
                    <div className="tourism-card-header">
                      <span className="tourism-num">{tour.number}</span>
                      <TourIcon size={18} className="tourism-icon" />
                    </div>
                    <h5 className="tourism-name">{tour.name}</h5>
                    <p className="tourism-desc">{tour.desc}</p>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 5: DESCENTRALIZACIÓN & SUBSIDIARIEDAD (CON PRECISIÓN JURÍDICA)
           ========================================================================= */}
        {activeTab === 'descentralizacion' && (
          <div className="tab-pane active-pane">
            <ScrollReveal variant="slideUp" durationMs={600} className="descent-header-card">
              <div className="descent-banner-badge">
                <Shield size={15} />
                <span>{SAMANA_ECONOMIC_MODEL.decentralizationModel.badge}</span>
              </div>
              <h3 className="descent-banner-title">
                {SAMANA_ECONOMIC_MODEL.decentralizationModel.title}
              </h3>
              <p className="descent-banner-subtitle">
                {SAMANA_ECONOMIC_MODEL.decentralizationModel.subtitle}
              </p>
              <div className="regimen-action-row">
                <div className="descent-summary-text">
                  {SAMANA_ECONOMIC_MODEL.decentralizationModel.summary}
                </div>
                <button
                  onClick={() => openDocModal('doc-descentralizacion')}
                  className="btn-read-manifesto"
                >
                  <BookOpen size={16} />
                  <span>Leer Documento de Descentralización</span>
                  <ChevronRight size={15} />
                </button>
              </div>
            </ScrollReveal>

            {/* Aclaración Constitucional Dominicana */}
            <div className="constitutional-clarification-card">
              <div className="const-clar-top">
                <Landmark size={20} className="text-gold" />
                <h4 className="const-clar-title">
                  {SAMANA_ECONOMIC_MODEL.decentralizationModel.constitutionalClarification.title}
                </h4>
              </div>
              <p className="const-clar-text">
                {SAMANA_ECONOMIC_MODEL.decentralizationModel.constitutionalClarification.desc}
              </p>
            </div>

            {/* Subsidiarity Ladder: De la Persona a la Nación */}
            <div className="section-subheading-block mt-4">
              <div className="subheading-badge">PRINCIPIO DE SUBSIDIARIEDAD</div>
              <h4 className="subheading-title">La Escala de Decisión: De la Persona a la Nación</h4>
              <p className="subheading-desc">
                Lo que pueda resolver el individuo, la familia, el vecindario o el municipio no debe ser centralizado en Santo Domingo:
              </p>
            </div>

            <div className="subsidiary-ladder-container">
              {SAMANA_ECONOMIC_MODEL.decentralizationModel.ladder.map((step, idx) => (
                <ScrollReveal
                  key={idx}
                  variant="slideUp"
                  delayMs={idx * 70}
                  className="ladder-step-card"
                >
                  <div className="ladder-step-badge">{step.step}</div>
                  <h4 className="ladder-step-title">{step.title}</h4>
                  <p className="ladder-step-desc">{step.desc}</p>
                </ScrollReveal>
              ))}
            </div>

            {/* Core Principles Grid */}
            <div className="section-subheading-block mt-4">
              <div className="subheading-badge">PILARES INSTITUCIONALES</div>
              <h4 className="subheading-title">Principios para un Gobierno Local Eficiente y Transparente</h4>
            </div>

            <div className="descent-principles-grid">
              {SAMANA_ECONOMIC_MODEL.decentralizationModel.principles.map((pr, idx) => (
                <ScrollReveal
                  key={pr.id}
                  variant="slideUp"
                  delayMs={idx * 70}
                  className="descent-principle-card"
                >
                  <div className="principle-card-badge">PRINCIPIO 0{idx + 1}</div>
                  <h4 className="principle-card-title">{pr.title}</h4>
                  <p className="principle-card-desc">{pr.desc}</p>
                </ScrollReveal>
              ))}
            </div>

            {/* Golden Rule Callout Banner */}
            <div className="golden-rule-card">
              <div className="golden-rule-icon">
                <Scale size={32} className="text-gold" />
              </div>
              <div className="golden-rule-content">
                <span className="golden-rule-tag">REGLA DE ORO DE PATRIA LIBRE SAMANÁ</span>
                <p className="golden-rule-quote">
                  “{SAMANA_ECONOMIC_MODEL.decentralizationModel.goldenRule}”
                </p>
                <span className="golden-rule-sub">
                  Neutralidad regulatoria, libre concurrencia y fin a barreras gremiales artificiales. Quien cumpla las leyes generales tiene el derecho a emprender.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Global Footer Button */}
        <div className="economic-footer-cta">
          <button
            onClick={() => openDocModal('doc-general')}
            className="btn-pro-yellow economic-main-btn"
          >
            <BookOpen size={18} />
            <span>Consultar Documentos Programáticos Oficiales de Samaná</span>
          </button>
        </div>
      </div>

      {/* Reader Modal for Full Documents */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Documentos Programáticos de Samaná — Patria Libre"
        size="lg"
      >
        <div className="economic-modal-content">
          <div className="modal-doc-switcher">
            <button
              onClick={() => setModalDocTab('doc-general')}
              className={`modal-doc-tab-btn ${modalDocTab === 'doc-general' ? 'active' : ''}`}
            >
              1. Modelo Base
            </button>
            <button
              onClick={() => setModalDocTab('doc-regimen')}
              className={`modal-doc-tab-btn ${modalDocTab === 'doc-regimen' ? 'active' : ''}`}
            >
              2. Régimen Especial & Evidencia
            </button>
            <button
              onClick={() => setModalDocTab('doc-mercados')}
              className={`modal-doc-tab-btn ${modalDocTab === 'doc-mercados' ? 'active' : ''}`}
            >
              3. Mercados Abiertos
            </button>
            <button
              onClick={() => setModalDocTab('doc-cultura')}
              className={`modal-doc-tab-btn ${modalDocTab === 'doc-cultura' ? 'active' : ''}`}
            >
              4. Cultura & Turismo
            </button>
            <button
              onClick={() => setModalDocTab('doc-descentralizacion')}
              className={`modal-doc-tab-btn ${modalDocTab === 'doc-descentralizacion' ? 'active' : ''}`}
            >
              5. Descentralización
            </button>
          </div>

          {modalDocTab === 'doc-general' && (
            <div className="modal-tab-body">
              <div className="modal-lead-banner">
                <h4 className="modal-party-title">PATRIA LIBRE — EQUIPO PROVINCIAL EN SAMANÁ</h4>
                <p className="modal-doc-summary">
                  Lineamientos fundamentales para el crecimiento económico, la seguridad jurídica, la conservación del capital natural y el desarrollo descentralizado de la provincia de Samaná.
                </p>
              </div>

              <div className="doc-section-block">
                <h5 className="doc-h5">1. Samaná y su Potencial Particular</h5>
                <p className="doc-p">
                  Samaná posee condiciones económicas particulares. Una parte sustancial de su valor económico está directamente relacionada con su patrimonio natural: costas, playas, montañas, bosques, ríos, humedales, biodiversidad, el Salto El Limón, el santuario de ballenas jorobadas y la pesca tradicional.
                </p>
                <p className="doc-p">
                  Existe una relación indisociable entre: <strong>Medio Ambiente, Propiedad, Cultura, Turismo, Emprendimiento, Inversión y Desarrollo Económico.</strong>
                </p>
              </div>

              <div className="doc-section-block">
                <h5 className="doc-h5">2. Proteger Samaná También es Proteger su Economía</h5>
                <p className="doc-p">
                  La protección del patrimonio natural de Samaná es una cuestión económica. Cuando el valor de una provincia depende de sus activos naturales, degradar esos activos destruye el capital sobre el cual se desarrolla su economía.
                </p>
              </div>

              <div className="doc-section-block">
                <h5 className="doc-h5">3. Regulación Basada en Riesgo</h5>
                <p className="doc-p">
                  Sustituimos la discrecionalidad por una clasificación objetiva de tres niveles: <em>Riesgo Bajo</em> con registro inmediato; <em>Riesgo Medio</em> con trámite simplificado y plazo máximo vinculante; y <em>Riesgo Alto</em> con evaluación técnica y ambiental previa obligatoria.
                </p>
              </div>
            </div>
          )}

          {modalDocTab === 'doc-regimen' && (
            <div className="modal-tab-body">
              <div className="modal-lead-banner">
                <h4 className="modal-party-title">SAMANÁ COMO RÉGIMEN ECONÓMICO ESPECIAL: EVIDENCIA Y SALVAGUARDAS</h4>
                <p className="modal-doc-summary">
                  Marco de Zona Económica Especial fundamentado en la evidencia comparada internacional y salvaguardas institucionales estrictas contra el rent-seeking.
                </p>
              </div>

              <div className="doc-section-block">
                <h5 className="doc-h5">Principio de No Discriminación</h5>
                <p className="doc-p">
                  Los incentivos deben otorgarse con base en criterios objetivos de inversión, empleo, tecnología o desempeño ambiental, y estar disponibles tanto para empresas nuevas como para las empresas samanenses ya establecidas.
                </p>
              </div>

              <div className="doc-section-block">
                <h5 className="doc-h5">Salvaguardas Institucionales</h5>
                <p className="doc-p">
                  Incorporación obligatoria de cláusula de caducidad quinquenal (<em>sunset clause</em>), publicación abierta del costo fiscal anual, prueba técnica de adicionalidad y evaluación multidimensional periódica.
                </p>
              </div>
            </div>
          )}

          {modalDocTab === 'doc-mercados' && (
            <div className="modal-tab-body">
              <div className="modal-lead-banner">
                <h4 className="modal-party-title">MERCADOS ABIERTOS Y LIBRE COMPETENCIA</h4>
                <p className="modal-doc-summary">
                  Garantía de libre concurrencia en todos los sectores económicos de Samaná conforme al Artículo 47 de la Constitución de la República Dominicana.
                </p>
              </div>

              <div className="doc-section-block">
                <h5 className="doc-h5">Libre Entrada y Neutralidad</h5>
                <p className="doc-p">
                  Asociarse es un derecho legítimo; utilizar una asociación privada para restringir injustificadamente la entrada de competidores a una actividad económica lícita es inaceptable. Quien cumpla las normas generales tiene derecho a operar.
                </p>
              </div>
            </div>
          )}

          {modalDocTab === 'doc-cultura' && (
            <div className="modal-tab-body">
              <div className="modal-lead-banner">
                <h4 className="modal-party-title">CULTURA, IDENTIDAD Y TURISMO ABIERTO</h4>
                <p className="modal-doc-summary">
                  Cultura comunitaria viva, memoria histórica y principio de neutralidad turística entre todos los formatos hoteleros y de naturaleza.
                </p>
              </div>

              <div className="doc-section-block">
                <h5 className="doc-h5">Neutralidad en el Desarrollo Turístico</h5>
                <p className="doc-p">
                  No proponemos prohibir resorts ni favorecer artificialmente ningún modelo. Proponemos reglas neutrales donde resorts, hoteles boutique, operadores de senderismo y turismo comunitario compitan en igualdad de condiciones.
                </p>
              </div>

              <div className="doc-section-block">
                <h5 className="doc-h5">Encadenamientos Locales por Competitividad</h5>
                <p className="doc-p">
                  Facilitar la integración de agricultores, pescadores y artesanos samanenses con los hoteles mediante capacitación, estándares de calidad y ferias B2B, sin cuotas forzosas que distorsionen el mercado.
                </p>
              </div>
            </div>
          )}

          {modalDocTab === 'doc-descentralizacion' && (
            <div className="modal-tab-body">
              <div className="modal-lead-banner">
                <h4 className="modal-party-title">DESCENTRALIZACIÓN Y SUBSIDIARIEDAD</h4>
                <p className="modal-doc-summary">
                  Coordinación intermunicipal, conocimiento local y fortalecimiento de los gobiernos locales con apego al ordenamiento constitucional dominicano.
                </p>
              </div>

              <div className="doc-section-block">
                <h5 className="doc-h5">Realidad Constitucional y Nivel Intermunicipal</h5>
                <p className="doc-p">
                  Reconocemos que en la República Dominicana la provincia es una demarcación intermedia sin gobierno autónomo electo. Fortalecemos los municipios y distritos municipales (Ley 176-07) y proponemos coordinación intermunicipal para desafíos territoriales compartidos.
                </p>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </section>
  );
}

export default EconomicModelSection;
