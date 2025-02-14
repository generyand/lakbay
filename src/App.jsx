import { Search, MapPin, Compass, Menu, Sun } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Sun className="w-8 h-8 text-amber-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Lakbay
            </h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto pt-24 px-4 pb-20">
        {/* Hero Section */}
        <section className="py-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Discover the Beauty of{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
               Philippines
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Experience authentic local culture with AI-powered guides that create personalized adventures just for you
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Where in Philippines do you want to explore?"
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 shadow-sm"
            />
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="py-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Destinations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Palawan Card */}
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden h-80 shadow-lg">
                <img
                  src="https://travelistaph.com/wp-content/uploads/2024/03/Siargao-Island-Surfing-Capital.jpg"
                  alt="Palawan"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold mb-2">Siargao</h4>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Philippines</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bali Card */}
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden h-80 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800"
                  alt="Bali"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold mb-2">Bali</h4>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Indonesia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bangkok Card */}
            <div className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden h-80 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1583491470869-ca0b9fa90216?auto=format&fit=crop&w=800"
                  alt="Bangkok"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white text-xl font-bold mb-2">Bangkok</h4>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Thailand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-8">
          <div className="grid grid-cols-2 gap-6">
            <button className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-all group">
              <Compass className="w-6 h-6 text-white" />
              <span className="text-white font-semibold group-hover:scale-105 transition-transform">
                Local Experiences
              </span>
            </button>
            <button className="flex items-center justify-center gap-3 p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 transition-all group">
              <MapPin className="w-6 h-6 text-white" />
              <span className="text-white font-semibold group-hover:scale-105 transition-transform">
                Hidden Gems
              </span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;