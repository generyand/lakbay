import { Link, useLocation } from 'react-router-dom';
import { Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "../../assets/gora-logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Recommendations', href: '/recommendations' },
    { name: 'Translation', href: '/translation' },
    { name: 'Itinerary', href: '/itinerary' },
    { name: 'Local Insider', href: '/local-insider' },
    { name: 'Stories', href: '/stories' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Glass Background Effect */}
      <div className="absolute inset-0 bg-dark/[0.6] backdrop-blur-xl backdrop-saturate-150 border-b border-white/[0.1] shadow-[0_2px_4px_rgba(0,0,0,0.02)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            {/* <div className="w-10 h-10 md:w-12 md:h-12 relative">
              <img 
                src={logo} 
                alt="Gora Logo" 
                className="w-full h-full object-contain"
              />
            </div> */}
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              GORA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-amber-500'
                    : 'text-gray-600 hover:text-amber-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-black/5 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Updated with glass effect */}
      {isMenuOpen && (
        <div className="relative md:hidden">
          <div className="absolute inset-x-0 top-0 bg-dark/[0.6] backdrop-blur-xl backdrop-saturate-150">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-amber-500 bg-white/[0.08]'
                      : 'text-white/90 hover:bg-white/[0.06] hover:text-amber-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 