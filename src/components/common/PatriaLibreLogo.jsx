import React from 'react';

/**
 * Official Patria Libre Wave Emblem ("Logo Pequeño")
 * 3 ascending waves: Cyan (front), Gold (middle), Royal Blue (back)
 */
export function PatriaLibreEmblem({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`patria-emblem-svg ${className}`}
      aria-label="Emblema Oficial Patria Libre"
    >
      <defs>
        {/* Wave 3: Royal Blue (Back & Tallest) */}
        <linearGradient id="plWaveBlue" x1="60" y1="10" x2="100" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#0a3a78" />
        </linearGradient>

        {/* Wave 2: Gold / Yellow (Middle) */}
        <linearGradient id="plWaveGold" x1="42" y1="32" x2="68" y2="108" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#facc15" />
          <stop offset="60%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>

        {/* Wave 1: Cyan / Sky Blue (Front & Left) */}
        <linearGradient id="plWaveCyan" x1="22" y1="52" x2="48" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="70%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
      </defs>

      {/* Wave 3: Tall Royal Blue Wave */}
      <path
        d="M68 10C86 22 101 48 99 76C98 92 86 104 71 104C80 97 85 86 84 72C83 50 73 30 68 10Z"
        fill="url(#plWaveBlue)"
      />

      {/* Wave 2: Middle Gold/Yellow Wave */}
      <path
        d="M45 32C61 41 73 61 70 85C69 96 60 106 48 106C56 99 59 90 58 79C57 59 50 44 45 32Z"
        fill="url(#plWaveGold)"
      />

      {/* Wave 1: Front Cyan Wave */}
      <path
        d="M22 54C36 61 46 77 44 94C43 103 36 108 27 108C34 103 36 96 35 87C34 73 28 62 22 54Z"
        fill="url(#plWaveCyan)"
      />
    </svg>
  );
}

/**
 * Official Patria Libre — Samaná Full Logo ("Logo Completo")
 * Features the 3-wave emblem + "PATRIA LIBRE" in royal blue + "SAMANÁ" in cyan with wide tracking
 */
export function PatriaLibreLogoCompleto({ height = 42, lightText = false, className = '' }) {
  // Color configuration:
  // lightText = true for dark background/footer, false for light navbar/cards
  const titleColor = lightText ? '#ffffff' : '#003380';
  const subColor = '#00a3e0'; // Official cyan from uploaded logo

  return (
    <div
      className={`patria-logo-completo-wrap ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        lineHeight: 1,
        userSelect: 'none',
        textDecoration: 'none'
      }}
    >
      {/* Wave Emblem */}
      <div style={{ height: `${height}px`, width: `${height * 0.9}px`, display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <PatriaLibreEmblem size={height} />
      </div>

      {/* Text Group */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '2px'
        }}
      >
        {/* Line 1: PATRIA LIBRE */}
        <span
          style={{
            fontFamily: "'Outfit', 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: `${height * 0.44}px`,
            fontWeight: 900,
            letterSpacing: '0.02em',
            color: titleColor,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            lineHeight: 1
          }}
        >
          PATRIA LIBRE
        </span>

        {/* Line 2: SAMANÁ */}
        <span
          style={{
            fontFamily: "'Outfit', 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: `${height * 0.3}px`,
            fontWeight: 800,
            letterSpacing: '0.36em',
            color: subColor,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            lineHeight: 1,
            paddingLeft: '2px'
          }}
        >
          SAMANÁ
        </span>
      </div>
    </div>
  );
}

/**
 * Unified Logo Component with variant support
 */
export function PatriaLibreLogo({ variant = 'full', height = 40, lightText = false, className = '' }) {
  if (variant === 'small' || variant === 'emblem') {
    return <PatriaLibreEmblem size={height} className={className} />;
  }
  return <PatriaLibreLogoCompleto height={height} lightText={lightText} className={className} />;
}
