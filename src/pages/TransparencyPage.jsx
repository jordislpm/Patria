import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { DocumentsSection } from '../components/sections/DocumentsSection';
import { FaqSection } from '../components/sections/FaqSection';

export function TransparencyPage() {
  return (
    <div className="page-view transparency-page">
      <PageHeader
        badge="TRANSPARENCIA & AUDITORÍA CIUDADANA"
        title="Documentos Públicos y Preguntas Frecuentes"
        subtitle="Acceso libre a todos los programas, estudios económicos, diagnósticos territoriales, presupuestos auditados y respuestas directas a las preguntas frecuentes."
        breadcrumbs={[
          { label: 'Transparencia' },
          { label: 'Documentos & FAQ' }
        ]}
      />
      {/* 1. Repositorio Oficial de Documentos y Estudios */}
      <DocumentsSection />

      {/* 2. Preguntas Frecuentes (FAQ) */}
      <FaqSection />
    </div>
  );
}

export default TransparencyPage;
