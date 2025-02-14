import { 
  Search, 
  MapPin, 
  Compass, 
  MessageSquareText, 
  Clock, 
  Sparkles,
  ChevronRight,
  Globe,
  BookOpen
} from 'lucide-react';

function Home() {
  return (
    <main className="max-w-7xl mx-auto pt-24 px-4 pb-20">
      {/* Hero Section */}
      <section className="py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="lg:max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-sm font-medium">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  AI-Powered Travel Assistant
                </span>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Discover the Beauty of{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Philippines
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience authentic local culture with AI-powered guides that create personalized adventures just for you
            </p>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Where in Philippines do you want to explore?"
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 shadow-sm"
              />
            </div>
          </div>

          {/* AI Features Preview */}
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:w-96">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <h3 className="font-semibold text-gray-900">AI Assistant Active</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl">
                <MessageSquareText className="w-5 h-5 text-amber-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Real-time Translation</h4>
                  <p className="text-sm text-gray-600">Communicate effortlessly in local languages</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
                <Clock className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-900">Smart Itineraries</h4>
                  <p className="text-sm text-gray-600">Personalized schedules based on your preferences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Recommended Destinations</h3>
          <button className="flex items-center gap-1 text-amber-500 hover:text-amber-600 transition-colors">
            View all <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Destination cards */}
          <div className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden h-80 shadow-lg">
              <img
                src="https://travelistaph.com/wp-content/uploads/2024/03/Siargao-Island-Surfing-Capital.jpg"
                alt="Siargao"
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

          {/* More destination cards... */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience Smart Travel</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Globe className="w-8 h-8 text-amber-500 mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Local Insider Mode</h4>
            <p className="text-gray-600 mb-4">Get authentic recommendations from AI-powered local insights</p>
            <button className="text-amber-500 hover:text-amber-600 font-medium flex items-center gap-1">
              Try it now <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <BookOpen className="w-8 h-8 text-orange-500 mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Travel Stories</h4>
            <p className="text-gray-600 mb-4">Share and discover personal travel experiences with the community</p>
            <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1">
              Explore stories <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Compass className="w-8 h-8 text-rose-500 mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Smart Recommendations</h4>
            <p className="text-gray-600 mb-4">Get personalized suggestions based on your preferences</p>
            <button className="text-rose-500 hover:text-rose-600 font-medium flex items-center gap-1">
              Get started <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to start your journey?</h3>
            <p className="mb-6 text-white/90">Let our AI travel assistant help you create unforgettable experiences</p>
            <button className="bg-white text-amber-500 px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
              Plan My Trip
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home; 