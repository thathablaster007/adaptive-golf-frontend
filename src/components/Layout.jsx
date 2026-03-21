import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const EventPopupWidget = lazy(() => import('./EventPopupWidget'));

const Layout = () => {
  const [mountPopup, setMountPopup] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMountPopup(true);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bg-light">
      <Header />
      {mountPopup && (
        <Suspense fallback={null}>
          <EventPopupWidget />
        </Suspense>
      )}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
