import React from 'react';

const Card = ({ 
  title, 
  description, 
  image, 
  icon,
  children,
  className = '',
  withBorder = false,
  accentColor = 'lime',
}) => {
  const borderClass = withBorder ? `border-l-4 border-accent-lime` : '';

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${borderClass} ${className}`}>
      {image && (
        <div className="w-full h-48 overflow-hidden bg-gray-200">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        {icon && (
          <div className="text-4xl mb-4 text-accent-lime">
            {icon}
          </div>
        )}
        
        {title && (
          <h3 className="text-xl font-montserrat font-bold text-primary-blue mb-3">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
        )}
        
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
