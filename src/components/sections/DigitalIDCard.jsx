import React from 'react';
import { Flag, CheckCircle2, QrCode, ShieldCheck, Download, Printer } from 'lucide-react';
import { Button } from '../common/Button';
import './DigitalIDCard.css';

export function DigitalIDCard({ member, onPrint }) {
  if (!member) return null;

  return (
    <div className="id-card-wrapper animate-fade-in">
      <div className="digital-id-card">
        {/* Card Header Background */}
        <div className="id-card-header">
          <div className="id-brand">
            <div className="id-logo-icon">
              <Flag size={18} className="text-gold" />
            </div>
            <div>
              <h4 className="id-title font-heading">PATRIA LIBRE</h4>
              <span className="id-subtitle">EQUIPO PROVINCIAL SAMANÁ</span>
            </div>
          </div>
          <div className="id-status-badge">
            <CheckCircle2 size={14} /> {member.status || 'VERIFICADO'}
          </div>
        </div>

        {/* Card Body */}
        <div className="id-card-body">
          <div className="id-avatar-box">
            <div className="id-avatar-placeholder">
              {member.fullName.charAt(0).toUpperCase()}
            </div>
            <span className="id-badge-role">{member.role}</span>
          </div>

          <div className="id-details">
            <div className="id-field">
              <span className="id-label">Nombre del Militante</span>
              <span className="id-value font-heading">{member.fullName}</span>
            </div>

            <div className="id-grid-fields">
              <div className="id-field">
                <span className="id-label">DNI / Cédula</span>
                <span className="id-value">{member.dniMasked || member.dni}</span>
              </div>
              <div className="id-field">
                <span className="id-label">Código de Afiliado</span>
                <span className="id-value text-gold font-mono">{member.id}</span>
              </div>
              <div className="id-field">
                <span className="id-label">Región / Territorio</span>
                <span className="id-value">{member.region}</span>
              </div>
              <div className="id-field">
                <span className="id-label">Fecha de Alta</span>
                <span className="id-value">{member.affiliationDate}</span>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="id-qr-box">
            <img
              src={member.qrCodeUrl || member.qrCodeMock || `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(member.verificationUrl || member.id)}`}
              alt="Código QR de verificación"
              className="qr-img"
            />
            <span className="qr-caption">Acreditación Oficial</span>
          </div>
        </div>

        {/* Security watermark */}
        <div className="id-watermark">
          <ShieldCheck size={120} />
        </div>
      </div>

      <div className="id-actions">
        <Button variant="outline" size="sm" icon={Printer} onClick={() => window.print()}>
          Imprimir Acreditación
        </Button>
        <Button variant="gold" size="sm" icon={Download} onClick={() => alert('Descargando Carnet Digital en formato PDF/Imagen...')}>
          Descargar Carnet
        </Button>
      </div>
    </div>
  );
}
