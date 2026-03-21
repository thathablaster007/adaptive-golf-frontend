import { Suspense, lazy, useEffect, useLayoutEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';

const loadHomepage = () => import('./pages/Homepage');
const loadWhatIsAdaptiveGolf = () => import('./pages/WhatIsAdaptiveGolf');
const loadTryGolf = () => import('./pages/TryGolf');
const loadCompetition = () => import('./pages/Competition');
const loadMedia = () => import('./pages/Media');
const loadMediaDiscoveryProgrammeJan26 = () => import('./pages/MediaDiscoveryProgrammeJan26');
const loadGetInvolved = () => import('./pages/GetInvolved');
const loadDonate = () => import('./pages/Donate');
const loadNews = () => import('./pages/News');
const loadNewsPostMilestone = () => import('./pages/NewsPostMilestone');
const loadConnect = () => import('./pages/Connect');
const loadBlog = () => import('./pages/Blog');
const loadBlogPostEmpowerment = () => import('./pages/BlogPostEmpowerment');
const loadBlogPostVolunteers = () => import('./pages/BlogPostVolunteers');
const loadBlogPostAdaptiveCoaching = () => import('./pages/BlogPostAdaptiveCoaching');
const loadAboutUs = () => import('./pages/AboutUs');
const loadTeam = () => import('./pages/Team');

const Homepage = lazy(loadHomepage);
const WhatIsAdaptiveGolf = lazy(loadWhatIsAdaptiveGolf);
const TryGolf = lazy(loadTryGolf);
const Competition = lazy(loadCompetition);
const Media = lazy(loadMedia);
const MediaDiscoveryProgrammeJan26 = lazy(loadMediaDiscoveryProgrammeJan26);
const GetInvolved = lazy(loadGetInvolved);
const Donate = lazy(loadDonate);
const News = lazy(loadNews);
const NewsPostMilestone = lazy(loadNewsPostMilestone);
const Connect = lazy(loadConnect);
const Blog = lazy(loadBlog);
const BlogPostEmpowerment = lazy(loadBlogPostEmpowerment);
const BlogPostVolunteers = lazy(loadBlogPostVolunteers);
const BlogPostAdaptiveCoaching = lazy(loadBlogPostAdaptiveCoaching);
const AboutUs = lazy(loadAboutUs);
const Team = lazy(loadTeam);

const DeferredAnalytics = lazy(() =>
  import('@vercel/analytics/react').then((module) => ({ default: module.Analytics }))
);
const DeferredSpeedInsights = lazy(() =>
  import('@vercel/speed-insights/react').then((module) => ({ default: module.SpeedInsights }))
);

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
  const [mountInsights, setMountInsights] = useState(false);

  useEffect(() => {
    const runInIdle = window.requestIdleCallback || ((cb) => window.setTimeout(cb, 1200));
    const cancelIdle = window.cancelIdleCallback || window.clearTimeout;

    const idleId = runInIdle(() => {
      setMountInsights(true);
      Promise.allSettled([
        loadWhatIsAdaptiveGolf(),
        loadTryGolf(),
        loadGetInvolved(),
        loadDonate(),
        loadMedia(),
        loadAboutUs(),
      ]);
    });

    return () => cancelIdle(idleId);
  }, []);

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
      {mountInsights && (
        <Suspense fallback={null}>
          <DeferredAnalytics />
          <DeferredSpeedInsights />
        </Suspense>
      )}
    </Router>
  );
}

export default App;
