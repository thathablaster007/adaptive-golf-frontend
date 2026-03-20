import { Suspense, lazy, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Layout from './components/Layout';

const Homepage = lazy(() => import('./pages/Homepage'));
const WhatIsAdaptiveGolf = lazy(() => import('./pages/WhatIsAdaptiveGolf'));
const TryGolf = lazy(() => import('./pages/TryGolf'));
const Competition = lazy(() => import('./pages/Competition'));
const Media = lazy(() => import('./pages/Media'));
const MediaDiscoveryProgrammeJan26 = lazy(() => import('./pages/MediaDiscoveryProgrammeJan26'));
const GetInvolved = lazy(() => import('./pages/GetInvolved'));
const Donate = lazy(() => import('./pages/Donate'));
const News = lazy(() => import('./pages/News'));
const NewsPostMilestone = lazy(() => import('./pages/NewsPostMilestone'));
const Connect = lazy(() => import('./pages/Connect'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPostEmpowerment = lazy(() => import('./pages/BlogPostEmpowerment'));
const BlogPostVolunteers = lazy(() => import('./pages/BlogPostVolunteers'));
const BlogPostAdaptiveCoaching = lazy(() => import('./pages/BlogPostAdaptiveCoaching'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Team = lazy(() => import('./pages/Team'));

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
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-[40vh]" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="what-is-adaptive-golf" element={<WhatIsAdaptiveGolf />} />
            <Route path="try-golf" element={<TryGolf />} />
            <Route path="competition" element={<Competition />} />
            <Route path="media" element={<Media />} />
            <Route path="media/discovery-programme-26-jan-2026" element={<MediaDiscoveryProgrammeJan26 />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/more-than-a-game" element={<BlogPostEmpowerment />} />
            <Route path="blog/power-of-volunteers" element={<BlogPostVolunteers />} />
            <Route path="blog/adaptive-coaching" element={<BlogPostAdaptiveCoaching />} />
            <Route path="get-involved" element={<GetInvolved />} />
            <Route path="donate" element={<Donate />} />
            <Route path="news" element={<News />} />
            <Route path="news/a-milestone-moment" element={<NewsPostMilestone />} />
            <Route path="connect" element={<Connect />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="team" element={<Team />} />
          </Route>
        </Routes>
      </Suspense>
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}

export default App;
