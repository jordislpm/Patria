import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSwitcher.css';

export function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="language-switcher-btn"
      title={`Cambiar idioma / Switch language (Actual: ${lang})`}
    >
      <Globe size={18} className="globe-icon" />
      <span className="lang-code font-heading">{lang}</span>
    </button>
  );
}
