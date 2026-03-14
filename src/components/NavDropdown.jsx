import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavDropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1 text-gray-800 hover:text-primary-blue transition-colors duration-300 font-montserrat"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {label}
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="absolute left-0 mt-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 w-48"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-4 py-3 text-gray-700 hover:bg-bg-light hover:text-primary-blue transition-colors first:rounded-t-lg last:rounded-b-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
