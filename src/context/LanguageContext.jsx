import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  ES: {
    nav: {
      home: 'Inicio',
      proposals: 'Propuestas',
      samanaMenu: 'Samaná',
      transparencyMenu: 'Transparencia',
      economicModel: 'Modelo Económico para Samaná',
      economicModelDesc: 'Libertad, capital natural y Hub Digital',
      samanaAgenda: 'Agenda para Samaná (20 Ejes)',
      samanaAgendaDesc: 'Prioridades locales de desarrollo e inversión',
      nationalProgram: 'Base Programática Nacional',
      nationalProgramDesc: '13 pilares fundamentales de libertad y reformas',
      citizenProposals: 'Buzón de Propuestas Ciudadanas',
      citizenProposalsDesc: 'Canal directo para reportar problemáticas',
      organization: 'Organización y Equipo',
      organizationDesc: 'Estructura territorial y comisiones',
      method: 'Método de Trabajo',
      methodDesc: '3 niveles y 10 criterios de evaluación local',
      affiliation: 'Afiliación y Militancia',
      affiliationDesc: 'Súmate formalmente a Patria Libre',
      news: 'Noticias y Actividades',
      newsDesc: 'Encuentros comunitarios y comunicados',
      checkId: 'Consultar Acreditación',
      checkIdDesc: 'Verifica tu registro de militante por cédula',
      documents: 'Documentos Oficiales',
      documentsDesc: 'Repositorio público y programas',
      faq: 'Preguntas Frecuentes (FAQ)',
      faqDesc: 'Respuestas directas y honestas',
      nationalWeb: 'Web Nacional (patrialibre.do)',
      nationalWebDesc: 'Plataforma oficial del partido a nivel nacional',
      idearioWeb: 'Ideario Oficial Completo (patrialibre.do)',
      idearioWebDesc: 'Consulta las 37 propuestas y fundamentos en PDF',
      petition: 'Firma por Patria Libre',
      petitionDesc: 'Apoya el reconocimiento oficial con tu firma',
      contact: 'Contacto Provincial',
      contactDesc: 'Canales oficiales en Samaná y RD',
      join: 'Afiliarse',
      viewIdeario: 'Ver Ideario ↗'
    },
    hero: {
      country: 'REPÚBLICA DOMINICANA',
      provincialTeam: 'EQUIPO PROVINCIAL EN SAMANÁ',
      welcome: 'Bienvenidos a',
      partyName: 'PATRIA LIBRE',
      nationalSlogan: 'Por la Soberanía, Vida, Libertad y Prosperidad',
      pillars: 'Libertad • Responsabilidad • Instituciones • Prosperidad',
      subtitle: 'Construyendo una nación con instituciones sólidas, cuentas claras y oportunidades reales. Desde la provincia de Samaná acercamos las propuestas nacionales e impulsamos soluciones locales con rigor y transparencia.',
      ctaJoin: 'Afiliarse a PATRIA LIBRE',
      ctaIdeario: 'Revisar Ideario Completo ↗',
      idearioCalloutBadge: 'DOCUMENTO OFICIAL',
      idearioCalloutText: 'Conoce las 37 propuestas y fundamentos doctrinales de Nueva Derecha:',
      idearioCalloutLink: 'Revisar Ideario en patrialibre.do/ideario',
      btnSpace: 'Conocer Nuestro Espacio',
      btnNational: 'Web Nacional (patrialibre.do) ↗',
      checkCred: 'Consultar Acreditación de Militante por Cédula',
      galleryTag1: 'Samaná y Soberanía',
      galleryTag2: 'Liderazgo y Principios',
      galleryTag3: 'Juventud y Prosperidad',
      manifestoProvincialTag: 'EQUIPO PROVINCIAL DE PATRIA LIBRE EN SAMANÁ',
      manifestoCountryTag: 'REPÚBLICA DOMINICANA',
      manifestoTitlePart1: 'PATRIA LIBRE ',
      manifestoTitlePart2: '— SAMANÁ',
      manifestoPillars: ['Libertad.', 'Responsabilidad.', 'Instituciones.', 'Prosperidad.'],
      manifestoIntro: 'Este es el espacio del equipo de Patria Libre en la provincia de Samaná. Patria Libre es un proyecto político de alcance nacional. Desde Samaná trabajamos para acercar a los ciudadanos las ideas, propuestas y documentos del proyecto nacional y, al mismo tiempo, estudiar los problemas particulares de nuestra provincia para construir propuestas locales compatibles con esos principios.',
      samanaBtn: 'Agenda para Samaná (20 Ejes)',
      nationalBtn: 'Base Programática Nacional',
      proposalBtn: 'Enviar Propuesta Local',
      clarificationNotice: 'Aclaración importante: Distinción entre programa histórico y propuestas vigentes',
      lookupCred: 'Consultar acreditación de militante',
      objectives: [
        {
          number: '1',
          title: 'Difundir la Doctrina y Propuestas Nacionales',
          description: 'Explicar de forma pedagógica el ideario y las propuestas de reforma de Patria Libre a nivel nacional.'
        },
        {
          number: '2',
          title: 'Organización y Formación en Samaná',
          description: 'Fomentar la participación cívica, la educación política rigurosa y las comisiones de trabajo en cada municipio de la provincia.'
        },
        {
          number: '3',
          title: 'Construir la Agenda Provincial y Municipal',
          description: 'Desarrollar diagnósticos territoriales, pliegos de inversión y propuestas de desarrollo institucional sometidas a evidencia y evaluación.'
        }
      ],
      centralQuote: 'No queremos planificar desde una oficina cuál debe ser el futuro de Samaná. Nuestro papel es defender las instituciones, el Estado de Derecho y las libertades que permitan a los propios ciudadanos, comunidades y emprendedores construirlo.',
      quoteAuthor: '— Principio rector del Equipo Provincial de Patria Libre en Samaná',
      statLabels: {
        population: 'Habitantes (Censo ONE)',
        territory: 'Extensión Territorial',
        municipalities: 'Municipios',
        districts: 'Distritos Municipales'
      }
    },
    platformHub: {
      eyebrow: 'PLIEGO PROGRAMÁTICO ORGANIZADO',
      title: 'Nuestra Propuesta ',
      titleAccent: 'Organizada por Ejes',
      subtitle: 'Para ofrecerte una lectura clara y sin abrumarte con desplazamientos infinitos, hemos organizado todo nuestro contenido en páginas especializadas que puedes explorar a tu ritmo:',
      portals: [
        {
          id: 'modelo-economico',
          badge: 'MODELO DE DESARROLLO',
          title: 'Modelo Económico para Samaná',
          desc: 'Libertad económica, conservación del capital natural como activo productivo, Zona Económica Especial (ZEE), Hub Digital en Las Terrenas y turismo abierto.',
          btnText: 'Explorar Modelo Económico',
          highlights: ['Capital Natural Productivo', 'Evidencia Internacional ZEE', '15 Nichos de Turismo Abierto', 'Descentralización Real']
        },
        {
          id: 'agenda-samana',
          badge: 'AGENDA PROVINCIAL',
          title: 'Agenda para Samaná (20 Ejes)',
          desc: 'El pliego exhaustivo de prioridades territoriales, económicas y sociales para Santa Bárbara, Sánchez, Las Terrenas, El Limón y Las Galeras.',
          btnText: 'Consultar los 20 Ejes',
          highlights: ['Infraestructura y Agua Potable', 'Ordenamiento Territorial', 'Costos de Vida y Vivienda', 'Juventud y Capacidades']
        },
        {
          id: 'programa-nacional',
          badge: 'DOCTRINA NACIONAL',
          title: 'Base Programática Nacional',
          desc: 'Los 13 pilares fundamentales de reformas estructurales de Patria Libre para la República Dominicana: libertad de mercado, disciplina fiscal y Estado limitado.',
          btnText: 'Ver Programa Nacional (13 Pilares)',
          highlights: ['Reducción de Impuestos', 'Desregulación Inteligente', 'Seguridad Jurídica Firme', 'Moneda Sana y Ahorro']
        },
        {
          id: 'organizacion',
          badge: 'EQUIPO Y FORMACIÓN',
          title: 'Organización, Equipo y Método',
          desc: 'Nuestra estructura territorial en Samaná, comisiones temáticas, los 3 niveles de análisis provincial y los 13 temas de formación cívica y política.',
          btnText: 'Conocer Organización y Equipo',
          highlights: ['Método de los 3 Niveles', 'Comisiones Provinciales Activas', '13 Áreas de Formación', 'Cuentas Claras y Auditoría']
        }
      ],
      quickDocs: 'Documentos Oficiales & FAQ',
      quickJoin: 'Afiliación y Militancia',
      quickProposals: 'Buzón de Propuestas Ciudadanas'
    },
    ctaBanner: {
      badge: 'SÚMATE AL EQUIPO DE SAMANÁ',
      title: 'Construyamos Juntos el Futuro de Nuestra Provincia',
      desc: 'Patria Libre no busca clientes políticos ni votantes pasivos. Buscamos ciudadanos activos, conscientes y comprometidos con el estudio riguroso, la libertad y el desarrollo real de Samaná.',
      btnJoin: 'Afiliarse a Patria Libre',
      btnIdeario: 'Revisar Ideario Completo ↗',
      btnProposal: 'Enviar una Propuesta'
    },
    footer: {
      coreIdeaBadge: 'IDEA CENTRAL DE ESTA PÁGINA',
      navHeading: 'Navegación',
      nationalHeading: 'Patria Libre Nacional',
      contactHeading: 'Contacto en Samaná',
      location: 'Provincia de Samaná • República Dominicana',
      nationalLinks: {
        web: 'Web Oficial Nacional (patrialibre.do)',
        ideario: 'Ideario Oficial Completo (37 Puntos)',
        petition: 'Firma por el Reconocimiento Legal'
      },
      mottoTag: 'Lema Oficial:',
      mottoQuote: '«Por la Soberanía, Vida, Libertad y Prosperidad»'
    },
    samanaAgenda: {
      badge: 'Agenda Específica Provincial y Municipal',
      title: 'Una Agenda para ',
      titleAccent: 'Samaná',
      subtitle: '20 ejes de trabajo para Santa Bárbara, Las Terrenas, Sánchez y los distritos municipales, identificados formalmente como "PROPUESTA PATRIA LIBRE — SAMANÁ".',
      filterAll: 'Todos los Ejes (20)',
      searchPlaceholder: 'Buscar en la agenda (ej. turismo, pesca, agua, residuos, impuestos)...',
      questionsTitle: 'Preguntas Clave de Estudio',
      prioritiesTitle: 'Prioridades Locales a Desarrollar'
    },
    nationalProgram: {
      badge: 'Base Programática Nacional',
      title: 'Nuestra Base ',
      titleAccent: 'Programática Nacional',
      subtitle: '13 pilares fundamentales de libertad económica, reducción de impuestos, disciplina fiscal, Estado limitado, vouchers en educación/salud y seguridad jurídica.',
      historicalNotice: 'El documento base responde originalmente a la propuesta 2020-2024; sus principios son permanentes, pero las cifras y cronogramas deberán actualizarse oficialmente.'
    },
    affiliation: {
      badge: 'Militancia y Participación',
      title: 'Súmate a ',
      titleAccent: 'Patria Libre — Samaná',
      subtitle: 'La vinculación es abierta, transparente y voluntaria. Regístrate para participar en las mesas de trabajo provinciales y obtener tu acreditación digital con código QR.',
      b1Title: 'Acreditación Digital Oficial',
      b1Desc: 'Generación instantánea de credencial con código QR y número de militante para la provincia de Samaná.',
      b2Title: 'Participación en Mesas Locales',
      b2Desc: 'Integración activa en los 20 ejes de la Agenda para Santa Bárbara, Las Terrenas, Sánchez y distritos.',
      b3Title: 'Transparencia y Protección de Datos',
      b3Desc: 'Manejo ético y seguro de tus datos bajo estrictos estándares de privacidad.',
      formTitle: 'Registro de Miembro / Militante',
      formSub: 'Completa tus datos para emitir tu carnet institucional',
      fullNameLabel: 'Nombre y Apellidos Completos',
      dniLabel: 'Cédula de Identidad y Electoral',
      emailLabel: 'Correo Electrónico',
      phoneLabel: 'Teléfono / WhatsApp',
      regionLabel: 'Municipio / Distrito Municipal',
      occupationLabel: 'Ocupación / Área Técnica o Productiva',
      termsCheck: 'Acepto la declaración de principios de Patria Libre (Libertad, Responsabilidad, Instituciones, Prosperidad) y autorizo mi registro voluntario.',
      submitBtn: 'Completar Registro y Generar Carnet',
      loadingBtn: 'Procesando Registro...'
    }
  },

  EN: {
    nav: {
      home: 'Home',
      proposals: 'Proposals',
      samanaMenu: 'Samaná',
      transparencyMenu: 'Transparency',
      economicModel: 'Economic Model for Samaná',
      economicModelDesc: 'Free market, natural capital & Digital Hub',
      samanaAgenda: 'Samaná Agenda (20 Axes)',
      samanaAgendaDesc: 'Local development & investment priorities',
      nationalProgram: 'National Programmatic Base',
      nationalProgramDesc: '13 foundational pillars of freedom & structural reform',
      citizenProposals: 'Citizen Proposals Inbox',
      citizenProposalsDesc: 'Direct channel to report local issues',
      organization: 'Organization & Team',
      organizationDesc: 'Territorial structure and specialized committees',
      method: 'Working Methodology',
      methodDesc: '3 analysis levels and 10 local evaluation criteria',
      affiliation: 'Membership & Affiliation',
      affiliationDesc: 'Officially join Patria Libre',
      news: 'News & Activities',
      newsDesc: 'Community townhalls and press statements',
      checkId: 'Verify Credential',
      checkIdDesc: 'Verify your digital membership record by ID',
      documents: 'Official Documents',
      documentsDesc: 'Public repository and platforms',
      faq: 'Frequently Asked Questions (FAQ)',
      faqDesc: 'Direct and transparent answers',
      nationalWeb: 'National Website (patrialibre.do)',
      nationalWebDesc: 'Official party platform nationwide',
      idearioWeb: 'Official Ideology & Platform (patrialibre.do)',
      idearioWebDesc: 'Explore all 37 proposals and principles in PDF',
      petition: 'Sign for Patria Libre',
      petitionDesc: 'Support official legal recognition with your signature',
      contact: 'Provincial Contact',
      contactDesc: 'Official channels in Samaná & DR',
      join: 'Join Us',
      viewIdeario: 'Platform ↗'
    },
    hero: {
      country: 'DOMINICAN REPUBLIC',
      provincialTeam: 'PROVINCIAL TEAM IN SAMANÁ',
      welcome: 'Welcome to',
      partyName: 'PATRIA LIBRE',
      nationalSlogan: 'For Sovereignty, Life, Liberty and Prosperity',
      pillars: 'Liberty • Responsibility • Institutions • Prosperity',
      subtitle: 'Building a nation with strong institutions, accountable public finance, and real economic opportunities. From the province of Samaná, we champion national reforms while designing rigorous local solutions with full transparency.',
      ctaJoin: 'Join PATRIA LIBRE',
      ctaIdeario: 'Review Official Platform ↗',
      idearioCalloutBadge: 'OFFICIAL DOCUMENT',
      idearioCalloutText: 'Explore our 37 core policy proposals and New Right foundational doctrine:',
      idearioCalloutLink: 'Review Platform at patrialibre.do/ideario',
      btnSpace: 'Explore Samaná Space',
      btnNational: 'National Website (patrialibre.do) ↗',
      checkCred: 'Verify Militant Credential by Dominican ID',
      galleryTag1: 'Samaná & Sovereignty',
      galleryTag2: 'Leadership & Principles',
      galleryTag3: 'Youth & Prosperity',
      manifestoProvincialTag: 'PROVINCIAL TEAM OF PATRIA LIBRE IN SAMANÁ',
      manifestoCountryTag: 'DOMINICAN REPUBLIC',
      manifestoTitlePart1: 'PATRIA LIBRE ',
      manifestoTitlePart2: '— SAMANÁ',
      manifestoPillars: ['Liberty.', 'Responsibility.', 'Institutions.', 'Prosperity.'],
      manifestoIntro: 'This is the working space of the Patria Libre team in Samaná. Patria Libre is a nationwide political project. In Samaná, we bring national ideas and proposals directly to citizens while analyzing provincial challenges to build compatible, evidence-based local policies.',
      samanaBtn: 'Samaná Agenda (20 Axes)',
      nationalBtn: 'National Programmatic Base',
      proposalBtn: 'Submit Local Proposal',
      clarificationNotice: 'Important notice: Distinction between historic program and current proposals',
      lookupCred: 'Verify militant credential',
      objectives: [
        {
          number: '1',
          title: 'Promote National Doctrine and Proposals',
          description: 'Clearly explain the ideology and structural reform proposals of Patria Libre across the country.'
        },
        {
          number: '2',
          title: 'Organization and Civic Education in Samaná',
          description: 'Foster civic engagement, rigorous political training, and local committees in every municipality of the province.'
        },
        {
          number: '3',
          title: 'Build Provincial and Municipal Agenda',
          description: 'Develop territorial assessments, investment packages, and institutional reforms evaluated against empirical evidence.'
        }
      ],
      centralQuote: 'We do not seek to plan from a central office what the future of Samaná should be. Our role is to defend institutions, the rule of law, and freedoms that empower citizens, communities, and entrepreneurs to build it themselves.',
      quoteAuthor: '— Guiding principle of Patria Libre Provincial Team in Samaná',
      statLabels: {
        population: 'Inhabitants (ONE Census)',
        territory: 'Territorial Area',
        municipalities: 'Municipalities',
        districts: 'Municipal Districts'
      }
    },
    platformHub: {
      eyebrow: 'ORGANIZED POLICY PLATFORM',
      title: 'Our Agenda ',
      titleAccent: 'Organized by Core Areas',
      subtitle: 'To provide a structured reading experience without endless scrolling, we have organized our content into specialized sections you can explore at your own pace:',
      portals: [
        {
          id: 'modelo-economico',
          badge: 'DEVELOPMENT MODEL',
          title: 'Economic Model for Samaná',
          desc: 'Economic freedom, conservation of natural capital as a productive asset, Special Economic Zone (SEZ), Las Terrenas Digital Hub, and open tourism.',
          btnText: 'Explore Economic Model',
          highlights: ['Productive Natural Capital', 'SEZ International Evidence', '15 Open Tourism Niches', 'Genuine Decentralization']
        },
        {
          id: 'agenda-samana',
          badge: 'PROVINCIAL AGENDA',
          title: 'Agenda for Samaná (20 Axes)',
          desc: 'Comprehensive package of territorial, economic, and social priorities for Santa Bárbara, Sánchez, Las Terrenas, El Limón, and Las Galeras.',
          btnText: 'Consult the 20 Axes',
          highlights: ['Infrastructure & Clean Water', 'Territorial Planning', 'Cost of Living & Housing', 'Youth & Skills Training']
        },
        {
          id: 'programa-nacional',
          badge: 'NATIONAL DOCTRINE',
          title: 'National Programmatic Base',
          desc: '13 fundamental pillars of structural reforms for the Dominican Republic: free markets, fiscal discipline, and limited government.',
          btnText: 'View National Program (13 Pillars)',
          highlights: ['Tax Reduction', 'Smart Deregulation', 'Strict Rule of Law', 'Sound Money & Savings']
        },
        {
          id: 'organizacion',
          badge: 'TEAM & TRAINING',
          title: 'Organization, Team & Method',
          desc: 'Our provincial structure in Samaná, working commissions, the 3-level analysis method, and 13 civic & political education modules.',
          btnText: 'Meet Organization & Team',
          highlights: ['3-Level Analysis Method', 'Active Provincial Panels', '13 Educational Modules', 'Transparent Accounting & Audit']
        }
      ],
      quickDocs: 'Official Documents & FAQ',
      quickJoin: 'Membership & Affiliation',
      quickProposals: 'Citizen Proposals Box'
    },
    ctaBanner: {
      badge: 'JOIN THE SAMANÁ TEAM',
      title: "Let's Build the Future of Our Province Together",
      desc: 'Patria Libre does not seek political clients or passive voters. We seek active, conscious citizens committed to rigorous study, freedom, and genuine prosperity in Samaná.',
      btnJoin: 'Join Patria Libre',
      btnIdeario: 'Review Official Platform ↗',
      btnProposal: 'Submit a Proposal'
    },
    footer: {
      coreIdeaBadge: 'CORE PHILOSOPHY OF THIS SITE',
      navHeading: 'Navigation',
      nationalHeading: 'Patria Libre Nationwide',
      contactHeading: 'Contact in Samaná',
      location: 'Samaná Province • Dominican Republic',
      nationalLinks: {
        web: 'Official National Website (patrialibre.do)',
        ideario: 'Official Complete Ideology (37 Points)',
        petition: 'Sign for Legal Recognition'
      },
      mottoTag: 'Official Slogan:',
      mottoQuote: '«For Sovereignty, Life, Liberty and Prosperity»'
    },
    samanaAgenda: {
      badge: 'Specific Provincial & Municipal Agenda',
      title: 'A Policy Agenda for ',
      titleAccent: 'Samaná',
      subtitle: '20 action areas for Santa Bárbara, Las Terrenas, Sánchez and municipal districts, officially labeled as "PATRIA LIBRE — SAMANÁ PROPOSAL".',
      filterAll: 'All 20 Axes',
      searchPlaceholder: 'Search agenda (e.g. tourism, fishing, water, waste, tax)...',
      questionsTitle: 'Core Study Questions',
      prioritiesTitle: 'Local Priorities to Develop'
    },
    nationalProgram: {
      badge: 'National Programmatic Base',
      title: 'Our National ',
      titleAccent: 'Programmatic Foundation',
      subtitle: '13 foundational pillars of economic liberty, lower taxes, fiscal responsibility, limited government, education/health vouchers, and rule of law.',
      historicalNotice: 'The base document was originally formulated for 2020-2024; general principles remain core, while specific figures are subject to official party updates.'
    },
    affiliation: {
      badge: 'Membership & Engagement',
      title: 'Join ',
      titleAccent: 'Patria Libre — Samaná',
      subtitle: 'Engagement is open, transparent, and voluntary. Register to participate in provincial working groups and receive your digital credential with QR code.',
      b1Title: 'Official Digital ID',
      b1Desc: 'Instant digital credential with QR verification code for Samaná province.',
      b2Title: 'Participate in Local Panels',
      b2Desc: 'Active integration in the 20 action axes for Santa Bárbara, Las Terrenas, Sánchez and districts.',
      b3Title: 'Privacy and Transparency',
      b3Desc: 'Ethical and secure management of your data under high privacy standards.',
      formTitle: 'Member Registration',
      formSub: 'Enter your details to generate your credential',
      fullNameLabel: 'Full Legal Name',
      dniLabel: 'Dominican ID / Cédula Number',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone / WhatsApp',
      regionLabel: 'Municipality / District',
      occupationLabel: 'Occupation / Field',
      termsCheck: 'I accept the declaration of principles of Patria Libre (Liberty, Responsibility, Institutions, Prosperity).',
      submitBtn: 'Complete Registration & Issue ID',
      loadingBtn: 'Processing Registration...'
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('patria_lang') || 'ES';
  });

  useEffect(() => {
    localStorage.setItem('patria_lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang.toLowerCase();
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ES' ? 'EN' : 'ES'));
  };

  const t = translations[lang] || translations.ES;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
