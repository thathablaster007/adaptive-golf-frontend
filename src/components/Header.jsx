import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavDropdown from './NavDropdown';
import { ROUTES } from '../config/navigation';
import footerLogo from '../logo3.png';
// Add Quicksand font
import '../index.css';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const aboutDropdownItems = [
    { label: 'About Us', path: ROUTES.aboutUs },
    { label: 'AGAF Team', path: ROUTES.team },
  ];

  const navLinkClass = (path) => `font-quicksand font-semibold text-lg transition-colors duration-300 whitespace-nowrap ${
    isActive(path)
      ? 'text-[#4C9A63]'
      : 'text-primary-blue hover:text-[#4C9A63]'
  }`;

  const leftNavLinkClass = (path) => `font-quicksand font-semibold text-[1.05rem] transition-colors duration-300 whitespace-nowrap ${
    isActive(path)
      ? 'text-[#4C9A63]'
      : 'text-primary-blue hover:text-[#4C9A63]'
  }`;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-gradient-to-r from-[#fff8ec] via-[#f5f9ef] to-[#fff4e7] border-b border-primary-green/20 z-40 shadow-sm relative overflow-visible">
      <div>
        {/* Desktop Navigation */}
        <nav className="hidden xl:grid grid-cols-[1fr_auto_1fr] items-center h-36 w-full px-8 overflow-visible">
          <div className="flex flex-row items-center justify-start gap-5 text-base min-w-0 relative z-20">
            <NavDropdown label="About" items={aboutDropdownItems} />
            <Link to={ROUTES.whatIsAdaptiveGolf} className={leftNavLinkClass(ROUTES.whatIsAdaptiveGolf)}>
              What is Adaptive Golf?
            </Link>
            <Link to={ROUTES.tryGolf} className={leftNavLinkClass(ROUTES.tryGolf)}>
              Programmes
            </Link>
            <Link to={ROUTES.competition} className={leftNavLinkClass(ROUTES.competition)}>
              Competition
            </Link>
            <Link to={ROUTES.media} className={leftNavLinkClass(ROUTES.media)}>
              Media
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center justify-self-center w-full gap-0 relative z-10 pointer-events-none">
            <Link to={ROUTES.home} className="focus:outline-none pointer-events-auto">
              <img src={footerLogo} alt="AGAF Logo" className="h-40 w-auto" />
            </Link>
          </div>

          <div className="flex flex-row items-center justify-end gap-5 min-w-0 relative z-20">
            <Link to={ROUTES.blog} className={navLinkClass(ROUTES.blog)}>
              Blog
            </Link>
            <Link to={ROUTES.news} className={navLinkClass(ROUTES.news)}>
              News
            </Link>
            <Link to={ROUTES.getInvolved} className={navLinkClass(ROUTES.getInvolved)}>
              Get Involved
            </Link>
            <Link to={ROUTES.connect} className={navLinkClass(ROUTES.connect)}>
              Contact
            </Link>
            <div className="flex items-center gap-1">
              <a
                href="https://www.instagram.com/adaptivegolfalliance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:text-[#4C9A63] transition-colors duration-300"
                title="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue hover:text-[#4C9A63] transition-colors duration-300"
                title="Facebook"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.47H15.2c-1.25 0-1.64.77-1.64 1.57V12h2.79l-.45 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
            </div>
            <Link
              to={ROUTES.donate}
              className="font-quicksand font-bold text-sm text-white bg-primary-green border border-primary-green hover:bg-[#3f8354] hover:border-[#3f8354] transition-colors duration-300 px-4 py-2 rounded-lg whitespace-nowrap"
            >
              Donate
            </Link>
          </div>
        </nav>

        {/* Mobile / Tablet / Small Laptop Navigation */}
        <nav className="xl:hidden flex items-center justify-between h-24 sm:h-28 w-full px-4 sm:px-6 lg:px-8">
          <Link to={ROUTES.home} className="focus:outline-none" onClick={closeMobileMenu}>
            <img src={footerLogo} alt="AGAF Logo" className="h-20 sm:h-24 w-auto" />
          </Link>

          <button
            className="p-2 text-primary-blue hover:text-[#4C9A63]"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-primary-green/20 py-4 px-4 sm:px-6 bg-gradient-to-r from-[#fff8ec] via-[#f5f9ef] to-[#fff4e7] shadow-md">
            <div className="flex flex-col gap-3">
              <p className="font-quicksand font-bold text-primary-green uppercase text-sm tracking-wide mb-1">About</p>
              {aboutDropdownItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="font-quicksand font-semibold text-base text-primary-blue hover:text-[#4C9A63]"
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-primary-green/20 my-1" />

              <Link to={ROUTES.whatIsAdaptiveGolf} onClick={closeMobileMenu} className="font-quicksand font-semibold text-base text-primary-blue hover:text-[#4C9A63]">
                What is Adaptive Golf?
              </Link>
              <Link to={ROUTES.tryGolf} onClick={closeMobileMenu} className="font-quicksand font-semibold text-base text-primary-blue hover:text-[#4C9A63]">
                Programmes
              </Link>
              <Link to={ROUTES.competition} onClick={closeMobileMenu} className="font-quicksand font-semibold text-base text-primary-blue hover:text-[#4C9A63]">
                Competition
              </Link>
              <Link to={ROUTES.media} onClick={closeMobileMenu} className="font-quicksand font-semibold text-base text-primary-blue hover:text-[#4C9A63]">
                Media
              </Link>
              <Link to={ROUTES.blog} onClick={closeMobileMenu} className="font-quicksand font-semibold text-base text-primary-blue hover:text-[#4C9A63]">
                Blog
              </Link>
              <Link to={ROUTES.news} onClick={closeMobileMenu} className="font-quicksand font-semibold text-base text-primary-blue hover:text-[#4C9A63]">
                News
              </Link>
              <Link to={ROUTES.getInvolved} onClick={closeMobileMenu} className="font-quicksand font-semibold text-base text-primary-blue hover:text-[#4C9A63]">
                Get Involved
              </Link>
              <Link to={ROUTES.connect} onClick={closeMobileMenu} className="font-quicksand font-semibold text-base text-primary-blue hover:text-[#4C9A63]">
                Contact
              </Link>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  to={ROUTES.donate}
                  onClick={closeMobileMenu}
                  className="font-quicksand font-bold text-sm text-white bg-primary-green border border-primary-green hover:bg-[#3f8354] hover:border-[#3f8354] transition-colors duration-300 px-4 py-2 rounded-lg"
                >
                  Donate
                </Link>

                <a
                  href="https://www.instagram.com/adaptivegolfalliance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-blue hover:text-[#4C9A63] transition-colors duration-300"
                  title="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-blue hover:text-[#4C9A63] transition-colors duration-300"
                  title="Facebook"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.47H15.2c-1.25 0-1.64.77-1.64 1.57V12h2.79l-.45 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
