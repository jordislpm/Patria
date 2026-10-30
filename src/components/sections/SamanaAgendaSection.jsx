import React, { useState, useMemo } from 'react';
import {
  Compass, Search, ChevronRight, TrendingUp, Briefcase, GraduationCap,
  HardHat, Droplets, Trash2, MapPin, Trees, BookOpen, Shield,
  Zap, Activity, Home, Fish, Users, Landmark, Cpu, Car,
  HeartHandshake, Scale, ExternalLink, Calendar, FileText
} from 'lucide-react';
import { SAMANA_AGENDA_AXES, SAMANA_STRATEGIC_PILLARS } from '../../data/initialData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
import { ScrollReveal } from '../common/ScrollReveal';
import './SamanaAgendaSection.css';

const ICON_MAP = {
  TrendingUp, Compass, Briefcase, GraduationCap, HardHat, Droplets,
  Trash2, MapPin, Trees, BookOpen, Shield, Zap, Activity, Home,
  Fish, Users, Landmark, Cpu, Car, HeartHandshake, Scale
};

const COMPETENCE_LABELS = {
  'municipal': 'Competencia Municipal',
  'national': 'Competencia Nacional',
  'shared': 'Competencia Compartida',
  'requires-national-law': 'Requiere Reforma Legal'
};

const SOURCE_TYPE_LABELS = {
  'local-proposal': 'Propuesta Provincial Samaná',
  'under-study': 'En Estudio Técnico',
  'research': 'Investigación / Diagnóstico',
  'official-national': 'Marco Nacional'
};

