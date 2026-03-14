import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-montserrat font-semibold transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-blue text-white hover:bg-opacity-90 focus:ring-primary-blue',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    gold: 'bg-cta-gold text-gray-900 hover:bg-opacity-90 focus:ring-cta-gold font-bold',
    outline: 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
    link: 'text-primary-blue hover:text-primary-green underline bg-transparent',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const appliedVariant = variants[variant] || variants.primary;
  const appliedSize = sizes[size] || sizes.md;

  return (
    <button
      className={`${baseStyles} ${appliedVariant} ${appliedSize} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
