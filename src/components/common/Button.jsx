import React from 'react';
import './Button.css';

export function Button({
  children,
  variant = 'primary', // 'primary' | 'gold' | 'outline' | 'ghost' | 'dark'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`patria-btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`}
      {...props}
    >
      {loading ? (
        <span className="btn-spinner" />
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="btn-icon icon-left" size={size === 'sm' ? 16 : 20} />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="btn-icon icon-right" size={size === 'sm' ? 16 : 20} />}
        </>
      )}
    </button>
  );
}
