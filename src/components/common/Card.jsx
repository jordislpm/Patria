import React from 'react';
import './Card.css';

export function Card({
  children,
  glass = true,
  hoverable = true,
  className = '',
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`patria-card ${glass ? 'glass-card' : 'solid-card'} ${hoverable ? 'hoverable-card' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
