import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavDropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center text-primary-blue hover:text-[#4C9A63] transition-colors duration-300 font-quicksand font-semibold text-base"
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
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#4C9A63] transition-colors first:rounded-t-lg last:rounded-b-lg"
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
