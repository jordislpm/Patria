import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { AffiliationSection } from '../components/sections/AffiliationSection';
import { CitizenProposalSection } from '../components/sections/CitizenProposalSection';

export function ParticipationPage({ onMemberAdded }) {
  return (
    <div className="page-view participation-page">
      <PageHeader
        badge="PARTICIPACIÓN CIUDADANA"
        title="Afiliación, Militancia y Propuestas"
        subtitle="Súmate formalmente al equipo provincial de Patria Libre en Samaná o envía tus diagnósticos y propuestas para mejorar tu municipio."
        breadcrumbs={[
          { label: 'Samaná' },
          { label: 'Participación y Afiliación' }
        ]}
      />
      {/* 1. Formulario Oficial de Afiliación y Acreditación de Militantes */}
      <AffiliationSection onMemberAdded={onMemberAdded} />

      {/* 2. Buzón de Propuestas Ciudadanas de Samaná */}
      <CitizenProposalSection />
    </div>
  );
}

export default ParticipationPage;