export function SamanaAgendaSection() {
  const [activePilar, setActivePilar] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAxis, setSelectedAxis] = useState(null);

  const filteredAxes = useMemo(() => {
    let result = SAMANA_AGENDA_AXES;

    if (activePilar !== 'all') {
      result = result.filter((a) => a.pilarId === activePilar);
    }

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.pilarName.toLowerCase().includes(q) ||
          a.priorities.some((p) => p.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activePilar, searchTerm]);

  return (
    <section id="agenda-samana" className="section-padding samana-agenda-section">
      <div className="container">
        {/* Header */}
        <ScrollReveal variant="slideUp" className="section-header text-center">
          <Badge variant="gold" icon={Compass}>AGENDA PROVINCIAL DE SAMANÁ</Badge>
          <h2 className="section-title">
            Una Agenda para <span className="text-gradient-gold">Samaná: 20 Ejes</span>
          </h2>
          <p className="section-subtitle">
            Organizada bajo 6 Grandes Pilares Estratégicos. Construida con información local, fuentes públicas verificadas y evaluación rigurosa para Santa Bárbara, Sánchez, Las Terrenas y los distritos municipales.
          </p>
          <div className="official-disclaimer-pill">
            <span>Clasificación obligatoria: Cada propuesta identifica su nivel de competencia jurídica, estatus y fuentes consultadas.</span>
          </div>
        </ScrollReveal>

        {/* 6 Strategic Pillars Selector Bar */}
        <ScrollReveal variant="slideUp" delayMs={100} className="pillars-selector-wrap">
          <div className="pillars-grid-nav">
            <button
              className={`pilar-nav-btn ${activePilar === 'all' ? 'active' : ''}`}
              onClick={() => setActivePilar('all')}
            >
              <div className="pilar-nav-num">20</div>
              <div className="pilar-nav-title">Todos los Ejes</div>
            </button>
            {SAMANA_STRATEGIC_PILLARS.map((pilar) => (
              <button
                key={pilar.id}
                className={`pilar-nav-btn ${activePilar === pilar.id ? 'active' : ''}`}
                onClick={() => setActivePilar(pilar.id)}
              >
                <div className="pilar-nav-num">{pilar.number}</div>
                <div className="pilar-nav-title">{pilar.title}</div>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="agenda-search-bar">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar por tema (agua, competencia, residuos, turismo, transporte, vivienda)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="agenda-search-input"
            />
          </div>
        </ScrollReveal>

        {/* Axes Grid */}
        <div className="agenda-axes-grid">
          {filteredAxes.map((axis, idx) => {
            const IconComponent = ICON_MAP[axis.icon] || Compass;
            return (
              <ScrollReveal
                key={axis.id}
                variant="slideUp"
                delayMs={(idx % 6) * 60}
                className="axis-grid-item"
              >
                <Card hoverable glass className="axis-card">
                  <div className="axis-card-header">
                    <span className="axis-number">#{axis.number < 10 ? `0${axis.number}` : axis.number}</span>
                    <div className="axis-badges-group">
                      <span className="axis-pilar-tag">{axis.pilarName}</span>
                      <span className="axis-competence-badge">
                        {COMPETENCE_LABELS[axis.competence] || axis.competence}
                      </span>
                    </div>
                  </div>

                  <div className="axis-title-box">
                    <div className="axis-icon-wrap">
                      <IconComponent size={22} className="text-gold" />
                    </div>
                    <h3 className="axis-title">{axis.title}</h3>
                  </div>

                  <p className="axis-summary">{axis.summary}</p>

                  <div className="axis-priorities-preview">
                    <span className="priorities-preview-label">Prioridad Destacada:</span>
                    <p className="priority-first-line">{axis.priorities[0]}</p>
                  </div>

                  <div className="axis-card-footer">
                    <span className="axis-source-type">
                      {SOURCE_TYPE_LABELS[axis.sourceType] || 'Propuesta Local'}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={ChevronRight}
                      iconPosition="right"
                      onClick={() => setSelectedAxis(axis)}
                    >
                      Ver Ficha Completa
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Axis Full Detail Modal with Rigorous Technical & Legal Metadata */}
      {selectedAxis && (
        <Modal
          isOpen={!!selectedAxis}
          onClose={() => setSelectedAxis(null)}
          title={`Eje #${selectedAxis.number}: ${selectedAxis.title}`}
          size="lg"
        >
          <div className="axis-modal-content">
            {/* Metadata Header Box */}
            <div className="axis-meta-box">
              <div className="meta-row">
                <span className="meta-label">Pilar Estratégico:</span>
                <span className="meta-val highlight">{selectedAxis.pilarName}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Competencia Jurídica:</span>
                <span className="meta-val">{COMPETENCE_LABELS[selectedAxis.competence]}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Tipo de Fuente:</span>
                <span className="meta-val">{SOURCE_TYPE_LABELS[selectedAxis.sourceType]}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Estatus de Propuesta:</span>
                <span className="meta-val badge-status">{selectedAxis.status.toUpperCase()}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Última Revisión Técnica:</span>
                <span className="meta-val font-mono">{selectedAxis.lastReviewed}</span>
              </div>
            </div>

            {/* Diagnostic Summary */}
            <div className="modal-section-block">
              <h4 className="modal-h4">Diagnóstico y Objetivo</h4>
              <p className="modal-p">{selectedAxis.summary}</p>
            </div>

            {/* Specific Priorities */}
            <div className="modal-section-block">
              <h4 className="modal-h4">Medidas y Prioridades Concretas</h4>
              <ul className="modal-priorities-list">
                {selectedAxis.priorities.map((item, i) => (
                  <li key={i} className="modal-priority-item">
                    <span className="priority-bullet">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Study Questions */}
            {selectedAxis.studyQuestions && selectedAxis.studyQuestions.length > 0 && (
              <div className="modal-section-block questions-block">
                <h4 className="modal-h4">Preguntas de Evaluación y Estudio</h4>
                <div className="questions-container">
                  {selectedAxis.studyQuestions.map((q, qIdx) => (
                    <div key={qIdx} className="question-card-item">
                      <span className="question-index">0{qIdx + 1}</span>
                      <p className="question-text">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Formal Sources & Public References */}
            {selectedAxis.sources && selectedAxis.sources.length > 0 && (
              <div className="modal-section-block sources-block">
                <h4 className="modal-h4">Fuentes y Referencias Oficiales</h4>
                <div className="sources-list">
                  {selectedAxis.sources.map((s, sIdx) => (
                    <div key={sIdx} className="source-item">
                      <FileText size={15} className="text-gold flex-shrink-0" />
                      <div className="source-info">
                        <span className="source-title">{s.title}</span>
                        <span className="source-institution">{s.institution} ({s.year})</span>
                      </div>
                      {s.url && (
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="source-ext-link"
                          title="Consultar fuente oficial"
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
}

export default SamanaAgendaSection;
