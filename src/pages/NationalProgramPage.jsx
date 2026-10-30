import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { NationalProgramSection } from '../components/sections/NationalProgramSection';

export function NationalProgramPage() {
  return (
    <div className="page-view national-program-page">
      <PageHeader
        badge="BASE PROGRAMÁTICA NACIONAL"
        title="13 Pilares Fundamentales de Patria Libre"
        subtitle="Propuesta orientadora nacional basada en la libertad económica, reducción de impuestos, disciplina fiscal, desregulación y límites estrictos al poder político."
        breadcrumbs={[
          { label: 'Propuestas' },
          { label: 'Base Nacional' }
        ]}
      />
      <NationalProgramSection />
    </div>
  );
}

export default NationalProgramPage;
