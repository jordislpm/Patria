import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { SamanaAgendaSection } from '../components/sections/SamanaAgendaSection';

export function SamanaAgendaPage() {
  return (
    <div className="page-view samana-agenda-page">
      <PageHeader
        badge="AGENDA PROVINCIAL SAMANÁ"
        title="Agenda para Samaná: 20 Ejes de Trabajo"
        subtitle="Prioridades de inversión, infraestructura, ordenamiento territorial, agua potable, vivienda y desarrollo comunitario para los municipios y distritos de la provincia."
        breadcrumbs={[
          { label: 'Propuestas' },
          { label: 'Agenda para Samaná' }
        ]}
      />
      <SamanaAgendaSection />
    </div>
  );
}

export default SamanaAgendaPage;
