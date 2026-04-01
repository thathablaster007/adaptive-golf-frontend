import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const applyDesktopZoom = () => {
  const zoomValue = window.innerWidth >= 1200 ? '0.8' : '1';
  document.documentElement.style.zoom = zoomValue;
};

applyDesktopZoom();
window.addEventListener('resize', applyDesktopZoom);

