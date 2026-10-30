import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { NewsAndEventsSection } from '../components/sections/NewsAndEventsSection';

export function NewsPage() {
  return (
    <div className="page-view news-page">
      <PageHeader
        badge="ACTUALIDAD PROVINCIAL"
        title="Noticias y Agenda Territorial"
        subtitle="Sigue de cerca las actividades, asambleas de transparencia, foros temáticos y comunicados oficiales del equipo de Patria Libre en la provincia de Samaná."
        breadcrumbs={[
          { label: 'Samaná' },
          { label: 'Noticias y Actividades' }
        ]}
      />
      <NewsAndEventsSection />
    </div>
  );
}

export default NewsPage;
