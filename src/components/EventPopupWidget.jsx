import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../config/navigation';

const EventPopupWidget = () => {
  const location = useLocation();
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [showEventReopenTab, setShowEventReopenTab] = useState(false);

  useEffect(() => {
    const popupSeenKey = 'agafUpcomingEventPopupSeen';
    const popupTabKey = 'agafUpcomingEventPopupTab';

    if (sessionStorage.getItem(popupTabKey) === 'true') {
      setShowEventReopenTab(true);
    }

    if (location.pathname !== ROUTES.home) return;
    if (sessionStorage.getItem(popupSeenKey) === 'true') return;

    const timer = window.setTimeout(() => {
      setShowEventPopup(true);
    }, 900);

    return () => {
      window.clearTimeout(timer);
    };
  }, [location.pathname]);

  const closeEventPopup = () => {
    sessionStorage.setItem('agafUpcomingEventPopupSeen', 'true');
    sessionStorage.setItem('agafUpcomingEventPopupTab', 'true');
    setShowEventPopup(false);
    setShowEventReopenTab(true);
  };

  const openEventPopupFromTab = () => {
    setShowEventPopup(true);
    setShowEventReopenTab(false);
  };

  const handleEventDetailsClick = () => {
    sessionStorage.setItem('agafUpcomingEventPopupSeen', 'true');
    sessionStorage.removeItem('agafUpcomingEventPopupTab');
    setShowEventPopup(false);
    setShowEventReopenTab(false);
  };

  return (
    <>
      {showEventPopup && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center px-4">
          <button
            type="button"
            className="absolute inset-0 bg-primary-blue/35 backdrop-blur-[2px]"
            onClick={closeEventPopup}
            aria-label="Close upcoming event popup"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg rounded-2xl border border-primary-blue/10 bg-white p-6 md:p-7 shadow-[0_18px_50px_rgba(21,45,80,0.20)]"
          >
            <button
              type="button"
              onClick={closeEventPopup}
              className="absolute top-3 right-3 text-primary-blue/70 hover:text-primary-green"
              aria-label="Close popup"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <p className="inline-flex rounded-full bg-primary-green/10 px-3 py-1 text-[11px] md:text-xs uppercase tracking-[0.18em] text-primary-green font-semibold mb-4">
              Upcoming In Programmes
            </p>

            <h3 className="text-2xl md:text-3xl font-quicksand font-bold text-primary-blue leading-tight mb-3">
              Adaptive Golf Discovery Programme
            </h3>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-2">
              Join our next discovery event and begin your adaptive golf journey with guided support.
            </p>

            <p className="text-sm md:text-base font-semibold text-primary-green mb-6">
              28 March 2026 and 29 March 2026
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to={`${ROUTES.tryGolf}#upcoming-event`}
                onClick={handleEventDetailsClick}
                className="inline-flex items-center justify-center rounded-lg bg-primary-green px-5 py-2.5 text-white font-quicksand font-semibold hover:bg-[#3f8354] transition-colors"
              >
                View Event Details
              </Link>

              <button
                type="button"
                onClick={closeEventPopup}
                className="inline-flex items-center justify-center rounded-lg border border-primary-blue/20 bg-white px-5 py-2.5 text-primary-blue font-quicksand font-semibold hover:bg-primary-blue/5 transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {!showEventPopup && showEventReopenTab && (
        <button
          type="button"
          onClick={openEventPopupFromTab}
          className="event-reopen-tab fixed top-1/2 -translate-y-1/2 z-[70] bg-primary-green text-white font-quicksand font-semibold tracking-wide rounded-l-lg px-2 py-3 shadow-lg hover:bg-[#3f8354] transition-colors"
          aria-label="Open upcoming event popup"
        >
          <span className="event-reopen-tab-label block text-xs sm:text-sm uppercase">Upcoming Event</span>
        </button>
      )}
    </>
  );
};

export default EventPopupWidget;
