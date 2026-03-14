import React from 'react';

const SectionHeader = ({ 
  title, 
  subtitle, 
  className = '',
  centered = true,
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
      {title && (
        <h2 className="text-h2 font-montserrat text-primary-blue font-bold mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
