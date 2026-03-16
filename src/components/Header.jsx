import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavDropdown from './NavDropdown';
import { NAVIGATION, ROUTES } from '../config/navigation';
import logo from '../logo2.png';
// Add Quicksand font
import '../index.css';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const aboutDropdownItems = NAVIGATION.about;

  const navLinkClass = (path) => `font-quicksand text-lg transition-colors duration-300 whitespace-nowrap ${
    isActive(path)
      ? 'text-[#4C9A63] font-semibold'
      : 'text-gray-800 hover:text-[#4C9A63]'
  }`;

  const leftNavLinkClass = (path) => `font-quicksand text-[1.05rem] transition-colors duration-300 whitespace-nowrap ${
    isActive(path)
      ? 'text-[#4C9A63] font-semibold'
      : 'text-gray-800 hover:text-[#4C9A63]'
  }`;

  return (
    <header className="bg-white border-b border-gray-200 z-40 shadow-sm relative overflow-visible">
      <div>
        <nav className="grid grid-cols-3 items-center h-44 w-full p-0 m-0 overflow-visible">
          {/* Left Navigation */}
          <div className="hidden lg:flex flex-row items-center justify-start gap-6 pl-4 text-base min-w-0 relative z-20">
              <NavDropdown label="About" items={aboutDropdownItems} />
              <Link to={ROUTES.whatIsAdaptiveGolf} className={leftNavLinkClass(ROUTES.whatIsAdaptiveGolf)}>
                What is Adaptive Golf?
              </Link>
              <Link to={ROUTES.tryGolf} className={leftNavLinkClass(ROUTES.tryGolf)}>
                Try Golf
              </Link>
              <Link to={ROUTES.competition} className={leftNavLinkClass(ROUTES.competition)}>
                Competition
              </Link>
              <Link to={ROUTES.media} className={leftNavLinkClass(ROUTES.media)}>
                Media
              </Link>
          </div>

          {/* Center Logo + Subtitle */}
          <div className="flex flex-col items-center justify-center justify-self-center w-full gap-0 relative z-10 pointer-events-none">
            <Link to={ROUTES.home} className="focus:outline-none pointer-events-auto">
              <img src={logo} alt="AGAF Logo" className="h-32 w-auto" />
            </Link>
            <span className="font-quicksand text-sm font-normal text-gray-700 tracking-wide text-center">Adaptive Golf Alliance Foundation</span>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex flex-row items-center justify-center gap-6 min-w-0 relative z-20">
              <a
                href="https://www.instagram.com/adaptivegolfalliance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#4C9A63] transition-colors duration-300"
                title="Instagram"
                style={{ fontFamily: 'Quicksand', fontSize: '1.5rem' }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
              </a>
              <Link to={ROUTES.blog} className={navLinkClass(ROUTES.blog)}>
                Blog
              </Link>
              <Link to={ROUTES.getInvolved} className={navLinkClass(ROUTES.getInvolved)}>
                Get Involved
              </Link>
              <Link to={ROUTES.news} className={navLinkClass(ROUTES.news)}>
                News
              </Link>
              <Link to={ROUTES.connect} className={navLinkClass(ROUTES.connect)}>
                Contact
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-800 hover:text-[#4C9A63]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 px-4 bg-white">
            <div className="flex flex-col gap-4">
              <NavDropdown label="About" items={aboutDropdownItems} />
              <Link to={ROUTES.whatIsAdaptiveGolf} className="font-montserrat text-sm text-gray-800 hover:text-[#4C9A63]">
                What is Adaptive Golf?
              </Link>
              <Link to={ROUTES.tryGolf} className="font-montserrat text-sm text-gray-800 hover:text-[#4C9A63]">
                Try Golf
              </Link>
              <Link to={ROUTES.competition} className="font-montserrat text-sm text-gray-800 hover:text-[#4C9A63]">
                Competition
              </Link>
              <Link to={ROUTES.media} className="font-montserrat text-sm text-gray-800 hover:text-[#4C9A63]">
                Media
              </Link>
              <Link to={ROUTES.connect} className="font-montserrat text-sm text-gray-800 hover:text-[#4C9A63]">
                Contact
              </Link>
              <a
                href="https://www.instagram.com/adaptivegolfalliance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#4C9A63] flex items-center gap-2"
                title="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
