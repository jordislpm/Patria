import React, { useState } from 'react';
import { UserPlus, Shield, CheckCircle, User, CreditCard, Mail, Phone, MapPin, Briefcase, Sparkles } from 'lucide-react';
import { Input, Select } from '../common/Input';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';
import { Toast } from '../common/Toast';
import { ScrollReveal } from '../common/ScrollReveal';
import { DigitalIDCard } from './DigitalIDCard';
import { memberService } from '../../services/memberService';
import { useLanguage } from '../../context/LanguageContext';
import './AffiliationSection.css';

const REGIONS = [
  'Santa Bárbara de Samaná',
  'Las Terrenas',
  'Sánchez',
  'Arroyo Barril (Distrito Municipal)',
  'El Limón (Distrito Municipal)',
  'Las Galeras (Distrito Municipal)',
  'Otras Provincias (República Dominicana)',
  'Diáspora Dominicana'
];

export function AffiliationSection({ onMemberAdded }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    dni: '',
    email: '',
    phone: '',
    region: 'Santa Bárbara de Samaná',
    occupation: '',
    agreeTerms: false
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [registeredMember, setRegisteredMember] = useState(null);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      setErrorMessage('Debes aceptar la declaración de principios y compromiso democrático.');
      return;
    }
    if (!formData.dni || formData.dni.length < 6) {
      setErrorMessage('Por favor ingresa un número de Cédula/DNI válido.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const newMember = await memberService.registerMember(formData);
      setRegisteredMember(newMember);
      setToast({ message: `¡Afiliación exitosa! Código: ${newMember.id}`, type: 'success' });
      if (onMemberAdded) onMemberAdded();
      // Reset form
      setFormData({
        fullName: '',
        dni: '',
        email: '',
        phone: '',
        region: 'Distrito Capital',
        occupation: '',
        agreeTerms: false
      });
    } catch (err) {
      const errTxt = err.message || 'Error al completar la afiliación.';
      setErrorMessage(errTxt);
      setToast({ message: errTxt, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="afiliacion" className="section-padding affiliation-section">
      <div className="container">
        <div className="affiliation-grid">
          {/* Left Column: Form Intro & Benefits */}
          <ScrollReveal variant="slideRight" className="affiliation-intro">
            <Badge variant="gold" icon={UserPlus}>{t.affiliation.badge}</Badge>
            <h2 className="section-title">
              {t.affiliation.title}<span className="text-gradient-gold">{t.affiliation.titleAccent}</span>
            </h2>
            <p className="section-subtitle">
              {t.affiliation.subtitle}
            </p>

            <div className="benefits-list">
              <div className="benefit-item">
                <CheckCircle className="benefit-icon text-gold" size={22} />
                <div>
                  <h4 className="benefit-title">{t.affiliation.b1Title}</h4>
                  <p className="benefit-desc">{t.affiliation.b1Desc}</p>
                </div>
              </div>

              <div className="benefit-item">
                <CheckCircle className="benefit-icon text-gold" size={22} />
                <div>
                  <h4 className="benefit-title">{t.affiliation.b2Title}</h4>
                  <p className="benefit-desc">{t.affiliation.b2Desc}</p>
                </div>
              </div>

              <div className="benefit-item">
                <CheckCircle className="benefit-icon text-gold" size={22} />
                <div>
                  <h4 className="benefit-title">{t.affiliation.b3Title}</h4>
                  <p className="benefit-desc">{t.affiliation.b3Desc}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Form Card */}
          <ScrollReveal variant="slideLeft" delayMs={200} className="affiliation-form-card glass-card">
            <div className="form-card-header">
              <h3 className="form-card-title font-heading">{t.affiliation.formTitle}</h3>
              <p className="form-card-sub">{t.affiliation.formSub}</p>
            </div>

            {errorMessage && (
              <div className="form-error-banner animate-fade-in">
                <Shield size={18} />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="affiliation-form">
              <Input
                label={t.affiliation.fullNameLabel}
                name="fullName"
                placeholder="Ej. María Fernanda Rossi"
                value={formData.fullName}
                onChange={handleChange}
                icon={User}
                required
              />

              <div className="form-row-2">
                <Input
                  label={t.affiliation.dniLabel}
                  name="dni"
                  placeholder="Ej. 12345678"
                  value={formData.dni}
                  onChange={handleChange}
                  icon={CreditCard}
                  required
                />
                <Input
                  label={t.affiliation.emailLabel}
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                  value={formData.email}
                  onChange={handleChange}
                  icon={Mail}
                  required
                />
              </div>

              <div className="form-row-2">
                <Input
                  label={t.affiliation.phoneLabel}
                  name="phone"
                  placeholder="+54 9 11 0000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  icon={Phone}
                  required
                />
                <Select
                  label={t.affiliation.regionLabel}
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  options={REGIONS}
                  icon={MapPin}
                  required
                />
              </div>

              <Input
                label={t.affiliation.occupationLabel}
                name="occupation"
                placeholder="Ej. Ingeniero, Docente, Estudiante, Comerciante"
                value={formData.occupation}
                onChange={handleChange}
                icon={Briefcase}
              />

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />
                  <span>{t.affiliation.termsCheck}</span>
                </label>
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                fullWidth
                loading={loading}
                icon={Sparkles}
              >
                {loading ? t.affiliation.loadingBtn : t.affiliation.submitBtn}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Success Modal showing Newly Issued ID Card */}
      {registeredMember && (
        <Modal
          isOpen={!!registeredMember}
          onClose={() => setRegisteredMember(null)}
          title="¡Afiliación Exitosa! Tu Carnet ha sido emitido"
          maxWidth="600px"
        >
          <div className="success-modal-content">
            <p className="success-txt">
              ¡Bienvenido a PATRIA, <strong>{registeredMember.fullName}</strong>! Tu número de acreditación es{' '}
              <span className="text-gold font-mono">{registeredMember.id}</span>.
            </p>
            <DigitalIDCard member={registeredMember} />
            <Button variant="primary" fullWidth onClick={() => setRegisteredMember(null)}>
              Finalizar
            </Button>
          </div>
        </Modal>
      )}
    </section>
  );
}
