import React from 'react';
import { FileText, Download, AlertTriangle, ExternalLink } from 'lucide-react';
import { DOCUMENT_CATEGORIES, PARTY_INFO } from '../../data/initialData';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';
import './DocumentsSection.css';

export function DocumentsSection() {
  return (
    <section id="documentos" className="section-padding documents-section">
      <div className="container">
        <ScrollReveal variant="slideUp" className="section-header text-center">
          <Badge variant="gold" icon={FileText}>REPOSITORIO PÚBLICO</Badge>
          <h2 className="section-title">
            Documentos y <span className="text-gradient-gold">Transparencia</span>
          </h2>
          <p className="section-subtitle">
            Acceso libre a todos los programas, estudios económicos, diagnósticos territoriales, presupuestos auditados e informes del equipo provincial.
          </p>
        </ScrollReveal>

        {/* 8 Categories Grid */}
        <div className="documents-grid">
          {DOCUMENT_CATEGORIES.map((doc, idx) => (
            <ScrollReveal key={doc.id} variant="slideUp" delayMs={idx * 50}>
              <Card glass hoverable className="document-card">
                <div className="doc-card-top">
                  <div className="doc-icon-wrap">
                    <FileText size={20} className="text-gold" />
                  </div>
                  <span className="doc-tag">{doc.tag}</span>
                </div>

                <h3 className="doc-title">{doc.title}</h3>
                <p className="doc-desc">{doc.desc}</p>

                <div className="doc-card-footer">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    icon={Download}
                    onClick={() => alert(`Acceso a la sección: ${doc.title}. Los archivos digitales se habilitan en consulta abierta.`)}
                  >
                    Consultar Archivo
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Historical Document Disclaimer Box */}
        <ScrollReveal variant="slideUp" delayMs={200} className="historical-note-card glass-card">
          <div className="historical-icon-wrap">
            <AlertTriangle size={24} className="text-gold" />
          </div>
          <div>
            <h4 className="historical-note-title">Nota Sobre Documentos Históricos</h4>
            <p className="historical-note-text">
              {PARTY_INFO.historicalNote}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
