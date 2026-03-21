import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const optimizeCriticalImages = () => {
  const maxCriticalImages = 6;
  const candidates = Array.from(document.images)
    .filter((img) => img.getBoundingClientRect().top < window.innerHeight * 1.1)
    .slice(0, maxCriticalImages);

  candidates.forEach((img) => {
    if (!img.hasAttribute('decoding')) {
      img.decoding = 'async';
    }
    if (!img.hasAttribute('loading')) {
      img.loading = 'eager';
    }
    if (!img.hasAttribute('fetchpriority')) {
      img.fetchPriority = 'high';
    }
  });
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const runInIdle = window.requestIdleCallback || ((cb) => window.setTimeout(cb, 800));
runInIdle(optimizeCriticalImages);

