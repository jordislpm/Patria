import React from 'react';
import './FormInputs.css';

export function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  icon: Icon,
  required = false,
  className = '',
  ...props
}) {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label} {required && <span className="text-crimson">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        {Icon && <Icon className="input-icon" size={18} />}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`form-input ${Icon ? 'has-icon' : ''} ${error ? 'is-invalid' : ''}`}
          {...props}
        />
      </div>
      {error && <span className="form-error-msg">{error}</span>}
    </div>
  );
}

export function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
  icon: Icon,
  required = false,
  className = '',
  ...props
}) {
  return (
    <div className={`form-group ${className}`}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label} {required && <span className="text-crimson">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        {Icon && <Icon className="input-icon" size={18} />}
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`form-select ${Icon ? 'has-icon' : ''} ${error ? 'is-invalid' : ''}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value || opt} value={opt.value || opt}>
              {opt.label || opt}
            </option>
          ))}
        </select>
      </div>
      {error && <span className="form-error-msg">{error}</span>}
    </div>
  );
}
