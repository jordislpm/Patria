import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/initialData';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { ScrollReveal } from '../common/ScrollReveal';
import './FaqSection.css';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding faq-section">
      <div className="container">
        <ScrollReveal variant="slideUp" className="section-header text-center">
          <Badge variant="gold" icon={HelpCircle}>CLARIDAD Y RESPUESTAS</Badge>
          <h2 className="section-title">
            Preguntas <span className="text-gradient-gold">Frecuentes</span>
          </h2>
          <p className="section-subtitle">
            Aclaramos con total franqueza el alcance del proyecto nacional, la función del equipo provincial en Samaná y los principios del programa económico.
          </p>
        </ScrollReveal>

        <div className="faq-accordion-container">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} variant="slideUp" delayMs={idx * 60}>
                <div className={`faq-item-card glass-card ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-icon-pill">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-panel animate-fade-in">
                      <p className="faq-answer-text">{item.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
