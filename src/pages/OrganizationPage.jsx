import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { MethodSection } from '../components/sections/MethodSection';
import { StructureAndMembersSection } from '../components/sections/StructureAndMembersSection';

export function OrganizationPage({ onOpenAffiliation }) {
  return (
    <div className="page-view organization-page">
      <PageHeader
        badge="ESTRUCTURA TERRITORIAL & MÉTODO"
        title="Organización, Equipo y Método"
        subtitle="Conoce el método riguroso de 3 niveles con el que evaluamos cada política pública, las comisiones provinciales y los 13 temas de formación cívica y política."
        breadcrumbs={[
          { label: 'Samaná' },
          { label: 'Organización y Equipo' }
        ]}
      />
      {/* 1. Método de Trabajo (3 Niveles y 10 Preguntas) */}
      <MethodSection />

      {/* 2. Equipo Provincial, Comisiones y Formación */}
      <StructureAndMembersSection onOpenAffiliation={onOpenAffiliation} />
    </div>
  );
}

export default OrganizationPage;
