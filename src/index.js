import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const optimizeImageElement = (img) => {
  if (!(img instanceof HTMLImageElement)) return;

  if (!img.hasAttribute('decoding')) {
    img.decoding = 'async';
  }

  const shouldPrioritize = window.scrollY === 0 && img.getBoundingClientRect().top < window.innerHeight * 0.95;

  if (!img.hasAttribute('loading')) {
    img.loading = shouldPrioritize ? 'eager' : 'lazy';
  }

  if (!img.hasAttribute('fetchpriority')) {
    img.fetchPriority = shouldPrioritize ? 'high' : 'low';
  }
};

const optimizeImagesInSubtree = (rootNode) => {
  if (!(rootNode instanceof Element || rootNode instanceof Document)) return;

  if (rootNode instanceof HTMLImageElement) {
    optimizeImageElement(rootNode);
  }

  rootNode.querySelectorAll('img').forEach(optimizeImageElement);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

requestAnimationFrame(() => {
  // Apply desktop default scale for browsers that support CSS zoom.
  const applyDesktopZoom = () => {
    const zoomValue = window.innerWidth >= 1200 ? '0.8' : '1';
    document.documentElement.style.zoom = zoomValue;
  };

  applyDesktopZoom();
  window.addEventListener('resize', applyDesktopZoom);

  optimizeImagesInSubtree(document);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        optimizeImagesInSubtree(node);
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

