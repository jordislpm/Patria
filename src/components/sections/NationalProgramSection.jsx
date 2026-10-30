import React, { useState } from 'react';
import {
  TrendingUp, Receipt, Scissors, Cpu, ShieldAlert, DollarSign,
  Scale, Building, Store, PiggyBank, GraduationCap, HeartPulse,
  Gavel, Layers, ShieldCheck, AlertCircle, CheckCircle2, ChevronRight, ExternalLink
} from 'lucide-react';
import { NATIONAL_PROGRAM, PROGRAM_SPECIAL_NOTES } from '../../data/initialData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
import { ScrollReveal } from '../common/ScrollReveal';
import './NationalProgramSection.css';

const ICON_MAP = {
  TrendingUp, Receipt, Scissors, Cpu, ShieldAlert, DollarSign,
  Scale, Building, Store, PiggyBank, GraduationCap, HeartPulse, Gavel
};

export function NationalProgramSection() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    'all',
    'Economía y Mercados',
    'Finanzas Públicas',
    'Reforma del Estado',
    'Servicios Públicos',
    'Instituciones'
  ];

  const filteredPoints = activeCategory === 'all'
    ? NATIONAL_PROGRAM
    : NATIONAL_PROGRAM.filter((p) => p.category === activeCategory);

  return (
    <section id="base-nacional" className="section-padding national-program-section">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal variant="slideUp" className="section-header text-center">
          <Badge variant="gold" icon={Layers}>BASE PROGRAMÁTICA NACIONAL</Badge>
          <h2 className="section-title">
            Doctrina Nacional de <span className="text-gradient-gold">Patria Libre</span>
          </h2>
          <p className="section-subtitle">
            Patria Libre se fundamenta doctrinalmente en su <strong>Ideario actual de Nueva Derecha</strong> (Soberanía, Vida, Libertad y Prosperidad), con el <strong>Plan ÚnicaVía (2020-2024)</strong> como antecedente programático fundamental: Estado limitado, disciplina fiscal, impuestos bajos, desregulación inteligente y seguridad jurídica.
          </p>

          <div className="critical-diagnosis-box glass-card">
            <h4 className="diagnosis-title">Diagnóstico Crítico Nacional y Antecedente Histórico (Plan ÚnicaVía):</h4>
            <div className="diagnosis-tags-grid">
              <span>• Crecimiento del gasto improductivo</span>
              <span>• Déficits fiscales crónicos</span>
              <span>• Crecimiento acelerado de deuda</span>
              <span>• Impunidad y discrecionalidad</span>
              <span>• Asfixia de anticipos y cargas tributarias</span>
              <span>• Trabas y barreras burocráticas a la entrada</span>
              <span>• Informalidad económica forzada</span>
              <span>• Deterioro en la calidad de servicios públicos</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter categories */}
        <ScrollReveal variant="slideUp" delayMs={100} className="national-categories-tabs text-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`nat-tab-btn ${activeCategory === cat ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === 'all' ? 'Los 13 Pilares Fundamentales' : cat}
            </button>
          ))}
        </ScrollReveal>

        {/* 13 Points Grid */}
        <div className="national-points-grid">
          {filteredPoints.map((point, idx) => {
            const Icon = ICON_MAP[point.icon] || TrendingUp;
            return (
              <ScrollReveal key={point.id} variant="slideUp" delayMs={idx * 50}>
                <Card glass hoverable className="nat-point-card">
                  <div className="nat-card-header">
                    <div className="nat-num-icon">
                      <span className="nat-pill-num">#{point.number}</span>
                      <Icon size={20} className="text-gold" />
                    </div>
                    <Badge variant="gold">{point.badge}</Badge>
                  </div>

                  <h3 className="nat-card-title">{point.title}</h3>
                  <p className="nat-card-summary">{point.summary}</p>

                  <ul className="nat-points-list">
                    {point.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>

                  <div className="nat-card-footer">
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={ChevronRight}
                      iconPosition="right"
                      onClick={() => setSelectedPoint(point)}
                    >
                      Ampliar Explicación
                    </Button>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Special Rigor Section: Seguridad & Medio Ambiente */}
        <ScrollReveal variant="slideUp" delayMs={200} className="special-notes-wrapper">
          <div className="special-notes-header text-center">
            <AlertCircle size={22} className="text-gold" />
            <h3>Notas de Responsabilidad Programática: Seguridad y Medio Ambiente</h3>
            <p>
              Por ética editorial, no atribuimos al programa nacional posiciones que los documentos entregados no permitan verificar con exactitud.
            </p>
          </div>

          <div className="special-notes-grid">
            {PROGRAM_SPECIAL_NOTES.map((note) => (
              <div key={note.id} className="special-note-card glass-card">
                <div className="note-card-top">
                  <h4 className="note-title">{note.title}</h4>
                  <span className="note-status-badge">{note.status}</span>
                </div>
                <p className="note-desc">{note.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* National Portal & Signature Callout */}
        <ScrollReveal variant="slideUp" delayMs={250} className="national-portal-callout">
          <div className="portal-callout-inner">
            <div className="portal-callout-info">
              <span className="portal-callout-pill">PATRIA LIBRE NACIONAL</span>
              <h3 className="portal-callout-title">Apoya el Reconocimiento Oficial del Partido</h3>
              <p className="portal-callout-desc">
                Si compartes los ideales de soberanía, vida, libertad económica y responsabilidad institucional, puedes firmar la petición de reconocimiento o conocer más en la plataforma nacional oficial.
              </p>
            </div>
            <div className="portal-callout-actions">
              <a
                href="https://patrialibre.do/firma"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-national-sign"
              >
                <span>Firma la Petición Nacional</span>
                <ExternalLink size={15} />
              </a>
              <a
                href="https://patrialibre.do/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-national-visit"
              >
                <span>Visitar patrialibre.do</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Point Detail Modal */}
      {selectedPoint && (
        <Modal
          isOpen={!!selectedPoint}
          onClose={() => setSelectedPoint(null)}
          title={`Pilar #${selectedPoint.number}: ${selectedPoint.title}`}
        >
          <div className="modal-nat-content">
            <div className="modal-badge-row">
              <Badge variant="gold">{selectedPoint.badge}</Badge>
              <Badge variant="primary">{selectedPoint.category}</Badge>
            </div>

            <div className="modal-nat-section">
              <h4>Fundamento Doctrinal</h4>
              <p>{selectedPoint.summary}</p>
            </div>

            <div className="modal-nat-section">
              <h4>Medidas y Criterios Centrales</h4>
              <ul className="modal-nat-points">
                {selectedPoint.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="modal-nat-historical-alert">
              <CheckCircle2 size={20} className="text-gold" />
              <p>
                <strong>Patria Libre Samaná aclara:</strong> Toda cifra cuantitativa responde a la propuesta original y está sujeta a las actualizaciones que la dirección nacional adopte oficialmente.
              </p>
            </div>

            <Button variant="gold" fullWidth onClick={() => setSelectedPoint(null)}>
              Cerrar
            </Button>
          </div>
        </Modal>
      )}
    </section>
  );
}
