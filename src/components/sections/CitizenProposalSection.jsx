import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, FileText, AlertCircle } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ScrollReveal } from '../common/ScrollReveal';
import './CitizenProposalSection.css';

const LOCAL_STORAGE_KEY = 'patria_samana_proposals';

export function CitizenProposalSection() {
  const [formData, setFormData] = useState({
    municipio: 'Santa Bárbara de Samaná',
    comunidad: '',
    problema: '',
    desdeCuando: '',
    aQuienAfecta: '',
    institucionResponsable: '',
    evidencia: '',
    solucionPropuesta: '',
    contacto: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const municipios = [
    'Santa Bárbara de Samaná (Municipio Cabecera)',
    'Las Terrenas',
    'Sánchez',
    'Arroyo Barril (Distrito Municipal)',
    'El Limón (Distrito Municipal)',
    'Las Galeras (Distrito Municipal)'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // Save locally
      try {
        const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
        const newProposal = {
          ...formData,
          id: `PROP-${Date.now()}`,
          date: new Date().toLocaleDateString('es-DO')
        };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([newProposal, ...existing]));
      } catch (err) {
        console.error('Storage error:', err);
      }

      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      municipio: 'Santa Bárbara de Samaná',
      comunidad: '',
      problema: '',
      desdeCuando: '',
      aQuienAfecta: '',
      institucionResponsable: '',
      evidencia: '',
      solucionPropuesta: '',
      contacto: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="propuestas-ciudadanas" className="section-padding citizen-proposal-section">
      <div className="container">
        <ScrollReveal variant="slideUp" className="section-header text-center">
          <Badge variant="gold" icon={MessageSquare}>CANAL DIRECTO CON SAMANÁ</Badge>
          <h2 className="section-title">
            Buzón de <span className="text-gradient-gold">Propuestas Ciudadanas</span>
          </h2>
          <p className="section-subtitle">
            ¿Existe un problema en tu comunidad o barrio? Envíanos la información siguiendo este formato riguroso. Las propuestas serán estudiadas técnicamente por el equipo antes de convertirse en posiciones del partido.
          </p>
        </ScrollReveal>

        <div className="proposal-form-container">
          {submitted ? (
            <div className="submission-success-card glass-card text-center">
              <CheckCircle2 size={54} className="text-gold success-icon" />
              <h3 className="success-title">¡Propuesta Registrada Exitosamente!</h3>
              <p className="success-desc">
                Tu reporte para <strong>{formData.municipio} — {formData.comunidad}</strong> ha sido recibido por la Comisión de Programa y Políticas Públicas de Samaná. Será evaluado con los 10 criterios metodológicos.
              </p>
              <div className="success-box-details">
                <p><strong>Problema reportado:</strong> {formData.problema}</p>
                <p><strong>Solución planteada:</strong> {formData.solucionPropuesta || 'En proceso de estudio conjunto'}</p>
              </div>
              <Button variant="gold" onClick={resetForm}>
                Enviar Otra Problemática o Propuesta
              </Button>
            </div>
          ) : (
            <Card glass className="citizen-form-card">
              <form onSubmit={handleSubmit} className="citizen-proposal-form">
                <div className="form-grid-two">
                  {/* Municipio */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="municipio">
                      Municipio o Distrito Municipal *
                    </label>
                    <select
                      id="municipio"
                      name="municipio"
                      value={formData.municipio}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      {municipios.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  {/* Comunidad */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="comunidad">
                      Comunidad, Barrio o Paraje *
                    </label>
                    <input
                      id="comunidad"
                      type="text"
                      name="comunidad"
                      placeholder="Ej. El Portillo, Pueblo Nuevo, Los Pescadores..."
                      value={formData.comunidad}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Problema */}
                <div className="form-group">
                  <label className="form-label" htmlFor="problema">
                    Descripción del Problema Concreto *
                  </label>
                  <textarea
                    id="problema"
                    name="problema"
                    rows="3"
                    placeholder="Describe de forma clara qué está sucediendo y sus causas visibles..."
                    value={formData.problema}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                  />
                </div>

                <div className="form-grid-two">
                  {/* Desde cuándo existe */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="desdeCuando">
                      ¿Desde cuándo existe? *
                    </label>
                    <input
                      id="desdeCuando"
                      type="text"
                      name="desdeCuando"
                      placeholder="Ej. Hace 6 meses / Desde hace 3 años..."
                      value={formData.desdeCuando}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  {/* A quién afecta */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="aQuienAfecta">
                      ¿A quién afecta? *
                    </label>
                    <input
                      id="aQuienAfecta"
                      type="text"
                      name="aQuienAfecta"
                      placeholder="Ej. 120 familias trabajadoras, pescadores, comerciantes..."
                      value={formData.aQuienAfecta}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid-two">
                  {/* Institución responsable */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="institucionResponsable">
                      Institución con Competencia Legal *
                    </label>
                    <input
                      id="institucionResponsable"
                      type="text"
                      name="institucionResponsable"
                      placeholder="Ej. Ayuntamiento Municipal, INAPA, MOPC, Medio Ambiente..."
                      value={formData.institucionResponsable}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>

                  {/* Evidencia o documentos */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="evidencia">
                      Evidencia, Fotos o Enlaces Disponibles
                    </label>
                    <input
                      id="evidencia"
                      type="text"
                      name="evidencia"
                      placeholder="Enlace a imágenes, denuncias previas o descripción de documentos"
                      value={formData.evidencia}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Solución propuesta */}
                <div className="form-group">
                  <label className="form-label" htmlFor="solucionPropuesta">
                    Solución Propuesta o Alternativa Vecinal *
                  </label>
                  <textarea
                    id="solucionPropuesta"
                    name="solucionPropuesta"
                    rows="3"
                    placeholder="¿Qué sugieres que se haga? ¿Existe una solución comunitaria o de mercado?"
                    value={formData.solucionPropuesta}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                  />
                </div>

                {/* Información de contacto */}
                <div className="form-group">
                  <label className="form-label" htmlFor="contacto">
                    Tu Información de Contacto (Teléfono / WhatsApp o Correo) *
                  </label>
                  <input
                    id="contacto"
                    type="text"
                    name="contacto"
                    placeholder="Nombre completo y WhatsApp para que el equipo provincial dé seguimiento"
                    value={formData.contacto}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-footer-action">
                  <div className="form-privacy-note">
                    <AlertCircle size={16} className="text-gold" />
                    <span>Tu información de contacto se resguarda bajo estricta reserva ética.</span>
                  </div>
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    icon={Send}
                    iconPosition="right"
                    disabled={loading}
                    className="btn-submit-proposal"
                  >
                    {loading ? 'Registrando Propuesta...' : 'Enviar Propuesta para Estudio'}
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
