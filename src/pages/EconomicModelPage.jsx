import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { EconomicModelSection } from '../components/sections/EconomicModelSection';

export function EconomicModelPage() {
  return (
    <div className="page-view economic-model-page">
      <PageHeader
        badge="DOCUMENTO PROGRAMÁTICO PROVINCIAL"
        title="Modelo de Desarrollo para Samaná"
        subtitle="Libertad económica, conservación del capital natural como activo productivo irremplazable, régimen especial con evidencia internacional y descentralización."
        breadcrumbs={[
          { label: 'Propuestas' },
          { label: 'Modelo Económico' }
        ]}
      />
      <EconomicModelSection />
    </div>
  );
}

export default EconomicModelPage;
