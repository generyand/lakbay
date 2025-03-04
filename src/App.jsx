import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import FloatingChat from './components/FloatingChat';

function App() {
  return (
    <Router>
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
          </Routes>
        </main>
        <Footer />
        <BottomNav />
        <FloatingChat />
      </div>
    </Router>
  );
}

export default App;