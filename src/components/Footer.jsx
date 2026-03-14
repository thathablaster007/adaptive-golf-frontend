import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { ROUTES } from '../config/navigation';
import logo from '../logo1.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-20">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Left: Contact Information */}
          <div className="flex flex-col items-start gap-2">
            <p className="font-montserrat font-bold text-sm text-gray-800">Get in touch</p>
            <a 
              href="mailto:contactus@adaptivegolfalliance.com"
              className="text-primary-blue hover:text-primary-green transition-colors text-sm"
            >
              contactus@adaptivegolfalliance.com
            </a>
            <Link to={ROUTES.connect}>
              <Button variant="secondary" size="sm">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Center: Logo */}
          <div className="flex flex-col items-center gap-2">
            <Link to={ROUTES.home}>
              <img src={logo} alt="AGAF Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-xs font-montserrat font-bold text-center text-gray-700">
              Adaptive Golf Alliance Foundation
            </p>
          </div>

          {/* Right: Newsletter and Social */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-3">
              <p className="font-montserrat font-bold text-sm text-gray-800">Connect with us</p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-primary-blue transition-colors"
                title="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
            </div>
            <div className="w-full text-right">
              <p className="font-montserrat font-bold text-xs text-gray-800 mb-2">Join our newsletter</p>
              <form onSubmit={handleNewsletterSignup} className="flex gap-2 flex-row-reverse">
                <Button variant="gold" size="sm">
                  Sign up
                </Button>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </form>
              {subscribed && (
                <p className="text-xs text-green-600 mt-1">Thanks for subscribing!</p>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-4 text-center text-xs text-gray-700">
          <p className="font-montserrat">
            &copy; {new Date().getFullYear()} Adaptive Golf Alliance Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
