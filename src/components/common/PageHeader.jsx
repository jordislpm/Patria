import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './PageHeader.css';

export function PageHeader({ badge, title, subtitle, breadcrumbs = [] }) {
  return (
    <div className="patria-page-header">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="page-header-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb-link home-icon">
            <Home size={14} />
            <span>Inicio</span>
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <ChevronRight size={13} className="breadcrumb-sep" />
              {crumb.path ? (
                <Link to={crumb.path} className="breadcrumb-link">
                  {crumb.label}
                </Link>
              ) : (
                <span className="breadcrumb-current" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Header Content */}
        <div className="page-header-body">
          {badge && (
            <div className="page-header-badge">
              <span>{badge}</span>
            </div>
          )}
          <h1 className="page-header-title">{title}</h1>
          {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
