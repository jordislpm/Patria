import React, { useState } from 'react';
import { Users, BookOpen, ShieldCheck, CheckCircle2, Award, ExternalLink, ChevronRight, UserPlus } from 'lucide-react';
import { SAMANA_TEAM_STRUCTURE, TRAINING_TOPICS, PARTY_INFO } from '../../data/initialData';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';
import './StructureAndMembersSection.css';

export function StructureAndMembersSection({ onOpenAffiliation }) {
  const [activeTab, setActiveTab] = useState('structure');

  return (
    <section id="equipo" className="section-padding structure-section">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal variant="slideUp" className="section-header text-center">
          <Badge variant="gold" icon={Users}>PATRIA LIBRE EN SAMANÁ</Badge>
          <h2 className="section-title">
            Organización y <span className="text-gradient-gold">Equipo de Samaná</span>
          </h2>
          <p className="section-subtitle">
            Patria Libre — Samaná es el equipo provincial de Patria Libre en la provincia de Samaná. No somos un partido independiente ni una organización separada del proyecto nacional. Nuestro trabajo consiste en representar organizativamente al proyecto, estudiar problemas locales y formar equipos ciudadanos.
          </p>
        </ScrollReveal>

        {/* Functioning Principles Banner */}
        <ScrollReveal variant="slideUp" delayMs={100} className="team-functions-banner glass-card">
          <h3 className="banner-title">¿Cómo Funciona el Equipo de Samaná?</h3>
          <p className="banner-desc">
            Construimos una organización basada en responsabilidades definidas, reuniones periódicas, planificación, documentación, formación continua, trabajo comunitario, evaluación y transparencia interna.
          </p>
          <div className="banner-tagline">
            <strong>"La organización debe estar preparada para continuar funcionando independientemente de cualquier persona particular."</strong>
          </div>
        </ScrollReveal>

        {/* Switch Tabs: Estructura Territorial / Formación Cívica / Transparencia */}
        <div className="team-nav-tabs text-center">
          <button
            className={`team-tab-btn ${activeTab === 'structure' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('structure')}
          >
            Estructura y Comisiones de Trabajo
          </button>
          <button
            className={`team-tab-btn ${activeTab === 'training' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('training')}
          >
            Programa de Formación (13 Áreas)
          </button>
          <button
            className={`team-tab-btn ${activeTab === 'transparency' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('transparency')}
          >
            Transparencia del Equipo
          </button>
        </div>

        {/* Tab 1: Structure Grid */}
        {activeTab === 'structure' && (
          <div className="team-roles-grid animate-fade-in">
            {SAMANA_TEAM_STRUCTURE.map((item, idx) => (
              <ScrollReveal key={idx} variant="slideUp" delayMs={idx * 40}>
                <Card glass hoverable className="role-card">
                  <div className="role-card-top">
                    <span className="role-badge">{item.status}</span>
                  </div>
                  <h3 className="role-title">{item.role}</h3>
                  <div className="role-holder-name">{item.name}</div>
                  <p className="role-desc">{item.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* Tab 2: Training Topics */}
        {activeTab === 'training' && (
          <div className="training-panel glass-card animate-fade-in">
            <div className="training-panel-header text-center">
              <BookOpen size={30} className="text-gold" />
              <h3>Formación Política y Comunitaria</h3>
              <p>
                Queremos que la participación política incluya formación rigurosa. El objetivo no es enseñar consignas, sino aumentar la capacidad de comprender problemas y discutir soluciones fundadas.
              </p>
            </div>

            <div className="training-topics-grid">
              {TRAINING_TOPICS.map((topic, i) => (
                <div key={i} className="training-topic-card">
                  <span className="topic-num">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                  <span className="topic-name">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Transparency */}
        {activeTab === 'transparency' && (
          <div className="transparency-panel glass-card animate-fade-in">
            <div className="transparency-header text-center">
              <ShieldCheck size={32} className="text-gold" />
              <h3>Transparencia del Equipo de Samaná</h3>
              <p className="transparency-quote">
                <strong>"La transparencia debe comenzar antes de ejercer poder público."</strong>
              </p>
              <p className="transparency-sub">
                Esta página publica y actualizará progresivamente la estructura organizativa, responsables, actas de actividades, documentos, propuestas, ingresos y aportes sujetos a publicación, gastos e informes de gestión interna.
              </p>
            </div>

            <div className="transparency-pillars-grid">
              <div className="trans-pillar-card">
                <h4>Cuentas Claras</h4>
                <p>Publicación de aportes voluntarios y gastos operativos del equipo en la provincia.</p>
              </div>
              <div className="trans-pillar-card">
                <h4>Documentación Abierta</h4>
                <p>Todas las actas de asambleas provinciales y propuestas están abiertas a consulta vecinal.</p>
              </div>
              <div className="trans-pillar-card">
                <h4>Evaluación Ciudadana</h4>
                <p>Mecanismos para que cualquier ciudadano audite el cumplimiento de las metas asumidas.</p>
              </div>
            </div>
          </div>
        )}

        {/* Join team CTA */}
        <div className="team-cta-box text-center">
          <p>¿Deseas participar en las comisiones de trabajo de Samaná, Las Terrenas o Sánchez?</p>
          <a href="#afiliacion" className="btn-anchor">
            <Button variant="gold" size="lg" icon={UserPlus} iconPosition="right">
              Sumarse al Equipo Provincial
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
