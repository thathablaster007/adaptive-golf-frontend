import { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import WhatIsAdaptiveGolf from './pages/WhatIsAdaptiveGolf';
import TryGolf from './pages/TryGolf';
import Competition from './pages/Competition';
import Media from './pages/Media';
import GetInvolved from './pages/GetInvolved';
import News from './pages/News';
import Connect from './pages/Connect';
import Blog from './pages/Blog';
import BlogPostEmpowerment from './pages/BlogPostEmpowerment';
import BlogPostVolunteers from './pages/BlogPostVolunteers';
import BlogPostAdaptiveCoaching from './pages/BlogPostAdaptiveCoaching';

function ScrollToTop() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousScrollBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = 'auto';
    body.style.scrollBehavior = 'auto';

    html.scrollTop = 0;
    body.scrollTop = 0;
    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      html.scrollTop = 0;
      body.scrollTop = 0;
      window.scrollTo(0, 0);
    });

    return () => {
      html.style.scrollBehavior = previousScrollBehavior;
      body.style.scrollBehavior = '';
    };
  }, [pathname, key]);

  return null;
}

function App() {
  return (
    <Router basename="/adaptive-golf-frontend">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="what-is-adaptive-golf" element={<WhatIsAdaptiveGolf />} />
          <Route path="try-golf" element={<TryGolf />} />
          <Route path="competition" element={<Competition />} />
          <Route path="media" element={<Media />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/more-than-a-game" element={<BlogPostEmpowerment />} />
          <Route path="blog/power-of-volunteers" element={<BlogPostVolunteers />} />
          <Route path="blog/adaptive-coaching" element={<BlogPostAdaptiveCoaching />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="news" element={<News />} />
          <Route path="connect" element={<Connect />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
