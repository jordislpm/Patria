import React from 'react';
import { Target, HelpCircle, FileSpreadsheet, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { METHODOLOGY_DATA } from '../../data/initialData';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { ScrollReveal } from '../common/ScrollReveal';
import './MethodSection.css';

export function MethodSection() {
  return (
    <section id="metodo" className="section-padding method-section">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal variant="slideUp" className="section-header text-center">
          <Badge variant="gold" icon={Target}>RIGOR Y POLÍTICAS PÚBLICAS</Badge>
          <h2 className="section-title">
            Nuestro Método de <span className="text-gradient-gold">Trabajo en Samaná</span>
          </h2>
          <p className="section-subtitle">
            Rechazamos las promesas demagógicas y las soluciones mágicas. Toda propuesta de Patria Libre — Samaná debe estar fundamentada en evidencia, legalidad, costos claros e incentivos económicos reales.
          </p>
        </ScrollReveal>

        {/* 3 Scope Levels */}
        <div className="method-levels-grid">
          {METHODOLOGY_DATA.levels.map((lvl, idx) => (
            <ScrollReveal key={idx} variant="slideUp" delayMs={idx * 80}>
              <Card glass hoverable className="level-card">
                <span className="level-scope-pill">{lvl.scope}</span>
                <h3 className="level-card-title">{lvl.level}</h3>
                <p className="level-card-desc">{lvl.desc}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* 10 Evaluation Questions */}
        <ScrollReveal variant="slideUp" delayMs={150} className="method-questions-block glass-card">
          <div className="block-header-center">
            <HelpCircle size={24} className="text-gold" />
            <h3 className="block-title">Antes de presentar una propuesta local, nos preguntamos:</h3>
            <p className="block-subtitle">10 interrogantes obligatorias que evitan ocurrencias improvisadas:</p>
          </div>

          <div className="eval-questions-grid">
            {METHODOLOGY_DATA.evaluationQuestions.map((q, i) => (
              <div key={i} className="eval-q-item">
                <span className="eval-q-num">0{i + 1}</span>
                <p className="eval-q-text">{q}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 10 Steps to Build Proposals */}
        <ScrollReveal variant="slideUp" delayMs={200} className="method-steps-block">
          <div className="section-header text-center">
            <FileSpreadsheet size={24} className="text-gold" />
            <h3 className="section-title-sm">
              Cómo Construiremos las <span className="text-gradient-gold">Propuestas para Samaná</span>
            </h3>
            <p className="section-subtitle">
              Cada pliego de propuesta provincial que publiquemos incluirá de manera obligatoria los siguientes 10 apartados:
            </p>
          </div>

          <div className="ten-steps-grid">
            {METHODOLOGY_DATA.proposalSteps.map((s) => (
              <div key={s.num} className="step-card glass-card">
                <div className="step-header">
                  <span className="step-badge">{s.num}</span>
                  <h4 className="step-title">{s.step}</h4>
                </div>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Fiscaliza Nuestro Trabajo Block */}
        <ScrollReveal variant="slideUp" delayMs={250} className="fiscalization-box glass-card text-center">
          <div className="fiscal-icon-wrap">
            <ShieldAlert size={28} className="text-gold" />
          </div>
          <h3 className="fiscal-title">Fiscaliza Nuestro Trabajo</h3>
          <p className="fiscal-intro">
            La ciudadanía samanense debe tener el poder y los canales para preguntarnos en todo momento:
          </p>

          <div className="fiscal-questions-flow">
            <span>¿Qué propusieron?</span>
            <span className="dot">•</span>
            <span>¿Por qué?</span>
            <span className="dot">•</span>
            <span>¿Cuánto cuesta?</span>
            <span className="dot">•</span>
            <span>¿Quién lo decidió?</span>
            <span className="dot">•</span>
            <span>¿Qué evidencia utilizaron?</span>
            <span className="dot">•</span>
            <span>¿Qué resultados obtuvieron?</span>
            <span className="dot">•</span>
            <span>¿Cambió alguna posición y por qué?</span>
          </div>

          <p className="fiscal-closing">
            <strong>"La rendición de cuentas también debe aplicarse a quienes todavía no gobiernan."</strong>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
