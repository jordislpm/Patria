import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { EconomicModelPage } from './pages/EconomicModelPage';
import { SamanaAgendaPage } from './pages/SamanaAgendaPage';
import { NationalProgramPage } from './pages/NationalProgramPage';
import { OrganizationPage } from './pages/OrganizationPage';
import { ParticipationPage } from './pages/ParticipationPage';
import { TransparencyPage } from './pages/TransparencyPage';
import { NewsPage } from './pages/NewsPage';
import { MemberLookupModal } from './components/sections/MemberLookupModal';
import { memberService } from './services/memberService';
import { PARTY_INFO } from './data/initialData';

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('patria_theme') || 'light';
  });
  const [stats, setStats] = useState(PARTY_INFO.stats);
  const [lookupModalOpen, setLookupModalOpen] = useState(false);
  const navigate = useNavigate();

  // Synchronize theme to document elements
  const applyThemeToDOM = (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.className = newTheme;
    document.body.setAttribute('data-theme', newTheme);
    document.body.className = newTheme;
    const rootEl = document.getElementById('root');
    if (rootEl) {
      rootEl.setAttribute('data-theme', newTheme);
      rootEl.className = newTheme;
    }
  };

  useEffect(() => {
    applyThemeToDOM(theme);
    localStorage.setItem('patria_theme', theme);
  }, [theme]);

  // Load stats from memberService
  const refreshStats = async () => {
    try {
      const currentStats = await memberService.getStats();
      setStats(currentStats);
    } catch (err) {
      console.error('Error loading stats:', err);
    }
  };

  useEffect(() => {
    refreshStats();
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    applyThemeToDOM(nextTheme);
    localStorage.setItem('patria_theme', nextTheme);
  };

  const handleOpenAffiliation = () => {
    navigate('/participacion');
    setTimeout(() => {
      const el = document.getElementById('afiliacion');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className={`patria-app ${theme}`} data-theme={theme}>
      {/* Scroll manager for route transitions and hashes */}
      <ScrollToTop />

      {/* Fixed Navbar with Brand: PATRIA LIBRE — SAMANÁ */}
      <Navbar
        activeTheme={theme}
        onToggleTheme={toggleTheme}
        onOpenAffiliation={handleOpenAffiliation}
        onOpenLookup={() => setLookupModalOpen(true)}
      />

      {/* Dedicated Multi-Page Routes */}
      <main className="main-content-flow">
        <Routes>
          {/* 1. Portada Principal */}
          <Route
            path="/"
            element={
              <HomePage
                activeTheme={theme}
                stats={stats}
                onOpenAffiliation={handleOpenAffiliation}
                onOpenLookup={() => setLookupModalOpen(true)}
              />
            }
          />

          {/* 2. Modelo de Desarrollo para Samaná */}
          <Route path="/modelo-economico" element={<EconomicModelPage />} />

          {/* 3. Agenda para Samaná (20 Ejes Provinciales) */}
          <Route path="/agenda-samana" element={<SamanaAgendaPage />} />

          {/* 4. Base Programática Nacional (13 Pilares) */}
          <Route path="/programa-nacional" element={<NationalProgramPage />} />

          {/* 5. Organización, Equipo Provincial y Método */}
          <Route
            path="/organizacion"
            element={<OrganizationPage onOpenAffiliation={handleOpenAffiliation} />}
          />

          {/* 6. Afiliación, Militancia y Propuestas Ciudadanas */}
          <Route
            path="/participacion"
            element={<ParticipationPage onMemberAdded={refreshStats} />}
          />

          {/* 7. Repositorio de Documentos, Transparencia y FAQ */}
          <Route path="/transparencia" element={<TransparencyPage />} />

          {/* 8. Noticias y Actividades Provinciales */}
          <Route path="/noticias" element={<NewsPage />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer with Samaná Contact & Idea Central */}
      <Footer onOpenAffiliation={handleOpenAffiliation} />

      {/* Global Lookup Modal for Militants */}
      <MemberLookupModal
        isOpen={lookupModalOpen}
        onClose={() => setLookupModalOpen(false)}
      />
    </div>
  );
}

export default App;
