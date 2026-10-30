import React, { useState } from 'react';
import { Newspaper, Calendar, ArrowRight, Tag } from 'lucide-react';
import { NEWS_AND_EVENTS } from '../../data/initialData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
import './NewsAndEventsSection.css';

export function NewsAndEventsSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="noticias" className="section-padding news-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <Badge variant="gold" icon={Newspaper}>Actualidad y Actividades</Badge>
          <h2 className="section-title">
            Noticias y <span className="text-gradient-gold">Actividades en Samaná</span>
          </h2>
          <p className="section-subtitle">
            Encuentros comunitarios, jornadas de formación, visitas a municipios y comunicados oficiales del equipo provincial de Patria Libre.
          </p>
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {NEWS_AND_EVENTS.map((item) => (
            <Card key={item.id} glass hoverable className="news-card">
              <div className="news-img-wrap">
                <img src={item.image} alt={item.title} className="news-img" />
                <span className="news-category-badge">{item.category}</span>
              </div>

              <div className="news-content">
                <div className="news-date">
                  <Calendar size={14} className="text-gold" /> {item.date}
                </div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-summary">{item.summary}</p>

                <div className="news-footer">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={ArrowRight}
                    iconPosition="right"
                    onClick={() => setSelectedArticle(item)}
                  >
                    Leer Nota Completa
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <Modal
          isOpen={!!selectedArticle}
          onClose={() => setSelectedArticle(null)}
          title={selectedArticle.title}
        >
          <div className="modal-article-content">
            <div className="article-meta">
              <Badge variant="gold">{selectedArticle.category}</Badge>
              <span className="article-date">
                <Calendar size={14} /> {selectedArticle.date}
              </span>
            </div>

            <img src={selectedArticle.image} alt={selectedArticle.title} className="article-modal-img" />

            <div className="article-text">
              <p className="lead-text">{selectedArticle.summary}</p>
              <p>
                El Movimiento Político PATRIA reafirma su compromiso ineludible con la construcción de un proyecto nacional justo, democrático y enfocado en el desarrollo integral. Invitamos a toda la militancia y a la ciudadanía a sumarse activamente a las próximas asambleas y mesas de consulta.
              </p>
            </div>

            <div className="modal-actions">
              <Button variant="gold" fullWidth onClick={() => setSelectedArticle(null)}>
                Cerrar Noticia
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
