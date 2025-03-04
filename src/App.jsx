import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import Translation from './pages/Translation';
import Itinerary from './pages/Itinerary';
import LocalInsider from './pages/LocalInsider';
import Stories from './pages/Stories';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/translation" element={<Translation />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/local-insider" element={<LocalInsider />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;