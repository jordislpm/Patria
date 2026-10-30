import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import './Toast.css';

export function Toast({ message, type = 'success', onClose, durationMs = 4000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, durationMs);
    return () => clearTimeout(timer);
  }, [message, durationMs, onClose]);

  if (!message) return null;

  const icons = {
    success: <CheckCircle2 size={20} className="toast-icon text-emerald" />,
    error: <AlertCircle size={20} className="toast-icon text-crimson" />,
    info: <Info size={20} className="toast-icon text-gold" />
  };

  return (
    <div className={`patria-toast toast-${type} animate-fade-in`}>
      {icons[type] || icons.info}
      <span className="toast-message">{message}</span>
      <button onClick={onClose} className="toast-close-btn" aria-label="Cerrar">
        <X size={16} />
      </button>
    </div>
  );
}
