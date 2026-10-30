import React, { useState, useMemo } from 'react';
import { Search, ChevronRight, TrendingUp, GraduationCap, HeartPulse, ShieldCheck, FileCheck, CheckCircle2, Layers } from 'lucide-react';
import { GOVERNMENT_PLAN_AXES } from '../../data/initialData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
import { ScrollReveal } from '../common/ScrollReveal';
import { useLanguage } from '../../context/LanguageContext';
import './GovernmentPlanSection.css';

const ICON_MAP = {
  TrendingUp,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
  FileCheck
};

export function GovernmentPlanSection() {
  const { t } = useLanguage();
  const [activeAxisId, setActiveAxisId] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProposal, setSelectedProposal] = useState(null);

  // Flatten & filter proposals based on selected axis tab and search query
  const filteredProposals = useMemo(() => {
    let result = [];
    GOVERNMENT_PLAN_AXES.forEach((axis) => {
      if (activeAxisId === 'all' || axis.id === activeAxisId) {
        axis.proposals.forEach((prop) => {
          result.push({
            ...prop,
            axisTitle: axis.title,
            axisColor: axis.color,
            axisIcon: axis.icon
          });
        });
      }
    });

    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.axisTitle.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeAxisId, searchTerm]);

  return (
    <section id="plan" className="section-padding plan-section">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal variant="slideUp" className="section-header text-center">
          <Badge variant="gold" icon={Layers}>{t.plan.badge}</Badge>
          <h2 className="section-title">
            {t.plan.title}<span className="text-gradient-gold">{t.plan.titleAccent}</span>
          </h2>
          <p className="section-subtitle">
            {t.plan.subtitle}
          </p>
        </ScrollReveal>

        {/* Filter Bar: Tabs & Search */}
        <ScrollReveal variant="slideUp" delayMs={150} className="plan-filter-bar glass-card">
          <div className="plan-tabs">
            <button
              className={`plan-tab ${activeAxisId === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveAxisId('all')}
            >
              {t.plan.allTab}
            </button>
            {GOVERNMENT_PLAN_AXES.map((axis) => {
              const Icon = ICON_MAP[axis.icon] || Layers;
              return (
                <button
                  key={axis.id}
                  className={`plan-tab ${activeAxisId === axis.id ? 'is-active' : ''}`}
                  onClick={() => setActiveAxisId(axis.id)}
                >
                  <Icon size={16} />
                  <span>{axis.title.split('&')[0]}</span>
                </button>
              );
            })}
          </div>

          <div className="plan-search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder={t.plan.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="plan-search-input"
            />
          </div>
        </ScrollReveal>

        {/* Proposals Grid */}
        <div className="proposals-grid">
          {filteredProposals.length > 0 ? (
            filteredProposals.map((prop, idx) => {
              const Icon = ICON_MAP[prop.axisIcon] || Layers;
              return (
                <ScrollReveal key={prop.id} variant="zoomIn" delayMs={idx * 80}>
                  <Card glass hoverable className="proposal-card">
                    <div className="proposal-header">
                      <span className="proposal-axis-badge" style={{ borderColor: prop.axisColor, color: prop.axisColor }}>
                        <Icon size={14} /> {prop.axisTitle}
                      </span>
                      <Badge variant="primary">{prop.scope}</Badge>
                    </div>

                    <h3 className="proposal-title">{prop.title}</h3>
                    <p className="proposal-desc">{prop.description}</p>

                    <div className="proposal-footer">
                      <div className="proposal-metric-badge">
                        <CheckCircle2 size={16} className="text-gold" />
                        <span>{prop.metric}</span>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        icon={ChevronRight}
                        iconPosition="right"
                        onClick={() => setSelectedProposal(prop)}
                      >
                        {t.plan.detailsBtn}
                      </Button>
                    </div>
                  </Card>
                </ScrollReveal>
              );
            })
          ) : (
            <div className="no-proposals-box glass-card">
              <p>{t.plan.noResults} "{searchTerm}".</p>
              <Button variant="outline" size="sm" onClick={() => { setSearchTerm(''); setActiveAxisId('all'); }}>
                {t.plan.resetFilters}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Proposal Detail Modal */}
      {selectedProposal && (
        <Modal
          isOpen={!!selectedProposal}
          onClose={() => setSelectedProposal(null)}
          title={selectedProposal.title}
        >
          <div className="modal-proposal-content">
            <div className="modal-meta-row">
              <Badge variant="gold">{selectedProposal.axisTitle}</Badge>
              <Badge variant="primary">Scope: {selectedProposal.scope}</Badge>
            </div>

            <div className="modal-section">
              <h4>{t.plan.modalTitle}</h4>
              <p>{selectedProposal.description}</p>
            </div>

            <div className="modal-section metric-highlight-box">
              <CheckCircle2 size={24} className="text-gold" />
              <div>
                <span className="metric-label">{t.plan.modalMetric}</span>
                <p className="metric-value font-heading">{selectedProposal.metric}</p>
              </div>
            </div>

            <div className="modal-section">
              <h4>{t.plan.modalFunding}</h4>
              <p>
                Esta propuesta cuenta con respaldo de viabilidad presupuestaria contemplado dentro de la reestructuración de la administración pública y alianzas público-privadas de alto rendimiento.
              </p>
            </div>

            <div className="modal-actions">
              <Button variant="gold" fullWidth onClick={() => setSelectedProposal(null)}>
                {t.plan.understood}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
