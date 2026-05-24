import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavDropdown = ({ label, items, activePath = '', showActiveFill = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasActiveItem = items.some((item) => {
    if (!activePath) return false;
    return activePath === item.path;
  });

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center transition-colors duration-300 font-quicksand font-semibold text-base ${
          hasActiveItem ? 'text-[#4C9A63]' : 'text-primary-blue hover:text-[#4C9A63]'
        }`}
        type="button"
      >
        {label}
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-0 bg-white border border-gray-200 rounded-lg shadow-lg z-[60] w-56"
        >
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-between gap-4 px-4 py-3 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                activePath === item.path
                  ? showActiveFill
                    ? 'bg-[#f3f8ef] text-[#4C9A63]'
                    : 'text-[#4C9A63]'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-[#4C9A63]'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
