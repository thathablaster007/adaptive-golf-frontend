import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { ROUTES } from '../config/navigation';
import logo from '../logo2.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const instagramUrl = 'https://www.instagram.com/adaptivegolfalliance/';

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#fff8ec] via-[#f5f9ef] to-[#fff4e7] border-t border-primary-green/20">
      <div className="container-custom py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-start mb-10">
          {/* Left: Contact Information */}
          <div className="flex flex-col items-start gap-4">
            <p className="font-quicksand font-bold text-2xl text-primary-green">Get in touch</p>
            <a
              href="mailto:contactus@adaptivegolfalliance.com"
              className="font-quicksand text-base md:text-lg text-gray-800 hover:text-[#c9851b] transition-colors"
            >
              contactus@adaptivegolfalliance.com
            </a>
            <Link to={ROUTES.connect}>
              <Button variant="primary" size="md" className="font-quicksand rounded-xl px-7 py-3 bg-primary-green hover:bg-primary-green/90 text-white focus:ring-primary-green">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Center: Logo */}
          <div className="flex flex-col items-center justify-center gap-3">
            <Link to={ROUTES.home}>
              <img src={logo} alt="AGAF Logo" className="h-24 md:h-28 w-auto" />
            </Link>
            <p className="font-quicksand font-semibold text-center text-gray-700 text-sm md:text-base">
              Adaptive Golf Alliance Foundation
            </p>
          </div>

          {/* Right: Social + Newsletter */}
          <div className="flex flex-col items-start lg:items-end gap-5 w-full">
            <div className="flex items-center gap-3">
              <p className="font-quicksand font-bold text-2xl text-primary-green">Connect with us</p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-green hover:text-[#c9851b] transition-colors"
                title="Instagram"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </a>
            </div>

            <div className="w-full max-w-md lg:text-right">
              <p className="font-quicksand font-semibold text-base md:text-lg text-primary-green mb-3">
                Join our newsletter
              </p>
              <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row lg:justify-end gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:flex-1 px-4 py-3 border border-primary-green/30 rounded-xl text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary-green"
                />
                <Button variant="primary" size="md" className="font-quicksand rounded-xl px-7 py-3 bg-cta-gold hover:bg-[#e8a92e] text-primary-green font-bold focus:ring-cta-gold">
                  Sign up
                </Button>
              </form>
              {subscribed && (
                <p className="font-quicksand text-sm text-green-600 mt-2">Thanks for subscribing!</p>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-green/20 pt-6 text-center text-sm text-gray-700">
          <p className="font-quicksand text-primary-green/90">
            &copy; {new Date().getFullYear()} Adaptive Golf Alliance Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
