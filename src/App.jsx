import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BottomNav from './components/layout/BottomNav';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import Translation from './pages/Translation';
import Itinerary from './pages/Itinerary';
import LocalInsider from './pages/LocalInsider';
import Stories from './pages/Stories';
import Landing from './pages/Landing';
import Explore from './pages/Explore';
import TravelGroup from './pages/TravelGroup';
import FloatingChat from './components/FloatingChat';

// Create a wrapper component to use useLocation
function AppContent() {
  const location = useLocation();
  const showBottomNav = location.pathname !== '/landing';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      <main className="pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/local-insider" element={<LocalInsider />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/travel-group" element={<TravelGroup />} />
        </Routes>
      </main>
      <Footer />
      {showBottomNav && <BottomNav />}
      <FloatingChat />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;