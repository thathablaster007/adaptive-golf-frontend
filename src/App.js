import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import WhatIsAdaptiveGolf from './pages/WhatIsAdaptiveGolf';
import TryGolf from './pages/TryGolf';
import Competition from './pages/Competition';
import Media from './pages/Media';
import GetInvolved from './pages/GetInvolved';
import News from './pages/News';
import Connect from './pages/Connect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="what-is-adaptive-golf" element={<WhatIsAdaptiveGolf />} />
          <Route path="try-golf" element={<TryGolf />} />
          <Route path="competition" element={<Competition />} />
          <Route path="media" element={<Media />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="news" element={<News />} />
          <Route path="connect" element={<Connect />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
