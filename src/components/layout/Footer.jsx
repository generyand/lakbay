import { Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sun className="w-6 h-6 text-amber-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Lakbay
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              Your AI-powered local travel companion
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/recommendations" className="text-gray-500 hover:text-amber-500 text-sm">
                  Travel Recommendations
                </Link>
              </li>
              <li>
                <Link to="/translation" className="text-gray-500 hover:text-amber-500 text-sm">
                  Real-time Translation
                </Link>
              </li>
              <li>
                <Link to="/itinerary" className="text-gray-500 hover:text-amber-500 text-sm">
                  Smart Itineraries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/local-insider" className="text-gray-500 hover:text-amber-500 text-sm">
                  Local Insider
                </Link>
              </li>
              <li>
                <Link to="/stories" className="text-gray-500 hover:text-amber-500 text-sm">
                  Travel Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-amber-500 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-amber-500 text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 